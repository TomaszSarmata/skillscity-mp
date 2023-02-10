import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/components/shared/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function SingleBook() {
  const router = useRouter();
  const [book, setBook] = useState(null); //it's null as it doesn't exist until we retrieve this value
  //   const bookId = router.query.bookId; we could do it like that but destructuring in react is a preffered method
  const { bookId } = router.query; // so here we have managed to dynamically access the bookId that is coming from the api (from the query object of the router) so now we have to query that value in a dynamic way from our list of books to pass it on to our program so to navigate our user to the right single book page (that user accesses after clicking on the book).
  //to do that we have to go to our api books directory and assign id to each book in our list

  //after assigning the id to each book we will then create another api endpoint as right now api/books returns to us the entire list of books. We are going to create another endpoint that returns just one book by searching through our array of books

  useEffect(() => {
    if (!bookId) return; //here is the safety net only. This hook will get fired only if there is  a book selected and never when the bookId doesn't exist. If the book id is not null and different than before, it will go and get the data for us

    getBook(bookId); //why are we passing the value of bookId???
  }, [bookId]);

  const getBook = async (id) => {
    //id here is just an argument, we could call it xxx as well
    const response = await fetch(`/api/book-by-id?id=${id}`); //so here we are making the request to the api and now we have to pass the value of the id as a query parameter with the ?id={book.id} and through that fetch request we are getting our id that we are using in our function getBook as an argument. Further below we are just converting our data into json format
    const data = await response.json();
    // so here inside the returned data we are going to have the value of book so we can access that through .notatin or destructure as below
    const { book } = data;
    //now we want to persist the value of the book so we want to set it to some state so we don't loose the value on rerender
    setBook(book);
  };

  //here we want to do a loading screen so that when the value is null on the refreshing of the page (line 6) the program is not going to try to print the book.title of the null. Further below we were simply returning a div with {book.title} but then we will change that to style our page

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <Header name={book.title}></Header>

      <Hero
        img_url={book.img_url}
        title={book.title}
        subtitle={book.author}
      ></Hero>

      <Content>
        <div className="w-full flex flex-col">
          <div>
            <CopyToClipboard text={book.linkToPurchase}>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                type="button"
              >
                Copy link to Amazon
              </button>
            </CopyToClipboard>
          </div>

          <a href={book.linkToPurchase} target="_blank">
            Buy on Amazon
          </a>
        </div>
      </Content>

      <Footer title="Next book" href={`/single-book/${+book.id + 1}`}></Footer>
    </div>
  );
}
