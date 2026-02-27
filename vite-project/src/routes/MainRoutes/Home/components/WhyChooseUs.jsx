import { whyChooseUsItems } from "../../../../db";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-200 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2 font-montserratregular">Why choose us</h2>
      <h3 className="text-md text-secondary mb-4 font-montserratregular">OUR LEARN BASED PROGRAM</h3>
      <ul className="space-y-2 list-disc pl-5 text-gray-700 font-robotoregular text-xl">
        {whyChooseUsItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
