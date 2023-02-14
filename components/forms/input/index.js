export default function Input(props) {
  const handleChange = (e) => {
    const value = e.target.value;
    props.onChange(value);
  };
  return (
    <div>
      <input
        {...props}
        className="border-2 w-96 bg-gray-200 py-3 px-6 rounded"
        onChange={handleChange}
      />
    </div>
  );
}
