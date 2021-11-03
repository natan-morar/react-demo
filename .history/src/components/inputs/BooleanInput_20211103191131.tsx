import React, { useState } from 'react';

function Boolean(props: { element: Frontier.Element }) {
    return (
        <div className="boolean-input">
            <button>Yes</button>
            <button>No</button>
        </div>
    );
}

export default Boolean;
