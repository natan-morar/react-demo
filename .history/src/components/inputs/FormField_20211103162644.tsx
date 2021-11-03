import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';

function FormField(props: { element: Frontier.Element; value?: any }) {
    const [value, setValue] = useState('');

    const validateInput = (newVal: any) => {
        if (props.element.metadata.required && !newVal) {
            console.error(`Input ${props.element.id} required`);
        }
    };

    const onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = e => {
        setValue(e.target.value);
        validateInput(e.target.value);

        console.log(e.target.value);
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
                    <select value={value} onChange={onChange}>
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
