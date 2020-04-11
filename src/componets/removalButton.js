import React from 'react';
import buttons from '../styling/buttons.module.css'



const RemBt=props=>{
    var removal=()=>{ 
        var items=props.items.slice(0,props.index)
        .concat(props.items.slice(props.index+1))
        props.setItems(items)
        }
        
    return(
     <button className={buttons.removalButton} onClick={removal}>הסר</button>
     )
}


export default RemBt

