import React, { useState } from 'react';

function FormField(props: { element: Frontier.Element }) {
    let input = '';

    switch (props.element.type) {
        case 'boolean':
            return <input type="checkbox"></input>;

        case 'text':
            return <input type="text"></input>;

        case 'textarea':
            return <input type="textarea"></input>;

        case 'multichoice':
            return <select></select>;
    }

    return (
        <div>
            <label>{props.element.question_text}</label>
            <input></input>
        </div>
    );
}

export default FormField;
