import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main >
      <Navbar />
      <div className="bg-gray-900 opacity-50 blur-sm h-full">
        <img
          src="/images/hash.jpeg"
          alt="image"
          className="w-full h-screen"
        />
      </div>

    </main>
  );
}
