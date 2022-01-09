import Link from "next/link";
import JoinBtn from "./join-btn";

export default function Nav(): JSX.Element {
  return (
    <div className="fixed top-0 grid w-screen grid-cols-2 px-12 py-8 mt-0 bg-gray-500 shadow-md grid-flow-cols shadow-gray-500/50 sm:px-24 xl:px-48 2xl:px-72">
      <div className="flex items-center gap-12">
        <Link href="/">
          <a className="font-bold no-underline duration-150 whitespace-nowrap hover:text-white text-gray-50">
            Prosperity MC
          </a>
        </Link>
        {/* Site navigation links */}
        {[
          ["Home", "/"],
          ["Wiki", "/wiki/home"],
        ].map(([title, url]) => (
          <Link key={title} href={url}>
            <a className="no-underline duration-150 hover:text-white text-gray-50">
              {title}
            </a>
          </Link>
        ))}
      </div>
      <div className="flex items-center float-right gap-12 justify-self-end">
        {/* External navigation links  */}
        {[["GitHub", "https://github.com/ProsperityMC"]].map(([title, url]) => (
          <a
            key={title}
            href={url}
            target="_blank"
            className="no-underline duration-150 hover:text-white text-gray-50"
            rel="noreferrer"
          >
            {`${title} ↗`}
          </a>
        ))}
        <JoinBtn></JoinBtn>
      </div>
    </div>
  );
}
