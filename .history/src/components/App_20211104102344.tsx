import React, { useState, useEffect } from 'react';
import formInstructions from '../data/form_instructions.json';
import Button from './inputs/Button';
import Section from './sections/Section';
import '../styles/main.scss';
import Steps from './Steps';

function App() {
    const job = formInstructions as Frontier.Job;

    const parseData = () => {
        const data: { id: string; inputs: { [key: string]: { id: string; value: any; valid: boolean } } }[] = [];
        for (let id = 0; id < job.sections?.length; id++) {
            const section = job.sections[id];
            data.push({ id: section.id, inputs: {} });

            for (const input of section.content) {
                data[id].inputs[input.id] = { id: input.id, value: '', valid: false };
            }
        }

        return data;
    };

    const [sectionId, setSectionId] = useState(0);
    const [section, setSection] = useState(job.sections[sectionId]);
    const [sectionData, setSectionData] = useState(parseData());
    const [buttonTitle, setButtonTitle] = useState('Next');

    const onButtonClick = () => {
        if (!validateData()) {
            alert('Please fill in all inputs marked with *\nMake sure that all data entered is valid');
            return;
        }

        if (sectionId + 1 < job.sections.length) {
            setSectionId(sectionId + 1);
        } else {
            console.log(sectionData);
        }
    };

    useEffect(() => {
        setSection(job.sections[sectionId]);
        if (sectionId == job.sections.length - 1) {
            setButtonTitle('Submit');
        }
    }, [sectionId]);

    // useEffect(() => {
    //     console.log(sectionData);
    // }, [sectionData]);

    const onChange = (id: string, value: any, valid: boolean) => {
        const stateCopy = Object.assign({}, sectionData);
        stateCopy[sectionId].inputs[id] = { ...stateCopy[sectionId].inputs[id], value, valid };
        setSectionData(stateCopy);
    };

    const validateData = () => {
        for (const inputKey in sectionData[sectionId].inputs) {
            if (!inputKey) {
                continue;
            }

            const input = sectionData[sectionId].inputs[inputKey];

            if (!input.valid) {
                return false;
            }
        }

        return true;
    };

    return (
        <div className="app-container">
            <Steps current={sectionId + 1} total={job.sections.length}></Steps>
            <Section section={section} onChange={onChange}></Section>
            <Button
                action={() => {
                    onButtonClick();
                }}
                title={buttonTitle}
            ></Button>
        </div>
    );
}

export default App;
