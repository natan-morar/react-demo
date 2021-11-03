import React, { useState } from 'react';

function Section(props: { section: Frontier.Section }) {
    return (
        <div>
            <h1>{props.section.title}</h1>

            {props.section.content.map((input, id) => (
                <DynamicInput></DynamicInput>
            ))}
            <div className="content"></div>
        </div>
    );
}

export default Section;
