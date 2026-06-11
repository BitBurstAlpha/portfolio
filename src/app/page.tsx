import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>
    </>
  );
}

