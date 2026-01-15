import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import FeatureSection from "../components/FeatureSection";
import Achievement from "../components/Achievement";
import Mission from "../components/Mission";
import Testimonials from "../components/Testimonials";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-[35px] font-bold text-gray-700 mb-4">
          Welcome to Bloombreed College
          <hr className="bg-blue-600 h-1 w-24 mt-2" />
        </h2>

        <p className="text-gray-600 mt-4">
          Bloombreed College is committed to raising disciplined, intelligent
          and confident students who are prepared for a better future. We
          combine academic excellence with moral values to produce tomorrow’s
          leaders.
        </p>

        <div className="mt-10">
          <button className="py-3 px-8 bg-blue-700 text-xl font-bold text-white rounded-full hover:bg-blue-800 transition">
            Contact us
          </button>
        </div>
      </section>

      <FeatureSection />
      <Achievement />
      <Mission />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
