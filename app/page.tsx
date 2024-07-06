import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero bgImage="hash.jpeg" />
      <About />

    </main>
  );
}

{/* <div className="bg-gray-900 opacity-65 blur-sm h-full">
        <img
          src="/images/hash.jpeg"
          alt="image"
          className="w-full h-screen"
        />
      </div> */}