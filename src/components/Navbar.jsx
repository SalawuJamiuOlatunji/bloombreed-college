import locked from "../assets/locked.png";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 shadow-md px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={locked} alt="Bloombreed Logo" className="h-10" />
        <div>
          <h1 className="text-orange-400 font-bold text-xl">
            Bloombreed College
          </h1>
          <p className="text-orange-300 text-sm">
            Raising giants for a better future
          </p>
        </div>
      </div>
      <div></div>
    </nav>
  );
}
