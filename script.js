// Update accessToken???
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXN2YW5idWVsIiwiYSI6ImNranR5NjZ6ZzQzM3YzMHFvNWUyMzhsNHQifQ.FQsG7QWSzTDUmYskQEAuLQ';

// LOCATIONS
const centerLocation = [9.845783, 46.493951];

const geojson = {
  type: 'exhibition-locations',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.836229555003456,46.48338716026936]
    },
    properties: {
      title: 'Forum Paracelsus',
      address: 'Plazza Paracelsus 2, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/e6ZckP1XyYYJsd1j6',
      moreInfoUrl: '#sectionForumParacelsus'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.837382652620704,46.49037730561599]
    },
    properties: {
      title: 'St. Moritz Bad',
      address: 'Via Ludains 3, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/3SoqqpMZM3zGY2cm8',
      moreInfoUrl: '#sectionStMoritzBad'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.843045172309075,46.495743903473056]
    },
    properties: {
      title: 'The Monk',
      address: 'Lake St Moritz, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/2Lu9nDnGgXTbeDEN9',
      moreInfoUrl: '#sectionTheMonk'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.848247537562429,46.497075969819974]
    },
    properties: {
      title: 'Temple',
      address: 'Via Dimlej 6, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/3SoqqpMZM3zGY2cm8',
      moreInfoUrl: '#sectionTemple'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.839961459203437,46.49840041968736]
    },
    properties: {
      title: 'Reformierte Kirche',
      address: 'Via Veglia 12, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/TQvKjJiNUzM64WN79',
      moreInfoUrl: '#sectionChurch'
    }
  }]
};

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jonasvanbuel/ckju13q210vxj19ofdvq8so5l', // stylesheet location
    center: centerLocation, // starting position [lng, lat]
    zoom: 13
});

map.fitBounds([
  [9.836229555003456,46.48338716026936],
  [9.839961459203437,46.49840041968736]
],
{
  padding: {top: 100, right: 100, bottom: 75, left: 100},
  offset: [-50, 0]
})

// add markers to map
geojson.features.forEach(function(marker) {

  // Marker element
  const markerEl = document.createElement('div');
  markerEl.className = 'marker';

  // Popup element
  const popupContent = `
    <h3>${marker.properties.title}</h3>
    <a href="${marker.properties.locationUrl}" target="_blank">${marker.properties.address}</a>
    <a href="${marker.properties.moreInfoUrl}">Find out more</a>
  `;

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(markerEl)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup() // add popups
                          .setHTML(popupContent))
    .addTo(map);
});
