import gallery from "../content/gallery.md";

export default function Gallery() {
  const { html } = gallery;
  return <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />;
}
