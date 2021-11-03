import React, { useState } from 'react';

function Textarea(props: { element: Frontier.Element; onChange: () => any; value: string }) {
    const [value, setValue] = useState('');
    const [inputClass, setInputClass] = useState('');

    const validateInput = (newVal: string) => {
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

    const onChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
        setValue(e.target.value);
        validateInput(e.target.value);

        console.log(e.target.value);
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
