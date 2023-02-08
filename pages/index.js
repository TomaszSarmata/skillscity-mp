import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import Hero from "@/components/home/hero";
import Topics from "@/components/home/topics";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    alert("you clicked the button!");
    // make API call here and then navigate afterwards. Hare we are showing a programatic way of navigating through the pages using router of nextjs. That's good if the user presses the button to navigate somewhre and before you let them go there you put a little bit of logic to i.e. get some data
    router.push("/books");
    //and now navigate the user to the page
  };

  return (
    <div className="w-full">
      <Header name="Home"></Header>
      <Hero
        imgUrl="/assets/profile.png"
        title="Tomasz Zajac"
        subtitle="I am a bootcamp student"
      ></Hero>

      <Content>
        <div className="w-full flex flex-col">
          <Topics></Topics>
          <div>
            <button
              className="bg-blue-500 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Click me
            </button>
          </div>
        </div>
      </Content>

      <Footer title="Books Page" href="/books" />
    </div>
  );
}
