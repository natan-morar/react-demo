import React, { useState } from 'react';

function FormField(props: { element: Frontier.Element }) {
    return (
        <div>
            <label>{props.element.question_text}</label>
            <input></input>
        </div>
    );
}

export default FormField;
