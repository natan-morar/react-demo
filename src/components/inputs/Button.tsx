import React, { useState } from 'react';

function Button(props: { action: () => any; title: string }) {
    return (
        <div className="button">
            <button onClick={props.action}>{props.title}</button>
        </div>
    );
}

export default Button;
