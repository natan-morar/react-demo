import React, { useState } from 'react';

function Boolean(props: { element: Frontier.Element }) {
    return (
        <div className="booleanInput">
            <button>Yes</button>
            <button>No</button>
        </div>
    );
}

export default Boolean;
