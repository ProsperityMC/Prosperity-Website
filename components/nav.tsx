import Link from "next/link";
import JoinBtn from "./join-btn";

export default function Nav(): JSX.Element {
  return (
    <div className="grid-flow-cols shadow-gray-500 sm:px-24 xl:px-48 2xl:px-72 fixed top-0 z-30 grid w-screen grid-cols-2 px-12 py-8 mt-0 bg-gray-500 shadow-md">
      <div className="flex items-center gap-12">
        <Link href="/">
          <a className="whitespace-nowrap hover:text-white text-gray-50 font-bold no-underline duration-150">
            Prosperity MC
          </a>
        </Link>
        {/* Site navigation links */}
        {[
          ["Home", "/"],
          ["Gallery", "/gallery"],
          ["Wiki", "/wiki/home"],
        ].map(([title, url]) => (
          <Link key={title} href={url}>
            <a className="hover:text-white text-gray-50 no-underline duration-150">
              {title}
            </a>
          </Link>
        ))}
      </div>
      <div className="justify-self-end flex items-center float-right gap-12">
        {/* External navigation links  */}
        {[["GitHub", "https://github.com/ProsperityMC"]].map(([title, url]) => (
          <a
            key={title}
            href={url}
            target="_blank"
            className="hover:text-white text-gray-50 no-underline duration-150"
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
