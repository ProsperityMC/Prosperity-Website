import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export default function Home({ content }: any) {
  return (
    <>
      {/* This layout code is kind of a mess, I'm not sure if it has to be this cmoplicated */}
      <div className="flex content-center h-screen">
        <div className="lg:flex md:justify-between md:gap-52 lg:gap-64 xl:gap-80 2xl:gap-96">
          <div className="flex-wrap content-center lg:flex">
            <p className="text-6xl">Prosperity</p>
            <div className="flex flex-row gap-4">
              <a href="https://discord.gg/hfTxZ4XxYj">
                <button className="btn btn-yellow">Join</button>
              </a>
              <Link href="/wiki">
                <a>
                  <button className="btn">Wiki</button>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap content-center">
            <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getInitialProps = async (context: any) => {
  const content = await import("../content/home.md");
  const data = matter(content.default);
  return { ...data };
};
