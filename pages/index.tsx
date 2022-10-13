import type { NextPage } from "next";
import Image from "next/image";
import { AirdropModule } from "../components/AirdropModule";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="z-[-1] h-full absolute w-full">
        <video className="h-full w-full object-cover object-top" autoPlay muted loop playsInline>
          <source src="/assets/landing_1920_high.mp4" type="video/mp4" />
        </video>
      </div>
      <Header />
      <AirdropModule />
    </div>
  );
};

export default Home;
