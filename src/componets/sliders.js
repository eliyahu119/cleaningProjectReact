import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from "@material-ui/core/Typography";



export default function DiscreteSlider(props) {
  var [value ,setValue]=props.value
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
       <div className={props.className}>
        <Typography id="continuous-slider" gutterBottom>
        {props.nameOfTheSLider}
        </Typography>
        <Slider
        style={props.style}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={props.step}
        marks
        min={props.min}
        max={props.max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}



