/**
 * # Join button component
 *
 * ---
 *
 * @returns React component
 */
export default function JoinBtn() {
  return (
    <button
      className="whitespace-nowrap bg-amber-500 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-400/40 shadow-amber-500/20 transform-gpu focus:bg-yellow-400 focus:scale-105 px-6 py-2 font-bold text-gray-500 duration-300 rounded-md shadow-md"
      onClick={async () => {
        // Create a new Discord invite window.
        window.open(
          "https://discord.gg/hfTxZ4XxYj",
          "window",
          `width=500, height=700, left=${screen.width / 2 - 500 / 2}, top=${
            screen.height / 2 - 700 / 2
          }, popup=1, noreferrer=1, noopener=1, menubar=0, toolbar=0, status=0`,
        );
      }}
    >
      <span className="flex items-center content-center gap-2">
        <p>Join</p>
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </span>
    </button>
  );
}
