import React, { useState } from 'react';

function Steps(props: { total: number; current: number }) {
    return (
        <div className="steps">
            <label>
                Step {props.current}/{props.total}
            </label>
            <div></div>
        </div>
    );
}

export default Steps;
