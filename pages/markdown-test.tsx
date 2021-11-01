import Test from "../content/markdown-tester.md";

export default function Markdown() {
  const {
    html,
    attributes: { title },
  } = Test;
  return <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />;
}
