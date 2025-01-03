import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProofOfWork from "@/components/ProofOfWork";
import Skills from "@/components/Skills";
import TopTweets from "@/components/TopTweets";

export default function Home() {
  return (
    <div className="bg-[#010a15] scroll transition-all text-white -mt-8">
      <Navbar/>
      <Hero/>
      <Skills/>
      <TopTweets/>
      <ProofOfWork/>
    </div>
  );
}
