import React, { ChangeEventHandler, useEffect, useState } from 'react';

function Textarea(props: {
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
                setValid(true);
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

    const onChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
        setValue(e.target.value);
    };

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
