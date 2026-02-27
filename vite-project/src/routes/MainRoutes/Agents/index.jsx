import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../../components/Layout';
import { GradientHeadingText } from '../../../components/Button/GradientHeadingText';

const Agents = () => {
  const { city } = useParams();

  const cities = [
    { id: 1, name: "Ahmedabad", slug: "ahmedabad" },
    { id: 2, name: "Surat", slug: "surat" },
    { id: 3, name: "Vadodara", slug: "vadodara" },
    { id: 4, name: "Rajkot", slug: "rajkot" },
    { id: 5, name: "Gandhinagar", slug: "gandhinagar" },
    { id: 6, name: "Bhavnagar", slug: "bhavnagar" },
    { id: 7, name: "Junagadh", slug: "junagadh" },
    { id: 8, name: "Jamnagar", slug: "jamnagar" },
    { id: 9, name: "Anand", slug: "anand" },
    { id: 10, name: "Nadiad", slug: "nadiad" },
    { id: 11, name: "Bharuch", slug: "bharuch" },
    { id: 12, name: "Mehsana", slug: "mehsana" },
    { id: 13, name: "Valsad", slug: "valsad" },
    { id: 14, name: "Navsari", slug: "navsari" },
    { id: 15, name: "Patan", slug: "patan" },
    { id: 16, name: "Porbandar", slug: "porbandar" },
    { id: 17, name: "Amreli", slug: "amreli" },
    { id: 18, name: "Morbi", slug: "morbi" },
    { id: 19, name: "Palanpur", slug: "palanpur" },
    { id: 20, name: "Bhuj", slug: "bhuj" },
    { id: 21, name: "Surendranagar", slug: "surendranagar" },
    { id: 22, name: "Botad", slug: "botad" },
    { id: 23, name: "Chhota Udaipur", slug: "chhota-udaipur" },
    { id: 24, name: "Dahod", slug: "dahod" },
    { id: 25, name: "Devbhoomi Dwarka", slug: "devbhoomi-dwarka" },
    { id: 26, name: "Gir Somnath", slug: "gir-somnath" },
    { id: 27, name: "Kheda", slug: "kheda" },
    { id: 28, name: "Mahisagar", slug: "mahisagar" },
    { id: 29, name: "Panchmahal", slug: "panchmahal" },
    { id: 30, name: "Sabarkantha", slug: "sabarkantha" },
    { id: 31, name: "Tapi", slug: "tapi" },
    { id: 32, name: "Banaskantha", slug: "banaskantha" }
  ];

  const getPageTitle = () => {
    if (!city) return "Real Estate Agents in Gujarat";
    if (city === 'all') return "All Cities - Real Estate Agents in Gujarat";
    
    const selectedCity = cities.find(c => c.slug === city);
    return selectedCity ? `Real Estate Agents in ${selectedCity.name}, Gujarat` : "Real Estate Agents in Gujarat";
  };

  const getPageDescription = () => {
    if (!city) return "Find trusted real estate agents and brokers across Gujarat. Connect with professional agents for buying, selling, or renting properties in Gujarat.";
    if (city === 'all') return "Browse real estate agents and brokers in all major cities across Gujarat.";
    
    const selectedCity = cities.find(c => c.slug === city);
    return selectedCity ? `Connect with the best real estate agents and brokers in ${selectedCity.name}, Gujarat. Professional property consultants for buying, selling, and renting.` : "Find your trusted real estate agent in Gujarat.";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-black py-16">
        <Container>
          <div className="text-center">
            <GradientHeadingText className="">
              {getPageTitle()}
            </GradientHeadingText>
            <p className="pt-4 text-xl text-black max-w-3xl mx-auto">
              {getPageDescription()}
            </p>
          </div>
        </Container>
      </section>

      {/* Cities Grid */}
      <section className="py-12">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Find Agents by City in Gujarat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with professional real estate agents in these top cities of Gujarat
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((cityItem) => (
              <a
                key={cityItem.id}
                href={`/agents/${cityItem.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center group"
              >
                <div className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors">
                  {cityItem.name}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  View Agents
                </div>
              </a>
            ))}
          </div>

          {/* View All Cities Link */}
          <div className="text-center mt-8">
            <a
              href="/agents/all"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View All Cities
            </a>
          </div>
        </Container>
      </section>

      {/* Agent Search Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Find Real Estate Agents
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Select City</option>
                    {cities.map((cityItem) => (
                      <option key={cityItem.id} value={cityItem.slug}>
                        {cityItem.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">All Services</option>
                    <option value="buying">Buying</option>
                    <option value="selling">Selling</option>
                    <option value="renting">Renting</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Any Experience</option>
                    <option value="1-5">1-5 Years</option>
                    <option value="5-10">5-10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Search Agents
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Agents Section */}
      <section className="py-12">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Real Estate Agents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Top-rated agents with excellent track records
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((agent) => (
              <div key={agent} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Agent Name {agent}</h3>
                    <p className="text-sm text-gray-600">5+ Years Experience</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-600 ml-2">4.8 (120 reviews)</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Specializes in residential properties with expertise in buying, selling, and renting.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Mumbai, Maharashtra</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Agents; 