import React from 'react';
import { Container } from '../../../../components/Layout';
import { FaArrowRight } from 'react-icons/fa';
import { GradientText } from '../../../../components/Button/GradientText';
import { ReadMoreBtn } from '../../../../components/Button/ReadMoreBtn';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Agents / Brokers',
    url: '/agents-brokers',
    image: 'https://static.realestateindia.com/rei/images/reis-img.jpg',
    description: 'Here Are Hassle-Free Solutions! Buy - Sell - Sell Your Property',
    alt: 'Agents / Brokers'
  },
  {
    id: 2,
    title: 'Builders / Developers',
    url: '/builders-developers',
    image: 'https://static.realestateindia.com/rei/images/reis-img2.jpg',
    description: 'List of the most trusted and reliable builders to fulfill your Dream HOME.',
    alt: 'Builders / Developers'
  },
  {
    id: 3,
    title: 'Architects / Architecture',
    url: '/architects-architecture',
    image: 'https://static.realestateindia.com/rei/images/reis-img3.jpg',
    description: 'Professional Architecture will meet your needs and expectations.',
    alt: 'Architects / Architecture'
  },
  {
    id: 4,
    title: 'Interior Decorators',
    url: '/interior-decorators',
    image: 'https://static.realestateindia.com/rei/images/reis-img4.jpg',
    description: 'A One-Stop Solution for all your decor Needs to Match Your Lifestyle.',
    alt: 'Interior Decorators'
  },
  {
    id: 5,
    title: 'Vaastu Consultant',
    url: '/vaastu-consultant',
    image: 'https://static.realestateindia.com/rei/images/reis-img7.jpg',
    description: 'Connect to top most Vastu consultants for right direction.',
    alt: 'Vaastu Consultant'
  },
  {
    id: 6,
    title: 'Building Contractors',
    url: '/building-contractors',
    image: 'https://static.realestateindia.com/rei/images/reis-img5.jpg',
    description: 'General contractor for a home repair, remodel, or construction.',
    alt: 'Building Contractors'
  },
  {
    id: 7,
    title: 'Home Inspection',
    url: '/home-inspection',
    image: 'https://static.realestateindia.com/rei/images/reis-img8.jpg',
    description: 'A complete range of building and home inspection services.',
    alt: 'Home Inspection'
  },
  {
    id: 8,
    title: 'Property Consultants',
    url: '/property-consultants',
    image: 'https://static.realestateindia.com/rei/images/reis-img6.jpg',
    description: 'List of Leading Real Estate Consultant for Professional Assistance Services.',
    alt: 'Property Consultants'
  }
];


const RealEstateServices = () => {
  const navigate = useNavigate();

  const handleServiceClick = (url) => {
    navigate(url);
  };

  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center lg:text-start mb-12">
          <GradientText className='hover:border-transparent'>
            Explore our Real Estate Services
          </GradientText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="h-56 group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 overflow-hidden relative"
              onClick={() => handleServiceClick(service.url)}
            >
              <div className="py-8 px-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 text-start  transition-colors duration-300">
                  <a 
                    href={service.url}
                    className="transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {service.title}
                  </a>
                </h3>

                <p className="text-sm text-gray-600 mb-4 text-start leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-start justify-start">


                  <ReadMoreBtn className='group-hover:text-white group-hover:bg-primary group-hover:border-transparent'>Read More</ReadMoreBtn>
                </div>

                <div className="absolute bottom-0 right-0 bg-gray-100 w-[100px] h-[90px] rounded-tl-[80px] p-[25px_0_0_30px] box-border leading-none">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-[55px] h-[55px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RealEstateServices;