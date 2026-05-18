import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

export const runtime = "nodejs";

type SanityRevalidatePayload = {
  _id?: string;
  _type?: string;
  operation?: "create" | "update" | "delete" | string;
  currentSlug?: string | null;
  previousSlug?: string | null;
};

type RevalidateResponse = {
  ok: boolean;
  revalidated?: string[];
  skippedDetailRevalidation?: boolean;
  operation?: string | null;
  error?: string;
};

const mediaUpdatesPath = "/media-updates";
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function jsonResponse(body: RevalidateResponse, status: number) {
  return NextResponse.json(body, { status });
}

function normalizeSlug(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const slug = value.trim().replace(/^\/+|\/+$/g, "");

  if (!slugPattern.test(slug)) {
    return null;
  }

  return slug;
}

function buildRevalidationPaths(payload: SanityRevalidatePayload) {
  const paths = new Set<string>([mediaUpdatesPath]);
  const currentSlug = normalizeSlug(payload.currentSlug);
  const previousSlug = normalizeSlug(payload.previousSlug);

  if (currentSlug) {
    paths.add(`${mediaUpdatesPath}/${currentSlug}`);
  }

  if (previousSlug) {
    paths.add(`${mediaUpdatesPath}/${previousSlug}`);
  }

  return Array.from(paths);
}

function parsePayload(rawBody: string): SanityRevalidatePayload | null {
  try {
    const parsed = JSON.parse(rawBody);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return null;
    }

    return parsed as SanityRevalidatePayload;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return jsonResponse(
      {
        ok: false,
        error: "Revalidation secret is not configured",
      },
      500,
    );
  }

  const rawBody = await request.text();
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);

  if (!signature || !(await isValidSignature(rawBody, signature, secret))) {
    return jsonResponse(
      {
        ok: false,
        error: "Invalid webhook signature",
      },
      401,
    );
  }

  const payload = parsePayload(rawBody);

  if (!payload) {
    return jsonResponse(
      {
        ok: false,
        error: "Malformed webhook payload",
      },
      400,
    );
  }

  if (payload._type && payload._type !== "updateEntry") {
    return jsonResponse(
      {
        ok: false,
        error: "Unsupported document type",
      },
      400,
    );
  }

  const revalidated = buildRevalidationPaths(payload);

  for (const path of revalidated) {
    revalidatePath(path);
  }

  return jsonResponse(
    {
      ok: true,
      revalidated,
      skippedDetailRevalidation: revalidated.length === 1,
      operation: payload.operation ?? null,
    },
    200,
  );
}
