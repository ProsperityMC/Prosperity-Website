import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-groups">
        <div className="nav-items">
          <Link href="/">
            <a className="nav-brand">
              <div className="bg-white w-8 h-8 rounded-md">
                {/* Placeholder element until I make a logo that fits with the rest of the design */}
              </div>
              Prosperity MC
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
          <Link href="/mods">
            <a>Mods</a>
          </Link>
        </div>
        <div className="nav-items">
          <Link href="/stats">
            <a>Stats</a>
          </Link>
          {/* TODO: Hide when on mobile / viewport too small */}
          <button className="btn btn-yellow">
            <a href="https://discord.gg/hfTxZ4XxYj">Join</a>
          </button>
        </div>
      </div>
    </div>
  );
}
