import DynamicInput from 'components/inputs/DynamicInput';
import React, { useState } from 'react';

function Section(props: { section: Frontier.Section }) {
    return (
        <div>
            <h1>{props.section.title}</h1>

            {props.section.content.map((input, id) => (
                <DynamicInput element={input}></DynamicInput>
            ))}
            <div className="content"></div>
        </div>
    );
}

export default Section;
