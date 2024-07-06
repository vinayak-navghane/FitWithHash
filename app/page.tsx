import About from "@/components/About";
import DietPlans from "@/components/DietPlans";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero bgImage="hash.jpeg" />
      <About />
      <DietPlans bgImage="hash.jpeg" />
      <Services />
      <Footer />
    </main>
  );
}
