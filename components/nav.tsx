import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-groups">
        <div className="nav-items">
          <Link href="">
            <a className="nav-brand">
              <div className="bg-white w-8 h-8 rounded-md">
                {/* Placeholder element until I make a logo that fits with the rest of the design */}
              </div>
              Prosperity MC
            </a>
          </Link>
          <Link href="">
            <a>Home</a>
          </Link>
          <Link href="">
            <a>Wiki</a>
          </Link>
          <Link href="">
            <a>Gallery</a>
          </Link>
          <Link href="">
            <a>Mods</a>
          </Link>
        </div>
        <div className="nav-items">
          <Link href="">
            <a>Stats</a>
          </Link>
          <button className="btn">Join</button>
        </div>
      </div>
    </div>
  );
}
