import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../../components/Layout';
import { GradientText } from '../../../components/Button/GradientText';
import { GradientHeadingText } from '../../../components/Button/GradientHeadingText';

const Buy = () => {
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
    { id: 19, name: "Palanpur", slug: "palanpur" }
  ];

  const getPageTitle = () => {
    if (!city) return "Buy Property in Ahmedabad";
    if (city === 'all') return "All Cities - Buy Property";
    
    const selectedCity = cities.find(c => c.slug === city);
    return selectedCity ? `Buy Property in ${selectedCity.name}` : "Buy Property";
  };

  const getPageDescription = () => {
    if (!city) return "Explore properties for sale across Ahmedabad. Find your dream home with our comprehensive listings.";
    if (city === 'all') return "Browse properties for sale in all major cities across Ahmedabad.";
    
    const selectedCity = cities.find(c => c.slug === city);
    return selectedCity ? `Find the best properties for sale in ${selectedCity.name}. Browse apartments, houses, and commercial properties.` : "Find your dream property.";
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
              Popular Cities to Buy Property
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore properties in these top cities across Ahmedabad
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((cityItem) => (
              <a
                key={cityItem.id}
                href={`/buy/${cityItem.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center group"
              >
                <div className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors">
                  {cityItem.name}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  View Properties
                </div>
              </a>
            ))}
          </div>

          {/* View All Cities Link */}
          <div className="text-center mt-8">
            <a
              href="/buy/all"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View All Cities
            </a>
          </div>
        </Container>
      </section>

      {/* Property Search Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Search Properties
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500-500">
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
                    Property Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">All Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Any Budget</option>
                    <option value="0-50">Under 50 Lakhs</option>
                    <option value="50-100">50 Lakhs - 1 Crore</option>
                    <option value="100-200">1-2 Crores</option>
                    <option value="200+">Above 2 Crores</option>
                  </select>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Buy; 