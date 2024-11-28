import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProofOfWork from "@/components/ProofOfWork";
import Skills from "@/components/Skills";
import TopTweets from "@/components/TopTweets";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#010a15]">
      <Navbar/>
      <Hero/>
      <Skills/>
      <TopTweets/>
      <ProofOfWork/>
    </div>
  );
}
