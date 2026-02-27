import React, { useState, useEffect } from 'react';

const amenitiesList = [
  { name: 'CCTV Camera', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/cctv-camera.jpg' },
  { name: 'Gymnasium', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/gymnasium.jpg' },
  { name: 'Jogging and Strolling Tracks', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/jogging-strolling-tracks.jpg' },
  { name: 'Kids Play Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/kids-play-area.jpg' },
  { name: 'Meditation Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/meditation-area.jpg' },
  { name: 'Sports Facility', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/sports-facility.jpg' },
];

const LocationMap = ({ projectName = 'M3M Antalya Hills', location = 'Sector 79 Gurgaon, Haryana, India', refProp }) => {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [selectedPlaceType, setSelectedPlaceType] = useState('restaurant');
  const [loading, setLoading] = useState(false);
  const [maxDistance, setMaxDistance] = useState(5);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [mapCenter, setMapCenter] = useState(null);

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

  const getCoordinatesFromLocation = async (locationString) => {
    try {
      if (locationString.toLowerCase().includes('gurgaon')) return { lat: 28.4595, lng: 77.0266 };
      if (locationString.toLowerCase().includes('delhi')) return { lat: 28.6139, lng: 77.2090 };
      if (locationString.toLowerCase().includes('noida')) return { lat: 28.5355, lng: 77.3910 };
      return { lat: 28.4595, lng: 77.0266 };
    } catch (error) {
      console.error('Error getting coordinates:', error);
      return { lat: 28.4595, lng: 77.0266 };
    }
  };

  useEffect(() => {
    getCoordinatesFromLocation(location).then(coords => {
      setMapCenter(coords);
      fetchNearbyPlaces(selectedPlaceType, coords);
    });
  }, [selectedPlaceType, location]);

  const fetchNearbyPlaces = async (type, coords = null) => {
    setLoading(true);
    const useCoords = coords || mapCenter;
    if (!useCoords) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const simulated = generateSimulatedPlaces(type, useCoords);
      setNearbyPlaces(simulated);
      setLoading(false);
    }, 1000);
  };

  const generateSimulatedPlaces = (type, coords) => {
    const count = Math.floor(Math.random() * 5) + 3;
    const basePlaces = Array.from({ length: count }).map((_, i) => ({
      id: `place-${type}-${i}-${coords.lat.toFixed(2)}`,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} Place ${i + 1}`,
      description: 'Sample description',
      distance: (Math.random() * 10).toFixed(1),
      rating: (Math.random() * 2 + 3).toFixed(1),
      coordinates: { lat: coords.lat + (Math.random() - 0.5) * 0.02, lng: coords.lng + (Math.random() - 0.5) * 0.02 }
    }));
    return basePlaces;
  };

  const getDistanceColor = (distance) => {
    const d = parseFloat(distance);
    if (d <= 2) return '#4CAF50';
    if (d <= 5) return '#FF9800';
    return '#F44336';
  };

  const renderFavorites = () => {
    if (!favoritePlaces.length) return null;
    const favoriteItems = nearbyPlaces.filter(p => favoritePlaces.includes(p.id));
    if (!favoriteItems.length) return null;

    return (
      <div style={{ marginBottom: '20px' }}>
        <h3>Saved Places</h3>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '15px' }}>
          {favoriteItems.map(place => (
            <div key={place.id} style={{ minWidth: '200px', padding: '12px', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#fff', cursor: 'pointer' }}
              onClick={() => setSelectedPlace(place)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4>{place.name}</h4>
                <button onClick={(e) => { e.stopPropagation(); toggleFavorite(place.id); }}>❤️</button>
              </div>
              <p>{place.description}</p>
              <div style={{ color: getDistanceColor(place.distance) }}>{place.distance} km</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section ref={refProp} style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Location Map of <span style={{ color: '#3366cc' }}>{projectName}</span></h2>

      <iframe
        loading="lazy"
        style={{ border: '1px solid #ccc', marginTop: '10px' }}
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(projectName + ', ' + location)}`}
        width="100%"
        height="250"
        frameBorder="0"
        allowFullScreen
        title={`Location Map of ${projectName}`}
      ></iframe>

      {/* Favorites */}
      {renderFavorites()}

      {/* Place Type Selector */}
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {placeTypes.map(type => (
          <button key={type.id}
            onClick={() => { setSelectedPlaceType(type.id); setShowOnlyFavorites(false); }}
            style={{
              padding: '8px 15px',
              borderRadius: '20px',
              border: selectedPlaceType === type.id ? '2px solid #3366cc' : '1px solid #ccc',
              background: selectedPlaceType === type.id ? '#e6f0ff' : 'white',
              cursor: 'pointer'
            }}>
            {type.label}
          </button>
        ))}
        <button onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
          style={{
            padding: '8px 15px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            background: showOnlyFavorites ? '#ff6b6b' : 'white',
            color: showOnlyFavorites ? 'white' : '#333',
            cursor: 'pointer'
          }}>
          {showOnlyFavorites ? 'All Places' : 'Favorites Only'}
        </button>
      </div>

      {/* Distance Filter */}
      <div style={{ marginTop: '20px' }}>
        <label>Maximum Distance: {maxDistance} km</label>
        <input type="range" min="1" max="10" step="0.5" value={maxDistance} onChange={(e) => setMaxDistance(parseFloat(e.target.value))} style={{ width: '100%' }} />
      </div>

      {/* Places List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px', marginTop: '20px' }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          nearbyPlaces.filter(p => parseFloat(p.distance) <= maxDistance && (showOnlyFavorites ? favoritePlaces.includes(p.id) : true))
            .map(place => (
              <div key={place.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', cursor: 'pointer', backgroundColor: '#fff' }}
                onClick={() => setSelectedPlace(place)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4>{place.name}</h4>
                  <button onClick={(e) => { e.stopPropagation(); toggleFavorite(place.id); }}>❤️</button>
                </div>
                <p>{place.description}</p>
                <div style={{ color: getDistanceColor(place.distance) }}>{place.distance} km</div>
                <div>Rating: {place.rating} ⭐</div>
              </div>
            ))
        )}
      </div>

      {/* Amenities */}
      {/* <div style={{ marginTop: '30px' }}>
        <h3>Amenities</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '10px' }}>
          {amenitiesList.map((amenity, idx) => (
            <div key={idx} style={{ width: '120px', textAlign: 'center' }}>
              <img src={amenity.image} alt={amenity.name} style={{ width: '100%', borderRadius: '8px' }} />
              <p style={{ fontSize: '14px', marginTop: '5px' }}>{amenity.name}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Place Details Modal */}
      {selectedPlace && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999
        }}>
          <div style={{
            width: '90%',
            maxWidth: '500px',
            background: 'white',
            borderRadius: '10px',
            padding: '20px',
            position: 'relative'
          }}>
            <button
              onClick={() => setSelectedPlace(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <h2>{selectedPlace.name}</h2>
            <p>{selectedPlace.description}</p>
            <p><strong>Distance:</strong> {selectedPlace.distance} km</p>
            <p><strong>Rating:</strong> {selectedPlace.rating} ⭐</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LocationMap;
