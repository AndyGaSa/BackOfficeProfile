import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Map() {
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      alert(`latitud:${position.coords.latitude}, longitud:${position.coords.longitude}`);
    });
  }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh' }}>
          <div id="map" />
          <button type="button" onClick={getCurrentPosition}>pulsame</button>
        </Typography>
      </Container>
    </>
  );
}
