const Testimonies = [
  {
    name: "Mrs. Adewale",
    text: "My child has grown academically and socially at Bloombreed.",
  },
  {
    name: "Mr. Ogankpa",
    text: "Excellent teaching staff and a caring environment.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white-50 py-20 px-8  mx-auto text-center">
      <h3 className="text-3xl font-bold mb-12">What Parents Say</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {Testimonies.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <p className="mb-4">"{t.text}"</p>
            <p className="font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
