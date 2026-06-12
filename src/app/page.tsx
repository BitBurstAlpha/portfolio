import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
        <AboutSection />
      </main>
    </>
  );
}

