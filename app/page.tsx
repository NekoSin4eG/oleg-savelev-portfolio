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
        </div>
      </main>
    // </TracingBeam>
  );
}
