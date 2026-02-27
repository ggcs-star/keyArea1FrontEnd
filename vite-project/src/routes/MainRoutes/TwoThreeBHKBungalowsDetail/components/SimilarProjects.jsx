import React from 'react';
import Slider from 'react-slick';
import { GradientText } from '../../../../components/Button';

const similarProjects = [
  {
    id: 1,
    name: 'Suncity',
    image: 'https://dyimg1.realestateindia.com/proj_images/project428/proj_img-428_1-350x350.jpg',
    url: '',
    locality: 'Baddi',
    region: 'Solan',
    price: '30 Lac',
    type: '2.0 BHK Builder Floor',
  },
  {
    id: 2,
    name: 'Eastern Heights',
    image: 'https://dyimg2.realestateindia.com/proj_images/project510/proj_img-510_1-350x350.jpg',
    url: '',
    locality: 'Indirapuram',
    region: 'Ghaziabad',
    price: '42.07 Lac-62.17 Lac',
    type: '2.0, 3.0 BHK Builder Floor',
  },
  {
    id: 3,
    name: 'Park 81',
    image: 'https://dyimg2.realestateindia.com/proj_images/project701/proj_img-701_2-350x350.jpg',
    url: '',
    locality: 'Sector 14',
    region: 'Faridabad',
    price: '73 Lac-95 Lac',
    type: '3.0, 4.0 BHK Builder Floor',
  },
  {
    id: 4,
    name: 'Park Elite Floors',
    image: 'https://dyimg2.realestateindia.com/proj_images/project702/proj_img-702_1-350x350.jpg',
    url: '',
    locality: 'Sector 85',
    region: 'Faridabad',
    price: '48 Lac-81 Lac',
    type: '3.0, 4.0 BHK Builder Floor',
  },
  {
    id: 5,
    name: 'Florence Residency',
    image: 'https://dyimg2.realestateindia.com/proj_images/project709/proj_img-709_1-350x350.jpg',
    url: '',
    locality: 'Sushant Lok',
    region: 'Gurgaon',
    price: '2.19 Cr.',
    type: '4.0 BHK Builder Floor',
  },
  {
    id: 6,
    name: 'Margosa Heights',
    image: 'https://dynamic.realestateindia.com/proj_images/project855/proj_img-855_1-350x350.jpg',
    url: '',
    locality: 'Nibm',
    region: 'Pune',
    price: '45.75 Lac',
    type: '2.0 BHK Builder Floor',
  },
  {
    id: 7,
    name: 'Imperial Heights',
    image: 'https://dynamic.realestateindia.com/proj_images/project880/proj_img-880_3-350x350.jpg',
    url: '',
    locality: 'Versova',
    region: 'Mumbai',
    price: '1.42 Cr.-4.28 Cr.',
    type: '1.0, 2.0, 3.0, 4.0 BHK Builder Floor',
  },
  {
    id: 8,
    name: 'Vatika Premium Floors',
    image: 'https://dynamic.realestateindia.com/proj_images/project951/proj_img-951_2-350x350.jpg',
    url: '',
    locality: 'Sector 82',
    region: 'Gurgaon',
    price: 'Call for Price',
    type: '3.0 BHK Builder Floor',
  },
  {
    id: 9,
    name: 'New Town Height',
    image: 'https://dyimg1.realestateindia.com/proj_images/project1228/proj_img-1228_1-350x350.jpg',
    url: '',
    locality: 'Sector 90',
    region: 'Gurgaon',
    price: '1.02 Cr.-1.25 Cr.',
    type: '3.0, 4.0 BHK Builder Floor',
  },
  {
    id: 10,
    name: 'The Palm Studios',
    image: 'https://dynamic.realestateindia.com/proj_images/project1231/proj_img-1231_1-350x350.jpg',
    url: '',
    locality: 'Sector 66',
    region: 'Gurgaon',
    price: '8.78 Cr.',
    type: '2.0 BHK Builder Floor',
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Previous project"
  >
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Next project"
  >
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 6 6 6-6 6"/></svg>
  </button>
);

const SimilarProjects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <GradientText className="text-2xl font-bold mb-6 text-center text-gray-800">Similar Projects</GradientText>
        <div className="relative">
          <Slider {...settings}>
            {similarProjects.map((project) => (
              <div key={project.id} className="px-2 py-8">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group cursor-pointer h-full">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 hover:border-blue-200">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1 line-clamp-1">
                        {project.locality}, {project.region}
                      </p>
                      <p className="text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors duration-300 mb-1">
                        ₹ {project.price}
                      </p>
                      <p className="text-xs text-gray-500 mb-1 line-clamp-1">{project.type}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SimilarProjects;