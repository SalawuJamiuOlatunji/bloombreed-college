import About from "./pages/About";
import Admission from "./pages/Admission";
import Bills from "./pages/Bills";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return(
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers/>} />
      <Route path="/bills" element={<Bills />}/>
      <Route path="/about" element = {<Admission />}/>
      <Route path="/admission" element = {<About />}/>
    </Routes>
  ) 
  
}
