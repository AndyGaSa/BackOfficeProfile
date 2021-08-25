/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

export default function Map() {
  const [lat, setLat] = useState(41.410167);
  const [lng, setLgn] = useState(2.209742);
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLgn(position.coords.longitude);
    });
  }
  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 18,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBRUMLTzjuEywhAXLLpHwwOBTeYR0Biu-0' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={lat}
              lng={lng}
              text="My Marker"
            />
          </GoogleMapReact>
          <button type="button" onClick={getCurrentPosition}>pulsame</button>
        </Typography>
      </Container>
    </>
  );
}
