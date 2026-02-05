import { Link } from "react-router-dom";
import locked from "../assets/locked.png";

export default function Navbar() {
  return (
    <nav className="sm:justify-center sm:p-0   md:bg-blue-500 shadow-md md:px-8 md:py-6 ">
      {/* Mobile below md */}
      <div className="md:hidden border my-5 border-red-500 w-full h-auto flex flex-col justify-center items-center gap-3">
        <div>
          <span className="bg-orange-500 p-3 my-2 rounded text-white">
            +2348023221910
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={locked}
            alt="Bloombreed Logo"
            className="size-15 rounded-[10px]"
          />
          <div>
            <h1 className="text-orange-400 font-bold text-xl">
              Bloombreed College
            </h1>
            <p className="text-orange-300 text-sm">
              Raising giants for a better future
            </p>
          </div>
        </div>
      </div>

      {/* md and above */}

      <div className="hidden md:flex md:flex md:items-center md:justify-between">
        {/* left side of navbar */}
        <div className="flex items-center gap-3">
          <img
            src={locked}
            alt="Bloombreed Logo"
            className="size-20 rounded-[10px]"
          />
          <div>
            <h1 className="text-orange-400 font-bold text-xl">
              Bloombreed College
            </h1>
            <p className="text-orange-300 text-sm">
              Raising giants for a better future
            </p>
          </div>
        </div>

        {/* right side of navbar */}
        <div className="flex flex-col items-end w-[50%]">
          <h1 className="text-white mb-2 font-bold text-xl text-right">
            Phone: +2348023221910
          </h1>
          <div className="hidden mt-2 md:flex gap-8 font-medium">
            <Link to="/" className="text-white hover:text-green-700">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-green-700">
              About
            </Link>
            <Link to="/admission" className="text-white hover:text-green-700">
              Admission
            </Link>
            <Link to="/bills" className="text-white hover:text-green-700">
              Bills
            </Link>
            <Link to="/information" className="text-white hover:text-green-700">
              Information
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
