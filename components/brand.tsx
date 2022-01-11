import Link from "next/link";

export default function Brand(): JSX.Element {
  return (
    <Link href="/">
      <a className="whitespace-nowrap hover:text-white text-gray-50 font-bold no-underline duration-150 flex gap-4">
        Prosperity MC
      </a>
    </Link>
  );
}
