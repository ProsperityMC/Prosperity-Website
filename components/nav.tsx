import Link from "next/link";

export default function Nav(): JSX.Element {
  return (
    <div className="nav">
      <div className="nav-items">
        <Link href="/">
          <a className="nav-brand">
            <div className="w-8 h-8 bg-white rounded-md">
              {/* Placeholder element until I make a logo that fits with the rest of the design */}
            </div>
            <div>Prosperity MC</div>
          </a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/wiki">
          <a>Wiki</a>
        </Link>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <a href="https://github.com/ProsperityMC" target="_blank" rel="noreferrer">Development</a>
      </div>
      <div className="justify-end nav-items">
        <Link href="/stats">
          <a>Stats</a>
        </Link>
        <a href="https://discord.gg/hfTxZ4XxYj" target="_blank" rel="noreferrer">
          <button className="btn btn-yellow">Join</button>
        </a>
      </div>
    </div>
  );
}
