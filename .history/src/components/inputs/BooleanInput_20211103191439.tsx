import React, { useState } from 'react';

function BooleanInput(props: { onChange: () => any; value: boolean }) {
    return (
        <div className="boolean-input">
            <button>Yes</button>
            <button>No</button>
        </div>
    );
}

export default BooleanInput;
