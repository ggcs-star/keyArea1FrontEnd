import React from 'react'
import { Container } from '../../components/Layout';


const MainFooter = () => {

    const cities = [
        'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar', 
        'Jamnagar', 'Junagadh', 'Anand', 'Nadiad', 'Bharuch', 'Valsad', 
        'Mehsana', 'Patan', 'Surendranagar'
      ];
      
      const propertyCategories = [
        {
          title: 'Property for Sale',
          baseUrl: '/buy/',
          suffix: '',
          linkText: (city) => `Real estate in ${city}`
        },
        {
          title: 'Flats for Sale',
          baseUrl: '/buy/',
          suffix: '',
          linkText: (city) => `Flats in ${city}`
        },
        {
          title: 'Flats for Sell',
          baseUrl: '/buy/',
          suffix: '',
          linkText: (city) => `Flats for Sell in ${city}`
        },
        {
          title: 'New Projects',
          baseUrl: '/buy/',
          suffix: '',
          linkText: (city) => `New Projects in ${city}`
        }
      ];
  return (
    <section className="py-12 bg-gray-800">
      <Container>
        <div className="max-w-6xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyCategories.map((category, categoryIndex) => (
              <li key={categoryIndex} className="space-y-4">
                <p className="text-lg font-semibold text-gray-50 mb-4 border-b border-gray-200 pb-2">
                  {category.title}
                </p>
                <ul className="space-y-2">
                  {cities.map((city, cityIndex) => {
                    const citySlug = city.toLowerCase().replace(/\s+/g, '');
                    const url = `${category.baseUrl}${citySlug}${category.suffix}`;
                    const linkText = category.linkText(city);
                    
                    return (
                      <li key={cityIndex}>
                        <a 
                          href={url}
                          title={linkText}
                          className="text-sm text-gray-50 hover:text-red-500 transition-colors duration-300 block py-1"
                        >
                          {linkText}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default MainFooter