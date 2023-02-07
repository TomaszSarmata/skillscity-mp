import Link from "next/link";

export default function BooksPage() {
  return (
    <div className="bg-green-200">
      <div>Books page</div>
      <Link rel="stylesheet" href="/">
        Go to the hompe page
      </Link>
    </div>
  );
}
