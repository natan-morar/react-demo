import React, { ChangeEvent, useState } from 'react';

function FormField(props: { element: Frontier.Element }) {
    const [value, setValue] = useState('');

    const validateInput = () => {};

    const onChange = (e: ChangeEvent) => {
        console.log(value);
    };

    const genInput = () => {
        switch (props.element.type) {
            case 'boolean':
                return <input type="checkbox" onChange={onChange} value={value}></input>;

            case 'text':
                return <input type="text" onChange={onChange} value={value}></input>;

            case 'textarea':
                return <input type="textarea" onChange={onChange} value={value}></input>;

            case 'multichoice':
                return (
                    <select value={value}>
                        {props.element.metadata.options?.map(opt => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                );
        }
    };

    return (
        <div className="form-Field">
            <label>{props.element.question_text}</label>
            {genInput()}
        </div>
    );
}

export default FormField;
