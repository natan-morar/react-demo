import React, {useState} from "react";

function Button(onClick: any) {

    
  return (
    <div>
        <button onClick={onClick}></button>
    </div>
  );
}

export default Button;
