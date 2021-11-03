import React, { useState } from 'react';
import formInstructions from '../data/form_instructions.json';
import Button from './inputs/Button';
import Section from './sections/Section';
import '../styles/main.css';
import Steps from './Steps';

function App() {
    const job = formInstructions as Frontier.Job;

    // let sectionId = 0;

    const [sectionId, setSectionId] = useState(0);
    const [section, setSection] = useState(job.sections[sectionId]);
    const [sectionData, setSectionData] = useState({});
    const [buttonTitle, setButtonTitle] = useState('Next');

    const onButtonClick = () => {
        if (sectionId + 1 < job.sections.length) {
            if (sectionId + 1 == job.sections.length - 1) {
                setButtonTitle('Submit');
            }

            setSectionId(sectionId + 1);
            setSection(job.sections[sectionId]);
        }
    };

    // Check your console to see the full instructions!
    console.log(job);

    return (
        <div className="app-container">
            <h1>👋 Hello from Team Frontier!</h1>
            <Steps current={sectionId + 1} total={job.sections.length}></Steps>
            <Section section={section} data={sectionData}></Section>
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
