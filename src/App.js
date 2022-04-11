import './App.css';
import { useState } from "react";

function App() {
  const [school, setSchool] = useState(false);
  const [college, setCollege] = useState(false);
  const [intern, setIntern] = useState(false);
  const [project, setProject] = useState(false);
  const [skill, setSkill] = useState(false);

  function changeSchoolDisplay() {
    setSchool(!school);
  }

  function changeCollegeDisplay() {
    setCollege(!college);
  }

  function changeInternDisplay() {
    setIntern(!intern);
  }

  function changeProjectDisplay() {
    setProject(!project);
  }

  function changeSkillDisplay() {
    setSkill(!skill);
  }

  let schoolInfo = <></>;
  if (school) {
    schoolInfo = 
    <div className="info">
      <a className="title" href="https://www.cornerstone-academy.net/" target="_blank">Cornerstone Academy</a>
      <span>/</span>
      <a className="title" href="https://www.cambridgeprep.org/" target="_blank">Cambridge International Preparatory School</a>
    </div>;
  }

  let collegeInfo = <></>;
  if (college) {
    collegeInfo = 
    <div className="info">
      <a className="title" href="https://www.ucdavis.edu/" target="_blank">University of California, Davis</a>
    </div>;
  }

  let internInfo = <></>;
  if (intern) {
    internInfo = 
    <div className="info">
      <a className="title" href="https://www.aboutamazon.com/" target="_blank">Amazon.com, Inc.</a>
      <div className="subtitle">Software Dev Engineer I Intern (from July 06, 2021 to September 24, 2021)</div>
    </div>;
  }

  let projectInfo = <></>;
  if (project) {
    projectInfo = 
    <div className="info">
      <a className="title" href="http://www.uccesurveyresults.com/" target="_blank">ECS 193A/B: Senior Design Project</a>
    </div>;
  }

  let skillInfo = <></>;
  if (skill) {
    skillInfo = 
    <div className="info">
      <div>Placeholder</div>
    </div>;
  }

  return (
    <main>
      <h1>Darin Lee</h1>
      <div id="contactInfo">
        <a href="mailto: darinlee888@gmail.com">darinlee888@gmail.com</a>
        <a href="https://github.com/darinlee888" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/darin-lee-3486031b1/" target="_blank">LinkedIn</a>
        <div id="phone">Phone: (415) 928-9213</div>
      </div>
      <div id="resume">
        <button onClick={changeSchoolDisplay}>High School</button>
        {schoolInfo}
        <button onClick={changeCollegeDisplay}>College</button>
        {collegeInfo}
        <button onClick={changeInternDisplay}>Internship</button>
        {internInfo}
        <button onClick={changeProjectDisplay}>Projects</button>
        {projectInfo}
        <button onClick={changeSkillDisplay}>Skills</button>
        {skillInfo}
      </div>
    </main>
  );
}

export default App;
