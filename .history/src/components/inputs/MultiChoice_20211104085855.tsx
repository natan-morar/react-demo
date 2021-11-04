import React, { ChangeEventHandler, useEffect, useState } from 'react';

function MultiChoice(props: {
    element: Frontier.Element;
    onChange: (value: string, valid: boolean) => any;
    value: string;
}) {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(false);
    const [inputClass, setInputClass] = useState('');

    const validateInput = (newVal: string) => {
        if (props.element.metadata.required && !newVal) {
            console.error(`Input ${props.element.id} required`);
            setValid(false);
            return;
        }

        if (props.element.metadata.pattern) {
            const match = newVal.match(new RegExp(props.element.metadata.pattern));

            if (match) {
                setInputClass('');
                return;
            }

            console.error(`Make sure you enter valid data for ${props.element.id}`);
            setInputClass('invalid');
            setValid(false);
            return;
        }

        setValid(true);
    };

    useEffect(() => {
        validateInput(value);
        props.onChange(value, valid);
    }, [value]);

    useEffect(() => {
        props.onChange(value, valid);
    }, [valid]);

    const onChange: ChangeEventHandler<HTMLSelectElement> = e => {
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
