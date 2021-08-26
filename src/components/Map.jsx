/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  CssBaseline, Typography, Container, Button,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import GoogleMapReact from 'google-map-react';
import './Map.css';

export default function Map() {
  const [center, setCenter] = useState({
    lat: 41.410167,
    lng: 2.209742,
  });
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }
  const zoom = 18;
  const LocationMarker = ({ latText, lngText }) => (
    <div>
      <LocationOnIcon fontSize="large" />
      <p className="lat-text">{`Latitude: ${latText}`}</p>
      <p className="lng-text">{`Longitude: ${lngText}`}</p>
    </div>
  );
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="MapContainer">
        <Typography component="div" style={{ backgroundColor: 'smokewhite', height: '70vh' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
            center={center}
            defaultZoom={zoom}
            className="GoogleMap"
          >
            <LocationMarker
              lat={center.lat}
              lng={center.lng}
              latText={center.lat}
              lngText={center.lng}
            />
          </GoogleMapReact>
          <Button variant="contained" color="primary" startIcon={<PersonPinCircleIcon />} id="LocationButton" onClick={getCurrentPosition}>
            Get My Location
          </Button>
        </Typography>
      </Container>
    </>
  );
}
