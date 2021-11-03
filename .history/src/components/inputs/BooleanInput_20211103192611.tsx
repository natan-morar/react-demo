import React, { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';

function BooleanInput(props: { onChange: (e: React.ChangeEvent<any>) => any; value: boolean }) {
    const [value, setValue] = useState(props.value);
    const [yesClass, setYesClass] = useState('');
    const [noClass, setNoClass] = useState('');

    const onClick: MouseEventHandler<HTMLButtonElement> = e => {
        // setValue(e.target);
        console.log((e.target as any).value);
    };

    useEffect(() => {
        if (value) {
            setYesClass('active');
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
