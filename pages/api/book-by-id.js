//this endpoint will return to us just one book based on th id it finds
// so all work we are doing in the API folder is done in node.js and has nothing to do with the react

export default function handler(req, res) {
  //so here we want to save some sort of the value that will come from the api request that will contain our book id. Inside our request object we will be able to find that value so we can access it like that
  const id = req.query.id;
  //   const { id } = req.query; //same but with destructuring

  //so now we have our id of our books we want to take the full list of books, loop through it and find the one that matches our id. we are going to use array.find()

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

  const foundBook = books.find((book) => {
    if (book.id === id) {
      return true;
    } else {
      return false;
    }
  });

  res.json({ book: foundBook }); // we could also just do re.json(foundBook)
}

//so now that we have our single book end point, we can use it in our single-book page that our user is going to navigate to
