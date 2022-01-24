import Link from "next/link";
import Head from "next/head";
import JoinBtn from "../components/join-btn";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity | Home</title>
      </Head>

      <div className="md:grid md:grid-flow-col content-center grid-cols-2 gap-8 mx-auto">
        <div>
          <p className="text-6xl">Prosperity</p>
          <div className="flex items-center gap-8 my-4">
            <JoinBtn></JoinBtn>
            {/* <Link href="/wiki/home">
              <a>Wiki</a>
            </Link> */}
            <span className="inline-flex content-center gap-1">
              <Link href="/wiki/home">
                <a>Wiki</a>
              </Link>
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
            </span>
          </div>
        </div>
        <p className="flex items-center float-right leading-relaxed">
          Prosperity is a survival-multiplayer Minecraft server with a focus
          enabling players to work on large projects easily. To achieve this the
          server has many quality of life improvements, and changes that allow
          you to farm more items, and have an easier time than a vanilla server.
        </p>
      </div>
    </>
  );
}
