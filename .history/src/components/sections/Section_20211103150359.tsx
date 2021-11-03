import React, {useState} from "react";

function Section(props:{section: Frontier.Section}) {


    
  return (
    <div>
      <p>HELLO</p>
      <p>{props.section.title}</p>
    </div>
  );
}

export default Section;
