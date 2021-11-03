import React, { useState } from 'react';

function Steps(props: { total: number; current: number }) {
    return (
        <div>
            <label>
                Step {props.current}/{props.total}
            </label>
        </div>
    );
}

export default Steps;
