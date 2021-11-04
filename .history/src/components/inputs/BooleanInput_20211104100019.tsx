import React, { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';

function BooleanInput(props: {
    element: Frontier.Element;
    onChange: (value: string, valid: boolean) => any;
    value: string;
}) {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(false);
    const [yesClass, setYesClass] = useState('');
    const [noClass, setNoClass] = useState('');

    const validateInput = (newVal: string) => {
        if (props.element.metadata.required && newVal != 'true') {
            console.error(`Input ${props.element.id} required`);
            setValid(false);
            return;
        }

        setValid(true);
    };

    const onClick: MouseEventHandler<HTMLButtonElement> = e => {
        setValue((e.target as any).value);
    };

    useEffect(() => {
        if (value == 'true') {
            setYesClass('active');
            setNoClass('');
        } else if (value == 'false') {
            setYesClass('');
            setNoClass('active');
        }

        validateInput(value);
        props.onChange(value, valid);
    }, [value]);

    useEffect(() => {
        props.onChange(value, valid);
    }, [valid]);

    return (
        <div className="boolean-input">
            <button onClick={onClick} className={yesClass} value="true">
                Yes
            </button>
            <button onClick={onClick} className={noClass} value="false">
                No
            </button>
        </div>
    );
}

export default BooleanInput;
