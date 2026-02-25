const services = {
  "tuition fee": 10,
  transportation: 10,
  examination: 20,
  "development levy": 30,
  library: 40,
  "medical/first aids": 50,
  "p.t.a": 60,
  "sport and games": 20,
  "textbooks/statinary": 19,
  "school uniform": 30,
  music: 10,
  "sport dress": 40,
  "mid-day meal": 100,
  "remedal lesson": 50,
  "c.a dossier": 30,
  "commputer/french/ict": 60,
  "form/maintenance": 70,
  excursion: 40,
  party: 10,
  "id'card": 40,
  others: " ",
};

export default function Bills() {
  const Total = Object.values(services).reduce(
    (acc, amount) => acc + amount,
    0,
  );
  return (
    <div className="w-full">
      {/* Header */}
      <div className="grid grid-cols-3 text-center font-bold border-b border-black">
        <div className="border border-black">NO</div>
        <div className="border border-black">DESCRIPTION OF SERVICES</div>
        <div className="border border-black">AMOUNT</div>
      </div>

      {/* Rows */}
      {Object.entries(services).map(([service, amount], index) => (
        <div
          key={service}
          className="grid grid-cols-3 text-center border-b border-black"
        >
          <div className="border border-black">{index + 1}</div>
          <div className="border border-black">{service.toUpperCase()}</div>
          <div className="border border-black">₦{amount}</div>
        </div>
      ))}
      {/* Total */}

      <div className="grid grid-cols-3 text-center border-b border-black">
        <div className="border border-black"></div>
        <div className="px-2 flex justify-between border border-black font-bold">
          <span>Total</span> <span>#</span>
        </div>
        <div className="border border-black">#{Total}</div>
      </div>
      <div className="flex px-2 text-center text-orange-600 shadow-lg">
        <strong>Note:</strong>
        <p>All Fees Must be paid on or before first week of Resumption</p>
      </div>
    </div>
  );
}
