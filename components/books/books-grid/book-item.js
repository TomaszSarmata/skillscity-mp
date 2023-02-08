export default function BookItem({ book }) {
  return (
    <div className="bg-red-100">
      <img src={book.Imgurl} />
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  );
}
