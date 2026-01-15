import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
<<<<<<< HEAD
=======
import FeatureSection from "../components/FeatureSection";
>>>>>>> 3da2e7d1c4bf114b0073294736e780691c1686cc

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="py-16 px-8 max-w-5xl mx-auto text-center">
<<<<<<< HEAD
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Welcome to Bloombreed College
        </h2>
        <p className="text-gray-600">
=======
        <h2 className="text-[35px] text-start font-bold text-gray-600 mb-4">
          Welcome to Bloombreed College
          <hr className="bg-blue-600 h-1" />
        </h2>
        <p className="text-gray-600 text-start">
>>>>>>> 3da2e7d1c4bf114b0073294736e780691c1686cc
          Bloombreed College is committed to raising disciplined, intelligent
          and confident students who are prepared for a better future. We
          combine academic excellence with moral values to produce tomorrow’s
          leaders.
        </p>
<<<<<<< HEAD
      </section>
=======
        <div className="flex justify-content-start mt-10 mb-2"> <button className="py-3 px-8 bg-blue-700 text-xl font-bold text-white rounded-full">Contact us</button></div>
      </section>
      <FeatureSection />
>>>>>>> 3da2e7d1c4bf114b0073294736e780691c1686cc
      <Contact />
      <Footer />
    </div>
  );
}
