import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-purple-500/30">
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
