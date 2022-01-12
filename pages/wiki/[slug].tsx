import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { allWikis } from ".contentlayer/data";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = allWikis.map((_) => `/wiki/${_._raw.flattenedPath}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // I have no idea if these can / should be returned all in one piece of code
  // Return specific wiki from value passed by slug
  const wiki = allWikis.find((_) => _._raw.flattenedPath === params.slug);
  // Return all wikis for sidebar navigation
  const wikis = allWikis.map((wiki) => ({
    slug: wiki._raw.flattenedPath,
    title: wiki.title,
    description: wiki.description,
  }));
  return {
    props: {
      wiki,
      wikis,
    },
  };
}

export default function WikiPage({ wiki, wikis }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity | {wiki.title}</title>
        <meta name="description" content={wiki.description} />
        <meta name="author" content={wiki.authors} />
      </Head>
      <div className="md:grid md:grid-flow-col content-center gap-8 mx-auto">
        {/* Wiki navigation container */}
        <div className="order-last">
          <div className="md:float-right mb-8">
            <p className="mb-2 text-xl">Wiki</p>
            {wikis.map(({ title, slug }: any) => (
              <div key={slug}>
                <div className="mb-2">
                  <Link href={`/wiki/${slug}`}>
                    <a>
                      <span className="inline-flex items-baseline content-center gap-1">
                        <a>{title}</a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-gray-50 w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Wiki content container */}
        <div className="mb-24">
          <p className="text-6xl">{wiki.title}</p>
          <div className="flex gap-8 content-center my-4 text-sm">
            {wiki.authors && (
              <span className="flex items-center content-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>
                  <b>Authors:</b> {wiki.authors}
                </p>
              </span>
            )}
          </div>
          {!wiki.authors && <div className="my-4" />}
          <ReactMarkdown
            className="text-content"
            remarkPlugins={[remarkGfm, remarkToc]}
            rehypePlugins={[
              rehypeSlug,
              // [
              //   rehypeAutolinkHeadings,
              //   {
              //     behavior: "group",
              //     properties: {
              //       className: ["linked-header"],
              //     },
              //   },
              // ],
            ]}
            components={{
              a: ({ node, ...props }) => (
                <span className="inline-flex items-baseline content-center gap-1">
                  <a {...props} target="_blank" rel="nonreferer"></a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-gray-50 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              ),
            }}
          >
            {wiki.body.raw}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
