const WorkingHours = () => {
  const schedule = [
    { day: "Mon-Wed", time: "8:00 - 8:40" },
    { day: "Thu-Fri", time: "8:45 - 9:30" },
    { day: "Sat", time: "8:00 - 8:40" },
    { day: "Holiday", time: "8:00 - 8:40" },
  ];

  return (
    <div className="bg-white p-6 px-8 rounded shadow w-full">
      <h2 className="text-2xl font-bold mb-4">Working hours</h2>
      <ul className="divide-y divide-gray-300 w-full">
        {schedule.map(({ day, time }, idx) => (
          <li key={idx} className="flex justify-between items-center py-4 w-full">
            <span className="text-gray-800">{day}</span>
            <span className="text-gray-800">{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkingHours;
