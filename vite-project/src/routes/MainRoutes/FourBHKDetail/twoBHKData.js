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

import kantam1 from '../../../assets/properties/kantam/1.jpg'
import kantam2 from '../../../assets/properties/kantam/2.jpg'
import kantam3 from '../../../assets/properties/kantam/3.jpg'
import kantam4 from '../../../assets/properties/kantam/4.jpg'
import kantam5 from '../../../assets/properties/kantam/5.jpg'
import kantam6 from '../../../assets/properties/kantam/6.jpg'
import kantam7 from '../../../assets/properties/kantam/7.jpg'
import kantam8 from '../../../assets/properties/kantam/8.jpg'
import kantam9 from '../../../assets/properties/kantam/9.jpg'
import kantam10 from '../../../assets/properties/kantam/10.jpg'
import kantam11 from '../../../assets/properties/kantam/11.jpg'
import kantam12 from '../../../assets/properties/kantam/12.jpg'
import kantam13 from '../../../assets/properties/kantam/13.jpg'

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

const kantamImages = [
  kantam1, kantam2, kantam3
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
    name: 'Kantam Bungalows',
    location: 'Arsodiya, Gandhinagar',
    type: '2 BHK Builder Floors',
    area: '8336 Sq.ft.',
    price: '80 Lac - 1 Cr.',
    image: kantam1,
    imageRera: rera,
    founderDetails: 'Kantam Buildcon',
    status: 'Upcoming Projects',
    url: '/buy/kantam-bungalows',
    reel: devkunj,
    brochure: 'https://drive.google.com/file/d/1ur1X3IDKDl0EVrxy-Sei90E-1O__nNIr/view',
    images: kantamImages,
    buyProperties: [
      {
        img: kantam1,
        title: '2 BHK Flats',
        size: '8336 Sq. ft.',
        price: '80 Lac',
        date: 'Jun 2028',
        url: '/buy/kantam-bungalows/unit-1',
        agency: {
          name: 'Kantam Bungalows',
          location: 'Arsodiya, Gandhinagar',
          url: '/agency/kantam-bungalows'
        }
      },
    ],
    sellProperties: [

    ],
    floorPlans: [
      {
        imgThumb: kantam4,
        imgFull: kantam4,
        title: 'Layout Plan'
      },
      {
        imgThumb: kantam5,
        imgFull: kantam5,
        title: 'Parking Layout Plan'
      },
      {
        imgThumb: kantam6,
        imgFull: kantam6,
        title: 'Floorwise Plan'
      },
      {
        imgThumb: kantam7,
        imgFull: kantam7,
        title: 'Ground Floor Plan & Terrace Plan'
      },
      {
        imgThumb: kantam8,
        imgFull: kantam8,
        title: 'Ground Floor Plan & Terrace Plan'
      },
      {
        imgThumb: kantam9,
        imgFull: kantam9,
        title: 'Ground Floor Plan & Terrace Plan'
      },
      {
        imgThumb: kantam10,
        imgFull: kantam10,
        title: 'Ground Floor Plan & Terrace Plan'
      },
      {
        imgThumb: kantam11,
        imgFull: kantam11,
        title: 'Ground Floor Plan & Terrace Plan'
      },
      {
        imgThumb: kantam12,
        imgFull: kantam12,
        title: 'Ground Floor Plan & Terrace Plan'
      }
    ],
    galleryImages: [
      {
        full: kantam1,
        thumb: kantam1,
        alt: '',
        height: 196,
      },
      {
        full: kantam2,
        thumb: kantam2,
        alt: '',
        height: 193,
      },
      {
        full: kantam3,
        thumb: kantam3,
        alt: '',
        height: 189,
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
    aboutBuilder: `{propertyname} is a premium residential project located in the thriving Arsodiya area of Gandhinagar. This thoughtfully designed development offers modern 3 BHK builder floors that combine contemporary architecture with traditional values. The project is strategically positioned to provide excellent connectivity while maintaining a peaceful residential environment.

        Project Highlights

        Premium Location & Connectivity

        {propertyname} enjoys excellent connectivity to major parts of Gandhinagar, making it an ideal choice for families and professionals alike.

        Modern Amenities & Features

        24/7 Security with CCTV surveillance

        Dedicated parking spaces for each unit

        Beautiful landscaped garden areas

        Power backup for uninterrupted living

        High-speed elevator access

        Modern architectural design with quality finishes

        Location Advantages

        Close proximity to renowned educational institutions and schools

        Easy access to shopping centers and commercial hubs

        Well-connected to public transportation

        Near to leading healthcare facilities and hospitals

        Surrounded by fast-developing and established residential neighborhoods

        Quick access to Science City, S.P. Ring Road, and other major routes

        Investment Opportunity

        {propertyname} represents an excellent investment opportunity in Gandhinagar's expanding real estate market, offering both quality living and strong potential for appreciation.`

    ,
    projectFeatures: [
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg", label: "Property Type", value: "2 BHK Builder Floors" },
      { icon: maximize, label: "Carpet Area", value: "61.96 - 101.31 Sq. Mts." },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg", label: "Configuration", value: "2 BHK" },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img3.jpg", label: "Pricing", value: "80 Lac - 1 Cr." },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img4.jpg", label: "Possession Date", value: "Jun 2028" },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img5.jpg", label: "Total Units", value: "69 units" },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg", label: "Project Area", value: "8336 Sq.ft." },
      { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img9.jpg", label: "Possession Status", value: "Upcoming Projects" },
      { icon: approved, label: "Rera Id", value: "RAA13885/290724/300628" }
    ],
    unitBookingStatus: {
      submittedOn: '04-07-2025',
      unitsOfA: 69,
    },
    blockBookingDetails: [
      {
        "srNo": 1,
        "block": "A",
        "unitNumber": 1,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 2,
        "block": "A",
        "unitNumber": 2,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 3,
        "block": "A",
        "unitNumber": 3,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 4,
        "block": "A",
        "unitNumber": 4,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 5,
        "block": "A",
        "unitNumber": 5,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 6,
        "block": "A",
        "unitNumber": 6,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 7,
        "block": "A",
        "unitNumber": 7,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 8,
        "block": "A",
        "unitNumber": 8,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 9,
        "block": "A",
        "unitNumber": 9,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 10,
        "block": "A",
        "unitNumber": 10,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 11,
        "block": "A",
        "unitNumber": 11,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 12,
        "block": "A",
        "unitNumber": 12,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 13,
        "block": "A",
        "unitNumber": 13,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 14,
        "block": "A",
        "unitNumber": 14,
        "usage": "Residential",
        "carpetArea": '78.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 15,
        "block": "A",
        "unitNumber": 15,
        "usage": "Residential",
        "carpetArea": '80.94 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 16,
        "block": "A",
        "unitNumber": 16,
        "usage": "Residential",
        "carpetArea": '80.71 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "16-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 17,
        "block": "A",
        "unitNumber": 17,
        "usage": "Residential",
        "carpetArea": '80.72 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 18,
        "block": "A",
        "unitNumber": 18,
        "usage": "Residential",
        "carpetArea": '80.71 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 19,
        "block": "A",
        "unitNumber": 19,
        "usage": "Residential",
        "carpetArea": '80.72 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 20,
        "block": "A",
        "unitNumber": 20,
        "usage": "Residential",
        "carpetArea": '80.71 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "20-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 21,
        "block": "A",
        "unitNumber": 21,
        "usage": "Residential",
        "carpetArea": '80.72 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 22,
        "block": "A",
        "unitNumber": 22,
        "usage": "Residential",
        "carpetArea": '80.71 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 23,
        "block": "A",
        "unitNumber": 23,
        "usage": "Residential",
        "carpetArea": '80.72 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 24,
        "block": "A",
        "unitNumber": 24,
        "usage": "Residential",
        "carpetArea": '80.71 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "24-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 25,
        "block": "A",
        "unitNumber": 25,
        "usage": "Residential",
        "carpetArea": '80.72 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 26,
        "block": "A",
        "unitNumber": 26,
        "usage": "Residential",
        "carpetArea": '80.71 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 27,
        "block": "A",
        "unitNumber": 27,
        "usage": "Residential",
        "carpetArea": '80.72 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 28,
        "block": "A",
        "unitNumber": 28,
        "usage": "Residential",
        "carpetArea": '80.71 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "28-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 29,
        "block": "A",
        "unitNumber": 29,
        "usage": "Residential",
        "carpetArea": '80.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 30,
        "block": "A",
        "unitNumber": 30,
        "usage": "Residential",
        "carpetArea": '85.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 31,
        "block": "A",
        "unitNumber": 31,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 32,
        "block": "A",
        "unitNumber": 32,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "04-08-2024",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 33,
        "block": "A",
        "unitNumber": 33,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 34,
        "block": "A",
        "unitNumber": 34,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 35,
        "block": "A",
        "unitNumber": 35,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 36,
        "block": "A",
        "unitNumber": 36,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "08-012-2025",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 37,
        "block": "A",
        "unitNumber": 37,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 38,
        "block": "A",
        "unitNumber": 38,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 39,
        "block": "A",
        "unitNumber": 39,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 40,
        "block": "A",
        "unitNumber": 40,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "12-04-2023",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 41,
        "block": "A",
        "unitNumber": 41,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 42,
        "block": "A",
        "unitNumber": 42,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 43,
        "block": "A",
        "unitNumber": 43,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 44,
        "block": "A",
        "unitNumber": 44,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 45,
        "block": "A",
        "unitNumber": 45,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 46,
        "block": "A",
        "unitNumber": 46,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 47,
        "block": "A",
        "unitNumber": 47,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 48,
        "block": "A",
        "unitNumber": 48,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 49,
        "block": "A",
        "unitNumber": 49,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 50,
        "block": "A",
        "unitNumber": 50,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 51,
        "block": "A",
        "unitNumber": 51,
        "usage": "Residential",
        "carpetArea": '61.97 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 52,
        "block": "A",
        "unitNumber": 52,
        "usage": "Residential",
        "carpetArea": '61.96 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 53,
        "block": "A",
        "unitNumber": 53,
        "usage": "Residential",
        "carpetArea": '100.82 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 54,
        "block": "A",
        "unitNumber": 54,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 55,
        "block": "A",
        "unitNumber": 55,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 56,
        "block": "A",
        "unitNumber": 56,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 57,
        "block": "A",
        "unitNumber": 57,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 58,
        "block": "A",
        "unitNumber": 58,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 59,
        "block": "A",
        "unitNumber": 59,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 60,
        "block": "A",
        "unitNumber": 60,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 61,
        "block": "A",
        "unitNumber": 61,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 62,
        "block": "A",
        "unitNumber": 62,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 63,
        "block": "A",
        "unitNumber": 63,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 64,
        "block": "A",
        "unitNumber": 64,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 65,
        "block": "A",
        "unitNumber": 65,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 66,
        "block": "A",
        "unitNumber": 66,
        "usage": "Residential",
        "carpetArea": '100.4 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 67,
        "block": "A",
        "unitNumber": 67,
        "usage": "Residential",
        "carpetArea": '101.31 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 68,
        "block": "A",
        "unitNumber": 68,
        "usage": "Residential",
        "carpetArea": '96.43 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
      {
        "srNo": 69,
        "block": "A",
        "unitNumber": 69,
        "usage": "Residential",
        "carpetArea": '96.43 Sq. Mts.',
        "balconyArea": 8.74,
        "status": "UNBOOKED",
        "agreementDate": "",
        "encumbrance": "No Encumbrance",
        "redevelopment": "NO"
      },
    ],
    localityData: {
      name: 'Arsodiya, Gandhinagar',
      growth: '4.30%',
      growthPeriod: 'Last 1 Year',
      avgRate: '₹5.2 K/sq.ft'
    },
    promoterDetails: {
      name: "Kantam Buildcon",
      registrationNo: "HRERA/GJ/AHM/1234/2025",
      contact: "+91 9876543210",
      about: "Kantam Bungalows is a premium residential project located in the heart of Kalol, Gandhinagar. This thoughtfully designed development offers modern 3 BHK builder floors that combine contemporary architecture with traditional values. The project is strategically positioned to provide excellent connectivity while maintaining a peaceful residential environment.",
      highlights: [
        "Premium Location & Connectivity",
        "Modern 3 BHK Builder Floors",
        "Strategic Location at Kalol",
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
      investmentNote: "Kantam Bungalows represents an excellent investment opportunity in Gandhinagar's growing real estate market, offering both quality living and potential for appreciation."
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
