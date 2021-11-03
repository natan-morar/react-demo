import React, { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';

function BooleanInput(props: { onChange: (e: React.ChangeEvent<any>) => any; value: boolean }) {
    const [value, setValue] = useState(props.value);

    const onClick: MouseEventHandler<boolean> = e => {
        // setValue(e.target);
        console.log(e.target);
    };

    useEffect(() => {
        props.onChange();
    }, [value]);

    return (
        <div className="boolean-input">
            <button onClick={onClick}>Yes</button>
            <button onClick={onClick}>No</button>
        </div>
    );
}

export default BooleanInput;
