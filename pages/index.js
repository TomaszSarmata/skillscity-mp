import Link from "next/link";
import BooksPage from "./books";

export default function Home() {
  return (
    <div className="w-full py-10 bg-red-100">
      <div>Hello</div>
      <a href="./books">Go to the books page</a>
    </div>
  );
}
