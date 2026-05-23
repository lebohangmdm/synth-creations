import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Choose from "./components/Choose";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import HowWeBuildSection from "./components/Build";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        w-full
        bg-background
        text-gray-900
        antialiased
      "
    >
      <Hero />
      <About />
      <Services />
      <Work />
      <Choose />
      <HowWeBuildSection />
      <Faq />
      <Contact />
    </main>
  );
}
