import React, { useState } from 'react';
import '../ProductList/ProductList.css'
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const CheckboxFilter = ({label, value, onChange}) => {
  

  return (
    <FormGroup sx={{display:'flex', alignItems: 'center'}}>
      <FormControlLabel 
      control={
        <Checkbox
        defaultChecked={value}
        onChange={()=>onChange(!value)}
        />
      }
      label = {<Typography>{label}</Typography>}
      />
    </FormGroup>
  );
};

export default CheckboxFilter;
