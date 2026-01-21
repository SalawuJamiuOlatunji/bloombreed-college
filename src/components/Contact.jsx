export default function Contact() {
  return (
    <div className="bg-orange-500 py-8">
      <ul className="px-3 space-y-2">
        <li className="text-white text-xl">Bloombreed College</li>
        <li className="text-white">
          Location:{" "}
          <span className="text-white ml-1">
            25, Prince Oshibajo Road, Agbede, Ikorodu, Lagos State
          </span>
        </li>
        <li className="text-white">
          Phone:{" "}
          <a
            href="https://wa.me/2348023221910"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white ml-1 underline"
          >
            +2348023221910
          </a>
        </li>
        <li className="text-white">
          Email:{" "}
          <span className="text-white ml-1">bloombreedcollege01@gmail.com</span>
        </li>
      </ul>
    </div>
  );
}
