import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { useState } from "react";
import Input from "@/components/forms/input";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChangeMessage = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSubmit = async (e) => {
    const response = await fetch(
      `/api/contact?name=${name}&email=${email}&message=${message}`
    );
    const data = await response.json();

    setName("");
    setEmail("");
    setMessage("");
    setShowSuccess(true);
  };

  return (
    <div className="w-full ">
      <Header name="Contact"></Header>

      <Content>
        <form className="flex flex-col space-y-3">
          <Input
            placeholder="Name"
            value={name}
            onChange={(value) => setName(value)}
          ></Input>
          <Input
            placeholder="Email"
            value={email}
            onChange={(value) => setEmail(value)}
            disabled={false}
          ></Input>

          <textarea
            placeholder="Message"
            type="text"
            className="border-2 w-96 bg-gray-200 py-3 px-6 rounded"
            value={message}
            onChange={handleChangeMessage}
          />
          <button
            className="bg-blue-500 py-3 px-6 w-96 text-white rounded"
            onClick={handleSubmit}
            type="button"
          >
            Submit
          </button>
          {showSuccess === true ? (
            <p className="text-green-500 w-96">Your message was sent</p>
          ) : null}
        </form>
      </Content>
      <Footer title="Home Page" href="/"></Footer>
    </div>
  );
}
