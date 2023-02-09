export default function handler(req, res) {
  const books = [
    {
      id: "1",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      imgUrl: "/assets/1.png",
    },
    {
      id: "2",
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      imgUrl: "/assets/2.png",
    },
    {
      id: "3",
      title: "Born a Crime",
      author: "Trevor Noah",
      imgUrl: "/assets/3.png",
    },
  ];
  res.json(books);
}
