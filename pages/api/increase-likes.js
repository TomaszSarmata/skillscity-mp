import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const id = +req.query.id; //as those values might come back as strings, we add + to convert them into numbers
  const likes = +req.query.likes;
  //we could also do destructuring
  // const { id, likes } = req.query;

  //some sanity checks go first
  if (id === null || id === undefined) {
    res.status(400).json({ message: "Book id is required" });
    return;
  }

  if (likes === null || likes === undefined) {
    res.status(400).json({ message: "Likes is required" });
    return;
  }

  const books = await sql`
    update books
    set likes = ${likes}
    where id = ${id}
  `;
  res.json({ message: "number of likes updated" });
}
