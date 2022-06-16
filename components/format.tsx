/**
 * # Format component
 *
 * Takes raw markdown and returns formatted and styled HTML.
 *
 * Supports GitHub markdown.
 *
 * ---
 *
 * @param children
 * @returns React component
 */
export default function Format({ children }: any): JSX.Element {
  return (
    <ReactMarkdown
      className="text-content"
      remarkPlugins={[remarkGfm, remarkToc]}
      rehypePlugins={[rehypeSlug, rehypeHighlight]}
      components={{
        a: ({ node, ...props }) => (
          <span className="inline-flex content-center gap-1">
            <Link href={(props.href && props.href) || "/"}>
              <a
                {...props}
                target={(props.href?.trim().includes("http") && "_blank") || ""}
                rel="nonreferer"
              ></a>
            </Link>
            {props.href?.trim().includes("http") && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-50 self-center w-4 h-4"
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
            )}
            {!props.href?.trim().includes("http") && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-50 self-center w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        ),
        img: ({ node, ...props }) => (
          <div className="hover:drop-shadow-lg drop-shadow-md flex p-0 my-8 w-3/5">
            <Image
              {...props}
              className="hover:brightness-110 w-full p-0 m-0 duration-150 bg-gray-600 rounded-md cursor-pointer"
              src={`${props.src}`}
              placeholder="empty"
              width={1920}
              height={1080}
              quality={100}
              alt={props.alt}
            />
          </div>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
