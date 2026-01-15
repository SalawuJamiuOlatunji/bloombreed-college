import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="py-16 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Welcome to Bloombreed College
        </h2>
        <p className="text-gray-600">
          Bloombreed College is committed to raising disciplined, intelligent
          and confident students who are prepared for a better future. We
          combine academic excellence with moral values to produce tomorrow’s
          leaders.
        </p>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
