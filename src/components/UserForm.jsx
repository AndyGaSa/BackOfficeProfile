import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './UserForm.css';

export default function UserForm() {
  const [title, setTitle] = useState('');
  const [legend, setLegend] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  return (
    <form className="UserForm">
      <TextField
        onChange={(event) => {
          setTitle(event.target.value);
          if (title.length > 2) {
            setErrorTitle(true);
            setLegend('Username is bigger than 2');
          } else {
            setErrorTitle(false);
          }
        }}
        error={errorTitle}
        label="Username"
        helperText={legend}
        variant="outlined"
      />
    </form>
  );
}
