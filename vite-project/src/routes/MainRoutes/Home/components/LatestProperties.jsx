import React from 'react';
import { Container } from '../../../../components/Layout';
import { GradientText } from '../../../../components/Button/GradientText';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const propertiesForSale = [
  {
    id: 1,
    title: 'Individual Houses',
    bhk: '3 BHK / 1450 Sq.ft.',
    location: 'Fathima Nagar, Tiruchirappalli',
    price: '64 Lac',
    image: 'https://dyimg2.realestateindia.com/prop_images/3747009/1375569_1-200x200.jpg',
    url: '/property-detail/3bkh-individual-houses-for-sale-in-fathima-nagar-tiruchirappalli'
  },
  {
    id: 2,
    title: 'Residential Plot',
    bhk: '2 BHK / 600 Sq.ft.',
    location: 'Uthiramerur, Kanchipuram',
    price: '8.40 Lac',
    image: 'https://dyimg1.realestateindia.com/prop_images/2673715/1363544_1-200x200.jpeg',
    url: '/property-detail/2bkh-residential-plot-for-sale-in-uthiramerur-kanchipuram'
  },
  {
    id: 3,
    title: 'Flats & Apartments',
    bhk: '2 BHK / 1385 Sq.ft.',
    location: 'Focal Point, Dera Bassi',
    price: '26 Lac',
    image: 'https://dynamic.realestateindia.com/prop_images/182322/1264995_1-200x200.jpeg',
    url: '/property-detail/2-0bkh-flats-apartments-for-sale-in-focal-point-dera-bassi'
  },
  {
    id: 4,
    title: 'Flats & Apartments',
    bhk: '3 BHK / 1420 Sq.ft.',
    location: 'Sector 126 Mohali',
    price: '1.25 Cr.',
    image: 'https://dynamic.realestateindia.com/prop_images/3583502/1300001_1-200x200.jpg',
    url: '/property-detail/3bkh-flats-apartments-for-sale-in-sector-126-mohali'
  },
  {
    id: 5,
    title: 'Flats & Apartments',
    bhk: '1 BHK / 750 Sq.ft.',
    location: 'Panchavati, Nashik',
    price: '20 Lac',
    image: 'https://dynamic.realestateindia.com/prop_images/93393/1069488_1-200x200.jpg',
    url: '/property-detail/1bkh-flats-apartments-for-sale-in-panchavati-nashik'
  },
  {
    id: 6,
    title: 'Flats & Apartments',
    bhk: '3 BHK / 1425 Sq.ft.',
    location: 'Sarkanda, Bilaspur',
    price: '56.50 Lac',
    image: 'https://dyimg1.realestateindia.com/prop_images/3211706/1382541_1-200x200.jpg',
    url: '/property-detail/3bkh-flats-apartments-for-sale-in-sarkanda-bilaspur'
  },
  {
    id: 7,
    title: 'Farm House',
    bhk: '2 BHK / 4 Acre',
    location: 'Malavalli, Mandya',
    price: '8 Cr.',
    image: 'https://dynamic.realestateindia.com/prop_images/3229070/1217159_1-200x200.jpg',
    url: '/property-detail/2bkh-farm-house-for-sale-in-malavalli-mandya'
  },
  {
    id: 8,
    title: 'Flats & Apartments',
    bhk: '3 BHK / 1109 Sq.ft.',
    location: 'Shaheed Path, Lucknow',
    price: '79 Lac',
    image: 'https://dynamic.realestateindia.com/prop_images/3657883/1377179_1-200x200.jpg',
    url: '/property-detail/3bkh-flats-apartments-for-sale-in-shaheed-path-lucknow'
  },
  {
    id: 9,
    title: 'Flats & Apartments',
    bhk: '6 BHK / 5500 Sq.ft.',
    location: 'Alipore, Kolkata',
    price: '15 Cr.',
    image: 'https://dyimg1.realestateindia.com/prop_images/1009064/1363461_1-200x200.jpg',
    url: '/property-detail/6bkh-flats-apartments-for-sale-in-alipore-kolkata'
  },
  {
    id: 10,
    title: 'Villa',
    bhk: '3 BHK / 1350 Sq.ft.',
    location: 'Super Corridor, Indore',
    price: '76.40 Lac',
    image: 'https://dyimg1.realestateindia.com/prop_images/3130405/1361724_1-200x200.jpg',
    url: '/property-detail/3bkh-villa-for-sale-in-super-corridor-indore'
  }
];

const propertiesForRent = [
  {
    id: 1,
    title: 'Hotel & Restaurant',
    bhk: '2 BHK / 1900 Sq.ft.',
    location: 'Jadavpur, Kolkata',
    price: '1.50 Lac',
    image: 'https://dyimg1.realestateindia.com/prop_images/1009064/1383337_1-200x200.jpg',
    url: '/property-detail/2bkh-hotel-restaurant-for-sell-in-jadavpur-kolkata'
  },
  {
    id: 2,
    title: 'Flats & Apartments',
    bhk: '5 BHK / 30000 Sq.ft.',
    location: 'Appa Junction, Hyderabad',
    price: '16.20 Lac',
    image: 'https://dyimg1.realestateindia.com/prop_images/123385/1281866_1-200x200.jpg',
    url: '/property-detail/5bkh-flats-apartments-for-sell-in-appa-junction-hyderabad'
  },
  {
    id: 3,
    title: 'Flats & Apartments',
    bhk: '1 BHK / 400 Sq.ft.',
    location: 'Kidwai Nagar, South Extension',
    price: '17,000',
    image: 'https://dyimg1.realestateindia.com/prop_images/2461556/1150799_1-200x200.jpeg',
    url: '/property-detail/1bkh-flats-apartments-for-sell-in-kidwai-nagar-south-extension-delhi'
  },
  {
    id: 4,
    title: 'Flats & Apartments',
    bhk: '1 BHK / 1000 Sq.ft.',
    location: 'Azad Nagar, Andheri West, Mumbai',
    price: '2 Lac',
    image: 'https://dyimg1.realestateindia.com/prop_images/2766896/1313281_1-200x200.jpg',
    url: '/property-detail/1bkh-flats-apartments-for-sell-in-azad-nagar-andheri-west-mumbai'
  },
  {
    id: 5,
    title: 'Flats & Apartments',
    bhk: '2 BHK / 880 Sq.ft.',
    location: 'Shakti Nagar, Jalandhar',
    price: '20,000',
    image: 'https://dyimg1.realestateindia.com/prop_images/832145/1296365_1-200x200.jpg',
    url: '/property-detail/2bkh-flats-apartments-for-sell-in-shakti-nagar-jalandhar'
  },
  {
    id: 6,
    title: 'Builder Floor',
    bhk: '2 BHK / 80 Sq. Yards',
    location: 'Block WZ Inderpuri, Delhi',
    price: '16,000',
    image: 'https://dyimg1.realestateindia.com/prop_images/1267855/783791_1-200x200.jpg',
    url: '/property-detail/2bkh-builder-floor-for-sell-in-block-wz-inderpuri-delhi'
  },
  {
    id: 7,
    title: 'Flats & Apartments',
    bhk: '2 BHK / 1200 Sq.ft.',
    location: 'Jagalur, Davanagere',
    price: '10 Lac',
    image: 'https://dynamic.realestateindia.com/prop_images/3016980/1241311_1-200x200.jpg',
    url: '/property-detail/2bkh-flats-apartments-for-sell-in-jagalur-davanagere'
  },
  {
    id: 8,
    title: 'Builder Floor',
    bhk: '3 BHK / 125 Sq. Yards',
    location: 'Vikas Puri, Delhi',
    price: '23,000',
    image: 'https://dynamic.realestateindia.com/prop_images/1799073/1258095_1-200x200.jpg',
    url: '/property-detail/3bkh-builder-floor-for-sell-in-vikas-puri-delhi'
  },
  {
    id: 9,
    title: 'Builder Floor',
    bhk: '3 BHK / 270 Sq. Yards',
    location: 'Sector 67A Gurgaon',
    price: '58,000',
    image: 'https://dynamic.realestateindia.com/prop_images/3171903/1257754_3-200x200.jpg',
    url: '/property-detail/3-0bkh-builder-floor-for-sell-in-sector-67a-gurgaon'
  },
  {
    id: 10,
    title: 'Flats & Apartments',
    bhk: '2.5 BHK / 1200 Sq.ft.',
    location: 'Sector 168 Noida',
    price: '36,000',
    image: 'https://dyimg2.realestateindia.com/prop_images/2526819/1353225_1-200x200.jpg',
    url: '/property-detail/2-5-bkh-flats-apartments-for-sell-in-sector-168-noida'
  }
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Previous property"
  >
    <ChevronLeft size={28} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Next property"
  >
    <ChevronRight size={28} />
  </button>
);

const LatestProperties = () => {
  const navigate = useNavigate();

  const handlePropertyClick = (url) => {
    navigate(url);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
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
    <section className="py-12 bg-gray-50">
      <Container>
        <div className="text-center lg:text-start mb-8">
          <GradientText>
            Latest Properties for Sale
          </GradientText>
        </div>

        {/* Property for Sale Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center lg:text-start">
            Property for Sale
          </h3>
          
          <div className="relative px-4 lg:px-8">
            <Slider {...settings}>
              {propertiesForSale.map((property) => (
                <div key={property.id} className="px-2 pb-8">
                  <div 
                    className="group cursor-pointer transform transition-all duration-300 h-full"
                    onClick={() => handlePropertyClick(property.url)}
                  >
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 hover:border-blue-200">
                      <div className="relative overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-0 right-0 bg-primary text-white text-sm px-3 py-1 font-semibold">
                          ₹ {property.price}
                        </div>
                      </div>
                      
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="block">
                          <h4 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {property.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-1">{property.bhk}</p>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-1">{property.location}</p>
                        </div>
                        
                        <div className="mt-auto">
                          <p className="text-sm text-primary font-semibold group-hover:text-primary-dark transition-colors duration-300">
                            View Details
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Property for Sell Section
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-start">
            Property for Sell
          </h3>
          
          <div className="relative px-4 lg:px-8">
            <Slider {...settings}>
              {propertiesForRent.map((property) => (
                <div key={property.id} className="px-2 pb-8">
                  <div 
                    className="group cursor-pointer transform transition-all duration-300 h-full"
                    onClick={() => handlePropertyClick(property.url)}
                  >
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 hover:border-blue-200">
                      <div className="relative overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-0 right-0 bg-primary text-white text-sm px-3 py-1 font-semibold">
                          ₹ {property.price}
                        </div>
                      </div>
                      
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="block">
                          <h4 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {property.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-1">{property.bhk}</p>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-1">{property.location}</p>
                        </div>
                        
                        <div className="mt-auto">
                          <p className="text-sm text-primary font-semibold group-hover:text-primary-dark transition-colors duration-300">
                            View Details
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default LatestProperties;