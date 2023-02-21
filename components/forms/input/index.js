export default function Input(props) {
  const handleChange = (e) => {
    const value = e.target.value;
    props.onChange(value);
  };
  return (
    <input
      {...props}
      className="border-2 w-full bg-gray-200 py-3 px-6 rounded"
      onChange={handleChange}
    />
  );
}
