export default function Information() {
  const infos = [
    {
      title: "P.T.A Meeting",
      message: "No information",
      time: "NULL",
      date: "NULL",
    },
    {
      title: "Holiday Notice",
      message: "Mid Term Break",
      time: "NULL",
      date: "NULL",
    },
    {
      title: "Examination Notice",
      message: "Do Your Best",
      time: "NULL",
      date: "NULL",
    },
  ];
  return (
    <div className="w-full h-screen p-5">
      {infos.map((info, id) => (
        <div className="rounded break-word  shadow-lg text-center py-5">
          <div className="font-bold text-4xl">{info.title}</div>
          <div className="font-bold text-2xl">{info.time}</div>
          <div className="font-bold text-2xl">{info.date}</div>
          <div className="font-medium text-2xl text-gray-500">
            {info.message}
          </div>
        </div>
      ))}
    </div>
  );
}
