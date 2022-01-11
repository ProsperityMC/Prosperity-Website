import Link from "next/link";
import JoinBtn from "./join-btn";
import Brand from "./brand";
import { Disclosure, Transition } from "@headlessui/react";

export default function Nav(): JSX.Element {
  const internalNavLinks: Array<Array<string>> = [
    ["Home", "/"],
    ["Gallery", "/gallery"],
    ["Wiki", "/wiki/home"],
  ];
  const externalNavLinks: Array<Array<string>> = [
    ["GitHub", "https://github.com/ProsperityMC"],
  ];
  return (
    <Disclosure>
      {({ open }) => (
        <div className="sm:px-24 xl:px-48 2xl:px-72 fixed top-0 z-30 w-screen px-12 py-8 mt-0 bg-gray-500">
          {/* Desktop navigation */}
          <div className="grid-flow-cols grid grid-cols-2">
            <div className="flex items-center gap-12">
              <div className="z-20">
                <Brand />
              </div>
              {internalNavLinks.map(([title, url]) => (
                <Link key={title} href={url}>
                  <a className="md:block hover:text-white text-gray-50 hidden no-underline duration-150">
                    {title}
                  </a>
                </Link>
              ))}
            </div>
            <div className="justify-self-end flex items-center float-right gap-12">
              {externalNavLinks.map(([title, url]) => (
                <a
                  key={title}
                  href={url}
                  target="_blank"
                  className="md:block hover:text-white text-gray-50 hidden no-underline duration-150"
                  rel="noreferrer"
                >
                  {`${title} ↗`}
                </a>
              ))}
              <div className="md:block hidden">
                <JoinBtn />
              </div>
              {/* Mobile navigation */}
              <Disclosure.Button className="block md:hidden bg-gray-50 hover:bg-white hover:shadow-lg hover:shadow-white-50/40 shadow-gray-50/20 focus:bg-white z-20 px-4 py-2 font-bold text-gray-500 duration-300 rounded-md shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    open ? "transform rotate-90" : "w-4 h-4 m-1 duration-150"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="order-last md:hidden rounded-b-md hover:drop-shadow-lg drop-shadow-md fixed top-0 left-0 bg-gray-600">
                <div className="static top-0 z-30 w-screen mt-[6.5rem] px-12 sm:px-24 xl:px-48 2xl:px-72 grid gap-2 mb-8 text-right">
                  {internalNavLinks.map(([title, url]) => (
                    <>
                      <Link key={title} href={url}>
                        <a className="hover:text-white text-gray-50 block no-underline duration-150">
                          {title}
                        </a>
                      </Link>
                    </>
                  ))}
                  {externalNavLinks.map(([title, url]) => (
                    <a
                      key={title}
                      href={url}
                      target="_blank"
                      className="hover:text-white text-gray-50 block no-underline duration-150"
                      rel="noreferrer"
                    >
                      {`${title} ↗`}
                    </a>
                  ))}
                  <div className="mt-4">
                    <JoinBtn />
                  </div>
                </div>
              </Disclosure.Panel>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
