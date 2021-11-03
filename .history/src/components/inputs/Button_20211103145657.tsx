import React, {useState} from "react";

function Button(props: {click: ()=>any, title: string}) {

    
  return (
    <div>
        <button onClick={props.click}>{title}</button>
    </div>
  );
}

export default Button;
