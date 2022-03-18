/**
 * # Navigation
 *
 * ---
 *
 * @returns React component
 */
export default function Nav(): JSX.Element {
  const lNavLinks: Array<Array<string>> = [
    ["Home", "/"],
    ["Gallery", "/gallery"],
    ["Wiki", "/wiki/home"],
  ];
  const rNavLinks: Array<Array<string>> = [
    ["GitHub", "https://github.com/ProsperityMC"],
  ];
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="fixed top-0 z-30 w-screen py-8 mt-0 bg-gray-500">
            <Disclosure.Panel className="float-r md:hidden sm:pl-24 xl:pl-48 2xl:pl-72 fixed top-0 left-0 h-full pl-8 pr-24 duration-150 bg-gray-600 shadow-md">
              {({ close }) => (
                <div className="flex flex-col gap-8 mt-8">
                  <div>
                    <Brand />
                  </div>
                  <div className="flex flex-col gap-2">
                    {lNavLinks.map(([title, url]) => (
                      <Link href={url} key={title}>
                        <a
                          className="hover:text-white text-gray-50 no-underline duration-150"
                          onClick={async () => {
                            close();
                          }}
                        >
                          {title}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div>
                    {rNavLinks.map(([title, url]) => (
                      <a
                        key={title}
                        href={url}
                        target="_blank"
                        className="hover:text-white text-gray-50 no-underline duration-150"
                        rel="noreferrer"
                      >
                        <span className="flex content-center gap-2">
                          <p>{title}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="self-center w-4 h-4"
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
                      </a>
                    ))}
                  </div>
                  <div>
                    <JoinBtn />
                  </div>
                </div>
              )}
            </Disclosure.Panel>

            <div className="responsive-width">
              {/* Desktop navigation */}
              <div className="grid-flow-cols grid grid-cols-2">
                <div className="flex items-center gap-12">
                  <Brand />
                  {lNavLinks.map(([title, url]) => (
                    <Link key={title} href={url}>
                      <a className="md:block hover:text-white text-gray-50 hidden no-underline duration-150">
                        {title}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="justify-self-end flex items-center float-right gap-12">
                  {rNavLinks.map(([title, url]) => (
                    <a
                      key={title}
                      href={url}
                      target="_blank"
                      className="md:block hover:text-white text-gray-50 hidden no-underline duration-150"
                      rel="noreferrer"
                    >
                      <span className="flex items-center content-center gap-2">
                        <p>{title}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
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
                    </a>
                  ))}
                  <div className="md:block hidden">
                    <JoinBtn />
                  </div>
                  {/* Mobile navigation */}
                  <Disclosure.Button className="md:hidden duration-150 transform">
                    {open && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:stroke-white w-6 h-6 duration-150"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    {!open && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:stroke-white w-6 h-6 duration-150"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

import Link from "next/link";
import JoinBtn from "@components/join-btn";
import Brand from "@components/brand";
import { Disclosure } from "@headlessui/react";
