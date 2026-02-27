const TestimonialCard = ({ name, title, text, imgSrc, tag }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded shadow">
      <img src={imgSrc} alt={`${name}`} className="w-24 h-24 rounded-full" />
      <div>
        <h2 className="text-xl font-montserrat">{name} {tag && (
          <span className="w-2 h-2 ml-2 text-white bg-secondary text-xs p-1 rounded">
            {tag}
          </span>
        )}</h2>
        <h3 className="text-sm text-gray-500 uppercase font-montserratregular">{title}</h3>
        <p className="mt-2 text-gray-700 font-robotoregular">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
