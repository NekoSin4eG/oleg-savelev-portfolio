import Image from "next/image";
import Navbar from "./components/Navigation/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { TracingBeam } from "./components/TracingBeam/TracingBeam";

export default function Home() {
  return (
    // <TracingBeam>
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto mt-[70px] md:mt-24 px-12 py-4">
          <HeroSection />
          <h2 className="mt-5 md:mt-2 text-center text-xl text-gray-400">The site is under development</h2>
        </div>
      </main>
    // </TracingBeam>
  );
}
