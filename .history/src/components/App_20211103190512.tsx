import React, { useState, useEffect } from 'react';
import formInstructions from '../data/form_instructions.json';
import Button from './inputs/Button';
import Section from './sections/Section';
import '../styles/main.css';
import Steps from './Steps';

function App() {
    const job = formInstructions as Frontier.Job;

    let _sectionId = 0;

    const [section, setSection] = useState(job.sections[_sectionId]);
    const [sectionId, setSectionId] = useState(0);
    const [sectionData, setSectionData] = useState({});
    const [buttonTitle, setButtonTitle] = useState('Next');

    const onButtonClick = () => {
        if (sectionId + 1 < job.sections.length) {
            setSectionId(sectionId + 1);
        }
    };

    useEffect(() => {
        setSection(job.sections[_sectionId]);
        if (_sectionId == job.sections.length - 1) {
            setButtonTitle('Submit');
        }
    });

    // Check your console to see the full instructions!
    console.log(job);

    return (
        <div className="app-container">
            <Steps current={sectionId + 1} total={job.sections.length}></Steps>
            <Section section={section} data={sectionData}></Section>
            <Button
                action={() => {
                    console.log('test', _sectionId, section);
                    onButtonClick();
                }}
                title={buttonTitle}
            ></Button>
        </div>
    );
}

export default App;
