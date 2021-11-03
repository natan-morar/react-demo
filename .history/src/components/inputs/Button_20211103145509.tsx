import React, {useState} from "react";

function Button(click: any) {

    
  return (
    <div>
        <button onClick={click}></button>
    </div>
  );
}

export default Button;
