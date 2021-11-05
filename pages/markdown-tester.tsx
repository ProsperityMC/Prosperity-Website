import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownTester({ content, data }: any): JSX.Element {
  const frontmatter = data;
  return (
    <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}

MarkdownTester.getInitialProps = async (context: any) => {
  const content = await import("../content/markdown-tester.md");
  const data = matter(content.default);
  return { ...data };
};
