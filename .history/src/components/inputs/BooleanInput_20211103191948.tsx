import React, { ChangeEventHandler, useEffect, useState } from 'react';

function BooleanInput(props: { onChange: (e: React.ChangeEvent<any>) => any; value: boolean }) {
    const [value, setValue] = useState(props.value);

    const onClick = (val: boolean) => {
        setValue(val);
    };

    useEffect(() => {
        props.onChange();
    }, [value]);

    return (
        <div className="boolean-input">
            <button onClick={}>Yes</button>
            <button onClick={}>No</button>
        </div>
    );
}

export default BooleanInput;
