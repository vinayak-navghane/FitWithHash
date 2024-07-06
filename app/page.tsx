import About from "@/components/About";
import DietPlans from "@/components/DietPlans";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero bgImage="hash.jpeg" />
      <About />
      <DietPlans bgImage="hash.jpeg" />
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