import React, { useState } from 'react'
import { FaChevronRight, FaTimes } from 'react-icons/fa'

const descShort = `Check out Devkunj 80 in Vaishnodevi Circle, one of the upcoming under-construction housing societies in Ahmedabad. There are apartments for sale in Devkunj 80 Vaishnodevi Circle, Ahmedabad. This society will have all basic facilities and amenities to suit homebuyer's needs and requirements. Brought to you by Dev Constructions, Devkunj 80 is scheduled for possession in Dec, 2025.

Being a RERA-registered society, the project details and other important information is also available on state RERA portal. The RERA registration number of this project is P02400005123.

Dev Constructions is one of the known real estate brands in Ahmedabad. The builder has delivered 8 projects so far. There are 4 projects of this builder which are currently under-construction.

Here's everything you need to know about the must-know features of this housing society along with Devkunj 80 Photos, Floor Plans, Payment Plans, Brochure download procedure and other exciting facts about your future home:

Features & Amenities

- The project is spread over an area of 2.5 acres.
- There are around 320 units on offer.
- Devkunj 80 Vaishnodevi Circle housing society has 1 tower with 20 floors.
- Devkunj 80 Ahmedabad has some great amenities to offer such as Swimming Pool, Gymnasium and Club House.
- Vaishnodevi Hospital is a popular landmark in Vaishnodevi Circle, Ahmedabad
- Some popular transit points closest to Devkunj 80 are Vaishnodevi Circle metro station, Prahlad Nagar railway station and SG Highway metro station.
- Property prices in locality has changed 7.1% in last quarter

Devkunj 80 Floor Plans and Price List

| Configuration                | Size         | Price              |
|-----------------------------|--------------|--------------------|
| Devkunj 80 3BHK Apartment  | 1,750 sq.ft. | Rs. 1.45 Cr onwards|
| Devkunj 80 4BHK Apartment  | 2,150 sq.ft. | Rs. 1.85 Cr onwards|

How to get Devkunj 80 Brochure?

View and download Devkunj 80 Official Brochure to take a comprehensive look at this upcoming housing society. It is a detailed prospectus about the society's offerings, amenities, features, payment plans and a lot more. Click the 'download' icon on the main page to get the brochure in one click.

Where to find Devkunj 80 Photos & Videos?

View interiors and exterior images of residential properties for sale in Devkunj 80 Vaishnodevi Circle to check out 8 picture(s) of outdoors, 3 picture(s) of facilities in Devkunj 80 housing society.

What is Devkunj 80 Address?

Vaishnodevi Circle, Ahmedabad

Get directions to reach this location.

How is Vaishnodevi Circle, Ahmedabad for buying a home?

Vaishnodevi Circle is a premium locality to buy an apartment, as compared to other areas in the surrounding areas. This locality ranks 22.3% YoY. Some of the popular features of Vaishnodevi Circle, Ahmedabad are:
- Premium Retail Hub
- Excellent Connectivity
- High-End Commercial Spaces
- Extensive Road Network

The existing residents of Vaishnodevi Circle gave it an average rating of 4.5, out of 5. Most of the reviews mention that this locality has:
- Excellent Public Transport
- Easy Cab/Auto Availability
- Metro Connectivity nearby
- Premium Schools are nearby
- Well-maintained Roads
- High-End Markets at walkable distance

The ratings are based on 1856 total reviews.

Home loan for Devkunj 80 buyers

Banks such as HDFC, ICICI Bank and SBI are offering home loan assistance to the buyers of Devkunj 80. Explore all finance options at most affordable rates by applying through 99acres.com. 'Click here' to start your application now.

How is Vaishnodevi Circle for investment?

Vaishnodevi Circle presents an excellent opportunity for those considering property investments, as it offers a premium investment option compared to nearby areas. There are expected infrastructural developments in nearby areas, which may impact real estate prices in this specific locality as well. Moreover, Devkunj 80 is an under construction project where you can invest in the most preferred property options at a lesser cost and get higher returns, with easy payment plans.

How is Dev Constructions track record?

Dev Constructions stands out with a proven track record in the industry. Over the 6 years, it has made a mark in the real estate industry. Dev Constructions has successfully delivered 8 projects, and currently has 4 ongoing projects in its portfolio. Catering to 3 cities across India, it has carved a niche for itself.

Residents of past projects of Dev Constructions have provided mostly positive feedback, with an average rating of 4.1 out of 5 for the construction quality.`

const features = [
  'The project is spread over an area of 2.5 acres.',
  'There are around 320 units on offer.',
  'Devkunj 80 Vaishnodevi Circle housing society has 1 tower with 20 floors.',
  'Devkunj 80 Ahmedabad has some great amenities to offer such as Swimming Pool, Gymnasium and Club House.',
  'Vaishnodevi Hospital is a popular landmark in Vaishnodevi Circle, Ahmedabad',
  'Some popular transit points closest to Devkunj 80 are Vaishnodevi Circle metro station, Prahlad Nagar railway station and SG Highway metro station.',
  'Property prices in locality has changed 7.1% in last quarter',
]

const priceTable = [
  { config: 'Devkunj 80 3BHK Apartment', size: '1,750 sq.ft.', price: 'Rs. 1.45 Cr onwards' },
  { config: 'Devkunj 80 4BHK Apartment', size: '2,150 sq.ft.', price: 'Rs. 1.85 Cr onwards' },
]

const aboutProjectHtml = `Check out Devkunj 80 in Vaishnodevi Circle, one of the upcoming under-construction housing societies in Ahmedabad. There are apartments for sale in Devkunj 80 Vaishnodevi Circle, Ahmedabad. This society will have all basic facilities and amenities to suit homebuyer's needs and requirements. Brought to you by Dev Constructions, Devkunj 80 is scheduled for possession in Dec, 2025.<br><br>Being a RERA-registered society, the project details and other important information is also available on state RERA portal. The RERA registration number of this project is P02400005123.<br><br>Dev Constructions is one of the known real estate brands in Ahmedabad. The builder has delivered 8 projects so far. There are 4 projects of this builder which are currently under-construction.<br><br>Here's everything you need to know about the must-know features of this housing society along with Devkunj 80 Photos, Floor Plans, Payment Plans, Brochure download procedure and other exciting facts about your future home:<br><br><b style='font-weight: bold;'>Features & Amenities</b><br><br><ul style='list-style: disc; margin-left: 20px;'><li>The project is spread over an area of 2.5 acres.</li><li>There are around 320 units on offer.</li><li>Devkunj 80 Vaishnodevi Circle housing society has 1 tower with 20 floors.</li><li>Devkunj 80 Ahmedabad has some great amenities to offer such as Swimming Pool, Gymnasium and Club House.</li><li>Vaishnodevi Hospital is a popular landmark in Vaishnodevi Circle, Ahmedabad</li><li>Some popular transit points closest to Devkunj 80 are Vaishnodevi Circle metro station, Prahlad Nagar railway station and SG Highway metro station.</li><li>Property prices in locality has changed 7.1% in last quarter</li></ul><br><b style='font-weight: bold;'>Devkunj 80 Floor Plans and Price List </b><br><br>This housing society has the following property options available in different configurations. Take a look at Devkunj 80 Floor Plans and Price List:<br><br><table style='border: 1px solid black;border-collapse: collapse;'><thead><tr style='border: 1px solid black;padding:8px;'><th style='border: 1px solid black;padding:8px;'>Configuration</th><th style='border: 1px solid black;padding:8px;'>Size</th><th style='border: 1px solid black;padding:8px;'>Price</th></tr> <tr style='border: 1px solid black;padding:8px;'><td style='border: 1px solid black;padding:8px;'>Devkunj 80 3BHK Apartment</td><td style='border: 1px solid black;padding:8px;'>1,750 sq.ft.</td><td style='border: 1px solid black;padding:8px;'>Rs. 1.45 Cr onwards</td></tr><tr style='border: 1px solid black;padding:8px;'><td style='border: 1px solid black;padding:8px;'>Devkunj 80 4BHK Apartment</td><td style='border: 1px solid black;padding:8px;'>2,150 sq.ft.</td><td style='border: 1px solid black;padding:8px;'>Rs. 1.85 Cr onwards</td></tr></thead></table><br><br><b style='font-weight: bold;'>How to get Devkunj 80 Brochure?</b><br><br>View and download Devkunj 80 Official Brochure to take a comprehensive look at this upcoming housing society. It is a detailed prospectus about the society's offerings, amenities, features, payment plans and a lot more. Click the 'download' icon on the main page to get the brochure in one click. <br><br><b style='font-weight: bold;'>Where to find Devkunj 80 Photos & Videos?</b><br><br>View interiors and exterior images of residential properties for sale in Devkunj 80 Vaishnodevi Circle to check out 8 picture(s) of outdoors, 3 picture(s) of facilities in Devkunj 80 housing society.<br><br><b style='font-weight: bold;'>What is Devkunj 80 Address?</b> <br><br>Vaishnodevi Circle, Ahmedabad <br><br>Get <a href='https://www.99acres.com/devkunj-80-location-map-vaishnodevi-circle-ahmedabad-npxid-r399088' class='text-red-500 underline'>directions</a> to reach this location.   <br><br><b style='font-weight: bold;'>How is Vaishnodevi Circle, Ahmedabad for buying a home?</b> <br><br>Vaishnodevi Circle is a premium locality to buy an apartment, as compared to other areas in the surrounding areas. This locality ranks 22.3% YoY. Some of the popular features of Vaishnodevi Circle, Ahmedabad are: <br><ul style='list-style: disc; margin-left: 20px;'>  <li>Premium Retail Hub</li> <li>Excellent Connectivity</li> <li>High-End Commercial Spaces</li> <li>Extensive Road Network</li></ul><br>The existing residents of Vaishnodevi Circle gave it an average rating of 4.5, out of 5. Most of the reviews mention that this locality has: <br><ul style='list-style: disc; margin-left: 20px;'>  <li>Excellent Public Transport </li> <li>Easy Cab/Auto Availability </li> <li>Metro Connectivity nearby </li> <li>Premium Schools are nearby </li> <li>Well-maintained Roads </li> <li>High-End Markets at walkable distance </li></ul><br>The ratings are based on 1856 total reviews.<br><br><b style='font-weight: bold;'>Home loan for Devkunj 80 buyers</b><br><br>Banks such as HDFC, ICICI Bank and SBI are offering home loan assistance to the buyers of Devkunj 80. Explore all finance options at most affordable rates by applying through 99acres.com.<a href='https://www.99acres.com/apply-for-home-loan-hlpg' class='text-red-500 underline'>'Click here'</a> to start your application now.<br><br><b style='font-weight: bold;'>How is Vaishnodevi Circle for investment?</b><br><br>Vaishnodevi Circle presents an excellent opportunity for those considering property investments, as it offers a premium investment option compared to nearby areas. There are expected infrastructural developments in nearby areas, which may impact real estate prices in this specific locality as well. Moreover, Devkunj 80 is an under construction project where you can invest in the most preferred property options at a lesser cost and get higher returns, with easy payment plans.<br><br><b style='font-weight: bold;'>How is Dev Constructions track record?</b><br><br>Dev Constructions stands out with a proven track record in the industry. Over the 6 years, it has made a mark in the real estate industry. Dev Constructions has successfully delivered 8 projects, and currently has 4 ongoing projects in its portfolio. Catering to 3 cities across India, it has carved a niche for itself.<br><br>Residents of past projects of Dev Constructions have provided mostly positive feedback, with an average rating of 4.1 out of 5 for the construction quality.`;

const specificationsHtml = `<div class='list_header_bold mb-2'>Overview</div><table class='min-w-[300px] border border-gray-300 rounded mb-4'><tbody><tr><td class='border border-gray-300 px-4 py-2'>Towers</td><td class='border border-gray-300 px-4 py-2'>1</td></tr><tr><td class='border border-gray-300 px-4 py-2'>Floors</td><td class='border border-gray-300 px-4 py-2'>20</td></tr><tr><td class='border border-gray-300 px-4 py-2'>Units</td><td class='border border-gray-300 px-4 py-2'>320</td></tr><tr><td class='border border-gray-300 px-4 py-2'>Total Project Area</td><td class='border border-gray-300 px-4 py-2'>2.5 acres (10.1K sq.m.)</td></tr><tr><td class='border border-gray-300 px-4 py-2'>Open Area</td><td class='border border-gray-300 px-4 py-2'>45 %</td></tr></tbody></table><div class='mb-4'>A- RCC Framed Structure<br/>Aluminium Form Work<br/>Solid or AAC Block work in the designated areas.<br/><br/>B-PLASTERING<br/>Internal: Gyproc, Saint Gobain, Aditya Birla, Surya, Ultratech, Diamond (Punning on the walls if required as per the finishing Surface)<br/>External: No External Plastering. However, the wall tie holes to be packed with Non-Shrink Grout material of Acrylic based.<br/><br/>C-DOORS<br/>Main Door: Main Door Frames: African teak wood frames of 5"X3" sections with polish finishing.<br/>Main Door Shutter: Both side recon Teak Veneer, front side groove, back side no groves, as per approved design, BWR, Pine + Particle in fill, with hard wood lipping (36 mm thick shutter)<br/>Internal Doors: Bed Room Door Frames-Red Miranty frame of 4"X3" section with polish finishing.<br/>Bedroom Door shutters both side laminates as per approved design, BWR, Pine+partical in fill, with hard wood lipping around. (30mm Thick Shutter)<br/>TOILET DOORS: Red Miranty frame of 4" x 3" section with polish finishing Toilet Door Shutter both side laminate as per approved design, BWR, Pine+partical in fill, With PVC lipping (30mm thick shutter)<br/><br/>D-UPVC DOORS & WINDOWS<br/>Utility Doors: UPVC Casement doors (Door Window Together as the case may be)<br/>French Doors: UPVC sliding door of single glazed unit complete with toughening/ Heat strengthening at vision panel system with designer hardware of reputed make and fly proof shutter. (2 / 2.5 Track frame)<br/>Windows: UPVC Window of single glazed unit complete with toughening/ Heat strengthening at vision panel system, with provision for mosquito mesh shutter. (2.5 or 3.5 Track based on the size of the window)<br/>GRILLS: NA<br/><br/>E-PAINTING<br/>Internal: Asian putty, JK Wall care putty, Dulux wall putty Technotec, Aletek (Smooth finish Acrylic/Cement based putty) Premium/ plastic Emulsion paint with smooth finish of approved shades.<br/>External: Asian ultima, Dulux all weather proof coat, Jenson & Nicholson or equivalent, (for external texture and painting) parking area only OBD paint of two coats over one of coat primer. With approved brands or make<br/><br/>F-FLOORING<br/>Living / Dining /Other Bed Rooms/Kitchen: For Living, Dining, Master Bedroom & Other Bedrooms, Kitchen areas 600X1200 mm Vitrified tiles with double / Multicharged based on the area of laying.<br/>Staircase: Kota / Tandoor stone or precast staircase tiles. (300 x 1200 tiles)<br/>Corridors: Vitrified Tiles of 600 x 600 mm tiles with patterns of dark shade intermittently.<br/>Balcony: Ceramic tiles of 600 x 600 mm depending on the balcony size. <br/><br/>G-KITCHEN<br/>Modular Kitchen: No kitchen counters are provided.<br/>RO provision on the kitchen counter top and Dishwasher provision below counter to be provided.<br/>Utility area: Washing Machine provision and washing tap provision in the utility area.<br/><br/>H-BATH ROOMS<br/>Wash basin EWC of reputed make in all Toilets Single lever fixtures with wall mixer cum shower with concealed diverter. Provision for Geysers in all bathrooms with dummy closures for inlet and outlet pipes. All CP and sanitary fittings of Reputed make like Grohe, Jaguar (ESSCO) or equivalent<br/><br/>I-ELECTRICAL<br/>Power plug for cooking range chimney, refrigerator, microwave ovens, mixer / grinders, RO and Dishwasher Provision in the kitchen, Washing Machine in Utility Area. 3 phase supply for each unit with dual source meter with rising mains Miniature Circuit breakers (MCB) for each distribution boards of reputed make. Designer modular elegant switches of reputed make inside the flats in all rooms<br/><br/>J-DADOING<br/>Toilets: Toilets ceramic Tiles for dado 300 x 600 mm size and anti-skid ceramic tiles 300 x 300mm for flooring. Utility: Utility Ceramic Tiles up to 1200 mm Height of 300 x 600 mm size and Anti-skid Ceramic Tiles of 300mm x 300mm<br/><br/>K-TELECOM / I-NET / CABLE TV<br/>FTH with Wi-Fi internet DTH, Telephone & Intercom in Living / Drawing TV provision in Master Bedroom, Drawing Room<br/><br/>L-Air Conditioning <br/>Provision of Split AC system without Copper piping in all Bed Rooms and Living areas / Provision for Split AC system along with drain for Drawing, Living and all Bed rooms<br/><br/>M-LIFTS<br/>High speed Automatic passenger Lifts with Emergency rescue device V3F for energy efficiency of reputed make with a provision for CC Camera inside the Lift Cabin. 03 No's of Lifts for each Tower. (02 passenger Lifts & 01 service Lift) Total No. of Lifts 3 No's<br/><br/>N-SECURITY, SURVEILLANCE and BMS<br/>Access control at Main Gate with RFID tag for owner's vehicles Boom barrier operated with access control devices Separate Lane with Barrier with Main Gate Entry CC Cameras in-and-around the Community for 24 hours Surveillance at strategic Locations Intercom is provided in the lifts connected to the security room. BMS for Electricity, Water, Gas with prepaid card system will be provided.<br/><br/>O-WTP & STP<br/>WTP: Fully Treated Water made available through an exclusive Water softening and Purification Plant. STP: A Sewage Treatment plant of adequate capacity as per norms will be provided inside the project, treated sewage water will be used for the Landscaping and Flushing purpose.<br/><br/>P-GENERATOR<br/>100% D.G Set backup with Acoustic enclosure & A.M.F<br/><br/>Q-PARKING<br/>Each apartment will have a mandate of one car parking per unit. Extra car parking shall be at extra cost subject to availability<br/><br/>R-FIRE SAFETY<br/>Fire hydrant system (F.H.S) & Fire Sprinkler in all Floors and Basements and inside the Flats and Basement as per Statutory requirements from the Fire service Departments and designed Locations.<br/><br/>S-LPG RETICULATION<br/>Reticulated supply of Gas from Centralised Gas Bank to all individual Flats with prepaid/post-paid gas meters by the Third-party operations with all safety measures as per the statutory requirements at Owners cost for the Infrastructure works.<br/><br/>T-WATER SUPPLY<br/>Hydro-Pneumatic & Gravity system with 100% treated water to the kitchen and other areas of the flats.<br/><br/>U-WASTE MANAGEMENT<br/>Dedicated Garbage Chutes will be provided for every Tower with a Wet and Dry disposal provision at each floor level and is centrally collected at the basement in the Garbage Room, for better disposal. Waste shall be collected and managed separately as per the local governing body norms<br/><br/>V-CAR WASH FACILITY<br/>Car Wash Facility will be provided in the Parking Floor Level.<br/><br/>W-CLUB AMENITIES<br/>SPACE PROVIDED FOR THE THIRD-PARTY VENDORS: Super Market / General store Coffee Lounge / Barbeque Terrace Party Area Kitchen for Restaurant (Dry kitchen) Restaurant with Indoor Seating SPA and Saloom</div>`;

const MoreAbout = () => {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('about')

  // Get only the first sentence for preview
  const preview = aboutProjectHtml.split('.')[0] + '.'

  return (
    <section className="my-8">
      <h2 className="title_bold text-xl font-bold mb-4">More about Devkunj 80</h2>
      <div className="MoreAboutProject___99aboutProjCont body_med ReadMoreLess__prewrap ReadMoreLess__marginBt_20 text-gray-700 text-base mb-4">
        <span>{preview}</span>
        <span className="ml-2 text-red-500 hover:underline text-xs font-medium cursor-pointer" onClick={() => setOpen(true)}>more</span>
      </div>
      {/* Side Curtain Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <aside className="sideCurtain__sideCurtain h-screen max-h-screen w-full sm:w-[500px] bg-white shadow-2xl sideCurtain__rightCurtain sideCurtain__in pageComponent transition-transform duration-300 transform translate-x-0 overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="sideCurtain__sideCurtainHead section_header_bold text-lg font-bold">Project Details</h2>
              <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-red-500 text-2xl"><FaTimes /></button>
            </div>
            <div className="px-6 pt-4">
              <div className="flex gap-4 mb-4 pb-2">
                <button
                  className={`pageComponent SectionTabs__tabsChild px-2 py-1 font-semibold ${tab === 'about' ? 'border-b-2 border-blue-600 text-red-500' : 'text-gray-700'}`}
                  onClick={() => setTab('about')}
                  data-label="ABOUT_PROJECT_TAB"
                >
                  About Project
                </button>
                <button
                  className={`pageComponent SectionTabs__tabsChild px-2 py-1 font-semibold ${tab === 'specs' ? 'border-b-2 border-blue-600 text-red-500' : 'text-gray-700'}`}
                  onClick={() => setTab('specs')}
                  data-label="SPECIFICATIONS_TAB"
                >
                  Specifications
                </button>
              </div>
              <div className="AboutProjectDetail__tabContent">
                {tab === 'about' ? (
                  <div className="AboutProjectDetail__hide" id="newDesc" style={{ padding: 20, fontSize: 14, color: '#42526E', whiteSpace: 'pre-wrap', fontWeight: 400 }} dangerouslySetInnerHTML={{ __html: aboutProjectHtml }} />
                ) : (
                  <div className="AboutProjectDetail__projSpecs pageComponent" data-label="SPECIFICATIONS_TAB" style={{ whiteSpace: 'pre-wrap', fontSize: 14, color: '#42526E' }} dangerouslySetInnerHTML={{ __html: specificationsHtml }} />
                )}
              </div>
            </div>
            <div className="w-full px-6 py-4 flex">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold shadow text-center">I'm interested in this project</button>
            </div>
          </aside>
        </div>
      )}
    </section>
  )
}

export default MoreAbout