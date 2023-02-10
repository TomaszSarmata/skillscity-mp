// import postgres from "postgres"; afrer setting up the file in utils with the instantiation of the sql we don't need it anymore.
import sql from "@/utils/postgres";

//after inporting sql from utils we can just do sql.bla.bla.bla

export default function handler(req, res) {
  //here we are creating a variable that will have access to our database connection through process.env that pull the sensitive key from our .env file where the key is stored
  // const dbConnection = process.env.POSTGRES_CONNECTION_STRING;

  //after installing through npm the postgress package, we can start using our database. In order to access our postgres db, we also have to instantiate it so that we can start quaring our db. We need to connect to it. We do it through declaring a variable sql below and we are going to call the postgress library on the other side of the equation. As we call the library we should also import it at the top. As we call the library we also have to include some settings which go in the brackets

  // const sql = postgres(dbConnection);//to set up postgres database with bit.io all you need is just this one line of code which is brilliant. Inside the brackets you have to include the "database connectin string" and optionally some additional settings

  // const sql = postgres(process.env.POSTGRES_CONNECTION_STRING);
  //so the problem with the above line of code is that we will have to repeat that every time we want to establish a connection in other api files. So to keep our code DRY best to wrap it up in a function and put it into a sererate folder. We we gonna create it at the root level of our project and call it utils. All functions that make our live easier in our project will go to this folder.

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
