import React from 'react';
import buttons from '../styling/buttons.module.css'
import $ from 'jquery'


const SignButton=props=>{
    const Sign=()=>{ 
        //removal=document.getElementsByClassName("redSelected");
            props.setItemChossen(props.index);
            // listItem.addClass("redSelected")
        }
        
    return(
     <button className={buttons.SignButton} onClick={Sign}>סמן</button>
     )
}



export default SignButton

