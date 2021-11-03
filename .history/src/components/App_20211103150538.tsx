import React, {useState} from "react";
import formInstructions from "../data/form_instructions.json";
import Button from "./inputs/Button";
import Section from "./sections/Section";

function App() {
  const job = formInstructions as Frontier.Job;

  const [sectionId, setSectionId] = useState(0);
  const [section, setSection] = useState(job.sections[sectionId]);

  // Check your console to see the full instructions!
  console.log(job);

  return (
    <div>
      <img src="https://frontier-public-assets.s3-us-west-2.amazonaws.com/frontier-corona-logo.svg" alt="Frontier Logo" />
      <h1>👋 Hello from Team Frontier!</h1>
      <Section section={section}></Section>
      <Button action={()=>{console.log("test"); setSectionId(sectionId+1); setSection(job.sections[sectionId])}} title="Next"></Button>
      <p>Good luck with the exercise. If you have any questions please email Jason: jason@frontier.jobs</p>
    </div>
  );
}

export default App;
