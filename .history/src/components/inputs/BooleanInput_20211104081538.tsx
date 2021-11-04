import React, { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';

function BooleanInput(props: {
    element: Frontier.Element;
    onChange: (e: React.ChangeEvent<any>) => any;
    value: boolean;
}) {
    const [value, setValue] = useState('');
    const [yesClass, setYesClass] = useState('');
    const [noClass, setNoClass] = useState('');

    const validateInput = (newVal: string) => {
        if (props.element.metadata.required && !newVal) {
            console.error(`Input ${props.element.id} required`);
        }
    };

    const onClick: MouseEventHandler<HTMLButtonElement> = e => {
        // setValue(e.target);
        console.log((e.target as any).value);
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
    }, [value]);

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
