import React, { ChangeEvent, useState } from 'react';

function FormField(props: { element: Frontier.Element; value?: any }) {
    const [value, setValue] = useState('');

    const validateInput = () => {};

    const onChange = (e: ChangeEvent<any>) => {
        setValue(e.target.value);
    };

    const genInput = () => {
        switch (props.element.type) {
            case 'boolean':
                return <input type="checkbox" onChange={onChange} value={props.value}></input>;

            case 'text':
                return <input type="text" onChange={onChange} value={props.value}></input>;

            case 'textarea':
                return <input type="textarea" onChange={onChange} value={props.value}></input>;

            case 'multichoice':
                return (
                    <select value={props.value} onChange={onChange}>
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
