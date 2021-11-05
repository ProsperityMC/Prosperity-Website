import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Gallery({ content, data }: any) {
  const frontmatter = data;
  return (
    <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}

Gallery.getInitialProps = async (context: any) => {
  const content = await import("../content/gallery.md");
  const data = matter(content.default);
  return { ...data };
};
