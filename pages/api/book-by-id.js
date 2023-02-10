import sql from "@/utils/postgres";

//this endpoint will return to us just one book based on th id it finds
// so all work we are doing in the API folder is done in node.js and has nothing to do with the react

export default async function handler(req, res) {
  //so here we want to save some sort of the value that will come from the api request that will contain our book id. Inside our request object we will be able to find that value so we can access it like that
  const id = req.query.id;
  //   const { id } = req.query; //same but with destructuring

  //so now we have our id of our books we want to take the full list of books, loop through it and find the one that matches our id. we are going to use array.find()

  //this part of the code comes in last after we ve connected our db and so now insted of pulling info about the book from our static file (current file) we are going to make a db request through api and pull the infom from bit.io

  const books = await sql`
    select * from books
    where id = ${id}
  `; //where id from the column of the db table is equal to req.query.id

  //the response from the sql request will come back as a list of books, here in this example we will only have one book. So when we do a sanity check below on the info received in our response we will do books.length < 1

  if (books.length < 1) {
    res.status(404).json({ message: "Book not found" });
    return;
  }
  //if the above condition was not met then we know we have at least one book. So now jjust take first book and save it as a foundBook

  const foundBook = books[0];

  //again we can now get rid of hardcoded list
  //   const books = [
  //     {
  //       id: "1",
  //       title: "The Hobbit",
  //       author: "J.R.R. Tolkien",
  //       imgUrl: "/assets/1.png",
  //       linkToPurchase: "https://amzn.eu/d/3YRlJ3O",
  //     },
  //     {
  //       id: "2",
  //       title: "The Fellowship of the Ring",
  //       author: "J.R.R. Tolkien",
  //       imgUrl: "/assets/2.png",
  //       linkToPurchase: "https://amzn.eu/d/1chHUk1",
  //     },
  //     {
  //       id: "3",
  //       title: "Born a Crime",
  //       author: "Trevor Noah",
  //       imgUrl: "/assets/3.png",
  //       linkToPurchase: "https://amzn.eu/d/2oFkgvs",
  //     },
  //   ];

  //we don't need this bit of code after connection to our db as that logic is included in our sql request on line 17
  //   const foundBook = books.find((book) => {
  //     if (book.id === id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });

  res.json({ book: foundBook }); // we could also just do re.json(foundBook)
}

//so now that we have our single book end point, we can use it in our single-book page, that our user is going to navigate to
