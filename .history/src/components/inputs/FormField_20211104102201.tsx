import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import BooleanInput from './BooleanInput';
import MultiChoice from './MultiChoice';
import Text from './Text';
import Textarea from './Textarea';
// import '../../styles/main.css';

function FormField(props: { element: Frontier.Element; onChange: (id: string, value: any, valid: boolean) => any }) {
    const [value, setValue] = useState('');

    const onChange = (value: any, valid: boolean) => {
        // console.log(value, valid);
        props.onChange(props.element.id, value, valid);
    };

    const genInput = () => {
        switch (props.element.type) {
            case 'boolean':
                return <BooleanInput element={props.element} onChange={onChange} value={value}></BooleanInput>;

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
            <span>
                <label>{props.element.question_text}</label>
                <label className="required">{props.element.metadata.required ? '*' : ''}</label>
            </span>
            {genInput()}
        </div>
    );
}

export default FormField;
