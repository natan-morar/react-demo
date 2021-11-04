import React, { ChangeEventHandler, useEffect, useState } from 'react';

function MultiChoice(props: {
    element: Frontier.Element;
    onChange: (value: string, valid: boolean) => any;
    value: string;
}) {
    const [value, setValue] = useState('');
    const [list, setList] = useState<string[]>([]);
    const [valid, setValid] = useState(false);
    const [inputClass, setInputClass] = useState('');

    const validateInput = (newVal: string) => {
        if (props.element.metadata.required && !newVal) {
            console.error(`Input ${props.element.id} required`);
            setValid(false);
            return;
        }

        if (props.element.metadata.pattern) {
            const match = newVal.match(new RegExp(props.element.metadata.pattern));

            if (match) {
                setInputClass('');
                setValid(true);
                return;
            }

            console.error(`Make sure you enter valid data for ${props.element.id}`);
            setInputClass('invalid');
            setValid(false);
            return;
        }

        setValid(true);
    };

    useEffect(() => {
        validateInput(value);
        props.onChange(value, valid);
    }, [value]);

    useEffect(() => {
        props.onChange(value, valid);
    }, [valid]);

    const onChange: ChangeEventHandler<HTMLSelectElement> = e => {
        setValue(e.target.value);
        validateInput(e.target.value);

        if (e.target.value) {
            setList(val => val.concat(e.target.value));
        }
    };

    const onRemove = (which: string) => {
        setList(val => val.filter(l => l != which));
    };

    return (
        <div className="multi-choice">
            <select className={inputClass} value={value} onChange={onChange}>
                <option value="" selected>
                    {props.element.metadata.placeholder}
                </option>
                {props.element.metadata.options?.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            <div className="list">
                {list.map(l => (
                    <span>
                        <label>{l}</label>
                        <button onClick={() => onRemove(l)}>-</button>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default MultiChoice;
