import Telephone from "./telephone";

export default function ContactDetails({ details, contactDetails, telephone }) {
  console.log("details", details);
  console.log("contact details", contactDetails);
  console.log("telephone", telephone);
  return (
    <div className="w-full">
      <Telephone value={telephone}></Telephone>
    </div>
  );
}
