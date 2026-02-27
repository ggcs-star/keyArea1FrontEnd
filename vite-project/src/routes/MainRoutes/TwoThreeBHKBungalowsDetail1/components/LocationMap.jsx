import React, { useState, useEffect } from 'react';

const amenitiesList = [
  { name: 'CCTV Camera', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/cctv-camera.jpg' },
  { name: 'Gymnasium', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/gymnasium.jpg' },
  { name: 'Jogging and Strolling Tracks', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/jogging-strolling-tracks.jpg' },
  { name: 'Kids Play Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/kids-play-area.jpg' },
  { name: 'Meditation Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/meditation-area.jpg' },
  { name: 'Sports Facility', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/sports-facility.jpg' },
];

const LocationMap = ({ projectName = 'M3M Antalya Hills', location = 'Sector 79 Gurgaon, Haryana, India', refProp, showAllAmenities, setShowAllAmenities }) => {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [selectedPlaceType, setSelectedPlaceType] = useState('restaurant');
  const [loading, setLoading] = useState(false);
  const [maxDistance, setMaxDistance] = useState(5); // Default max distance in km
  const [selectedPlace, setSelectedPlace] = useState(null); // For place details modal
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false); // For saving favorite places
  const [mapCenter, setMapCenter] = useState(null); // To track map center coordinates
  const [mapZoom, setMapZoom] = useState(15); // To track map zoom level

  // Function to toggle favorite status of a place
  const toggleFavorite = (placeId) => {
    if (favoritePlaces.includes(placeId)) {
      setFavoritePlaces(favoritePlaces.filter(id => id !== placeId));
    } else {
      setFavoritePlaces([...favoritePlaces, placeId]);
    }
  };

  const placeTypes = [
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'school', label: 'Schools' },
    { id: 'hospital', label: 'Hospitals' },
    { id: 'shopping_mall', label: 'Shopping Malls' },
    { id: 'park', label: 'Parks' },
    { id: 'transit_station', label: 'Transit Stations' }
  ];

  // Function to get coordinates from location string
  const getCoordinatesFromLocation = async (locationString) => {
    // In a real implementation, you would use the Google Geocoding API
    // to convert the address string to coordinates
    try {
      // For demo purposes, we're simulating a geocoding API call
      console.log(`Getting coordinates for: ${locationString}`);
      
      // Simulate different coordinates based on location string to demonstrate dynamic behavior
      if (locationString.toLowerCase().includes('gurgaon')) {
        return { lat: 28.4595, lng: 77.0266 }; // Gurgaon coordinates
      } else if (locationString.toLowerCase().includes('delhi')) {
        return { lat: 28.6139, lng: 77.2090 }; // Delhi coordinates
      } else if (locationString.toLowerCase().includes('noida')) {
        return { lat: 28.5355, lng: 77.3910 }; // Noida coordinates
      } else {
        // Default coordinates if location not recognized
        return { lat: 28.4595, lng: 77.0266 };
      }
    } catch (error) {
      console.error('Error getting coordinates:', error);
      return { lat: 28.4595, lng: 77.0266 }; // Default coordinates on error
    }
  };

  useEffect(() => {
    // Get coordinates from location when component mounts or location changes
    getCoordinatesFromLocation(location).then(coords => {
      setMapCenter(coords);
      fetchNearbyPlaces(selectedPlaceType, coords);
    });
  }, [selectedPlaceType, location]);

  const fetchNearbyPlaces = async (type, coords = null) => {
    setLoading(true);
    try {
      // Use provided coordinates or current map center
      const useCoords = coords || mapCenter;
      
      if (!useCoords) {
        console.error('No coordinates available to fetch nearby places');
        setLoading(false);
        return;
      }
      
      console.log(`Fetching ${type} places near coordinates:`, useCoords);
      
      // In a real implementation, you would make an API call to a backend service
      // that would then call the Google Places API with your API key
      
      // IMPLEMENTATION NOTE:
      // To implement real API calls, you would use the Google Places API:
      // 1. Create a backend endpoint that accepts location and place type
      // 2. The backend would call: 
      //    https://maps.googleapis.com/maps/api/place/nearbysearch/json?
      //    location={latitude},{longitude}&radius=1500&type={type}&key={YOUR_API_KEY}
      // 3. Return the results to this component

      // Example of how the real API call might look:
      // const response = await fetch(`/api/nearby-places?lat=${useCoords.lat}&lng=${useCoords.lng}&type=${type}`);
      // const data = await response.json();
      // setNearbyPlaces(data.results.map(place => ({
      //   id: place.place_id,
      //   name: place.name,
      //   distance: `${(place.distance / 1000).toFixed(1)} km`,
      //   rating: place.rating || 'N/A'
      // })));
      // setLoading(false);
      // return;

      // Simulated API response based on place type and coordinates
      setTimeout(() => {
        const simulatedPlaces = generateSimulatedPlaces(type, useCoords);
        setNearbyPlaces(simulatedPlaces);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching nearby places:', error);
      setLoading(false);
    }
  };

  const generateSimulatedPlaces = (type, coords) => {
    // This function generates fake data for demonstration
    // Using coords to simulate different results based on location
    const placesCount = Math.floor(Math.random() * 5) + 3; // 3-7 places
    const places = [];
    
    // Use coordinates to add some variability to the simulated data
    const locationSeed = coords ? (coords.lat + coords.lng) % 10 : Math.random() * 10;

    const placeData = {
      restaurant: [
        { name: 'Spice Garden', description: 'Authentic Indian cuisine with a modern twist', features: ['Outdoor Seating', 'Vegan Options', 'Full Bar'] },
        { name: 'Urban Cafe', description: 'Cozy cafe with specialty coffee and pastries', features: ['Free WiFi', 'Breakfast', 'Pet Friendly'] },
        { name: 'Royal Bistro', description: 'Fine dining with international cuisine', features: ['Reservations', 'Private Dining', 'Wine List'] },
        { name: 'Food Plaza', description: 'Multi-cuisine food court with various options', features: ['Family Friendly', 'Take Away', 'Late Night'] },
        { name: 'Taste of India', description: 'Traditional North and South Indian dishes', features: ['Buffet', 'Catering', 'Delivery'] },
        { name: 'City Diner', description: 'Classic American diner with all-day breakfast', features: ['24/7', 'Kid Menu', 'Desserts'] },
        { name: 'Fusion Kitchen', description: 'Innovative fusion of Asian and European flavors', features: ['Chef Specials', 'Seasonal Menu', 'Cocktails'] }
      ],
      school: [
        { name: 'Delhi Public School', description: 'Prestigious CBSE school with excellent academic record', features: ['Sports Facilities', 'Science Labs', 'Arts Program'] },
        { name: 'Modern Academy', description: 'International curriculum with focus on holistic development', features: ['Swimming Pool', 'Digital Classrooms', 'Language Lab'] },
        { name: 'St. Mary School', description: 'Christian minority institution with strong values', features: ['Music Room', 'Library', 'Computer Lab'] },
        { name: 'Knowledge Park', description: 'Progressive education with emphasis on practical learning', features: ['Robotics Lab', 'Outdoor Activities', 'Counseling'] },
        { name: 'City International School', description: 'IB curriculum with global teaching standards', features: ['Foreign Exchange', 'Career Guidance', 'Sports Complex'] },
        { name: 'Excellence Academy', description: 'Focused on competitive exam preparation and academics', features: ['Small Class Size', 'Experienced Faculty', 'Regular Tests'] }
      ],
      hospital: [
        { name: 'City Hospital', description: 'Multi-specialty hospital with 24/7 emergency services', features: ['ICU', 'Ambulance', 'Pharmacy'] },
        { name: 'Apollo Clinic', description: 'Part of renowned Apollo healthcare network', features: ['Specialists', 'Diagnostics', 'Health Checkups'] },
        { name: 'Medanta', description: 'Super-specialty hospital with cutting-edge technology', features: ['Surgery', 'Cancer Care', 'Cardiology'] },
        { name: 'Care Medical Center', description: 'Family-oriented healthcare with personal touch', features: ['Pediatrics', 'Geriatrics', 'Physiotherapy'] },
        { name: 'Health First Hospital', description: 'Affordable healthcare with quality services', features: ['Insurance', 'OPD', 'Lab Tests'] },
        { name: 'Wellness Clinic', description: 'Preventive healthcare and wellness programs', features: ['Nutrition', 'Yoga', 'Mental Health'] }
      ],
      shopping_mall: [
        { name: 'City Center Mall', description: 'Premier shopping destination with international brands', features: ['Food Court', 'Multiplex', 'Gaming Zone'] },
        { name: 'Metro Shopping Hub', description: 'Convenient shopping with essential stores', features: ['Supermarket', 'Electronics', 'Parking'] },
        { name: 'Galleria Market', description: 'Upscale shopping with luxury brands', features: ['Designer Stores', 'Fine Dining', 'Valet'] },
        { name: 'Urban Plaza', description: 'Modern shopping complex with diverse options', features: ['Bookstore', 'Spa', 'Children Area'] },
        { name: 'Retail Paradise', description: 'Discount shopping with great deals', features: ['Outlet Stores', 'Food Stalls', 'Weekend Bazaar'] },
        { name: 'Shopping Kingdom', description: 'Family entertainment and shopping center', features: ['Bowling', 'Ice Skating', 'Department Stores'] }
      ],
      park: [
        { name: 'Central Park', description: 'Large urban park with walking trails and open spaces', features: ['Jogging Track', 'Picnic Area', 'Boating'] },
        { name: 'Green Valley', description: 'Lush green park with beautiful landscaping', features: ['Gardens', 'Bird Watching', 'Benches'] },
        { name: 'Rose Garden', description: 'Specialty garden featuring various rose varieties', features: ['Flower Show', 'Photography', 'Seasonal Blooms'] },
        { name: 'City Park', description: 'Community park with recreational facilities', features: ['Playground', 'Exercise Equipment', 'Basketball Court'] },
        { name: 'Nature Reserve', description: 'Protected area with indigenous flora and fauna', features: ['Trails', 'Wildlife', 'Educational Tours'] },
        { name: 'Eco Park', description: 'Environmentally conscious park with sustainable features', features: ['Solar Lighting', 'Rainwater Harvesting', 'Composting'] },
        { name: 'Children\'s Park', description: 'Dedicated play area for kids of all ages', features: ['Swings', 'Slides', 'Sandpit'] }
      ],
      transit_station: [
        { name: 'Metro Station', description: 'Modern rapid transit system connecting major areas', features: ['Ticket Vending', 'Security', 'Accessibility'] },
        { name: 'Bus Terminal', description: 'Central bus station with multiple routes', features: ['Waiting Area', 'Information Desk', 'Restrooms'] },
        { name: 'Railway Station', description: 'Train station with local and long-distance services', features: ['Platforms', 'Luggage Storage', 'Food Stalls'] },
        { name: 'Transit Hub', description: 'Integrated transportation center with multiple options', features: ['Taxi Stand', 'Bike Sharing', 'Tourist Information'] },
        { name: 'City Bus Stop', description: 'Local bus stop with frequent service', features: ['Shelter', 'Route Map', 'Digital Display'] },
        { name: 'Rapid Metro', description: 'Elevated metro system for quick intra-city travel', features: ['Air Conditioned', 'WiFi', 'Last Mile Connectivity'] }
      ]
    };

    const dataForType = placeData[type] || [
      { name: 'Place 1', description: 'Generic place description', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'Place 2', description: 'Generic place description', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'Place 3', description: 'Generic place description', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'Place 4', description: 'Generic place description', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'Place 5', description: 'Generic place description', features: ['Feature 1', 'Feature 2', 'Feature 3'] }
    ];

    // Shuffle the array to get random places each time
    const shuffled = [...dataForType].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, placesCount);

    for (let i = 0; i < selected.length; i++) {
      const place = selected[i];
      // Use locationSeed to create more realistic and location-dependent distances
      const distanceFactor = locationSeed / 10; // 0-1 value based on coordinates
      const distance = (Math.random() * 5 * distanceFactor + 0.5).toFixed(1);
      
      places.push({
        id: `place-${type}-${i}-${coords ? coords.lat.toFixed(2) : 'unknown'}`,
        name: place.name,
        description: place.description,
        features: place.features,
        distance: `${distance} km`,
        rating: (Math.random() * 2 + 3).toFixed(1), // Rating between 3.0 and 5.0
        openHours: '9:00 AM - 9:00 PM',
        contact: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        coordinates: {
          lat: coords.lat + (Math.random() - 0.5) * 0.02, // Add small random offset
          lng: coords.lng + (Math.random() - 0.5) * 0.02  // Add small random offset
        }
      });
    }

    return places;
  };

  // Function to get color based on distance
  const getDistanceColor = (distance) => {
    const distanceValue = parseFloat(distance);
    if (distanceValue <= 2) return '#4CAF50'; // Green for close places
    if (distanceValue <= 5) return '#FF9800'; // Orange for medium distance
    return '#F44336'; // Red for far places
  };

  // Function to render the favorites section if there are any favorite places
  const renderFavorites = () => {
    if (favoritePlaces.length === 0) return null;

    const favoriteItems = nearbyPlaces.filter(place => favoritePlaces.includes(place.id));

    if (favoriteItems.length === 0) return null;

    return (
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ color: '#333', borderBottom: '2px solid #ff6b6b', paddingBottom: '5px', display: 'inline-block', margin: 0 }}>
            Saved Places
          </h3>
          <button
            onClick={() => {
              setLoading(true);
              fetchNearbyPlaces(selectedPlaceType, mapCenter);
            }}
            style={{
              padding: '5px 10px',
              borderRadius: '20px',
              border: '1px solid #ddd',
              background: 'white',
              cursor: 'pointer',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
            Refresh
          </button>
        </div>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '15px', padding: '5px 0' }}>
          {favoriteItems.map(place => (
            <div
              key={`favorite-${place.id}`}
              onClick={() => setSelectedPlace(place)}
              style={{
                minWidth: '200px',
                padding: '12px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                backgroundColor: '#fff',
                border: '1px solid #eee',
                transition: 'transform 0.2s, box-shadow 0.2s',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{place.name}</h4>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(place.id);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0',
                  }}
                  aria-label="Remove from favorites"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff6b6b" stroke="#ff6b6b" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
              <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#666' }}>
                {place.category}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '5px',
                fontSize: '13px',
                color: getDistanceColor(place.distance)
              }}>
                <span>{place.distance.toFixed(1)} km</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="pd-sec bsas" id="pdLocationMap" ref={refProp}>
        <div className="pd-sec-title">
          <h2>
            Location Map of <span style={{ color: '#3366cc', display: 'inline-block' }}>{projectName}</span>
          </h2>
        </div>
        <div className="pds-body">
          <div style={{ position: 'relative' }}>
            <iframe
              loading="lazy"
              style={{ border: 'solid 1px #ccc', padding: '2px', marginTop: '10px' }}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAN_m_CqOOtgmiF9crPBw9oSbiFBPNwn5o&q=${encodeURIComponent(projectName + ', ' + location)}`}
              width="100%"
              height="250"
              frameBorder="0"
              allowFullScreen=""
              title={`Location Map of ${projectName}`}
              onLoad={(e) => {
                // In a real implementation, you would add event listeners to the map
                // Since we can't directly access the iframe content due to cross-origin restrictions,
                // we're simulating map interaction with this overlay
                console.log('Map iframe loaded');
              }}
            ></iframe>
            
            {/* Map interaction overlay - simulates map movement in this demo */}
            <div 
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                zIndex: 5
              }}
            >
              <button
                onClick={() => {
                  // Simulate moving the map to a different location
                  const newLocation = 'Delhi, India';
                  getCoordinatesFromLocation(newLocation).then(coords => {
                    setMapCenter(coords);
                    fetchNearbyPlaces(selectedPlaceType, coords);
                  });
                }}
                style={{
                  padding: '8px',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
                title="Simulate moving map to Delhi"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v8M8 12h8"/>
                </svg>
              </button>
              
              <button
                onClick={() => {
                  // Simulate moving the map to another location
                  const newLocation = 'Noida, India';
                  getCoordinatesFromLocation(newLocation).then(coords => {
                    setMapCenter(coords);
                    fetchNearbyPlaces(selectedPlaceType, coords);
                  });
                }}
                style={{
                  padding: '8px',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
                title="Simulate moving map to Noida"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12h8"/>
                </svg>
              </button>
              
              <button
                onClick={() => {
                  // Return to original location
                  getCoordinatesFromLocation(location).then(coords => {
                    setMapCenter(coords);
                    fetchNearbyPlaces(selectedPlaceType, coords);
                  });
                }}
                style={{
                  padding: '8px',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
                title="Return to original location"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Favorites Section */}
        {renderFavorites()}

        {/* Nearby Places Section */}
        <div className="nearby-places-section" style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Nearby Places</h3>
            <button
               onClick={() => fetchNearbyPlaces(selectedPlaceType, mapCenter)}
               style={{
                background: '#3366cc',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '6px 12px',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
              disabled={loading}
            >
              {loading ? 'Refreshing...' : 'Refresh'}
              {!loading && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="white" />
                </svg>
              )}
            </button>
          </div>

          {/* Place Type Selector */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px 0' }}>
            <div className="place-type-selector" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {placeTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => {
                    setSelectedPlaceType(type.id);
                    setShowOnlyFavorites(false); // Reset favorites filter when changing place type
                  }}
                  style={{
                    padding: '8px 15px',
                    border: selectedPlaceType === type.id ? '2px solid #3366cc' : '1px solid #ccc',
                    borderRadius: '20px',
                    background: selectedPlaceType === type.id ? '#e6f0ff' : 'white',
                    cursor: 'pointer',
                    fontSize: '14px',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {type.label}
                  {/* {selectedPlaceType === type.id && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '30px',
                      height: '3px',
                      background: '#3366cc',
                      borderRadius: '3px'
                    }}></span>
                  )} */}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              style={{
                padding: '8px 15px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                background: showOnlyFavorites ? '#ff6b6b' : 'white',
                cursor: 'pointer',
                fontSize: '14px',
                color: showOnlyFavorites ? 'white' : '#333',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill={showOnlyFavorites ? 'white' : 'none'} stroke={showOnlyFavorites ? 'white' : '#666'} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {showOnlyFavorites ? 'All Places' : 'Favorites Only'}
            </button>
          </div>

          {/* Distance Filter */}
          <div className="distance-filter" style={{ margin: '20px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label htmlFor="distance-slider" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                Maximum Distance: {maxDistance} km
              </label>
              <span style={{ fontSize: '12px', color: '#666' }}>
                {showOnlyFavorites ?
                  `${nearbyPlaces.filter(place => parseFloat(place.distance) <= maxDistance && favoritePlaces.includes(place.id)).length} of ${nearbyPlaces.filter(place => favoritePlaces.includes(place.id)).length} favorite places shown` :
                  `${nearbyPlaces.filter(place => parseFloat(place.distance) <= maxDistance).length} of ${nearbyPlaces.length} places shown`
                }
              </span>
            </div>
            <input
              id="distance-slider"
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={maxDistance}
              onChange={(e) => setMaxDistance(parseFloat(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                appearance: 'none',
                background: 'linear-gradient(to right, #3366cc, #a8c7fa)',
                outline: 'none'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666', marginTop: '5px' }}>
              <span>1 km</span>
              <span>5 km</span>
              <span>10 km</span>
            </div>
          </div>

          {/* Places List */}
          <div className="places-list">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ display: 'inline-block', position: 'relative', width: '40px', height: '40px', marginBottom: '10px' }}>
                  <style jsx>{`
                @keyframes spinner {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
                  <div style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    position: 'absolute',
                    width: '32px',
                    height: '32px',
                    margin: '4px',
                    border: '4px solid #3366cc',
                    borderRadius: '50%',
                    animation: 'spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
                    borderColor: '#3366cc transparent transparent transparent'
                  }}></div>
                </div>
                <div>Loading nearby places...</div>
              </div>
            ) : nearbyPlaces.length > 0 ? (
              <>
                {/* Filter places based on selected distance */}
                {(() => {
                  // Check if there are any favorite places when filter is active
                  if (showOnlyFavorites && favoritePlaces.length === 0) {
                    return (
                      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                        <p>You haven't saved any places as favorites yet.</p>
                        <button
                          onClick={() => setShowOnlyFavorites(false)}
                          style={{
                            padding: '8px 15px',
                            borderRadius: '20px',
                            border: '1px solid #ddd',
                            background: 'white',
                            cursor: 'pointer',
                            fontSize: '14px',
                            marginTop: '10px'
                          }}
                        >
                          Show All Places
                        </button>
                      </div>
                    );
                  }

                  const filteredPlaces = nearbyPlaces.filter(place => {
                    const distanceOk = parseFloat(place.distance) <= maxDistance;
                    return showOnlyFavorites ? (distanceOk && favoritePlaces.includes(place.id)) : distanceOk;
                  });

                  if (filteredPlaces.length === 0) {
                    return (
                      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                        {showOnlyFavorites ?
                          `No favorite ${placeTypes.find(t => t.id === selectedPlaceType)?.label.toLowerCase()} found within ${maxDistance} km.` :
                          `No ${placeTypes.find(t => t.id === selectedPlaceType)?.label.toLowerCase()} found within ${maxDistance} km.`
                        }
                        <div style={{ marginTop: '10px' }}>
                          <button
                            onClick={() => setMaxDistance(10)}
                            style={{
                              background: '#f0f0f0',
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              padding: '5px 10px',
                              fontSize: '14px',
                              cursor: 'pointer'
                            }}
                          >
                            {showOnlyFavorites ? 'Show All Favorite Places' : 'Show All Places'}
                          </button>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
                      {filteredPlaces.map(place => {
                        // Calculate distance color based on how far it is
                        const distanceValue = parseFloat(place.distance);
                        let distanceColor = '#4CAF50'; // Green for close places

                        if (distanceValue > 5) {
                          distanceColor = '#F44336'; // Red for far places
                        } else if (distanceValue > 2) {
                          distanceColor = '#FF9800'; // Orange for medium distance
                        }

                        return (
                          <div
                            key={place.id}
                            style={{
                              border: '1px solid #ddd',
                              borderRadius: '8px',
                              padding: '15px',
                              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                              transition: 'transform 0.2s ease',
                              cursor: 'pointer',
                              position: 'relative'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                          >
                            {/* Favorite Button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(place.id);
                              }}
                              style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '5px',
                                zIndex: 5
                              }}
                              aria-label={favoritePlaces.includes(place.id) ? 'Remove from favorites' : 'Add to favorites'}
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill={favoritePlaces.includes(place.id) ? '#ff6b6b' : 'none'} stroke={favoritePlaces.includes(place.id) ? '#ff6b6b' : '#666'} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                            </button>

                            {/* Place content - clickable area */}
                            <div
                              style={{ cursor: 'pointer' }}
                              onClick={() => setSelectedPlace(place)}
                            >
                              <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>{place.name}</h4>
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#666' }}>
                                <span style={{ color: distanceColor, fontWeight: 'bold' }}>Distance: {place.distance}</span>
                                <span>Rating: {place.rating} ★</span>
                              </div>
                              {place.features && place.features.length > 0 && (
                                <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                  {place.features.slice(0, 2).map((feature, idx) => (
                                    <span
                                      key={idx}
                                      style={{
                                        fontSize: '12px',
                                        color: '#666',
                                        background: '#f5f5f5',
                                        padding: '2px 6px',
                                        borderRadius: '10px'
                                      }}
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                  {place.features.length > 2 && (
                                    <span style={{ fontSize: '12px', color: '#3366cc' }}>+{place.features.length - 2} more</span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                No {placeTypes.find(t => t.id === selectedPlaceType)?.label.toLowerCase()} found nearby.
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedPlace && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }} onClick={() => setSelectedPlace(null)}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ margin: 0, color: '#333' }}>{selectedPlace.name}</h3>
                <button
                  onClick={() => toggleFavorite(selectedPlace.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '5px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  aria-label={favoritePlaces.includes(selectedPlace.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={favoritePlaces.includes(selectedPlace.id) ? '#ff6b6b' : 'none'} stroke={favoritePlaces.includes(selectedPlace.id) ? '#ff6b6b' : '#666'} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span style={{ marginLeft: '5px', fontSize: '14px', color: favoritePlaces.includes(selectedPlace.id) ? '#ff6b6b' : '#666' }}>
                    {favoritePlaces.includes(selectedPlace.id) ? 'Saved' : 'Save'}
                  </span>
                </button>
              </div>
              <button
                onClick={() => setSelectedPlace(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div style={{
                height: '150px',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <div style={{ textAlign: 'center', color: '#666' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#666" />
                  </svg>
                  <div style={{ marginTop: '10px' }}>{selectedPlaceType.charAt(0).toUpperCase() + selectedPlaceType.slice(1).replace('_', ' ')}</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Distance</div>
                  <div>{selectedPlace.distance}</div>
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Rating</div>
                  <div>{selectedPlace.rating} ★</div>
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Category</div>
                  <div>{placeTypes.find(t => t.id === selectedPlaceType)?.label}</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ marginBottom: '10px' }}>Description</h4>
              <p style={{ color: '#666', lineHeight: '1.5' }}>
                {selectedPlace.description || `This is a popular ${placeTypes.find(t => t.id === selectedPlaceType)?.label.toLowerCase()} located ${selectedPlace.distance} from ${projectName}.`}
              </p>

              {selectedPlace.features && selectedPlace.features.length > 0 && (
                <div style={{ marginTop: '15px' }}>
                  <h4 style={{ marginBottom: '10px' }}>Features</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedPlace.features.map((feature, index) => (
                      <span
                        key={index}
                        style={{
                          background: '#f0f0f0',
                          padding: '4px 10px',
                          borderRadius: '16px',
                          fontSize: '13px',
                          color: '#666'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
                {selectedPlace.openHours && (
                  <div>
                    <h4 style={{ marginBottom: '5px', fontSize: '14px' }}>Opening Hours</h4>
                    <p style={{ color: '#666', margin: 0 }}>{selectedPlace.openHours}</p>
                  </div>
                )}

                {selectedPlace.contact && (
                  <div>
                    <h4 style={{ marginBottom: '5px', fontSize: '14px' }}>Contact</h4>
                    <p style={{ color: '#666', margin: 0 }}>{selectedPlace.contact}</p>
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                style={{
                  padding: '10px 15px',
                  backgroundColor: '#3366cc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
                onClick={() => {
                  // In a real implementation, this would open directions in Google Maps
                  window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedPlace.name + ' near ' + location)}`, '_blank');
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.71 11.29L12.71 2.29C12.32 1.9 11.69 1.9 11.3 2.29L2.3 11.29C1.91 11.68 1.91 12.31 2.3 12.7C2.69 13.09 3.32 13.09 3.71 12.7L4 12.41V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V12.41L20.29 12.7C20.68 13.09 21.31 13.09 21.7 12.7C22.09 12.31 22.09 11.68 21.71 11.29ZM12 5.41L18 11.41V20H6V11.41L12 5.41Z" fill="white" />
                </svg>
                Get Directions
              </button>

              <button
                style={{
                  padding: '10px 15px',
                  backgroundColor: 'white',
                  color: '#3366cc',
                  border: '1px solid #3366cc',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedPlace(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )}

  export default LocationMap;

