import React, { useState } from 'react';

function MultiChoice(props: { onChange: () => any; value: boolean }) {
    const [value, setValue] = useState('');
    const [inputClass, setInputClass] = useState('');

    const validateInput = (newVal: string | boolean) => {
        if (props.element.metadata.required && !newVal) {
            console.error(`Input ${props.element.id} required`);
        }

        if (props.element.metadata.pattern) {
            const match = (newVal as string).match(new RegExp(props.element.metadata.pattern));

            if (match) {
                setInputClass('');
                return;
            }

            console.error(`Make sure you enter valid data for ${props.element.id}`);
            setInputClass('invalid');
        }
    };

    const onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any> = e => {
        setValue(e.target.value);
        validateInput(e.target.value);

        console.log(e.target.value);
    };

    return (
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
    );
}

export default MultiChoice;
