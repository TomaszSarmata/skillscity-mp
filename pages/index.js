import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    alert("you clicked the button!");
    // make API call here and then navigate afterwards. Hare we are showing a programatic way of navigating through the pages using router of nextjs. That's good if the user presses the button to navigate somewhre and before you let them go there you put a little bit of logic to i.e. get some data
    router.push("/books");
    //and now navigate the user to the page
  };

  return (
    <div className="w-full py-10 bg-red-100">
      <div>Hello</div>
      <button className="bg-blue-500 px-2 py-1 rounded" onClick={handleClick}>
        Click me
      </button>
      <Link href="./books">Go to books page</Link>
    </div>
  );
}
