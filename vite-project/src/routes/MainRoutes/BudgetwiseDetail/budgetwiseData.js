import devkunj from '../../../assets/reels/Realestate/devkunj.mp4'
import reel2 from '../../../assets/reels/Realestate/reel2.mp4'
import reel3 from '../../../assets/reels/Realestate/reel3.mp4'
import reel4 from '../../../assets/reels/Realestate/reel4.mp4'
import reel5 from '../../../assets/reels/Realestate/reel5.mp4'
import reel6 from '../../../assets/reels/Realestate/reel6.mp4'
import reel7 from '../../../assets/reels/Realestate/reel7.mp4'

import rera from '../../../assets/Rera.png'
import approved from '../../../assets/icons/approved.svg'
import maximize from '../../../assets/icons/maximize.svg'

import devkunj0 from '../../../assets/properties/devkunj/0.jpg'
import devkunj1 from '../../../assets/properties/devkunj/1.jpg'
import devkunj2 from '../../../assets/properties/devkunj/2.jpg'
import devkunj3 from '../../../assets/properties/devkunj/3.jpg'
import devkunj4 from '../../../assets/properties/devkunj/4.jpg'
import devkunj5 from '../../../assets/properties/devkunj/5.jpg'
import devkunj6 from '../../../assets/properties/devkunj/6.jpg'
import devkunj7 from '../../../assets/properties/devkunj/7.jpg'
import devkunj8 from '../../../assets/properties/devkunj/8.jpg'
import devkunj9 from '../../../assets/properties/devkunj/9.jpg'
import devkunj10 from '../../../assets/properties/devkunj/10.jpg'
import devkunj11 from '../../../assets/properties/devkunj/11.jpg'
import devkunj12 from '../../../assets/properties/devkunj/12.jpg'
import devkunj13 from '../../../assets/properties/devkunj/13.png'
import devkunj14 from '../../../assets/properties/devkunj/14.png'
import devkunj15 from '../../../assets/properties/devkunj/15.png'
import devkunj16 from '../../../assets/properties/devkunj/16.png'
import devkunj17 from '../../../assets/properties/devkunj/17.png'

import parking from '../../../assets/icons/parking.svg'
import landscape from '../../../assets/icons/landscape.svg'
import elevator from '../../../assets/icons/elevator.svg'
import sprinkler from '../../../assets/icons/sprinkler.svg'
import fitness from '../../../assets/icons/fitness.svg'
import security from '../../../assets/icons/security.svg'
import protection from '../../../assets/icons/protection.svg'
import waterconservator from '../../../assets/icons/water-conservator.svg'
import watersupply from '../../../assets/icons/water-supply.svg'
import hall from '../../../assets/icons/hall.svg'
import fireextinguisher from '../../../assets/icons/fire-extinguisher.svg'
import road from '../../../assets/icons/road.svg'
import oldman from '../../../assets/icons/old-man.svg'
import dice from '../../../assets/icons/dice.svg'
import sewage from '../../../assets/icons/sewage.svg'
import club from '../../../assets/icons/club.svg'

const devkunjImages = [
  devkunj13, devkunj14, devkunj15, devkunj16, devkunj17
];

const DEFAULT_FLOOR_PLANS = [
  {
    imgThumb: 'https://dynamic.realestateindia.com/proj_images/project40869/40869-124426-floor-plan-350x350.jpg',
    imgFull: 'https://dynamic.realestateindia.com/proj_images/project40869/40869-124426-floor-plan-770x400.jpg',
    title: '2 BHK 1138 Sq.ft.'
  }
];

const DEFAULT_GALLERY_IMAGES = [
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-1.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-1-350x350.jpg',
    alt: 'Property Gallery Image 1',
    height: 196,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-2.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-2-350x350.jpg',
    alt: 'Property Gallery Image 2',
    height: 193,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-3.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-3-350x350.jpg',
    alt: 'Property Gallery Image 3',
    height: 189,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-4.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-4-350x350.jpg',
    alt: 'Property Gallery Image 4',
    height: 194,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-5.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-5-350x350.jpg',
    alt: 'Property Gallery Image 5',
    height: 196,
    lazy: true,
    thumbPlaceholder: 'https://static.realestateindia.com/images/no-image-property.jpg',
    hidden: true,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-6.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-6-350x350.jpg',
    alt: 'Property Gallery Image 6',
    height: 196,
    lazy: true,
    thumbPlaceholder: 'https://static.realestateindia.com/images/no-image-property.jpg',
    hidden: true,
  }
];

const DEFAULT_AMENITIES = [
  { name: 'CCTV Camera', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/cctv-camera.jpg' },
  { name: 'Gymnasium', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/gymnasium.jpg' },
  { name: 'Jogging and Strolling Tracks', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/jogging-strolling-tracks.jpg' },
  { name: 'Kids Play Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/kids-play-area.jpg' },
  { name: 'Meditation Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/meditation-area.jpg' },
  { name: 'Sports Facility', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/sports-facility.jpg' },
];

const DEFAULT_ABOUT_BUILDER = `One of the most reputable multinational real estate companies, M3M has worked in this industry for more than a decade. When it comes to successfully delivering high-quality real estate projects in a variety of locations across the nation, the Group has an excellent track record. Residential, commercial, IT/SEZ, educational, and entertainment areas make up the majority of its projects. {propertyname} offers fully developed projects like {propertyname} in Sector 79, Gurgaon, which are benchmarks in the Indian residential real estate market.

Highlights

Help yourself with the amenities you deserve

It is offered for sale in a variety of layouts, including a low-rise apartment with two or three bedrooms and ultramodern, opulent amenities for everyone.

Location Advantages

- Educational Institutions like L.S. Convent School, Navyug Little Pride, UCSKM Public School, Ryan International School, The Plenum School, Jai Bharti Sr. Secondary School, Matri Kiran, etc. are nearby.
- Easy and smooth connectivity from NH-8, Southern Peripheral Road, Dwarka Expressway, KMP Expressway and IGI Airport.
- Surrounded by the Aravalli foothills.
- Next to huge commercial hubs (Sector-74A and 75A, Gurugram).
- 30 minutes from IGI Airport.
- Upcoming ISBT is nearby (Kherki Daula).`;

const DEFAULT_PROJECT_FEATURES = [
  { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg", label: "Property Type", value: "Builder Floor" },
  { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg", label: "Configuration", value: "2, 2.5, 3, 3.5, 4 BHK" },
  { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img3.jpg", label: "Pricing", value: "16 Lac - 11.11 Cr." },
  { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img4.jpg", label: "Possession", value: "Dec 2026" },
  { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img5.jpg", label: "Total Units", value: "795 units" },
  { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg", label: "Total Area", value: "8.71 acres" },
  { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img9.jpg", label: "Possession Status", value: "Upcoming Projects" }
];

const demoImages = [
  'https://dynamic.realestateindia.com/proj_images/project40869/proj_img-40869_1-200x200.jpg',
  'https://dynamic.realestateindia.com/proj_images/project40869/projGal-1-350x350.jpg',
  'https://dynamic.realestateindia.com/proj_images/project40869/projGal-2-350x350.jpg',
  'https://dynamic.realestateindia.com/proj_images/project40869/projGal-3-350x350.jpg',
  'https://dynamic.realestateindia.com/proj_images/project40869/projGal-4-350x350.jpg',
  'https://dynamic.realestateindia.com/proj_images/project40869/projGal-5-350x350.jpg',
  'https://dynamic.realestateindia.com/proj_images/project40869/projGal-6-350x350.jpg',
  'https://dynamic.realestateindia.com/proj_images/project40869/projGal-7-350x350.jpg',
  'https://dynamic.realestateindia.com/proj_images/project40869/projGal-8-350x350.jpg'
];

export const projects = [
  {
    id: 1,
    name: 'Devkunj 80',
    location: 'Vaishnodevi Circle, Ahmedabad',
    type: '3 BHK Builder Floors',
    area: '2430 Sq.ft.',
    price: '80 Lac - 1 Cr.',
    image: devkunj3,
    imageRera: rera,
    projectId: '1XPw5haY73CG9ywdRRBC3d-pzlOfbFRp1',
    founderDetails: 'Devkunj Corporation',
    status: 'Upcoming Projects',
    url: '/buy/devkunj-80',
    reel: devkunj,
    brochure: 'https://drive.google.com/file/d/1XPw5haY73CG9ywdRRBC3d-pzlOfbFRp1/view',
    images: devkunjImages,
    buyProperties: [
      {
        img: devkunj3,
        title: '3 BHK Flats',
        size: '2430 Sq. ft.',
        price: '80 Lac',
        date: 'Dec 2026',
        url: '/buy/devkunj-80/unit-1',
        agency: {
          name: 'Devkunj Realty',
          location: 'Vaishnodevi Circle, Ahmedabad',
          url: '/agency/devkunj-realty'
        }
      },
    ],
    sellProperties: [

    ],
    floorPlans: [
      {
        imgThumb: devkunj6,
        imgFull: devkunj6,
        title: 'Layout Plan'
      },
      {
        imgThumb: devkunj7,
        imgFull: devkunj7,
        title: 'Parking Layout Plan'
      },
      {
        imgThumb: devkunj8,
        imgFull: devkunj8,
        title: 'Floorwise Plan'
      },
      {
        imgThumb: devkunj9,
        imgFull: devkunj9,
        title: 'Ground Floor Plan & Terrace Plan'
      }
    ],
    galleryImages: [
      {
        full: devkunj13,
        thumb: devkunj13,
        alt: 'Devkunj 80 - Exterior View',
        height: 196,
      },
      {
        full: devkunj14,
        thumb: devkunj14,
        alt: 'Devkunj 80 - Interior View',
        height: 193,
      },
      {
        full: devkunj15,
        thumb: devkunj15,
        alt: 'Devkunj 80 - Amenities',
        height: 189,
      },
      {
        full: devkunj16,
        thumb: devkunj16,
        alt: 'Devkunj 80 - Layout',
        height: 194,
      },
      {
        full: devkunj17,
        thumb: devkunj17,
        alt: 'Devkunj 80 - Layout',
        height: 194,
      },
    ],
    amenities: [
      { name: 'Lift', image: elevator },
      { name: 'Landscaping & Tree', image: landscape },
      { name: 'Water Conservation', image: waterconservator },
      { name: 'Fire Fighting System', image: sprinkler },
      { name: 'Gymnasium', image: fitness },
      { name: '24x7 Water Supply', image: watersupply },
      { name: 'Community Hall', image: hall },
      { name: 'Senior Citizen Siteout', image: oldman },
      { name: 'Indoor Games', image: dice },
      { name: '24x7 Security', image: protection },
      { name: 'Internal Roads & Footpaths', image: road },
      { name: 'Sewage Treatment', image: sewage },
      { name: 'Club House', image: club },
    ],
    aboutBuilder: `{propertyname} is a premium residential project located in the heart of Vaishnodevi Circle, Ahmedabad. This thoughtfully designed development offers modern 3 BHK builder floors that combine contemporary architecture with traditional values. The project is strategically positioned to provide excellent connectivity while maintaining a peaceful residential environment.

Project Highlights

Premium Location & Connectivity

{propertyname} enjoys excellent connectivity to major parts of Ahmedabad, making it an ideal choice for families and professionals alike.

Modern Amenities & Features

- 24/7 Security with CCTV surveillance
- Dedicated parking spaces for each unit
- Beautiful landscaped garden areas
- Power backup for uninterrupted living
- High-speed elevator access
- Modern architectural design with quality finishes

Location Advantages

- Close proximity to major educational institutions and schools
- Easy access to shopping centers and commercial hubs
- Well-connected to public transportation
- Near to healthcare facilities and hospitals
- Surrounded by established residential neighborhoods
- Quick access to major highways and arterial roads

Investment Opportunity

{propertyname} represents an excellent investment opportunity in Ahmedabad's growing real estate market, offering both quality living and potential for appreciation.`,
    projectFeatures: [
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg", label: "Property Type", value: "3 BHK Builder Floors" },
      { icon: maximize, label: "Carpet Area", value: "110.49 Sq. Mts." },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg", label: "Configuration", value: "3 BHK" },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img3.jpg", label: "Pricing", value: "80 Lac - 1 Cr." },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img4.jpg", label: "Possession Date", value: "Dec 2025" },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img5.jpg", label: "Total Units", value: "80 units" },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg", label: "Project Area", value: "2430 Sq.ft." },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img9.jpg", label: "Possession Status", value: "Upcoming Projects" },
      { icon: approved, label: "Rera Id", value: "RN236AA10136/211022" }
    ],

    unitBookingStatus: {
      submittedOn: '01-07-2025',
      unitsOfA: 70,
      unitsOfB: 40,
    },
    blockBookingDetails: [
      {
        "srNo": 1,
        "block": "A",
        "unitNumber": 101,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 2,
        "block": "A",
        "unitNumber": 102,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 3,
        "block": "A",
        "unitNumber": 103,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 4,
        "block": "A",
        "unitNumber": 104,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 5,
        "block": "A",
        "unitNumber": 201,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 6,
        "block": "A",
        "unitNumber": 202,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 7,
        "block": "A",
        "unitNumber": 203,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 8,
        "block": "A",
        "unitNumber": 204,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 9,
        "block": "A",
        "unitNumber": 301,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 10,
        "block": "A",
        "unitNumber": 302,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 11,
        "block": "A",
        "unitNumber": 303,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 12,
        "block": "A",
        "unitNumber": 304,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 13,
        "block": "A",
        "unitNumber": 401,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 14,
        "block": "A",
        "unitNumber": 402,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 15,
        "block": "A",
        "unitNumber": 403,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 16,
        "block": "A",
        "unitNumber": 404,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "16-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 17,
        "block": "A",
        "unitNumber": 501,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 18,
        "block": "A",
        "unitNumber": 502,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 19,
        "block": "A",
        "unitNumber": 503,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 20,
        "block": "A",
        "unitNumber": 504,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "20-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 21,
        "block": "A",
        "unitNumber": 601,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 22,
        "block": "A",
        "unitNumber": 602,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 23,
        "block": "A",
        "unitNumber": 603,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 24,
        "block": "A",
        "unitNumber": 604,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "24-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 25,
        "block": "A",
        "unitNumber": 701,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 26,
        "block": "A",
        "unitNumber": 702,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 27,
        "block": "A",
        "unitNumber": 703,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 28,
        "block": "A",
        "unitNumber": 704,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "28-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 29,
        "block": "A",
        "unitNumber": 801,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 30,
        "block": "A",
        "unitNumber": 802,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 31,
        "block": "A",
        "unitNumber": 803,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 32,
        "block": "A",
        "unitNumber": 804,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 33,
        "block": "A",
        "unitNumber": 901,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 34,
        "block": "A",
        "unitNumber": 902,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 35,
        "block": "A",
        "unitNumber": 903,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 36,
        "block": "A",
        "unitNumber": 904,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 37,
        "block": "A",
        "unitNumber": 1001,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 38,
        "block": "A",
        "unitNumber": 1002,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 39,
        "block": "A",
        "unitNumber": 1003,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 40,
        "block": "A",
        "unitNumber": 1004,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 41,
        "block": "B",
        "unitNumber": 101,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 42,
        "block": "B",
        "unitNumber": 102,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 43,
        "block": "B",
        "unitNumber": 103,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 44,
        "block": "B",
        "unitNumber": 104,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 45,
        "block": "B",
        "unitNumber": 201,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 46,
        "block": "B",
        "unitNumber": 202,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 47,
        "block": "B",
        "unitNumber": 203,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 48,
        "block": "B",
        "unitNumber": 204,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 49,
        "block": "B",
        "unitNumber": 301,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 50,
        "block": "B",
        "unitNumber": 302,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 51,
        "block": "B",
        "unitNumber": 303,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 52,
        "block": "B",
        "unitNumber": 304,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 53,
        "block": "B",
        "unitNumber": 401,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 54,
        "block": "B",
        "unitNumber": 402,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 55,
        "block": "B",
        "unitNumber": 403,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 56,
        "block": "B",
        "unitNumber": 404,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "16-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 57,
        "block": "B",
        "unitNumber": 501,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 58,
        "block": "B",
        "unitNumber": 502,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 59,
        "block": "B",
        "unitNumber": 503,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 60,
        "block": "B",
        "unitNumber": 504,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "20-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 61,
        "block": "B",
        "unitNumber": 601,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 62,
        "block": "B",
        "unitNumber": 602,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 63,
        "block": "B",
        "unitNumber": 603,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 64,
        "block": "B",
        "unitNumber": 604,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "24-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 65,
        "block": "B",
        "unitNumber": 701,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 66,
        "block": "B",
        "unitNumber": 702,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 67,
        "block": "B",
        "unitNumber": 703,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 68,
        "block": "B",
        "unitNumber": 704,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "28-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 69,
        "block": "B",
        "unitNumber": 801,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 70,
        "block": "B",
        "unitNumber": 802,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 71,
        "block": "B",
        "unitNumber": 803,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 72,
        "block": "B",
        "unitNumber": 804,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 73,
        "block": "B",
        "unitNumber": 901,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 74,
        "block": "B",
        "unitNumber": 902,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 75,
        "block": "B",
        "unitNumber": 903,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 76,
        "block": "B",
        "unitNumber": 904,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 77,
        "block": "B",
        "unitNumber": 1001,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 78,
        "block": "B",
        "unitNumber": 1002,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 79,
        "block": "B",
        "unitNumber": 1003,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 80,
        "block": "B",
        "unitNumber": 1004,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      }
    ],
    localityData: {
      name: 'Vaishno Devi Circle',
      growth: '4.30%',
      growthPeriod: 'Last 1 Year',
      avgRate: '₹5.2 K/sq.ft'
    },
promoterDetails: {
  name: "Devkunj Corporation",
  registrationNo: "HRERA/GJ/AHM/1234/2025",
  contact: "+91 9876543210",
  about: "Devkunj 80 is a premium residential project located in the heart of Vaishnodevi Circle, Ahmedabad. This thoughtfully designed development offers modern 3 BHK builder floors that combine contemporary architecture with traditional values. The project is strategically positioned to provide excellent connectivity while maintaining a peaceful residential environment.",
  highlights: [
    "Premium Location & Connectivity",
    "Modern 3 BHK Builder Floors",
    "Strategic Location at Vaishnodevi Circle",
    "Contemporary Architecture"
  ],
  amenities: [
    "24/7 Security with CCTV surveillance",
    "Dedicated parking spaces for each unit",
    "Beautiful landscaped garden areas",
    "Power backup for uninterrupted living",
    "High-speed elevator access",
    "Modern architectural design with quality finishes"
  ],
  locationAdvantages: [
    "Close proximity to major educational institutions and schools",
    "Easy access to shopping centers and commercial hubs",
    "Well-connected to public transportation",
    "Near to healthcare facilities and hospitals",
    "Surrounded by established residential neighborhoods",
    "Quick access to major highways and arterial roads"
  ],
  investmentNote: "Devkunj 80 represents an excellent investment opportunity in Ahmedabad's growing real estate market, offering both quality living and potential for appreciation."
}

  },
{
  id: 2,
  name: "Atharva Bungalows",
  location: "Not Specified (from layout, appears residential plotted development)",
  
    type: '3 BHK Builder Floors',
    area: '2430 Sq.ft.',
    price: '80 Lac - 1 Cr.',
  image: "atharva_main_image", 
  imageRera: "atharva_rera",
  projectId: "N/A",
  founderDetails: "Developer not specified in PDF",
  status: "Planned / Layout Shared",
  url: "/buy/atharva-bungalows",
  reel: "atharva_reel",
  brochure: "Atharva Bungalows.pdf",
  images: "atharvaImages",

  buyProperties: [
    {
      img: "atharva_bungalow_type_a",
      title: "Type A Bungalow",
      size: "Layout with Drawing Room 11'-0½\"x13'-8\", Kitchen 9'-8½\"x8'-9½\", Bedrooms with attached Toilets, Puja Room",
      price: "Not Available",
      date: "Not Available",
      url: "/buy/atharva-bungalows/unit-type-a",
      agency: {
        "name": "Atharva Realty",
        "location": "Not Specified",
        "url": "/agency/atharva-realty"
      }
    }
  ],
  sellProperties: [],

  floorPlans: [
    { "imgThumb": "type_a_plan", "imgFull": "type_a_plan", "title": "Type A Plan (Ground + First Floor)" },
    { "imgThumb": "type_b_plan", "imgFull": "type_b_plan", "title": "Type B Plan (Ground + First Floor)" },
    { "imgThumb": "type_c_plan", "imgFull": "type_c_plan", "title": "Type C Plan (Ground + First Floor)" },
    { "imgThumb": "type_d_plan", "imgFull": "type_d_plan", "title": "Type D Plan (Ground + First Floor)" },
    { "imgThumb": "type_e_plan", "imgFull": "type_e_plan", "title": "Type E Plan (Ground + First Floor)" }
  ],

  galleryImages: [],

  amenities: [
    { "name": "Common Plot", "image": "common_plot" },
    { "name": "Internal Roads", "image": "internal_roads" },
    { "name": "Balconies in Bedrooms", "image": "balcony" },
    { "name": "Multiple Layout Options (A to E)", "image": "layouts" }
  ],

  aboutBuilder: "Atharva Bungalows is a residential plotted bungalow project featuring multiple types (A, B, C, D, E) with thoughtfully designed layouts. Each type offers unique room dimensions, attached toilets, kitchens, drawing rooms, and balconies. The project layout includes internal roads and a common plot, ensuring open community space and accessibility.",

  projectFeatures: [
    { "icon": "https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg", "label": "Property Type", "value": "Bungalows (Independent Units)" },
    { "icon": "https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg", "label": "Configuration", "value": "Multiple Types (A, B, C, D, E)" },
    { "icon": "https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg", "label": "Project Layout", "value": "Includes Common Plot, Internal Roads, Main Road Access" }
  ],

  unitBookingStatus: {
    "submittedOn": "Not Available",
    "unitsOfA": "Not Mentioned",
    "unitsOfB": "Not Mentioned"
  },

  blockBookingDetails: [],

  localityData: {
    name: "Not Specified",
    growth: "Not Available",
    growthPeriod: "Not Available",
    avgRate: "Not Available"
  },

  promoterDetails: {
    name: "Not Specified in PDF",
    registrationNo: "Not Available",
    contact: "Not Available",
    about: "Atharva Bungalows is designed to provide residents with modern living in independent bungalows of multiple types, each offering spacious rooms and private amenities.",
    highlights: [
      "Multiple Bungalow Types (A–E)",
      "Attached Toilets in Bedrooms",
      "Common Plot & Internal Roads",
      "Balcony access in Bedrooms"
    ],
    amenities: [
      "Spacious Layouts",
      "Private Toilets",
      "Community Common Plot",
      "Balconies",
      "Multiple Floor Plan Variations"
    ],
    locationAdvantages: [
      "Planned Internal Roads",
      "Community-Oriented Layout",
      "Accessible via Main Road"
    ],
    investmentNote: "Atharva Bungalows provides buyers with flexible bungalow options across multiple layouts, making it a good fit for families seeking independent housing in a planned community."
  }}


,

  // {
  //   id: 2,
  //   name: 'Surat Greens',
  //   location: 'Vesu, Surat',
  //   type: '1, 2, 3, 4, 5 BHK Flats',
  //   area: '800 - 2500 Sq.ft.',
  //   price: '75 Lac - 1 Cr.',
  //   image: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg',
  //   status: 'Upcoming Projects',
  //   url: '/buy/surat',
  //   reel: reel2,
  //   buyProperties: [
  //     {
  //       img: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg',
  //       title: '2 BHK Premium Flat',
  //       size: '1200 Sq. ft.',
  //       price: '75 Lac',
  //       date: 'Mar 2026',
  //       url: '/buy/surat-greens/unit-1',
  //       agency: {
  //         name: 'Surat Developers',
  //         location: 'Vesu, Surat',
  //         url: '/agency/surat-developers'
  //       }
  //     },
  //     {
  //       img: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg',
  //       title: '3 BHK Garden View',
  //       size: '1800 Sq. ft.',
  //       price: '95 Lac',
  //       date: 'Mar 2026',
  //       url: '/buy/surat-greens/unit-2',
  //       agency: {
  //         name: 'Surat Developers',
  //         location: 'Vesu, Surat',
  //         url: '/agency/surat-developers'
  //       }
  //     }
  //   ],
  //   sellProperties: [
  //     {
  //       img: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg',
  //       title: '2 BHK Resale - Ready to Move',
  //       size: '1200 Sq. ft.',
  //       price: '70 Lac',
  //       date: 'Available Now',
  //       url: '/sell/surat-greens/resale-1',
  //       agency: {
  //         name: 'Diamond City Realty',
  //         location: 'Adajan, Surat',
  //         url: '/agency/diamond-city-realty'
  //       }
  //     }
  //   ]
  // },
  {
    id: 3,
    name: 'Vadodara Vista',
    location: 'Alkapuri, Vadodara',
    type: '2, 3, 4 BHK Flats',
    area: '1100 - 2200 Sq.ft.',
    price: '65 Lac - 1 Cr.',
    image: 'https://dyimg1.realestateindia.com/proj_images/project14446/proj_img-14446_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/vadodara',
    reel: reel3,
    buyProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project14446/proj_img-14446_1-200x200.jpg',
        title: '2 BHK Modern Flat',
        size: '1100 Sq. ft.',
        price: '65 Lac',
        date: 'Jun 2026',
        url: '/buy/vadodara-vista/unit-1',
        agency: {
          name: 'Vadodara Properties',
          location: 'Alkapuri, Vadodara',
          url: '/agency/vadodara-properties'
        }
      },
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project14446/proj_img-14446_1-200x200.jpg',
        title: '3 BHK Spacious Flat',
        size: '1650 Sq. ft.',
        price: '85 Lac',
        date: 'Jun 2026',
        url: '/buy/vadodara-vista/unit-2',
        agency: {
          name: 'Vadodara Properties',
          location: 'Alkapuri, Vadodara',
          url: '/agency/vadodara-properties'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project14446/proj_img-14446_1-200x200.jpg',
        title: '3 BHK Resale - Well Maintained',
        size: '1650 Sq. ft.',
        price: '80 Lac',
        date: 'Available Now',
        url: '/sell/vadodara-vista/resale-1',
        agency: {
          name: 'Gujarat Homes',
          location: 'Sayajigunj, Vadodara',
          url: '/agency/gujarat-homes'
        }
      }
    ]
  },
  {
    id: 4,
    name: 'Rajkot Residency',
    location: 'Race Course, Rajkot',
    type: '2, 3, 4 BHK Flats',
    area: '1000 - 2000 Sq.ft.',
    price: '70 Lac - 95 Lac',
    image: 'https://dyimg1.realestateindia.com/proj_images/project50542/proj_img-50542_1-200x200.jpeg',
    status: 'Upcoming Projects',
    url: '/buy/rajkot',
    reel: reel4,
    buyProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project50542/proj_img-50542_1-200x200.jpeg',
        title: '2 BHK Premium Unit',
        size: '1000 Sq. ft.',
        price: '70 Lac',
        date: 'Sep 2026',
        url: '/buy/rajkot-residency/unit-1',
        agency: {
          name: 'Rajkot Builders',
          location: 'Race Course, Rajkot',
          url: '/agency/rajkot-builders'
        }
      },
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project50542/proj_img-50542_1-200x200.jpeg',
        title: '3 BHK Luxury Flat',
        size: '1500 Sq. ft.',
        price: '85 Lac',
        date: 'Sep 2026',
        url: '/buy/rajkot-residency/unit-2',
        agency: {
          name: 'Rajkot Builders',
          location: 'Race Course, Rajkot',
          url: '/agency/rajkot-builders'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project50542/proj_img-50542_1-200x200.jpeg',
        title: '2 BHK Resale - Prime Location',
        size: '1000 Sq. ft.',
        price: '68 Lac',
        date: 'Available Now',
        url: '/sell/rajkot-residency/resale-1',
        agency: {
          name: 'Saurashtra Realty',
          location: 'Kalawad Road, Rajkot',
          url: '/agency/saurashtra-realty'
        }
      }
    ]
  },
  {
    id: 5,
    name: 'Gandhinagar Gardens',
    location: 'Sector 21, Gandhinagar',
    type: '2, 3, 4 BHK Flats',
    area: '1200 - 2400 Sq.ft.',
    price: '80 Lac - 1 Cr.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project21854/proj_img-21854_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/gandhinagar',
    reel: reel5,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21854/proj_img-21854_1-200x200.jpg',
        title: '2 BHK Garden Facing',
        size: '1200 Sq. ft.',
        price: '80 Lac',
        date: 'Dec 2026',
        url: '/buy/gandhinagar-gardens/unit-1',
        agency: {
          name: 'Gandhinagar Developers',
          location: 'Sector 21, Gandhinagar',
          url: '/agency/gandhinagar-developers'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21854/proj_img-21854_1-200x200.jpg',
        title: '3 BHK Premium Unit',
        size: '1800 Sq. ft.',
        price: '1 Cr',
        date: 'Dec 2026',
        url: '/buy/gandhinagar-gardens/unit-2',
        agency: {
          name: 'Gandhinagar Developers',
          location: 'Sector 21, Gandhinagar',
          url: '/agency/gandhinagar-developers'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21854/proj_img-21854_1-200x200.jpg',
        title: '2 BHK Resale - Garden View',
        size: '1200 Sq. ft.',
        price: '75 Lac',
        date: 'Available Now',
        url: '/sell/gandhinagar-gardens/resale-1',
        agency: {
          name: 'Capital Realty',
          location: 'Sector 15, Gandhinagar',
          url: '/agency/capital-realty'
        }
      }
    ]
  },
  {
    id: 6,
    name: 'Bhavnagar Business Hub',
    location: 'Waghawadi Road, Bhavnagar',
    type: 'Commercial Space',
    area: '500 - 5000 Sq.ft.',
    price: '60 Lac - 1 Cr.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project23640/proj_img-23640_1-200x200.jpg',
    status: 'Ongoing Projects',
    url: '/buy/bhavnagar',
    reel: reel6,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project23640/proj_img-23640_1-200x200.jpg',
        title: 'Commercial Office Space',
        size: '1000 Sq. ft.',
        price: '60 Lac',
        date: 'Ready to Move',
        url: '/buy/bhavnagar-business-hub/unit-1',
        agency: {
          name: 'Bhavnagar Commercial',
          location: 'Waghawadi Road, Bhavnagar',
          url: '/agency/bhavnagar-commercial'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project23640/proj_img-23640_1-200x200.jpg',
        title: 'Retail Shop Space',
        size: '500 Sq. ft.',
        price: '45 Lac',
        date: 'Ready to Move',
        url: '/buy/bhavnagar-business-hub/unit-2',
        agency: {
          name: 'Bhavnagar Commercial',
          location: 'Waghawadi Road, Bhavnagar',
          url: '/agency/bhavnagar-commercial'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project23640/proj_img-23640_1-200x200.jpg',
        title: 'Commercial Space - Resale',
        size: '800 Sq. ft.',
        price: '55 Lac',
        date: 'Available Now',
        url: '/sell/bhavnagar-business-hub/resale-1',
        agency: {
          name: 'Saurashtra Commercial',
          location: 'Crescent Circle, Bhavnagar',
          url: '/agency/saurashtra-commercial'
        }
      }
    ]
  },
  {
    id: 7,
    name: 'Jamnagar Junction',
    location: 'Race Course, Jamnagar',
    type: '2, 3, 4 BHK Flats',
    area: '1100 - 2200 Sq.ft.',
    price: '50 Lac - 85 Lac',
    image: 'https://dyimg2.realestateindia.com/proj_images/project21851/proj_img-21851_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/jamnagar',
    reel: reel7,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21851/proj_img-21851_1-200x200.jpg',
        title: '2 BHK Affordable Unit',
        size: '1100 Sq. ft.',
        price: '50 Lac',
        date: 'Aug 2026',
        url: '/buy/jamnagar-junction/unit-1',
        agency: {
          name: 'Jamnagar Properties',
          location: 'Race Course, Jamnagar',
          url: '/agency/jamnagar-properties'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21851/proj_img-21851_1-200x200.jpg',
        title: '3 BHK Spacious Flat',
        size: '1650 Sq. ft.',
        price: '70 Lac',
        date: 'Aug 2026',
        url: '/buy/jamnagar-junction/unit-2',
        agency: {
          name: 'Jamnagar Properties',
          location: 'Race Course, Jamnagar',
          url: '/agency/jamnagar-properties'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21851/proj_img-21851_1-200x200.jpg',
        title: '2 BHK Resale - Good Condition',
        size: '1100 Sq. ft.',
        price: '48 Lac',
        date: 'Available Now',
        url: '/sell/jamnagar-junction/resale-1',
        agency: {
          name: 'Kathiawar Realty',
          location: 'Patel Colony, Jamnagar',
          url: '/agency/kathiawar-realty'
        }
      }
    ]
  },
  {
    id: 8,
    name: 'Junagadh Heights',
    location: 'Girnar Road, Junagadh',
    type: '2, 3, 4 BHK Flats',
    area: '1000 - 2000 Sq.ft.',
    price: '60 Lac - 75 Lac',
    image: 'https://dyimg2.realestateindia.com/proj_images/project31429/proj_img-31429_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/junagadh',
    reel: reel2,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project31429/proj_img-31429_1-200x200.jpg',
        title: '2 BHK Hill View',
        size: '1000 Sq. ft.',
        price: '60 Lac',
        date: 'Nov 2026',
        url: '/buy/junagadh-heights/unit-1',
        agency: {
          name: 'Junagadh Builders',
          location: 'Girnar Road, Junagadh',
          url: '/agency/junagadh-builders'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project31429/proj_img-31429_1-200x200.jpg',
        title: '3 BHK Premium Flat',
        size: '1500 Sq. ft.',
        price: '75 Lac',
        date: 'Nov 2026',
        url: '/buy/junagadh-heights/unit-2',
        agency: {
          name: 'Junagadh Builders',
          location: 'Girnar Road, Junagadh',
          url: '/agency/junagadh-builders'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project31429/proj_img-31429_1-200x200.jpg',
        title: '2 BHK Resale - Mountain View',
        size: '1000 Sq. ft.',
        price: '58 Lac',
        date: 'Available Now',
        url: '/sell/junagadh-heights/resale-1',
        agency: {
          name: 'Saurashtra Heights',
          location: 'Kalwa Chowk, Junagadh',
          url: '/agency/saurashtra-heights'
        }
      }
    ]
  },
  {
    id: 9,
    name: 'Anand Avenue',
    location: 'College Road, Anand',
    type: 'Residential Plots',
    area: '1000 - 5000 Sq.ft.',
    price: '70 Lac - 85 Lac.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project43670/proj_img-43670-19652_1-200x200.jpeg',
    status: 'Completed Projects',
    url: '/buy/anand',
    reel: reel2,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project43670/proj_img-43670-19652_1-200x200.jpeg',
        title: 'Residential Plot - Corner',
        size: '2000 Sq. ft.',
        price: '70 Lac',
        date: 'Ready to Construct',
        url: '/buy/anand-avenue/plot-1',
        agency: {
          name: 'Anand Developers',
          location: 'College Road, Anand',
          url: '/agency/anand-developers'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project43670/proj_img-43670-19652_1-200x200.jpeg',
        title: 'Premium Plot - Main Road',
        size: '3000 Sq. ft.',
        price: '85 Lac',
        date: 'Ready to Construct',
        url: '/buy/anand-avenue/plot-2',
        agency: {
          name: 'Anand Developers',
          location: 'College Road, Anand',
          url: '/agency/anand-developers'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project43670/proj_img-43670-19652_1-200x200.jpeg',
        title: 'Plot Resale - Good Location',
        size: '1500 Sq. ft.',
        price: '65 Lac',
        date: 'Available Now',
        url: '/sell/anand-avenue/plot-resale-1',
        agency: {
          name: 'Central Gujarat Realty',
          location: 'GIDC, Anand',
          url: '/agency/central-gujarat-realty'
        }
      }
    ]
  },
  {
    id: 10,
    name: 'Nadiad Nest',
    location: 'Station Road, Nadiad',
    type: '3, 4, 5 BHK Flats',
    area: '1500 - 3000 Sq.ft.',
    price: '65 Lac - 90 Lac.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project21270/proj_img-21270_1-200x200.jpg',
    status: 'Ongoing Projects',
    url: '/buy/nadiad',
    reel: reel3,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21270/proj_img-21270_1-200x200.jpg',
        title: '3 BHK Spacious Unit',
        size: '1500 Sq. ft.',
        price: '65 Lac',
        date: 'Mar 2025',
        url: '/buy/nadiad-nest/unit-1',
        agency: {
          name: 'Nadiad Properties',
          location: 'Station Road, Nadiad',
          url: '/agency/nadiad-properties'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21270/proj_img-21270_1-200x200.jpg',
        title: '4 BHK Luxury Flat',
        size: '2200 Sq. ft.',
        price: '85 Lac',
        date: 'Mar 2025',
        url: '/buy/nadiad-nest/unit-2',
        agency: {
          name: 'Nadiad Properties',
          location: 'Station Road, Nadiad',
          url: '/agency/nadiad-properties'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21270/proj_img-21270_1-200x200.jpg',
        title: '3 BHK Resale - Station Area',
        size: '1500 Sq. ft.',
        price: '62 Lac',
        date: 'Available Now',
        url: '/sell/nadiad-nest/resale-1',
        agency: {
          name: 'Charotar Realty',
          location: 'College Road, Nadiad',
          url: '/agency/charotar-realty'
        }
      }
    ]
  }
].map(project => ({
  ...project,
  images:
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : demoImages,
  floorPlans:
    Array.isArray(project.floorPlans) && project.floorPlans.length > 0
      ? project.floorPlans
      : DEFAULT_FLOOR_PLANS,
  galleryImages:
    Array.isArray(project.galleryImages) && project.galleryImages.length > 0
      ? project.galleryImages
      : DEFAULT_GALLERY_IMAGES,
  amenities:
    Array.isArray(project.amenities) && project.amenities.length > 0
      ? project.amenities
      : DEFAULT_AMENITIES,
  aboutBuilder: project.aboutBuilder || DEFAULT_ABOUT_BUILDER,
  projectFeatures:
    Array.isArray(project.projectFeatures) && project.projectFeatures.length > 0
      ? project.projectFeatures
      : DEFAULT_PROJECT_FEATURES
}));

export const threebhkprojects = [
  {
    id: 1,
    name: 'Devkunj 80',
    location: 'Vaishnodevi Circle, Ahmedabad',
    type: '3 BHK Builder Floors',
    area: '2430 Sq.ft.',
    price: '80 Lac - 1 Cr.',
    image: devkunj3,
    imageRera: rera,
    founderDetails: 'Devkunj Corporation',
    status: 'Upcoming Projects',
    url: '/buy/devkunj-80',
    reel: devkunj,
    brochure: 'https://drive.google.com/file/d/1XPw5haY73CG9ywdRRBC3d-pzlOfbFRp1/view',
    images: devkunjImages,
    buyProperties: [
      {
        img: devkunj3,
        title: '3 BHK Flats',
        size: '2430 Sq. ft.',
        price: '80 Lac',
        date: 'Dec 2026',
        url: '/buy/devkunj-80/unit-1',
        agency: {
          name: 'Devkunj Realty',
          location: 'Vaishnodevi Circle, Ahmedabad',
          url: '/agency/devkunj-realty'
        }
      },
    ],
    sellProperties: [

    ],
    floorPlans: [
      {
        imgThumb: devkunj6,
        imgFull: devkunj6,
        title: 'Layout Plan'
      },
      {
        imgThumb: devkunj7,
        imgFull: devkunj7,
        title: 'Parking Layout Plan'
      },
      {
        imgThumb: devkunj8,
        imgFull: devkunj8,
        title: 'Floorwise Plan'
      },
      {
        imgThumb: devkunj9,
        imgFull: devkunj9,
        title: 'Ground Floor Plan & Terrace Plan'
      }
    ],
    galleryImages: [
      {
        full: devkunj13,
        thumb: devkunj13,
        alt: 'Devkunj 80 - Exterior View',
        height: 196,
      },
      {
        full: devkunj14,
        thumb: devkunj14,
        alt: 'Devkunj 80 - Interior View',
        height: 193,
      },
      {
        full: devkunj15,
        thumb: devkunj15,
        alt: 'Devkunj 80 - Amenities',
        height: 189,
      },
      {
        full: devkunj16,
        thumb: devkunj16,
        alt: 'Devkunj 80 - Layout',
        height: 194,
      },
      {
        full: devkunj17,
        thumb: devkunj17,
        alt: 'Devkunj 80 - Layout',
        height: 194,
      },
    ],
    amenities: [
      { name: 'Lift', image: elevator },
      { name: 'Landscaping & Tree', image: landscape },
      { name: 'Water Conservation', image: waterconservator },
      { name: 'Fire Fighting System', image: sprinkler },
      { name: 'Gymnasium', image: fitness },
      { name: '24x7 Water Supply', image: watersupply },
      { name: 'Community Hall', image: hall },
      { name: 'Senior Citizen Siteout', image: oldman },
      { name: 'Indoor Games', image: dice },
      { name: '24x7 Security', image: protection },
      { name: 'Internal Roads & Footpaths', image: road },
      { name: 'Sewage Treatment', image: sewage },
      { name: 'Club House', image: club },
    ],
    aboutBuilder: `{propertyname} is a premium residential project located in the heart of Vaishnodevi Circle, Ahmedabad. This thoughtfully designed development offers modern 3 BHK builder floors that combine contemporary architecture with traditional values. The project is strategically positioned to provide excellent connectivity while maintaining a peaceful residential environment.

Project Highlights

Premium Location & Connectivity

{propertyname} enjoys excellent connectivity to major parts of Ahmedabad, making it an ideal choice for families and professionals alike.

Modern Amenities & Features

- 24/7 Security with CCTV surveillance
- Dedicated parking spaces for each unit
- Beautiful landscaped garden areas
- Power backup for uninterrupted living
- High-speed elevator access
- Modern architectural design with quality finishes

Location Advantages

- Close proximity to major educational institutions and schools
- Easy access to shopping centers and commercial hubs
- Well-connected to public transportation
- Near to healthcare facilities and hospitals
- Surrounded by established residential neighborhoods
- Quick access to major highways and arterial roads

Investment Opportunity

{propertyname} represents an excellent investment opportunity in Ahmedabad's growing real estate market, offering both quality living and potential for appreciation.`,
    projectFeatures: [
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg", label: "Property Type", value: "3 BHK Builder Floors" },
      { icon: maximize, label: "Carpet Area", value: "110.49 Sq. Mts." },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg", label: "Configuration", value: "3 BHK" },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img3.jpg", label: "Pricing", value: "80 Lac - 1 Cr." },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img4.jpg", label: "Possession Date", value: "Dec 2025" },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img5.jpg", label: "Total Units", value: "80 units" },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg", label: "Project Area", value: "2430 Sq.ft." },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img9.jpg", label: "Possession Status", value: "Upcoming Projects" },
      { icon: approved, label: "Rera Id", value: "RN236AA10136/211022" }
    ],

    unitBookingStatus: {
      submittedOn: '01-07-2025',
      unitsOfA: 70,
      unitsOfB: 40,
    },
    blockBookingDetails: [
      {
        "srNo": 1,
        "block": "A",
        "unitNumber": 101,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 2,
        "block": "A",
        "unitNumber": 102,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 3,
        "block": "A",
        "unitNumber": 103,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 4,
        "block": "A",
        "unitNumber": 104,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 5,
        "block": "A",
        "unitNumber": 201,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 6,
        "block": "A",
        "unitNumber": 202,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 7,
        "block": "A",
        "unitNumber": 203,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 8,
        "block": "A",
        "unitNumber": 204,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 9,
        "block": "A",
        "unitNumber": 301,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 10,
        "block": "A",
        "unitNumber": 302,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 11,
        "block": "A",
        "unitNumber": 303,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 12,
        "block": "A",
        "unitNumber": 304,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 13,
        "block": "A",
        "unitNumber": 401,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 14,
        "block": "A",
        "unitNumber": 402,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 15,
        "block": "A",
        "unitNumber": 403,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 16,
        "block": "A",
        "unitNumber": 404,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "16-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 17,
        "block": "A",
        "unitNumber": 501,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 18,
        "block": "A",
        "unitNumber": 502,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 19,
        "block": "A",
        "unitNumber": 503,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 20,
        "block": "A",
        "unitNumber": 504,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "20-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 21,
        "block": "A",
        "unitNumber": 601,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 22,
        "block": "A",
        "unitNumber": 602,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 23,
        "block": "A",
        "unitNumber": 603,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 24,
        "block": "A",
        "unitNumber": 604,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "24-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 25,
        "block": "A",
        "unitNumber": 701,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 26,
        "block": "A",
        "unitNumber": 702,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 27,
        "block": "A",
        "unitNumber": 703,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 28,
        "block": "A",
        "unitNumber": 704,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "28-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 29,
        "block": "A",
        "unitNumber": 801,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 30,
        "block": "A",
        "unitNumber": 802,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 31,
        "block": "A",
        "unitNumber": 803,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 32,
        "block": "A",
        "unitNumber": 804,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 33,
        "block": "A",
        "unitNumber": 901,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 34,
        "block": "A",
        "unitNumber": 902,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 35,
        "block": "A",
        "unitNumber": 903,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 36,
        "block": "A",
        "unitNumber": 904,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 37,
        "block": "A",
        "unitNumber": 1001,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 38,
        "block": "A",
        "unitNumber": 1002,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 39,
        "block": "A",
        "unitNumber": 1003,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 40,
        "block": "A",
        "unitNumber": 1004,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 41,
        "block": "B",
        "unitNumber": 101,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 42,
        "block": "B",
        "unitNumber": 102,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 43,
        "block": "B",
        "unitNumber": 103,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 44,
        "block": "B",
        "unitNumber": 104,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 45,
        "block": "B",
        "unitNumber": 201,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 46,
        "block": "B",
        "unitNumber": 202,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 47,
        "block": "B",
        "unitNumber": 203,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 48,
        "block": "B",
        "unitNumber": 204,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 49,
        "block": "B",
        "unitNumber": 301,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 50,
        "block": "B",
        "unitNumber": 302,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 51,
        "block": "B",
        "unitNumber": 303,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 52,
        "block": "B",
        "unitNumber": 304,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 53,
        "block": "B",
        "unitNumber": 401,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 54,
        "block": "B",
        "unitNumber": 402,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 55,
        "block": "B",
        "unitNumber": 403,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 56,
        "block": "B",
        "unitNumber": 404,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "16-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 57,
        "block": "B",
        "unitNumber": 501,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 58,
        "block": "B",
        "unitNumber": 502,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 59,
        "block": "B",
        "unitNumber": 503,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 60,
        "block": "B",
        "unitNumber": 504,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "20-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 61,
        "block": "B",
        "unitNumber": 601,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 62,
        "block": "B",
        "unitNumber": 602,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 63,
        "block": "B",
        "unitNumber": 603,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 64,
        "block": "B",
        "unitNumber": 604,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "24-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 65,
        "block": "B",
        "unitNumber": 701,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 66,
        "block": "B",
        "unitNumber": 702,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 67,
        "block": "B",
        "unitNumber": 703,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 68,
        "block": "B",
        "unitNumber": 704,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "28-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 69,
        "block": "B",
        "unitNumber": 801,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 70,
        "block": "B",
        "unitNumber": 802,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 71,
        "block": "B",
        "unitNumber": 803,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 72,
        "block": "B",
        "unitNumber": 804,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 73,
        "block": "B",
        "unitNumber": 901,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 74,
        "block": "B",
        "unitNumber": 902,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 75,
        "block": "B",
        "unitNumber": 903,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 76,
        "block": "B",
        "unitNumber": 904,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 77,
        "block": "B",
        "unitNumber": 1001,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 78,
        "block": "B",
        "unitNumber": 1002,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 79,
        "block": "B",
        "unitNumber": 1003,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 80,
        "block": "B",
        "unitNumber": 1004,
        "usage": "Residential",
        "carpetArea": '110.49 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      }
    ],
    localityData: {
      name: 'Vaishno Devi Circle',
      growth: '4.30%',
      growthPeriod: 'Last 1 Year',
      avgRate: '₹5.2 K/sq.ft'
    },
promoterDetails: {
  name: "Devkunj Corporation",
  registrationNo: "HRERA/GJ/AHM/1234/2025",
  contact: "+91 9876543210",
  about: "Devkunj 80 is a premium residential project located in the heart of Vaishnodevi Circle, Ahmedabad. This thoughtfully designed development offers modern 3 BHK builder floors that combine contemporary architecture with traditional values. The project is strategically positioned to provide excellent connectivity while maintaining a peaceful residential environment.",
  highlights: [
    "Premium Location & Connectivity",
    "Modern 3 BHK Builder Floors",
    "Strategic Location at Vaishnodevi Circle",
    "Contemporary Architecture"
  ],
  amenities: [
    "24/7 Security with CCTV surveillance",
    "Dedicated parking spaces for each unit",
    "Beautiful landscaped garden areas",
    "Power backup for uninterrupted living",
    "High-speed elevator access",
    "Modern architectural design with quality finishes"
  ],
  locationAdvantages: [
    "Close proximity to major educational institutions and schools",
    "Easy access to shopping centers and commercial hubs",
    "Well-connected to public transportation",
    "Near to healthcare facilities and hospitals",
    "Surrounded by established residential neighborhoods",
    "Quick access to major highways and arterial roads"
  ],
  investmentNote: "Devkunj 80 represents an excellent investment opportunity in Ahmedabad's growing real estate market, offering both quality living and potential for appreciation."
}

  },


  {
    id: 2,
    name: 'Surat Greens',
    location: 'Vesu, Surat',
    type: '1, 2, 3, 4, 5 BHK Flats',
    area: '800 - 2500 Sq.ft.',
    price: '75 Lac - 1 Cr.',
    image: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/surat',
    reel: reel2,
    buyProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg',
        title: '2 BHK Premium Flat',
        size: '1200 Sq. ft.',
        price: '75 Lac',
        date: 'Mar 2026',
        url: '/buy/surat-greens/unit-1',
        agency: {
          name: 'Surat Developers',
          location: 'Vesu, Surat',
          url: '/agency/surat-developers'
        }
      },
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg',
        title: '3 BHK Garden View',
        size: '1800 Sq. ft.',
        price: '95 Lac',
        date: 'Mar 2026',
        url: '/buy/surat-greens/unit-2',
        agency: {
          name: 'Surat Developers',
          location: 'Vesu, Surat',
          url: '/agency/surat-developers'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg',
        title: '2 BHK Resale - Ready to Move',
        size: '1200 Sq. ft.',
        price: '70 Lac',
        date: 'Available Now',
        url: '/sell/surat-greens/resale-1',
        agency: {
          name: 'Diamond City Realty',
          location: 'Adajan, Surat',
          url: '/agency/diamond-city-realty'
        }
      }
    ]
  },
  {
    id: 3,
    name: 'Vadodara Vista',
    location: 'Alkapuri, Vadodara',
    type: '2, 3, 4 BHK Flats',
    area: '1100 - 2200 Sq.ft.',
    price: '65 Lac - 1 Cr.',
    image: 'https://dyimg1.realestateindia.com/proj_images/project14446/proj_img-14446_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/vadodara',
    reel: reel3,
    buyProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project14446/proj_img-14446_1-200x200.jpg',
        title: '2 BHK Modern Flat',
        size: '1100 Sq. ft.',
        price: '65 Lac',
        date: 'Jun 2026',
        url: '/buy/vadodara-vista/unit-1',
        agency: {
          name: 'Vadodara Properties',
          location: 'Alkapuri, Vadodara',
          url: '/agency/vadodara-properties'
        }
      },
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project14446/proj_img-14446_1-200x200.jpg',
        title: '3 BHK Spacious Flat',
        size: '1650 Sq. ft.',
        price: '85 Lac',
        date: 'Jun 2026',
        url: '/buy/vadodara-vista/unit-2',
        agency: {
          name: 'Vadodara Properties',
          location: 'Alkapuri, Vadodara',
          url: '/agency/vadodara-properties'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project14446/proj_img-14446_1-200x200.jpg',
        title: '3 BHK Resale - Well Maintained',
        size: '1650 Sq. ft.',
        price: '80 Lac',
        date: 'Available Now',
        url: '/sell/vadodara-vista/resale-1',
        agency: {
          name: 'Gujarat Homes',
          location: 'Sayajigunj, Vadodara',
          url: '/agency/gujarat-homes'
        }
      }
    ]
  },
  {
    id: 4,
    name: 'Rajkot Residency',
    location: 'Race Course, Rajkot',
    type: '2, 3, 4 BHK Flats',
    area: '1000 - 2000 Sq.ft.',
    price: '70 Lac - 95 Lac',
    image: 'https://dyimg1.realestateindia.com/proj_images/project50542/proj_img-50542_1-200x200.jpeg',
    status: 'Upcoming Projects',
    url: '/buy/rajkot',
    reel: reel4,
    buyProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project50542/proj_img-50542_1-200x200.jpeg',
        title: '2 BHK Premium Unit',
        size: '1000 Sq. ft.',
        price: '70 Lac',
        date: 'Sep 2026',
        url: '/buy/rajkot-residency/unit-1',
        agency: {
          name: 'Rajkot Builders',
          location: 'Race Course, Rajkot',
          url: '/agency/rajkot-builders'
        }
      },
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project50542/proj_img-50542_1-200x200.jpeg',
        title: '3 BHK Luxury Flat',
        size: '1500 Sq. ft.',
        price: '85 Lac',
        date: 'Sep 2026',
        url: '/buy/rajkot-residency/unit-2',
        agency: {
          name: 'Rajkot Builders',
          location: 'Race Course, Rajkot',
          url: '/agency/rajkot-builders'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg1.realestateindia.com/proj_images/project50542/proj_img-50542_1-200x200.jpeg',
        title: '2 BHK Resale - Prime Location',
        size: '1000 Sq. ft.',
        price: '68 Lac',
        date: 'Available Now',
        url: '/sell/rajkot-residency/resale-1',
        agency: {
          name: 'Saurashtra Realty',
          location: 'Kalawad Road, Rajkot',
          url: '/agency/saurashtra-realty'
        }
      }
    ]
  },
  {
    id: 5,
    name: 'Gandhinagar Gardens',
    location: 'Sector 21, Gandhinagar',
    type: '2, 3, 4 BHK Flats',
    area: '1200 - 2400 Sq.ft.',
    price: '80 Lac - 1 Cr.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project21854/proj_img-21854_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/gandhinagar',
    reel: reel5,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21854/proj_img-21854_1-200x200.jpg',
        title: '2 BHK Garden Facing',
        size: '1200 Sq. ft.',
        price: '80 Lac',
        date: 'Dec 2026',
        url: '/buy/gandhinagar-gardens/unit-1',
        agency: {
          name: 'Gandhinagar Developers',
          location: 'Sector 21, Gandhinagar',
          url: '/agency/gandhinagar-developers'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21854/proj_img-21854_1-200x200.jpg',
        title: '3 BHK Premium Unit',
        size: '1800 Sq. ft.',
        price: '1 Cr',
        date: 'Dec 2026',
        url: '/buy/gandhinagar-gardens/unit-2',
        agency: {
          name: 'Gandhinagar Developers',
          location: 'Sector 21, Gandhinagar',
          url: '/agency/gandhinagar-developers'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21854/proj_img-21854_1-200x200.jpg',
        title: '2 BHK Resale - Garden View',
        size: '1200 Sq. ft.',
        price: '75 Lac',
        date: 'Available Now',
        url: '/sell/gandhinagar-gardens/resale-1',
        agency: {
          name: 'Capital Realty',
          location: 'Sector 15, Gandhinagar',
          url: '/agency/capital-realty'
        }
      }
    ]
  },
  {
    id: 6,
    name: 'Bhavnagar Business Hub',
    location: 'Waghawadi Road, Bhavnagar',
    type: 'Commercial Space',
    area: '500 - 5000 Sq.ft.',
    price: '60 Lac - 1 Cr.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project23640/proj_img-23640_1-200x200.jpg',
    status: 'Ongoing Projects',
    url: '/buy/bhavnagar',
    reel: reel6,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project23640/proj_img-23640_1-200x200.jpg',
        title: 'Commercial Office Space',
        size: '1000 Sq. ft.',
        price: '60 Lac',
        date: 'Ready to Move',
        url: '/buy/bhavnagar-business-hub/unit-1',
        agency: {
          name: 'Bhavnagar Commercial',
          location: 'Waghawadi Road, Bhavnagar',
          url: '/agency/bhavnagar-commercial'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project23640/proj_img-23640_1-200x200.jpg',
        title: 'Retail Shop Space',
        size: '500 Sq. ft.',
        price: '45 Lac',
        date: 'Ready to Move',
        url: '/buy/bhavnagar-business-hub/unit-2',
        agency: {
          name: 'Bhavnagar Commercial',
          location: 'Waghawadi Road, Bhavnagar',
          url: '/agency/bhavnagar-commercial'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project23640/proj_img-23640_1-200x200.jpg',
        title: 'Commercial Space - Resale',
        size: '800 Sq. ft.',
        price: '55 Lac',
        date: 'Available Now',
        url: '/sell/bhavnagar-business-hub/resale-1',
        agency: {
          name: 'Saurashtra Commercial',
          location: 'Crescent Circle, Bhavnagar',
          url: '/agency/saurashtra-commercial'
        }
      }
    ]
  },
  {
    id: 7,
    name: 'Jamnagar Junction',
    location: 'Race Course, Jamnagar',
    type: '2, 3, 4 BHK Flats',
    area: '1100 - 2200 Sq.ft.',
    price: '50 Lac - 85 Lac',
    image: 'https://dyimg2.realestateindia.com/proj_images/project21851/proj_img-21851_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/jamnagar',
    reel: reel7,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21851/proj_img-21851_1-200x200.jpg',
        title: '2 BHK Affordable Unit',
        size: '1100 Sq. ft.',
        price: '50 Lac',
        date: 'Aug 2026',
        url: '/buy/jamnagar-junction/unit-1',
        agency: {
          name: 'Jamnagar Properties',
          location: 'Race Course, Jamnagar',
          url: '/agency/jamnagar-properties'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21851/proj_img-21851_1-200x200.jpg',
        title: '3 BHK Spacious Flat',
        size: '1650 Sq. ft.',
        price: '70 Lac',
        date: 'Aug 2026',
        url: '/buy/jamnagar-junction/unit-2',
        agency: {
          name: 'Jamnagar Properties',
          location: 'Race Course, Jamnagar',
          url: '/agency/jamnagar-properties'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21851/proj_img-21851_1-200x200.jpg',
        title: '2 BHK Resale - Good Condition',
        size: '1100 Sq. ft.',
        price: '48 Lac',
        date: 'Available Now',
        url: '/sell/jamnagar-junction/resale-1',
        agency: {
          name: 'Kathiawar Realty',
          location: 'Patel Colony, Jamnagar',
          url: '/agency/kathiawar-realty'
        }
      }
    ]
  },
  {
    id: 8,
    name: 'Junagadh Heights',
    location: 'Girnar Road, Junagadh',
    type: '2, 3, 4 BHK Flats',
    area: '1000 - 2000 Sq.ft.',
    price: '60 Lac - 75 Lac',
    image: 'https://dyimg2.realestateindia.com/proj_images/project31429/proj_img-31429_1-200x200.jpg',
    status: 'Upcoming Projects',
    url: '/buy/junagadh',
    reel: reel2,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project31429/proj_img-31429_1-200x200.jpg',
        title: '2 BHK Hill View',
        size: '1000 Sq. ft.',
        price: '60 Lac',
        date: 'Nov 2026',
        url: '/buy/junagadh-heights/unit-1',
        agency: {
          name: 'Junagadh Builders',
          location: 'Girnar Road, Junagadh',
          url: '/agency/junagadh-builders'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project31429/proj_img-31429_1-200x200.jpg',
        title: '3 BHK Premium Flat',
        size: '1500 Sq. ft.',
        price: '75 Lac',
        date: 'Nov 2026',
        url: '/buy/junagadh-heights/unit-2',
        agency: {
          name: 'Junagadh Builders',
          location: 'Girnar Road, Junagadh',
          url: '/agency/junagadh-builders'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project31429/proj_img-31429_1-200x200.jpg',
        title: '2 BHK Resale - Mountain View',
        size: '1000 Sq. ft.',
        price: '58 Lac',
        date: 'Available Now',
        url: '/sell/junagadh-heights/resale-1',
        agency: {
          name: 'Saurashtra Heights',
          location: 'Kalwa Chowk, Junagadh',
          url: '/agency/saurashtra-heights'
        }
      }
    ]
  },
  {
    id: 9,
    name: 'Anand Avenue',
    location: 'College Road, Anand',
    type: 'Residential Plots',
    area: '1000 - 5000 Sq.ft.',
    price: '70 Lac - 85 Lac.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project43670/proj_img-43670-19652_1-200x200.jpeg',
    status: 'Completed Projects',
    url: '/buy/anand',
    reel: reel2,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project43670/proj_img-43670-19652_1-200x200.jpeg',
        title: 'Residential Plot - Corner',
        size: '2000 Sq. ft.',
        price: '70 Lac',
        date: 'Ready to Construct',
        url: '/buy/anand-avenue/plot-1',
        agency: {
          name: 'Anand Developers',
          location: 'College Road, Anand',
          url: '/agency/anand-developers'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project43670/proj_img-43670-19652_1-200x200.jpeg',
        title: 'Premium Plot - Main Road',
        size: '3000 Sq. ft.',
        price: '85 Lac',
        date: 'Ready to Construct',
        url: '/buy/anand-avenue/plot-2',
        agency: {
          name: 'Anand Developers',
          location: 'College Road, Anand',
          url: '/agency/anand-developers'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project43670/proj_img-43670-19652_1-200x200.jpeg',
        title: 'Plot Resale - Good Location',
        size: '1500 Sq. ft.',
        price: '65 Lac',
        date: 'Available Now',
        url: '/sell/anand-avenue/plot-resale-1',
        agency: {
          name: 'Central Gujarat Realty',
          location: 'GIDC, Anand',
          url: '/agency/central-gujarat-realty'
        }
      }
    ]
  },
  {
    id: 10,
    name: 'Nadiad Nest',
    location: 'Station Road, Nadiad',
    type: '3, 4, 5 BHK Flats',
    area: '1500 - 3000 Sq.ft.',
    price: '65 Lac - 90 Lac.',
    image: 'https://dyimg2.realestateindia.com/proj_images/project21270/proj_img-21270_1-200x200.jpg',
    status: 'Ongoing Projects',
    url: '/buy/nadiad',
    reel: reel3,
    buyProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21270/proj_img-21270_1-200x200.jpg',
        title: '3 BHK Spacious Unit',
        size: '1500 Sq. ft.',
        price: '65 Lac',
        date: 'Mar 2025',
        url: '/buy/nadiad-nest/unit-1',
        agency: {
          name: 'Nadiad Properties',
          location: 'Station Road, Nadiad',
          url: '/agency/nadiad-properties'
        }
      },
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21270/proj_img-21270_1-200x200.jpg',
        title: '4 BHK Luxury Flat',
        size: '2200 Sq. ft.',
        price: '85 Lac',
        date: 'Mar 2025',
        url: '/buy/nadiad-nest/unit-2',
        agency: {
          name: 'Nadiad Properties',
          location: 'Station Road, Nadiad',
          url: '/agency/nadiad-properties'
        }
      }
    ],
    sellProperties: [
      {
        img: 'https://dyimg2.realestateindia.com/proj_images/project21270/proj_img-21270_1-200x200.jpg',
        title: '3 BHK Resale - Station Area',
        size: '1500 Sq. ft.',
        price: '62 Lac',
        date: 'Available Now',
        url: '/sell/nadiad-nest/resale-1',
        agency: {
          name: 'Charotar Realty',
          location: 'College Road, Nadiad',
          url: '/agency/charotar-realty'
        }
      }
    ]
  }
].map(project => ({
  ...project,
  images:
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : demoImages,
  floorPlans:
    Array.isArray(project.floorPlans) && project.floorPlans.length > 0
      ? project.floorPlans
      : DEFAULT_FLOOR_PLANS,
  galleryImages:
    Array.isArray(project.galleryImages) && project.galleryImages.length > 0
      ? project.galleryImages
      : DEFAULT_GALLERY_IMAGES,
  amenities:
    Array.isArray(project.amenities) && project.amenities.length > 0
      ? project.amenities
      : DEFAULT_AMENITIES,
  aboutBuilder: project.aboutBuilder || DEFAULT_ABOUT_BUILDER,
  projectFeatures:
    Array.isArray(project.projectFeatures) && project.projectFeatures.length > 0
      ? project.projectFeatures
      : DEFAULT_PROJECT_FEATURES
}));