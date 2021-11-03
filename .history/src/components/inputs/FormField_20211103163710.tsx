import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import '../../styles/main.css';

function FormField(props: { element: Frontier.Element; value?: any }) {
    const [value, setValue] = useState('');
    const [inputClass, setInputClass] = useState('');

    const validateInput = (newVal: string | boolean) => {
        if (props.element.metadata.required && !newVal) {
            console.error(`Input ${props.element.id} required`);
        }

        if (props.element.metadata.pattern) {
            const match = (newVal as string).match(new RegExp(props.element.metadata.pattern));

            if (!match) {
                console.error(`Make sure you enter valid data for ${props.element.id}`);
            }
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
