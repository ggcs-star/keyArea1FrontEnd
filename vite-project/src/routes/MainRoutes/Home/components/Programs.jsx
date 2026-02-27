import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Container } from '../../../../components/Layout';
import { useNavigate } from 'react-router-dom';

const propertyCards = [
  {
    id: 1,
    title: "2 BHK Properties",
    link: "List Your Property",
    url: "post-property-for-sale-sell",
    bgColor: "#023e9a",
    image: "https://static.realestateindia.com/rei/images/pw-img1.jpg"
  },
  {
    id: 2,
    title: "3 BHK Properties",
    link: "Explore Now",
    url: "/services/realestate-agent",
    bgColor: "#b5486d",
    image: "https://static.realestateindia.com/rei/images/pw-img2.jpg"
  },
  {
    id: 3,
    title: "Emerging Properties",
    link: "Explore Now",
    url: "property-for-sale-sell-in-Ahmedabad",
    bgColor: "#eed777",
    textColor: "#000",
    image: "https://static.realestateindia.com/rei/images/pw-img3.jpg"
  },
  {
    id: 4,
    title: "Trending Properties",
    link: "Post Your Requirement",
    url: "/buy/requirement",
    bgColor: "#48a4b5",
    image: "https://static.realestateindia.com/rei/images/pw-img4.jpg"
  }
];

export default function Programs() {
  const navigate = useNavigate();

  const handleCardClick = (url) => {
    navigate(url);
  };

  return (
    <div className='bg-gray-100'>
      <Container>
        <div className="font-montserratregular w-full lg:px-6 mb-4 py-4">
          <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {propertyCards.map((card) => (
              <li
                key={card.id}
                className="group "
              >
                <div
                  className="h-48 relative p-2 lg:p-6 rounded-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <div className="flex flex-col gap-4">
                    <a
                      href={card.url}
                      className={`text-[15px] lg:text-lg font-semibold ${card.textColor ? 'text-black' : 'text-white'}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {card.title}
                    </a>
                    <button
                      onClick={() => handleCardClick(card.url)}
                      className='cursor-pointer w-fit text-[10px] text-sm p-2 bg-white text-black rounded-lg whitespace-nowrap'>
                      <span className="flex items-center gap-2">
                        {card.link}
                        <FaLongArrowAltRight className="transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute bottom-4 right-4 w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
