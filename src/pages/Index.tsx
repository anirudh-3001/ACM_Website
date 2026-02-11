import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Domains } from "@/components/Domains";
import { Events } from "@/components/Events";
import { Team } from "@/components/Team";
import { Join } from "@/components/Join";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Domains />
        <Events />
        <Team />
        <Join />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
