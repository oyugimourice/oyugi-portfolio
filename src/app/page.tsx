import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Latest from "@/components/Latest";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="content-area">
      <Hero />
      <Projects />
      <About />
      <Latest />
      <Testimonials />
      <Community />
      <Footer />
    </div>
  );
}
