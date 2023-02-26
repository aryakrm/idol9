import { useEffect } from "react";
import Navbar from "../components/navBar/Navbar";
import Body from "../components/body/Body";
import "./Home.scss";
import Chatbot from "../components/chatbot/Chatbot";
import { Crisp } from "crisp-sdk-web";
import Intro from "../components/intro/Intro";

function Home() {
  useEffect(() => {
    Crisp.configure("074eb3fb-a484-4938-879f-6d11dd70addf");
  }, []);
  return (
    <div className="Home">
      <Navbar />
      <Intro />
      <Body />
      <Chatbot />
    </div>
  );
}

export default Home;
