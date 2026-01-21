import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Bills from "./pages/Bills";
import Informaion from "./pages/Informaion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/information" element={<Informaion />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}
