type PublicSanityEnvKey =
  | "NEXT_PUBLIC_SANITY_PROJECT_ID"
  | "NEXT_PUBLIC_SANITY_DATASET"
  | "NEXT_PUBLIC_SANITY_API_VERSION";

function readRequiredPublicEnv(key: PublicSanityEnvKey): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(
      `Missing required Sanity environment variable: ${key}. Add it to .env.local before using the Sanity read layer.`,
    );
  }

  return value;
}

export const sanityEnv = {
  projectId: readRequiredPublicEnv("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  dataset: readRequiredPublicEnv("NEXT_PUBLIC_SANITY_DATASET"),
  apiVersion: readRequiredPublicEnv("NEXT_PUBLIC_SANITY_API_VERSION"),
};
