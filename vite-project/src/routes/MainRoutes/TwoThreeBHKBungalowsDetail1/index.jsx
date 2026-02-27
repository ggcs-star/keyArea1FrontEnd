import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../../../components/Layout';
import { GradientText } from '../../../components/Button';
import { useParams, Link } from 'react-router-dom';
import { projects } from './twothreebhkbungalowsdetail';
import InquirySidebarForm from '../../../components/InquirySidebarForm';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropertyImageSlider from './components/PropertyImageSlider';
import Overview from './components/Overview';
import PropertiesSection from './components/PropertiesSection';
import PropertyNavTabs from './components/PropertyNavTabs';
import PriceRange from './components/PriceRange';
import FloorPlanSection from './components/FloorPlanSection';
import AboutBuilderSection from './components/AboutBuilderSection';
import AmenitiesSection from './components/AmenitiesSection';
import ImageGallery from './components/ImageGallery';
import LocationMap from './components/LocationMap';
import SimilarProjects from './components/SimilarProjects';
import NameArea from './components/NameArea';
import BookingStatusSection from './components/BookingStatusSection';
import UnitBookingStatusSection from './components/UnitBookingStatusSection';
import BlockBookingDetailsTable from './components/BlockBookingDetailsTable';
import PromoterDetails from './components/PromoterDetails';

const agents = [
  {
    name: 'Urban Ghar',
    location: 'Sector 86 Gurgaon',
    rating: 4.2,
    image: 'https://dynamic.realestateindia.com/comp_logo/934690_13932-100x100.jpeg',
    contact: '#',
  },
  {
    name: 'TRUEE VALUER ASSOCIATE',
    location: 'Sohna Road, Gurgaon',
    rating: 4.1,
    image: '',
    contact: '#',
  },
  {
    name: 'Kuntal Estate',
    location: 'Sector 47 Gurgaon',
    rating: 4.4,
    image: '',
    contact: '#',
  },
];

const priceTable = [
  { unit: '2 BHK', area: '1138 Sq.ft. (Super)', price: '1.14 Cr.' },
  { unit: '2.5 BHK', area: '1200 Sq.ft. (Built Up)', price: '1.60 Cr.' },
  { unit: '3 BHK', area: '1518 Sq.ft. (Super)', price: '1.38 Cr.' },
  { unit: '3.5 BHK', area: '1550 Sq.ft. (Built Up)', price: '2.10 Cr.' },
  { unit: '4 BHK', area: '1150 Sq.ft. (Super)', price: '1.50 Cr.' },
];

const floorPlans = [
  {
    label: '2 BHK 1138 Sq.ft.',
    image: 'https://dynamic.realestateindia.com/proj_images/project40869/40869-124426-floor-plan-350x350.jpg',
  },
];

const amenities = [
  { name: 'CCTV Camera', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/cctv-camera.jpg' },
  { name: 'Gymnasium', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/gymnasium.jpg' },
  { name: 'Jogging and Strolling Tracks', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/jogging-strolling-tracks.jpg' },
  { name: 'Kids Play Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/kids-play-area.jpg' },
  { name: 'Meditation Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/meditation-area.jpg' },
  { name: 'Sports Facility', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/sports-facility.jpg' },
];

const navTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'partners', label: 'Partners' },
  { id: 'pricerange', label: 'Price Table' },
  { id: 'floorplan', label: 'Floor Plan' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'inquiry', label: 'Inquiry Form' },
];

const priceGrowthData = [
  { year: 2025, price: 0.85 },
  { year: 2026, price: 0.94 },
  { year: 2027, price: 1.03 },
  { year: 2028, price: 1.13 },
  { year: 2029, price: 1.24 },
  { year: 2030, price: 1.37 },
];

const galleryImages = [
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-1.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-1-350x350.jpg',
    alt: '',
    height: 196,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-2.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-2-350x350.jpg',
    alt: '',
    height: 193,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-3.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-3-350x350.jpg',
    alt: '',
    height: 189,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-4.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-4-350x350.jpg',
    alt: '',
    height: 194,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-5.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-5-350x350.jpg',
    alt: '',
    height: 196,
    lazy: true,
    thumbPlaceholder: 'https://static.realestateindia.com/images/no-image-property.jpg',
    hidden: true,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-6.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-6-350x350.jpg',
    alt: '',
    height: 196,
    lazy: true,
    thumbPlaceholder: 'https://static.realestateindia.com/images/no-image-property.jpg',
    hidden: true,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-7.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-7-350x350.jpg',
    alt: '',
    height: 196,
    lazy: true,
    thumbPlaceholder: 'https://static.realestateindia.com/images/no-image-property.jpg',
    hidden: true,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-8.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-8-350x350.jpg',
    alt: '',
    height: 196,
    lazy: true,
    thumbPlaceholder: 'https://static.realestateindia.com/images/no-image-property.jpg',
    hidden: true,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/loc_img_1.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/loc_img_1-350x350.jpg',
    alt: '',
    height: 196,
    lazy: true,
    thumbPlaceholder: 'https://static.realestateindia.com/images/no-image-property.jpg',
    hidden: true,
  },
];

const localityData = {
  name: 'L3',
  growth: '10%',
  growthPeriod: 'Last 1 Year',
  avgRate: '₹9,00,000',
}

const TwoThreeBHKBungalowsDetail1 = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);
  const project = projects.find(p => String(p.id) === String(id));
  if (!project) {
    return <Container><div className="py-16 text-center text-2xl text-red-500">Property not found.</div></Container>;
  }
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [selectedTab, setSelectedTab] = useState('overview');
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const mainSliderRef = React.useRef();
  const thumbSliderRef = React.useRef();
  const overviewRef = useRef(null);
  const priceRangeRef = useRef(null);

  const mainSettings = {
    asNavFor: thumbSliderRef.current,
    ref: mainSliderRef,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: true,
    dots: true,
    beforeChange: (oldIndex, newIndex) => setMainImgIdx(newIndex),
  };

  const thumbSettings = {
    asNavFor: mainSliderRef.current,
    ref: thumbSliderRef,
    slidesToShow: Math.min(images.length, 6),
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    centerMode: images.length > 6,
    beforeChange: (oldIndex, newIndex) => setMainImgIdx(newIndex),
  };

  const buyProperties = [
    {
      img: "https://dyimg2.realestateindia.com/prop_images/934690/1137569_3-200x200.jpg",
      date: "01 May, 2025",
      title: "3 BHK Flats",
      url: "",
      size: "1540 Sq.ft.",
      price: "1.50 Cr.",
      agency: {
        name: "Urban Ghar",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg2.realestateindia.com/prop_images/934690/1137568_2-200x200.jpg",
      date: "01 May, 2025",
      title: "2 BHK Flats",
      url: "",
      size: "1190 Sq.ft.",
      price: "1.16 Cr.",
      agency: {
        name: "Urban Ghar",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/3399159/1330206_5-200x200.jpg",
      date: "12 Jun, 2025",
      title: "2.5 BHK Builder Floors",
      url: "",
      size: "1150 Sq.ft. | 2 Bath(s) | Semi-Furnished | South East | 2 Balcony",
      price: "1.55 Cr.",
      agency: {
        name: "Birla Empire Real Estate",
        url: "",
        location: "Sector 79, Gurgaon"
      }
    },
    {
      img: "https://dynamic.realestateindia.com/prop_images/3399159/1330200_5-200x200.jpg",
      date: "03 Jun, 2025",
      title: "3.5 BHK Builder Floors",
      url: "",
      size: "1642 Sq.ft. | 3 Bath(s) | Semi-Furnished | North East | 2 Balcony",
      price: "2.18 Cr.",
      agency: {
        name: "Birla Empire Real Estate",
        url: "",
        location: "Sector 79, Gurgaon"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/1469656/1116395_3-200x200.jpg",
      date: "",
      title: "2.5 BHK Flats",
      url: "",
      size: "| Semi-Furnished | North | 1 Yrs",
      price: "1.48 Cr.",
      agency: {
        name: "Edge Realty",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg2.realestateindia.com/prop_images/1469656/1116397_1-200x200.jpg",
      date: "13 Feb, 2025",
      title: "3.5 BHK Flats",
      url: "",
      size: "| Semi-Furnished | North East | 3 Yrs",
      price: "1.98 Cr.",
      agency: {
        name: "Edge Realty",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg2.realestateindia.com/prop_images/2574171/1250507_2-200x200.jpg",
      date: "27 Jan, 2025",
      title: "3 BHK Flats",
      url: "",
      size: "1518 Sq.ft.",
      price: "1.45 Cr.",
      agency: {
        name: "Sridevraha Properties and Developers Pvt. Ltd.",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/2574171/1250506_1-200x200.jpg",
      date: "27 Jan, 2025",
      title: "2 BHK Flats",
      url: "",
      size: "1138 Sq.ft.",
      price: "1.25 Cr.",
      agency: {
        name: "Sridevraha Properties and Developers Pvt. Ltd.",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/3523320/1304434_5-200x200.jpg",
      date: "01 May, 2025",
      title: "3.5 BHK Builder Floors",
      url: "",
      size: "1550 Sq.ft. | Semi-Furnished | 1 Yrs",
      price: "2.10 Cr.",
      agency: {
        name: "The Heena Realty Makers",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dynamic.realestateindia.com/prop_images/3523320/1304433_1-200x200.jpg",
      date: "01 May, 2025",
      title: "2.5 BHK Builder Floors",
      url: "",
      size: "1200 Sq.ft.",
      price: "1.60 Cr.",
      agency: {
        name: "The Heena Realty Makers",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/1333/1302144_5-200x200.jpg",
      date: "23 Apr, 2025",
      title: "3 BHK Flats",
      url: "",
      size: "1518 Sq.ft.",
      price: "1.45 Cr.",
      agency: {
        name: "Samar Estate",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dynamic.realestateindia.com/prop_images/1333/1302143_1-200x200.jpg",
      date: "23 Apr, 2025",
      title: "2 BHK Flats",
      url: "",
      size: "1138 Sq.ft.",
      price: "1.25 Cr.",
      agency: {
        name: "Samar Estate",
        url: "",
        location: "Sector 79, Gurgaon, Haryana"
      }
    }
  ];

  const sellProperties = [];

  const floorPlanRef = useRef(null);
  const amenitiesRef = useRef(null);
  const propertiesRef = useRef(null);
  const aboutBuilderRef = useRef(null);
  const promoterDetailsRef = useRef(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === 'overview') {
      setTimeout(() => {
        overviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    if (tab === 'price') {
      setTimeout(() => {
        document.getElementById('pdPriceRange')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    if (tab === 'floorPlan') {
      setTimeout(() => {
        floorPlanRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    if (tab === 'amenities') {
      setTimeout(() => {
        amenitiesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    if (tab === 'sale') {
      setTimeout(() => {
        propertiesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    if (tab === 'aboutBuilder') {
      setTimeout(() => {
        aboutBuilderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    if (tab === 'promoterDetails') {
      setTimeout(() => {
        promoterDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showAllUnits, setShowAllUnits] = useState(false);

  return (
    <section className="bg-white">
      <Container>
        <div>
          <nav className="py-2 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <ol className="list-reset flex">
              <li>
                <Link to="/" className="hover:underline text-red-500">Home</Link>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link to="/two-three-bhk-bungalows-detail/1" className="hover:underline text-red-500">2-3 BHK Bungalows Properties</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-700 font-semibold" aria-current="page">
                {project ? project.name : 'Detail'}
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:items-start">
          {/* Main Content: Gallery and Name Section */}
          <div className="md:w-2/3">
            <PropertyImageSlider images={images} imageRera={project.imageRera} />
            <NameArea project={project} />

            {/* Project Name, Location, Price, Status, and Details below images */}
            {/* <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-800">{project.name}</h1>
              <p className="text-gray-500">{project.location}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-lg font-semibold text-red-500">₹ {project.price}</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-semibold">{project.status}</span>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-gray-700 font-medium">{project.bhk} <span className="text-gray-400">{project.type}</span></span>
                <span className="text-gray-700 font-medium">RERA: <a href={project.reraUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{project.rera}</a></span>
                <span className="text-gray-700">Possession: {project.possession}</span>
                <span className="text-gray-700">Total Units: {project.totalUnits}</span>
                <span className="text-gray-700">Total Area: {project.totalArea}</span>
              </div>
            </div> */}

            <PropertyNavTabs activeTab={selectedTab} handleTabClick={setSelectedTab} />

            <Overview project={project} refProp={overviewRef} />
            <PropertiesSection
              propertyName={project.name}
              buyProperties={project.buyProperties && project.buyProperties.length > 0 ? project.buyProperties : buyProperties}
              sellProperties={project.sellProperties && project.sellProperties.length > 0 ? project.sellProperties : sellProperties}
              refProp={propertiesRef}
            />
            <AboutBuilderSection refProp={aboutBuilderRef} project={project} />
            <LocationMap projectName={project.name} location={project.location} />
            <AmenitiesSection refProp={amenitiesRef} project={project} showAllAmenities={showAllAmenities} setShowAllAmenities={setShowAllAmenities} />
            {/* Navigation Tabs */}
            <PriceRange refProp={priceRangeRef} priceGrowthData={priceGrowthData} localityData={localityData} />
            <FloorPlanSection refProp={floorPlanRef} project={project} />

            {/* <div className="mt-8">
              {selectedTab === 'overview' && (
                <div>
                  <GradientText>Overview</GradientText>
                  <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li><strong>Property Type:</strong> {project.type}</li>
                    <li><strong>Configuration:</strong> {project.bhk}</li>
                    <li><strong>Pricing:</strong> {project.price}</li>
                    <li><strong>Possession:</strong> {project.possession}</li>
                    <li><strong>Total Units:</strong> {project.totalUnits}</li>
                    <li><strong>Total Area:</strong> {project.totalArea}</li>
                    <li><strong>Status:</strong> {project.status}</li>
                  </ul>
                </div>
              )}
              {selectedTab === 'agents' && (
                <div>
                  <GradientText>Agents</GradientText>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {agents.map(agent => (
                      <div key={agent.name} className="bg-white rounded-lg shadow p-4 flex flex-col items-center border border-gray-100">
                        <img src={agent.image || 'https://via.placeholder.com/75'} alt={agent.name} className="w-20 h-20 rounded-full object-cover mb-2" />
                        <div className="font-semibold text-lg text-gray-800">{agent.name}</div>
                        <div className="text-gray-500 text-sm mb-1">{agent.location}</div>
                        <div className="text-yellow-500 mb-2">{'★'.repeat(Math.floor(agent.rating))}<span className="text-gray-400">{'★'.repeat(5 - Math.floor(agent.rating))}</span> <span className="text-xs text-gray-600">{agent.rating}/5</span></div>
                        <a href={agent.contact} className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">View Contact</a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedTab === 'pricerange' && (
                <div>
                  <GradientText>Price Table</GradientText>
                  <div className="overflow-x-auto mt-6">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left">Unit Type</th>
                          <th className="px-4 py-2 text-left">Area</th>
                          <th className="px-4 py-2 text-left">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {priceTable.map((row, idx) => (
                          <tr key={idx} className="border-t">
                            <td className="px-4 py-2">{row.unit}</td>
                            <td className="px-4 py-2">{row.area}</td>
                            <td className="px-4 py-2">{row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {selectedTab === 'floorplan' && (
                <div>
                  <GradientText>Floor Plan</GradientText>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {floorPlans.map((plan, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <img src={plan.image} alt={plan.label} className="w-64 h-40 object-cover rounded shadow mb-2" />
                        <div className="text-gray-700 font-medium">{plan.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedTab === 'amenities' && (
                <div>
                  <GradientText>Amenities</GradientText>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {amenities.map((am, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <img src={am.image} alt={am.name} className="w-16 h-16 object-cover rounded mb-2" />
                        <div className="text-gray-700 text-center text-sm font-medium">{am.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedTab === 'inquiry' && (
                <div>
                  <GradientText>Inquiry Form</GradientText>
                  <form className="max-w-lg mx-auto mt-6 bg-gray-50 p-6 rounded-lg shadow">
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-1">Name</label>
                      <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-1">Email</label>
                      <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-1">Mobile</label>
                      <input type="tel" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter your mobile number" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-1">Message</label>
                      <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows={3} placeholder="I am interested in this property."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Submit Inquiry</button>
                  </form>
                </div>
              )}
            </div> */}
            <ImageGallery project={project} images={galleryImages} />
            <PromoterDetails project={project} refProp={promoterDetailsRef} />
          </div>

          {/* Sidebar with Inquiry Form only */}
          <div className="md:w-1/3 flex flex-col gap-4">
            <aside className="sidebar-sticky" style={{ position: 'sticky', top: '80px' }}>
              <div className="rounded overflow-hidden mb-4">
                <video
                  src={project.reel} // Replace with actual path
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-[600px] rounded-lg shadow"
                />
              </div>
              <section className="pd-inquiry">
                <h2 className="st-heading">{project.name} <span>Get Best Offer on this Project</span></h2>
                <InquirySidebarForm />
              </section>
            </aside>
          </div>
        </div>
        <BookingStatusSection project={project} />
        {/* <UnitBookingStatusSection bookings={project} /> */}
        {/* <BlockBookingDetailsTable
          bookings={project.blockBookingDetails}
        /> */}

        <SimilarProjects />
      </Container>
    </section>
  );
};

export default TwoThreeBHKBungalowsDetail1; 