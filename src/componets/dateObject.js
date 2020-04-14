import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    
  },
}));


export default function DatePickers(props) {
      const classes = useStyles();
      var [Selectedate,SetDate]=props.DateTime;
      var defult=Selectedate
       const handleDateChange = (event)=> {
       SetDate(event.target.value);
     };
return (
  <div className={props.className}>
      <TextField
        id="date"
        label="תאריך התחלה"
        type="date"
        value={Selectedate}  
        onChange={handleDateChange} 
        defaultValue={defult}
        format="dd/MM/yyyy"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
        );
}