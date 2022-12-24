import Link from "next/link";
export default function Header() {
  return (
    <div className="container flex justify-around flex-wrap px-5 py-8 ">
      <h1 className="font-bold text-lg">
        <Link
          href="/"
          className="font-[Pacifico] font-semibold  text-black/80 text-3xl tracking-wider "
        >
          Stablo
        </Link>
      </h1>

      <ul className="flex justify-between gap-10 p-2">
        <li className="text-gray-500 font-medium hover:text-blue-400">
          <Link href="/">Home</Link>
        </li>
        <li className="text-gray-500 font-medium hover:text-blue-400">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="text-gray-500 font-medium hover:text-blue-400">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
