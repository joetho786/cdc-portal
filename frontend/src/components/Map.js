import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Marker = () => (
  <LocationOnIcon style={{ color: '#EA4335' }} fontSize="large" />
);

const MapComponent = () => {
  const props = {
    zoom: 14,
    center: {
      lat: 26.47528,
      lng: 73.114761,
    },
    styles: {
      width: '100%',
      height: '50vh',
      margin: 'auto',
    },
  };

  return (
    <div style={props.styles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCsG0_QqelLeHfcgxNPeqKiMnHS7ZyTUQM' }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <Marker lat={props.center.lat} lng={props.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
