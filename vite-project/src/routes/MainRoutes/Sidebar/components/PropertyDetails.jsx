import React, { useState, useEffect, useRef } from 'react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import AmenitiesSection from './AmenitiesSection';
import FloorPlanSection from './FloorPlanSection';
import PropertiesSection from './PropertiesSection';
import AboutBuilderSection from './AboutBuilderSection';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PropertyDetails = () => {
  const [mainImage, setMainImage] = useState("https://dynamic.realestateindia.com/proj_images/project40869/proj_img-40869_1-770x400.jpg");
  const smallImages = [
    "https://dynamic.realestateindia.com/proj_images/project40869/proj_img-40869_2-770x400.jpg",
    "https://dynamic.realestateindia.com/proj_images/project40869/proj_img-40869_3-770x400.jpg",
  ];
  const hiddenImages = [
    "https://dynamic.realestateindia.com/proj_images/project40869/proj_img-40869_4-770x400.jpg",
	"https://dynamic.realestateindia.com/proj_images/project40869/proj_img-40869_5-770x400.jpg"
  ];

  const [activeTab, setActiveTab] = useState('overview');
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showAllUnits, setShowAllUnits] = useState(false);

  const projectFeatures = [
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg", label: "Property Type", value: "Builder Floor" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg", label: "Configuration", value: "2, 2.5, 3, 3.5, 4 BHK" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img3.jpg", label: "Pricing", value: "16 Lac - 11.11 Cr." },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img4.jpg", label: "Possession", value: "Dec 2026" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img5.jpg", label: "Total Units", value: "795 units" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg", label: "Total Area", value: "8.71 acres" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img9.jpg", label: "Possession Status", value: "Upcoming Projects" }
  ];

  const priceGrowthData = [
    { year: 2025, price: 0.85 },
    { year: 2026, price: 0.98 },
    { year: 2027, price: 1.10 },
    { year: 2028, price: 1.25 },
    { year: 2029, price: 1.38 },
    { year: 2030, price: 1.50 },
  ];

  const floorPlanRef = useRef(null);
  const amenitiesRef = useRef(null);
  const propertiesRef = useRef(null);
  const aboutBuilderRef = useRef(null);

  useEffect(() => {
    Fancybox.bind('[data-fancybox="showSlider"]', {
      // Your custom options
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const buyProperties = [
    {
      img: "https://dyimg2.realestateindia.com/prop_images/934690/1137569_3-200x200.jpg",
      date: "01 May, 2025",
      title: "3 BHK Flats",
      url: "https://www.realestateindia.com/property-detail/3bkh-flats-apartments-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1540-sq-ft-1-50-cr-1137569.htm",
      size: "1540 Sq.ft.",
      price: "1.50 Cr.",
      agency: {
        name: "Urban Ghar",
        url: "https://www.realestateindia.com/profile/urban-ghar-in-sector-86-gurgaon-934690/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg2.realestateindia.com/prop_images/934690/1137568_2-200x200.jpg",
      date: "01 May, 2025",
      title: "2 BHK Flats",
      url: "https://www.realestateindia.com/property-detail/2bkh-flats-apartments-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1190-sq-ft-1-16-cr-1137568.htm",
      size: "1190 Sq.ft.",
      price: "1.16 Cr.",
      agency: {
        name: "Urban Ghar",
        url: "https://www.realestateindia.com/profile/urban-ghar-in-sector-86-gurgaon-934690/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/3399159/1330206_5-200x200.jpg",
      date: "12 Jun, 2025",
      title: "2.5 BHK Builder Floors",
      url: "https://www.realestateindia.com/property-detail/2-5-bkh-builder-floor-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1150-sq-ft-1-55-cr-1330206.htm",
      size: "1150 Sq.ft. | 2 Bath(s) | Semi-Furnished | South East | 2 Balcony",
      price: "1.55 Cr.",
      agency: {
        name: "Birla Empire Real Estate",
        url: "https://www.realestateindia.com/profile/birla-empire-real-estate-in-sector-70a-gurgaon-3399159/",
        location: "Sector 79, Gurgaon"
      }
    },
    {
      img: "https://dynamic.realestateindia.com/prop_images/3399159/1330200_5-200x200.jpg",
      date: "03 Jun, 2025",
      title: "3.5 BHK Builder Floors",
      url: "https://www.realestateindia.com/property-detail/3-5-bkh-builder-floor-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1642-sq-ft-21-76-lac-1330200.htm",
      size: "1642 Sq.ft. | 3 Bath(s) | Semi-Furnished | North East | 2 Balcony",
      price: "2.18 Cr.",
      agency: {
        name: "Birla Empire Real Estate",
        url: "https://www.realestateindia.com/profile/birla-empire-real-estate-in-sector-70a-gurgaon-3399159/",
        location: "Sector 79, Gurgaon"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/1469656/1116395_3-200x200.jpg",
      date: "",
      title: "2.5 BHK Flats",
      url: "https://www.realestateindia.com/property-detail/2-5-bkh-flats-apartments-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1-48-cr-1116395.htm",
      size: "| Semi-Furnished | North | 1 Yrs",
      price: "1.48 Cr.",
      agency: {
        name: "Edge Realty",
        url: "https://www.realestateindia.com/profile/edge-realty-in-sector-113-gurgaon-1469656/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg2.realestateindia.com/prop_images/1469656/1116397_1-200x200.jpg",
      date: "13 Feb, 2025",
      title: "3.5 BHK Flats",
      url: "https://www.realestateindia.com/property-detail/3-5-bkh-flats-apartments-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1-98-cr-1116397.htm",
      size: "| Semi-Furnished | North East | 3 Yrs",
      price: "1.98 Cr.",
      agency: {
        name: "Edge Realty",
        url: "https://www.realestateindia.com/profile/edge-realty-in-sector-113-gurgaon-1469656/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg2.realestateindia.com/prop_images/2574171/1250507_2-200x200.jpg",
      date: "27 Jan, 2025",
      title: "3 BHK Flats",
      url: "https://www.realestateindia.com/property-detail/3bkh-flats-apartments-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1-45-cr-1250507.htm",
      size: "1518 Sq.ft.",
      price: "1.45 Cr.",
      agency: {
        name: "Sridevraha Properties and Developers Pvt. Ltd.",
        url: "https://www.realestateindia.com/profile/sridevraha-properties-and-developers-pvt-ltd-in-pilibhit-pilibhit-2574171/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/2574171/1250506_1-200x200.jpg",
      date: "27 Jan, 2025",
      title: "2 BHK Flats",
      url: "https://www.realestateindia.com/property-detail/2bkh-flats-apartments-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1-25-cr-1250506.htm",
      size: "1138 Sq.ft.",
      price: "1.25 Cr.",
      agency: {
        name: "Sridevraha Properties and Developers Pvt. Ltd.",
        url: "https://www.realestateindia.com/profile/sridevraha-properties-and-developers-pvt-ltd-in-pilibhit-pilibhit-2574171/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/3523320/1304434_5-200x200.jpg",
      date: "01 May, 2025",
      title: "3.5 BHK Builder Floors",
      url: "https://www.realestateindia.com/property-detail/3-5-bkh-builder-floor-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1550-sq-ft-2-10-cr-1304434.htm",
      size: "1550 Sq.ft. | Semi-Furnished | 1 Yrs",
      price: "2.10 Cr.",
      agency: {
        name: "The Heena Realty Makers",
        url: "https://www.realestateindia.com/profile/the-heena-realty-makers-in-sector-49-gurgaon-3523320/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dynamic.realestateindia.com/prop_images/3523320/1304433_1-200x200.jpg",
      date: "01 May, 2025",
      title: "2.5 BHK Builder Floors",
      url: "https://www.realestateindia.com/property-detail/2-5-bkh-builder-floor-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1200-sq-ft-1-60-cr-1304433.htm",
      size: "1200 Sq.ft.",
      price: "1.60 Cr.",
      agency: {
        name: "The Heena Realty Makers",
        url: "https://www.realestateindia.com/profile/the-heena-realty-makers-in-sector-49-gurgaon-3523320/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dyimg1.realestateindia.com/prop_images/1333/1302144_5-200x200.jpg",
      date: "23 Apr, 2025",
      title: "3 BHK Flats",
      url: "https://www.realestateindia.com/property-detail/3bkh-flats-apartments-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1-45-cr-1302144.htm",
      size: "1518 Sq.ft.",
      price: "1.45 Cr.",
      agency: {
        name: "Samar Estate",
        url: "https://www.realestateindia.com/profile/samar-estate-in-sushant-lok-phase-ii-gurgaon-1333/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    },
    {
      img: "https://dynamic.realestateindia.com/prop_images/1333/1302143_1-200x200.jpg",
      date: "23 Apr, 2025",
      title: "2 BHK Flats",
      url: "https://www.realestateindia.com/property-detail/2bkh-flats-apartments-for-sale-in-sector-79-gurgaon-in-m3m-antalya-hills-1-25-cr-1302143.htm",
      size: "1138 Sq.ft.",
      price: "1.25 Cr.",
      agency: {
        name: "Samar Estate",
        url: "https://www.realestateindia.com/profile/samar-estate-in-sushant-lok-phase-ii-gurgaon-1333/",
        location: "Sector 79, Gurgaon, Haryana"
      }
    }
  ];

  const rentProperties = [];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'price') {
      setTimeout(() => {
        pieChartRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
  };

  return (
    <div className="pdc-sec-left overflow-hidden">
		<div className="mb-[30px]">
			<div className="mb-[10px]">
				<a href={mainImage} data-fancybox="showSlider">
					<img src={mainImage} alt="M3M Antalya Hills, Gurgaon - Luxury 2/3BHK Villas" className="w-full rounded-lg cursor-pointer" />
				</a>
			</div>
			<div className="grid grid-cols-2 gap-[10px]">
                {smallImages.map((img, idx) => (
                    <a key={idx} href={img} data-fancybox="showSlider" className="relative">
						<img src={img} alt="Thumbnail" className="w-full rounded-lg cursor-pointer" />
						{idx === smallImages.length - 1 && hiddenImages.length > 0 && (
							<div className="absolute top-0 left-0 w-full h-full bg-black/50 text-white flex justify-center items-center text-center font-bold rounded-lg cursor-pointer">
								+ <br/>{hiddenImages.length} more
							</div>
						)}
					</a>
                ))}
			</div> 
			{hiddenImages.map((img, idx) => (
				<a key={`hidden-${idx}`} href={img} data-fancybox="showSlider" style={{ display: 'none' }}></a>
        	))}
		</div>

		<div className="pd-heading logoIcon">
			<div className="pd-heading-left">
				<div className="pd-logo">
					<img src="https://dynamic.realestateindia.com/proj_images/project40869/proj_logo.jpg" alt="M3M Antalya Hills"/>
				</div>
				<div className="pd-title">
					<h1 className="pd-name" title="M3M Antalya Hills">M3M Antalya Hills
						<p className="pd-location">Sector 79 Gurgaon</p>
					</h1>
				</div>
			</div>
			<div className="pd-heading-right">
				<div className="pd-price"><span className="pd-price-lbl">Price</span><i className="fa fa-inr"></i> 16 Lac <span>Onwards</span></div>
			</div>
		</div>
		<div
			className="flex items-center relative text-[12px] leading-4 text-[#666] font-sans m-0 px-2.5 py-4 pr-2"
		>
			<div className="mr-5 text-[16px] leading-5 text-[#333] font-medium font-sans m-0 p-0">
				<div className="pd-bhk">2, 2.5, 3, 3.5, 4 BHK  <span>Builder Floor</span></div>
			</div>
			<div className="pd-rera"> <span>Rera : </span> <i className="fa fa-check"></i> GGM/650/382/2022/125</div>
		</div>

		<div className="pdp-nav-sec bg-[#ececec] px-5 rounded border border-[#ccc] mb-[15px] transition-all duration-300 ease-in-out text-[#333] text-[12px] leading-[1.5em] font-sans">
			<div className="fw">
				<ul className="pdp-nav flex flex-wrap items-center gap-4 list-none p-0 m-0">
					<li className={activeTab === 'overview' ? 'active font-bold border-b-2 border-red-500' : ''}>
						<a href="#pdOverview" onClick={() => handleTabClick('overview')} className="py-2 px-3 block">Overview</a>
					</li>
					<li className={activeTab === 'sale' ? 'active font-bold border-b-2 border-red-500' : ''}>
						<a href="#pdPropertiesforSale" onClick={() => handleTabClick('sale')} className="py-2 px-3 block">Property for Sale / Rent</a>
					</li> 
					<li className={activeTab === 'price' ? 'active font-bold border-b-2 border-red-500' : ''}>
						<a href="#pdPriceRange" onClick={() => handleTabClick('price')} className="py-2 px-3 block">Price Range</a>
					</li>
					<li className={activeTab === 'floorPlan' ? 'active font-bold border-b-2 border-red-500' : ''}>
						<a href="#pdFloorPlan" onClick={() => handleTabClick('floorPlan')} className="py-2 px-3 block">Floor Plan</a>
					</li>
					<li className={activeTab === 'amenities' ? 'active font-bold border-b-2 border-red-500' : ''}>
						<a href="#pdAminities" onClick={() => handleTabClick('amenities')} className="py-2 px-3 block">Amenities</a>
					</li>
					<li className={activeTab === 'aboutBuilder' ? 'active font-bold border-b-2 border-red-500' : ''}>
						<a href="#pdAboutBuilder" onClick={() => handleTabClick('aboutBuilder')} className="py-2 px-3 block">About Builder</a>
					</li>
					<li className="relative group">
						<a href="javascript:void(0);" className="py-2 px-3 block flex items-center">More <i className="fa fa-angle-down ml-1"></i></a>
						<ul className="pdp-d-menu absolute left-0 top-full mt-1 bg-white border border-[#ccc] rounded shadow-lg hidden group-hover:block z-10 min-w-[180px]">
							<li><a href="#pdTopAdvertiser" className="block px-4 py-2 hover:bg-[#ececec]">Top Advertisers</a></li>
							<li><a href="#pdAboutBuilder" className="block px-4 py-2 hover:bg-[#ececec]">About Builder</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

		<div id="pdOverview" className="pt-5">
			<div
				className="text-[#333] text-xs leading-[6] font-sans m-0 p-0 border border-[#ddd] rounded overflow-hidden mb-5"
			>
				<div className="border-b border-gray-200 overflow-hidden">
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
						{projectFeatures.map((feature, index) => (
							<li key={index} className="flex items-center p-3">
								<div className="mr-3 flex-shrink-0">
									<img loading="lazy" decoding="async" src={feature.icon} width="27" height="27" alt={feature.label} />
								</div>
								<div>
									<p className="text-xs text-gray-500">{feature.label}</p>
									<p className="font-semibold text-sm text-gray-800">{feature.value}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center p-3 rounded bg-blue-50">
					<div className="mr-4">
						<img loading="lazy" src="https://static.realestateindia.com/rei/images/brochure_icon.jpg" width="34" height="41" alt="Brochure" />
					</div>
					<div className="flex justify-between items-center w-full">
						<div className="font-semibold">
							Download Brochure of
							<span className="block font-normal text-sm">M3M Antalya Hills</span>
						</div>
						<a href="" target="_blank" rel="noopener noreferrer" className="hover:bg-red-500 border border-primary hover:text-white rounded-lg p-2 flex items-center gap-2 text-red-500 font-bold">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="54.13 48 402 402" className="fill-current"><path d="M255.13 385.54a15 15 0 0 1-11.14-5L103.67 224.93a15 15 0 0 1 11.14-25H171V63a15 15 0 0 1 15-15h138.3a15 15 0 0 1 15 15v136.89h56.16a15 15 0 0 1 11.14 25L266.27 380.58a15 15 0 0 1-11.14 4.96Zm-106.6-155.65 106.6 118.25 106.61-118.25H324.3a15 15 0 0 1-15-15V78H201v136.89a15 15 0 0 1-15 15Z"></path><path d="M390.84 450H119.43a65.37 65.37 0 0 1-65.3-65.29v-38.17a15 15 0 0 1 30 0v38.17a35.34 35.34 0 0 0 35.3 35.29h271.41a35.33 35.33 0 0 0 35.29-35.29v-38.17a15 15 0 0 1 30 0v38.17A65.37 65.37 0 0 1 390.84 450Z"></path></svg>
							<span>Download</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<PropertiesSection refProp={propertiesRef} buyProperties={buyProperties} />

		<section className="pd-sec bsas" id="pdPriceRange">
				<div className="my-8 bg-white p-4 border-1 border-gray-300">
					<h3 className="text-lg font-semibold mb-4">Year-wise Price Growth</h3>
					<Line
						data={{
							labels: priceGrowthData.map(d => d.year),
							datasets: [
								{
									label: 'Price (Cr.)',
									data: priceGrowthData.map(d => d.price),
									borderColor: '#A44CEE',
									backgroundColor: 'rgba(164,76,238,0.1)',
									tension: 0.4,
									fill: true,
								},
							],
						}}
						options={{
							responsive: true,
							plugins: {
								legend: { display: false },
								title: { display: false },
							},
							scales: {
								y: {
									beginAtZero: true,
									ticks: {
										callback: value => `₹ ${value} Cr.`
									}
								}
							}
						}}
					/>
				</div>
		</section>

		<FloorPlanSection refProp={floorPlanRef} />
		<AboutBuilderSection refProp={aboutBuilderRef} />
		<AmenitiesSection refProp={amenitiesRef} showAllAmenities={showAllAmenities} setShowAllAmenities={setShowAllAmenities} />
    </div>
  )
}

export default PropertyDetails; 