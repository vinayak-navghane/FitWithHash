import About from "@/components/About";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main >
      <Navbar />
      <div className="bg-gray-900 opacity-65 blur-sm h-full">
        <img
          src="/images/hash.jpeg"
          alt="image"
          className="w-full h-screen"
        />
      </div>
      <About />

    </main>
  );
}
