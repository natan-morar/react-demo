import React, {useState} from "react";

function Button(click: ()=>{}) {

    
  return (
    <div>
        <button onClick={click()}></button>
    </div>
  );
}

export default Button;
