// import postgres from "postgres"; afrer setting up the file in utils with the instantiation of the sql we don't need it anymore.
import sql from "@/utils/postgres";

//after inporting sql from utils we can just do sql.bla.bla.bla

export default async function handler(req, res) {
  //here we are creating a variable that will have access to our database connection through process.env that pull the sensitive key from our .env file where the key is stored
  // const dbConnection = process.env.POSTGRES_CONNECTION_STRING;

  //after installing through npm the postgress package, we can start using our database. In order to access our postgres db, we also have to instantiate it so that we can start quaring our db. We need to connect to it. We do it through declaring a variable sql below and we are going to call the postgress library on the other side of the equation. As we call the library we should also import it at the top. As we call the library we also have to include some settings which go in the brackets

  // const sql = postgres(dbConnection);//to set up postgres database with bit.io all you need is just this one line of code which is brilliant. Inside the brackets you have to include the "database connectin string" and optionally some additional settings

  // const sql = postgres(process.env.POSTGRES_CONNECTION_STRING);
  //so the problem with the above line of code is that we will have to repeat that every time we want to establish a connection in other api files. So to keep our code DRY best to wrap it up in a function and put it into a sererate folder. We we gonna create it at the root level of our project and call it utils. All functions that make our live easier in our project will go to this folder.

  // here after connection to our postgre db throuhg bit.io and uploading the json file of books to bit.io, we can make a request from our db insted of the hardcoded list of books. To do that we have to turn our handler function into async function and then declare the variable that will hold the returned value of books (so const books) that equates to the returned value of the api call using sql. We use backticks to insert all of our sql commands inside the body of the request.

  const books = await sql`
    select * from books
  `; //this sql command will always return an array so books variable will equate to the array

  // we can now remove our array of books as we are pulling it from our db
  // const books = [
  //   {
  //     id: "1",
  //     title: "The Hobbit",
  //     author: "J.R.R. Tolkien",
  //     imgUrl: "/assets/1.png",
  //   },
  //   {
  //     id: "2",
  //     title: "The Fellowship of the Ring",
  //     author: "J.R.R. Tolkien",
  //     imgUrl: "/assets/2.png",
  //   },
  //   {
  //     id: "3",
  //     title: "Born a Crime",
  //     author: "Trevor Noah",
  //     imgUrl: "/assets/3.png",
  //   },
  // ];
  res.json(books); //here we are responding to our client
}
