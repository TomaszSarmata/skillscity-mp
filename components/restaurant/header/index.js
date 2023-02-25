export default function Header({ restaurant }) {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
    </div>
  );
}
