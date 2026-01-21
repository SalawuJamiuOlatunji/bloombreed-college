const stats = [
  { label: "Graduation Rate", value: "95%" },
  { label: "Exam Success", value: "89%" },
  { label: "Student-Teacher Ratio", value: "15:1" },
];

export default function Achievement() {
  return (
    <section className="bg-gray-50 py-20 px-8 text-center">
      <h3 className="text-3xl font-bold mb-12">Student Achievements</h3>
      <div className="flex justify-center gap-16">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl font-bold">{stat.value}</p>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
