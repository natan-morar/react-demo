import React, { ChangeEventHandler, useEffect, useState } from 'react';

function MultiChoice(props: { element: Frontier.Element; onChange: (value: string[], valid: boolean) => any }) {
    const [value, setValue] = useState('');
    const [list, setList] = useState<string[]>([]);
    const [valid, setValid] = useState(false);
    const [inputClass, setInputClass] = useState('');

    const validateInput = (newVal: string[]) => {
        if (props.element.metadata.required && !newVal?.length) {
            // console.error(`Input ${props.element.id} required`);
            setValid(false);
            return;
        }

        setValid(true);
    };

    useEffect(() => {
        validateInput(list);
        setValue('');
        props.onChange(list, valid);
    }, [list]);

    useEffect(() => {
        props.onChange(list, valid);
    }, [valid]);

    const onChange: ChangeEventHandler<HTMLSelectElement> = e => {
        setValue(e.target.value);

        if (e.target.value) {
            setList(val => val.concat(e.target.value));
        }
    };

    const onRemove = (which: string) => {
        setList(val => val.filter(l => l != which));
    };

    return (
        <div className="multi-choice">
            <select className={inputClass} defaultValue={value} onChange={onChange}>
                <option value="">{props.element.metadata.placeholder}</option>
                {props.element.metadata.options?.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            <div className="list">
                {list.map(l => (
                    <span key={`lang-${key}`}>
                        <label>{l}</label>
                        <button onClick={() => onRemove(l)}>-</button>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default MultiChoice;
