import { useState } from "react";
import Link from "next/link";

export default function BookItem({ book }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    const newValue = likes + 1;
    setLikes(newValue);
  };

  return (
    <div className="border rounded-lg p-4">
      <Link href={`/single-book/${book.id}`}>
        <img src={book.img_url} className="rounded-lg" />
        <p className="text-xl font-medium">{book.title}</p>
        <p className="text-gray-700">{book.author}</p>
      </Link>

      <button
        onClick={handleLike}
        className="bg-blue-500 px-2 py-1 rounded text-white"
      >
        Like ({likes} likes)
      </button>
    </div>
  );
}
