import React from 'react';
import { Container } from '../../../../components/Layout';
import { GradientText } from '../../../../components/Button/GradientText';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Ahmedabad Heights',
    location: 'Satellite, Ahmedabad',
    type: '2, 2.5, 3, 3.5, 4 BHK Builder Floors',
    area: '1200 - 2800 Sq.ft.',
    price: '45 Lac - 2.5 Cr.',
    image: 'https://dynamic.realestateindia.com/proj_images/project40869/proj_img-40869_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/ahmedabad'
  },
  {
    id: 2,
    name: 'Surat Greens',
    location: 'Vesu, Surat',
    type: '1, 2, 3, 4, 5 BHK Flats',
    area: '800 - 2500 Sq.ft.',
    price: '35 Lac - 1.8 Cr.',
    image: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/surat'
  },
  {
    id: 3,
    name: 'Vadodara Vista',
    location: 'Alkapuri, Vadodara',
    type: '2, 3, 4 BHK Flats',
    area: '1100 - 2200 Sq.ft.',
    price: '42 Lac - 1.2 Cr.',
    image: 'https://dyimg1.realestateindia.com/proj_images/project14446/proj_img-14446_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/vadodara'
  },
  {
    id: 4,
    name: 'Rajkot Residency',
    location: 'Race Course, Rajkot',
    type: '2, 3, 4 BHK Flats',
    area: '1000 - 2000 Sq.ft.',
    price: '38 Lac - 95 Lac',
    image: 'https://dyimg1.realestateindia.com/proj_images/project50542/proj_img-50542_1-200x200.jpeg',
    status: 'Upcoming Projects',
    url: '/buy/rajkot'
  },
  {
    id: 5,
    name: 'Gandhinagar Gardens',
    location: 'Sector 21, Gandhinagar',
    type: '2, 3, 4 BHK Flats',
    area: '1200 - 2400 Sq.ft.',
    price: '55 Lac - 1.5 Cr.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project21854/proj_img-21854_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/gandhinagar'
  },
  {
    id: 6,
    name: 'Bhavnagar Business Hub',
    location: 'Waghawadi Road, Bhavnagar',
    type: 'Commercial Space',
    area: '500 - 5000 Sq.ft.',
    price: '25 Lac - 2 Cr.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project23640/proj_img-23640_1-200x200.jpg',
    status: 'Ongoing Projects',
    url: '/buy/bhavnagar'
  },
  {
    id: 7,
    name: 'Jamnagar Junction',
    location: 'Race Course, Jamnagar',
    type: '2, 3, 4 BHK Flats',
    area: '1100 - 2200 Sq.ft.',
    price: '32 Lac - 85 Lac',
    image: 'https://dyimg2.realestateindia.com/proj_images/project21851/proj_img-21851_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/jamnagar'
  },
  {
    id: 8,
    name: 'Junagadh Heights',
    location: 'Girnar Road, Junagadh',
    type: '2, 3, 4 BHK Flats',
    area: '1000 - 2000 Sq.ft.',
    price: '28 Lac - 75 Lac',
    image: 'https://dyimg2.realestateindia.com/proj_images/project31429/proj_img-31429_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/junagadh'
  },
  {
    id: 9,
    name: 'Anand Avenue',
    location: 'College Road, Anand',
    type: 'Residential Plots',
    area: '1000 - 5000 Sq.ft.',
    price: '15 Lac - 1.2 Cr.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project43670/proj_img-43670-19652_1-200x200.jpeg',
    status: 'Completed Projects',
    url: '/buy/anand'
  },
  {
    id: 10,
    name: 'Nadiad Nest',
    location: 'Station Road, Nadiad',
    type: '3, 4, 5 BHK Flats',
    area: '1500 - 3000 Sq.ft.',
    price: '45 Lac - 1.8 Cr.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project21270/proj_img-21270_1-200x200.jpg',
    status: 'Ongoing Projects',
    url: '/buy/nadiad'
  }
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Previous project"
  >
    <ChevronLeft size={28} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Next project"
  >
    <ChevronRight size={28} />
  </button>
);

const FeaturedRealEstate = () => {
  const navigate = useNavigate();

  const handleProjectClick = (url) => {
    navigate(url);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
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
    <section className="bg-white">
      <Container>
        <div className="text-center lg:text-start">
          <GradientText>
            Featured Properties
          </GradientText>
        </div>

        <div className="relative px-4 lg:px-8 my-4">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-2 py-8">
                <div 
                  className="group cursor-pointer transform transition-all duration-300 h-full"
                  onClick={() => handleProjectClick(project.url)}
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 hover:border-blue-200">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
                        {project.status}
                      </div> */}
                    </div>
                    
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="block">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-1">{project.location}</p>
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1 line-clamp-1">{project.type}</p>
                        <p className="text-sm text-gray-600 mb-1 line-clamp-1">{project.area}</p>
                        <p className="text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors duration-300">
                          ₹ {project.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedRealEstate;