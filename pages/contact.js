import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { useState, useEffect } from "react";
import Input from "@/components/forms/input";
import ListOfMessages from "@/components/contact/list-of-messages";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/contact-messages`);
    const data = await response.json();

    const { messages } = data;

    setMessages(messages);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const handleChangeMessage = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSubmit = async (e) => {
    if (!name) return;
    if (!email) return;
    if (!message) return;
    const response = await fetch(
      `/api/contact?name=${name}&email=${email}&message=${message}`
    );
    const data = await response.json();

    setName("");
    setEmail("");
    setMessage("");
    setShowSuccess(true);
    getMessages();
  };

  return (
    <div className="w-full ">
      <Header name="Contact"></Header>

      <Content>
        <form className="flex flex-col space-y-3 w-full sm:w-96 px-4">
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
            className="border-2 w-full bg-gray-200 py-3 px-6 rounded"
            value={message}
            onChange={handleChangeMessage}
          />
          <button
            className="bg-blue-500 py-3 px-6 w-full text-white rounded"
            onClick={handleSubmit}
            type="button"
          >
            Submit
          </button>
          {showSuccess === true ? (
            <p className="text-green-500 w-full">Your message was sent</p>
          ) : null}
        </form>

        <ListOfMessages
          isLoading={isLoading}
          messages={messages}
        ></ListOfMessages>
      </Content>
      <Footer title="Home Page" href="/"></Footer>
    </div>
  );
}
