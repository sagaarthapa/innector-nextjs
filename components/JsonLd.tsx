// Renders one schema.org object as a <script type="application/ld+json"> tag. JSON.stringify already escapes
// quotes/backslashes; the one remaining risk in an inline script is "</script>" appearing inside a string value
// (title/description text, say) prematurely closing the tag, so that sequence is escaped too.
export default function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
