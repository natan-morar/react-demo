import React, { useState } from 'react';
import formInstructions from '../data/form_instructions.json';
import Button from './inputs/Button';
import Section from './sections/Section';

function App() {
    const job = formInstructions as Frontier.Job;

    let sectionId = 0;

    const [section, setSection] = useState(job.sections[sectionId]);
    const [sectionData, setSectionData] = useState({});
    const [buttonTitle, setButtonTitle] = useState('Next');

    const onButtonClick = () => {
        if (sectionId + 1 < job.sections.length) {
            sectionId++;
            setSection(job.sections[sectionId]);

            if (sectionId == job.sections.length - 1) {
                setButtonTitle('Submit');
            }
        }
    };

    // Check your console to see the full instructions!
    console.log(job);

    return (
        <div>
            <img
                src="https://frontier-public-assets.s3-us-west-2.amazonaws.com/frontier-corona-logo.svg"
                alt="Frontier Logo"
            />
            <h1>👋 Hello from Team Frontier!</h1>
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
