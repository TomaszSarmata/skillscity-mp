import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full py-10 bg-red-100">
      <div>Hello</div>
      <Link href="./books">Go to books page</Link>
    </div>
  );
}
