import React, { useState } from 'react';

function MultiChoice(props: { element: Frontier.Element }) {
    return (
        <div>
            <select
                className={inputClass}
                value={value}
                onChange={onChange}
                placeholder={props.element.metadata.placeholder}
            >
                {props.element.metadata.options?.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default MultiChoice;
