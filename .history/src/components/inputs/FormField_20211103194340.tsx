import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import BooleanInput from './BooleanInput';
import MultiChoice from './MultiChoice';
// import '../../styles/main.css';

function FormField(props: { element: Frontier.Element; value?: any }) {
    const [value, setValue] = useState('');
    const [inputClass, setInputClass] = useState('');

    const validateInput = (newVal: string | boolean) => {
        if (props.element.metadata.required && !newVal) {
            console.error(`Input ${props.element.id} required`);
        }

        if (props.element.metadata.pattern) {
            const match = (newVal as string).match(new RegExp(props.element.metadata.pattern));

            if (match) {
                setInputClass('');
                return;
            }

            console.error(`Make sure you enter valid data for ${props.element.id}`);
            setInputClass('invalid');
        }
    };

    const onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any> = e => {
        setValue(e.target.value);
        validateInput(e.target.value);

        console.log(e.target.value);
    };

    const genInput = () => {
        switch (props.element.type) {
            case 'boolean':
                // return <input type="checkbox" className={inputClass} onChange={onChange} value={value}></input>;
                return <BooleanInput onChange={onChange} value={value as any}></BooleanInput>;

            case 'text':
                return (
                    <input
                        type="text"
                        className={inputClass}
                        onChange={onChange}
                        value={value}
                        placeholder={props.element.metadata.placeholder}
                    ></input>
                );

            case 'textarea':
                return (
                    <textarea
                        className={inputClass}
                        onChange={onChange}
                        value={value}
                        placeholder={props.element.metadata.placeholder}
                    ></textarea>
                );

            case 'multichoice':
                return <MultiChoice element={props.element} onChange={() => {}} value={value}></MultiChoice>;
        }
    };

    return (
        <div className="form-field">
            <label>{props.element.question_text}</label>
            {genInput()}
        </div>
    );
}

export default FormField;
