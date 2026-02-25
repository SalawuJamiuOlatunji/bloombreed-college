import { Link } from "react-router-dom";
import bbc from "../assets/BBC LIGHT.jpg";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Navbar() {
  return (
    <nav className=" w-full sm:p-5 shadow-lg  md:bg-blue-500 shadow-md md:px-8 md:py-6 ">
      {/* Mobile below md */}

      <div className="md:hidden rounded  w-full h-auto flex flex-col justify-center items-center gap-3">
        <div className="mt-3">
          <div className=" w-full h-auto flex flex-col justify-center items-center gap-3">
            <span className="bg-orange-500 p-3 my-2 rounded text-white">
              +2348023221910
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={bbc}
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
            <div className="ml-auto">
              <Sheet>
                <SheetTrigger>
                  <Menu className="w-10 h-10" />
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="bg-orange-400 flex flex-col justify-evenly font-bold md:text-2xl w-[250px]"
                >
                  <Link to="/" className="text-white hover:text-green-700">
                    Home
                  </Link>
                  <Link to="/about" className="text-white hover:text-green-700">
                    About
                  </Link>
                  <Link
                    to="/admission"
                    className="text-white hover:text-green-700"
                  >
                    Admission
                  </Link>
                  <Link to="/bill" className="text-white hover:text-green-700">
                    Bill
                  </Link>
                  <Link
                    to="/information"
                    className="text-white hover:text-green-700"
                  >
                    Information
                  </Link>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* md and above */}

      <div className="hidden  md:flex items-center justify-between">
        {/* left side of navbar */}
        <div className="flex items-center gap-3 w-full">
          <img
            src={bbc}
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
            <Link to="/bill" className="text-white hover:text-green-700">
              Bill
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
