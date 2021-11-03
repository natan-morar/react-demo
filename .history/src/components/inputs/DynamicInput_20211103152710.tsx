import React, { useState } from 'react';

function FormField(props: { element: Frontier.Element }) {
    switch (props.element.type) {
        case 'boolean':
            <input type="checkbox"></input>;
            break;
        case 'text':
            <input type="text"></input>;
            break;
        case 'textarea':
            <input type="textarea"></input>;
            break;
        case 'multichoice':
            <select></select>;
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
