import React, { useState } from 'react';

function Textarea(props: { element: Frontier.Element; onChange: () => any; value: string }) {
    return (
        <textarea
            className={inputClass}
            onChange={onChange}
            value={value}
            placeholder={props.element.metadata.placeholder}
        ></textarea>
    );
}

export default Textarea;
