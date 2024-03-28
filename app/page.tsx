import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowToStartTrip from "@/components/HowToStartTrip";
import Prices from "@/components/Prices";
import Program from "@/components/Program";
import Questions from "@/components/Questions";
import Sessions from "@/components/Sessions";
import Success from "@/components/Success";
import Trip from "@/components/Trip";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Trip />
      <Program />
      <HowToStartTrip />
      <Sessions />
      <Success />
      <Prices />
      <Questions />
      <Contact />
    </main>
  );
}
