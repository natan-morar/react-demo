import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import BooleanInput from './BooleanInput';
import MultiChoice from './MultiChoice';
import Text from './Text';
import Textarea from './Textarea';
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

    const onChange = (value: any, valid: boolean) => {
        console.log(value, valid);
    };

    const genInput = () => {
        switch (props.element.type) {
            case 'boolean':
                return <BooleanInput element={props.element} onChange={onChange} value={value as any}></BooleanInput>;

            case 'text':
                return <Text element={props.element} onChange={onChange} value={value}></Text>;

            case 'textarea':
                return <Textarea element={props.element} onChange={onChange} value={value}></Textarea>;

            case 'multichoice':
                return <MultiChoice element={props.element} onChange={onChange} value={value}></MultiChoice>;
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
