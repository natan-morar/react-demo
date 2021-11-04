import React, { useState, useEffect } from 'react';
import formInstructions from '../data/form_instructions.json';
import Button from './inputs/Button';
import Section from './sections/Section';
import '../styles/main.scss';
import Steps from './Steps';

function App() {
    const job = formInstructions as Frontier.Job;

    const parseData = () => {
        const data: { id: string; inputs: {[key: string]:{ id: string; value: any; valid: boolean }} }[] = [];
        for (let id = 0; id < job.sections?.length; id++) {
            const section = job.sections[id];
            data.push({ id: section.id, inputs: {} });

            for (const input of section.content) {
                data[id].inputs[input.id]={ id: input.id, value: '', valid: false };
            }
        }

        return data;
    };

    const [sectionId, setSectionId] = useState(0);
    const [section, setSection] = useState(job.sections[sectionId]);
    const [sectionData, setSectionData] = useState(parseData());
    const [buttonTitle, setButtonTitle] = useState('Next');

    const onButtonClick = () => {
        if (sectionId + 1 < job.sections.length) {
            setSectionId(sectionId + 1);
        }
    };

    useEffect(() => {
        setSection(job.sections[sectionId]);
        if (sectionId == job.sections.length - 1) {
            setButtonTitle('Submit');
        }
    }, [sectionId]);

    useEffect(() => {
        console.log(sectionData);
        checkData();
    }, [sectionData]);

    // Check your console to see the full instructions!
    console.log(job);

    const onChange = (id: string, value: any, valid: boolean) => {
        console.log(sectionId, id, value, valid);
        setSectionData([...sectionData,sectionData[sectionId].inputs);
    };

    const checkData = () => {};

    return (
        <div className="app-container">
            <Steps current={sectionId + 1} total={job.sections.length}></Steps>
            <Section section={section} onChange={onChange}></Section>
            <Button
                action={() => {
                    console.log('test', sectionId, section);
                    onButtonClick();
                }}
                title={buttonTitle}
            ></Button>
        </div>
    );
}

export default App;
