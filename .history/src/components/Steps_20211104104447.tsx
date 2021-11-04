import React, { useState } from 'react';

function Steps(props: { total: number; current: number }) {
    return (
        <div className="steps">
            <label>
                Step {props.current}/{props.total}
            </label>
            <div style={{ width: (props.current / props.total) * 100 }}></div>
        </div>
    );
}

export default Steps;
