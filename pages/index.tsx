import type { NextPage } from "next";
import Image from "next/image";
import { AirdropModule } from "../components/AirdropModule";

const Home: NextPage = () => {
  return (
    <div className="relative h-auto">
      <div className="z-[-1] h-[1795px] absolute top-[2.2rem] w-full">
        <video className="w-full" autoPlay muted loop playsInline>
          <source src="/assets/landing_1920_high.mp4" type="video/mp4" />
        </video>
      </div>
      <AirdropModule />
    </div>
  );
};

export default Home;
