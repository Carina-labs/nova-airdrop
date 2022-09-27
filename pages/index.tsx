import type { NextPage } from "next";
import Image from "next/image";
import { AirdropModule } from "../components/AirdropModule";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-auto">
      <div className="z-[-1] h-auto absolute top-[2.2rem] w-full">
        <video className="w-full" autoPlay muted loop playsInline>
          <source src="/assets/landing_1920_high.mp4" type="video/mp4" />
        </video>
      </div>
      <Header />
      <AirdropModule />
    </div>
  );
};

export default Home;
