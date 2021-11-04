import FormField from 'components/inputs/FormField';
import React, { useState } from 'react';

function Section(props: {
    section: Frontier.Section;
    data: { [key: string]: any };
    onChange: (id: string, value: any, valid: boolean) => any;
}) {
    const onChange = (id: string, value: any, valid: boolean) => {
        console.log(id, value, valid);
        props.onChange(id, value, valid);
    };

    return (
        <div className="section">
            <h1>{props.section.title}</h1>

            {props.section.content.map((input, id) => (
                <FormField key={input.id} element={input} onChange={onChange}></FormField>
            ))}
            <div className="content"></div>
        </div>
    );
}

export default Section;
