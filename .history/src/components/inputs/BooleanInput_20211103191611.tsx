import React, { ChangeEventHandler, useState } from 'react';

function BooleanInput(props: { onChange: (e: React.ChangeEvent<any>) => any; value: boolean }) {
    return (
        <div className="boolean-input">
            <button>Yes</button>
            <button>No</button>
        </div>
    );
}

export default BooleanInput;
