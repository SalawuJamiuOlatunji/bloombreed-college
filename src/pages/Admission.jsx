export default function Admission() {
  const admission = {
    title: "2026/2027 Admission Now Open",
    time: "Application Deadline: 30th September 2026",
    date: "Entrance Exam Date: 10th October 2026",
    message:
      "Bloombreed College invites qualified students to apply for admission into JSS1, JSS2, JSS3 and SS1, SS2, SS3. Application forms are available at the school premises. For inquiries, call +2348023221910.",
  };

  return (
    <div className="w-full min-h-screen p-5 bg-gray-50">
      <div className="rounded-xl shadow-lg bg-white p-8 text-center max-w-3xl mx-auto">
        <div className="font-bold text-3xl md:text-4xl text-orange-500 mb-4">
          {admission.title}
        </div>

        <div className="font-semibold text-lg md:text-xl text-blue-600 mb-2">
          {admission.time}
        </div>

        <div className="font-semibold text-lg md:text-xl text-blue-600 mb-4">
          {admission.date}
        </div>

        <div className="font-medium text-lg text-gray-600 leading-relaxed">
          {admission.message}
        </div>
      </div>
    </div>
  );
}
