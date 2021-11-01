import tweaksandchanges from "../content/tweaks-and-changes.md";

export default function Markdown() {
  const {
    html,
    attributes: { title },
  } = tweaksandchanges;
  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
