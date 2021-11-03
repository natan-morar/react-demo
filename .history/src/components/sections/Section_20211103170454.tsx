import FormField from 'components/inputs/FormField';
import Steps from 'components/Steps';
import React, { useState } from 'react';

function Section(props: { section: Frontier.Section; data: { [key: string]: any } }) {
    return (
        <div className="section">
            <h1>{props.section.title}</h1>

            {props.section.content.map((input, id) => (
                <FormField key={input.id} element={input} value={props.data[input.id]}></FormField>
            ))}
            <div className="content"></div>
        </div>
    );
}

export default Section;
