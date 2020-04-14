
import React, {useState} from 'react';
import buttons from '../styling/buttons.module.css'
import { requirePropFactory } from '@material-ui/core';

function  AddItemsprop (props)
{
  var [value,setValue]=useState("")
  var handleChange=event=>{
    setValue(event.target.value)
  }
  var handleSubmit=()=>{
    var temp=value
    temp.trim()
    if (temp!=="") {
          props.setItems(props.items.concat(temp));
      }
      setValue("")
    }

  return (
          <div>
               <label>
                   <input type="text" value={value} onChange={handleChange} />
               </label>
                <button  className={buttons.addButton} onClick={handleSubmit}> הוסף {props.name} </button>
            </div>
          );
}

export default AddItemsprop 