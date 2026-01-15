import locked from "../assets/locked.png";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 shadow-md px-8 py-6 flex items-center justify-between">
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
          <a href="#" className="text-white hover:text-green-700">
            Home
          </a>
          <a href="#" className="text-white hover:text-green-700">
            About
          </a>
          <a href="#" className="text-white hover:text-green-700">
            Admissions
          </a>
          <a href="#" className="text-white hover:text-green-700">
            Gallery
          </a>
          <a href="#" className="text-white hover:text-green-700">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
