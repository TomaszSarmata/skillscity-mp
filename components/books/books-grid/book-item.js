import { useState } from "react";
import Link from "next/link";

export default function BookItem({ book }) {
  const [likes, setLikes] = useState(+book.likes); //before the default value was at 0. Now we want to pull the likes from the db to persist the data

  const handleLike = async () => {
    const newValue = likes + 1;

    // after adding the db we have to wire our component at the front with our api/increase likes so we have to turn this function into async
    //first we have to grab the book.id
    const id = +book.id; //as that's available from the param in line 4
    setLikes(newValue); //we want to update the value here as a lazy updating in the background so that the user sees the results right after clicking
    const response = await fetch(
      `/api/increase-likes?id=${id}&likes=${newValue}`
    );
    //we can optionally await the data although we are not using it anywhere
    const data = await response.json();
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
