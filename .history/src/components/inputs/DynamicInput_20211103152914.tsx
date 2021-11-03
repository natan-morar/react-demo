import React, { useState } from 'react';

function FormField(props: { element: Frontier.Element }) {
    let input = '';

    

    return (
        <div>
            <label>{props.element.question_text}</label>
            {switch (props.element.type) {
        case 'boolean':
            return <input type="checkbox"></input>;

        case 'text':
            return <input type="text"></input>;

        case 'textarea':
            return <input type="textarea"></input>;

        case 'multichoice':
            return <select></select>;
    }}
        </div>
    );
}

export default FormField;
