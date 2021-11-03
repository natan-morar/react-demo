import React, { useState } from 'react';

function BooleanInput(props: { element: Frontier.Element }) {
    return (
        <div className="boolean-input">
            <button>Yes</button>
            <button>No</button>
        </div>
    );
}

export default BooleanInput;
