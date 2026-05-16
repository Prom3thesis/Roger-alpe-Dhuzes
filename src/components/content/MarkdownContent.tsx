import type { ReactNode } from "react";

type MarkdownContentProps = {
  content: string;
};

function renderInlineText(text: string, keyPrefix: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong className="font-black text-campaign-navy" key={`${keyPrefix}-${index}`}>
            {part.slice(2, -2)}
          </strong>
        );
      }

      return part;
    });
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const lines = content.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let quoteLines: string[] = [];

  function nextKey() {
    return `markdown-block-${blocks.length}`;
  }

  function flushParagraph() {
    if (paragraphLines.length === 0) {
      return;
    }

    const text = paragraphLines.join(" ");
    const key = nextKey();

    blocks.push(
      <p className="text-base leading-8 text-campaign-muted sm:text-lg sm:leading-8" key={key}>
        {renderInlineText(text, key)}
      </p>,
    );

    paragraphLines = [];
  }

  function flushList() {
    if (listItems.length === 0) {
      return;
    }

    const key = nextKey();

    blocks.push(
      <ul className="space-y-2 pl-5 text-base leading-7 text-campaign-muted sm:text-lg" key={key}>
        {listItems.map((item, index) => (
          <li className="list-disc" key={`${key}-${index}`}>
            {renderInlineText(item, `${key}-${index}`)}
          </li>
        ))}
      </ul>,
    );

    listItems = [];
  }

  function flushQuote() {
    if (quoteLines.length === 0) {
      return;
    }

    const key = nextKey();
    const text = quoteLines.join(" ");

    blocks.push(
      <blockquote
        className="border-l-4 border-campaign-gold bg-campaign-background px-5 py-4 text-xl font-black leading-8 text-campaign-navy"
        key={key}
      >
        {renderInlineText(text, key)}
      </blockquote>,
    );

    quoteLines = [];
  }

  function flushAll() {
    flushParagraph();
    flushList();
    flushQuote();
  }

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      flushAll();
      continue;
    }

    if (trimmedLine.startsWith("## ")) {
      flushAll();
      const key = nextKey();

      blocks.push(
        <h2
          className="pt-4 text-2xl font-black leading-tight tracking-normal text-campaign-navy sm:text-3xl"
          key={key}
        >
          {renderInlineText(trimmedLine.slice(3), key)}
        </h2>,
      );
      continue;
    }

    if (trimmedLine.startsWith("- ")) {
      flushParagraph();
      flushQuote();
      listItems.push(trimmedLine.slice(2));
      continue;
    }

    if (trimmedLine.startsWith("> ")) {
      flushParagraph();
      flushList();
      quoteLines.push(trimmedLine.slice(2));
      continue;
    }

    flushList();
    flushQuote();
    paragraphLines.push(trimmedLine);
  }

  flushAll();

  return <div className="space-y-6">{blocks}</div>;
}
