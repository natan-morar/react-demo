import React, { useState } from 'react';

function FormField(props: { element: Frontier.Element }) {
    let input = '';

    switch (props.element.type) {
        case 'boolean':
            input = `<input type="checkbox"></input>`;
            break;
        case 'text':
            input = `<input type="text"></input>`;
            break;
        case 'textarea':
            input = `<input type="textarea"></input>`;
            break;
        case 'multichoice':
            input = `<select></select>`;
            break;
    }

    return (
        <div>
            <label>{props.element.question_text}</label>
            <input></input>
        </div>
    );
}

export default FormField;
