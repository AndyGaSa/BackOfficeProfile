/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  TextField, TextareaAutosize, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button,
} from '@material-ui/core';

import './UserForm.css';

export default function UserForm() {
  const [title, setTitle] = useState('');
  const [legend, setLegend] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [mailTitle, setMailTitle] = useState('');
  const [mailLegend, setMailLegend] = useState('');
  const [mailErrorTitle, setMailErrorTitle] = useState(false);
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form className="UserForm">
      <div>
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
        <TextField
          onChange={(event) => {
            setMailTitle(event.target.value);
            if (mailTitle.length > 2) {
              setMailErrorTitle(true);
              setMailLegend('Email is bigger than 2');
            } else {
              setMailErrorTitle(false);
            }
          }}
          error={mailErrorTitle}
          label="Email"
          helperText={mailLegend}
          variant="outlined"
        />
      </div>
      <FormControl component="fieldset" className="RadioForm">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} required="true">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <div>
        <label htmlFor="Bio">
          Bio
          <TextareaAutosize aria-label="empty textarea" placeholder="Bio" />
        </label>
      </div>
      <Button variant="contained" color="primary">
        SAVE
      </Button>
    </form>

  );
}
