export default function Information() {
  const infos = {
    title: "No Information",
    message: "welcome back",
    time: ``,
    date: ``,
  };
  return (
    <div className="w-full h-screen">
      {Object.entries(infos).map((id, title, message, time, date) => (
        <div key={id}>
          {title}
          <div>{time}</div>
          <div>{date}</div>
          <div>{message}</div>
        </div>
      ))}
    </div>
  );
}
