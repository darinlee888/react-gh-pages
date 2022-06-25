import './App.css';
import { useState } from "react";

function App() {
  const [school, setSchool] = useState(false);
  const [college, setCollege] = useState(false);
  const [intern, setIntern] = useState(false);
  const [project, setProject] = useState(false);
  const [work, setWork] = useState(false);

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

  function changeWorkDisplay() {
   setWork(!work);
  }

  let schoolInfo = <></>;
  if (school) {
    schoolInfo = 
    <div className="info">
      <a className="title" rel="noreferrer" href="https://www.cornerstone-academy.net/" target="_blank">Cornerstone Academy</a>
      <span className="title">/</span>
      <a className="title" rel="noreferrer" href="https://www.cambridgeprep.org/" target="_blank">
        Cambridge International Preparatory School
      </a>
      <span className="title"> (from August 2014 to May 2018)</span>
      <div className="subtitle">Coursework:</div>
      <ul className="description">
        <li>AP English Language and Composition (2016, 3)</li>
        <li>AP European History (2016, 3)</li>
        <li>AP Physics 1: Algebra-Based (2016, 4)</li>
        <li>AP Chemistry (2017, 4)</li>
        <li>AP Chinese Language and Culture (2017, 4)</li>
        <li>AP United States History (2017, 3)</li>
        <li>AP Calculus AB (2018, 5)</li>
        <li>AP Calculus BC (2018, 5)</li>
        <li>AP Computer Science A (2018, 5)</li>
        <li>AP English Literature and Composition (2018, 3)</li>
        <li>AP Environmental Science (2018, 4)</li>
        <li>AP Macroeconomics (2018, 5)</li>
        <li>AP Microeconomics (2018, 5)</li>
        <li>AP Psychology (2018, 5)</li>
        <li>AP Statistics (2018, 3)</li>
      </ul>
      <div className="subtitle">Extracurriculars:</div>
      <ul className="description">
        <li>Student Council:</li>
        <ul>
          <li>Grade Representative (2014-2016)</li>
          <li>Chapel Coordinator (2016-2017)</li>
          <li>Secretary (2017-2018)</li>
        </ul>
        <li>Athletics:</li>
        <ul>
          <li>Soccer (2015-2016)</li>
          <li>Basketball (2014-2018)</li>
        </ul>
        <li>Mahjong Club (2015-2018)</li>
        <li>Super Smash Bros. Club (2016-2018)</li>
        <li>Theatre/Drama (Including Shooter, 2017)</li>
        <li>Mock Trial (2017-2018)</li>
      </ul>
      <div className="subtitle">Awards and Affiliations:</div>
      <ul className="description">
        <li>
          Departmental Awards (given to the student who best demonstrate passion, capability, and achievement in that discipline):
        </li>
        <ul>
          <li>Religious Studies (2016)</li>
          <li>Chemistry (2017)</li>
          <li>Computer Science (2018)</li>
          <li>Mathematics (2018)</li>
        </ul>
        <li>Advanced Placement:</li>
        <ul>
          <li>AP Scholar (2016) - scores of 3 or higher on three or more AP Exams</li>
          <li>
            AP Scholar With Distinction (2017) - an average score of at least 3.5 on all AP Exams taken, and scores of 3 or 
            higher on five or more of these exams.
          </li>
          <li>
            National AP Scholar (2018) - an average score of at least 4 on all AP Exams taken, and scores of 4 or higher on 
            eight or more of these exams.
          </li>
        </ul>
        <li>
          Head's List (2018) - seniors with an overall grade point average of 4.00 or greater during their attendance at 
          Cambridge International Preparatory School
        </li>
        <li>Founder's Award (2018) - the senior who best combines educational passion with Christian ideals</li>
        <li>Valedictorian (2018)</li>
        <li>National Honor Society (2018)</li>
      </ul>
    </div>;
  }

  let collegeInfo = <></>;
  if (college) {
    collegeInfo = 
    <div className="info">
      <a className="title" rel="noreferrer" href="https://www.ucdavis.edu/" target="_blank">University of California, Davis</a>
      <span className="title"> (from September 2018 to June 2022)</span>
      <div className="subtitle">Degree: Bachelor's of Science (B.S.)</div>
      <div className="subtitle">Major: Computer Science and Engineering (CSE)</div>
      <div className="subtitle">GPA: 3.8</div>
      <div className="subtitle">UC Davis College of Engineering Dean’s Honors List:</div>
      <ul className="description">
        <li>Winter Quarter 2019</li>
        <li>Spring Quarter 2019</li>
        <li>Fall Quarter 2019</li>
        <li>Spring Quarter 2020</li>
        <li>Fall Quarter 2020</li>
        <li>Fall Quarter 2021</li>
      </ul>
      <div className="subtitle">Coursework:</div>
      <ul className="description">
        <li>ECS 36A: Programming (Python, Linux, Git, Rust)</li>
        <li>ECS 36B: Object-Oriented Programming (C, C++, CMake, Google Test)</li>
        <li>ECS 50: Machine Dependent Programming (Make)</li>
        <li>ECS 36C: Data Structures</li>
        <li>ECS 154A: Computer Architecture</li>
        <li>ECS 154B: Computer Architecture (Scala, Singularity)</li>
        <li>ECS 132: Probability and Statistical Modeling for CS (R)</li>
        <li>ECS 140A: Programming Languages (Go)</li>
        <li>ECS 152A: Computer Networks</li>
        <li>ECS 162: Web Programming (HTML, CSS, JavaScript, Node.js, REST APIs, SQLite, React.js, D3.js)</li>
        <li>ECS 122A: Algorithm Design and Analysis</li>
        <li>ECS 150: Operating Systems (Docker)</li>
        <li>ECS 160: Software Engineering (Java, JUnit)</li>
        <li>ECS 122B: Algorithm Design and Analysis</li>
      </ul>
    </div>;
  }

  let internInfo = <></>;
  if (intern) {
    internInfo = 
    <div className="info">
      <a className="title" rel="noreferrer" href="https://www.aboutamazon.com/" target="_blank">Amazon.com, Inc.</a>
      <span className="title"> (from July 2021 to September 2021)</span>
      <div className="subtitle">Software Dev Engineer I Intern (Consumer Payments, Payments Security)</div>
      <ul className="description">
        <li>Wrote a user-friendly script to automate the dynamic configuration update process for technicians (Python)</li>
        <li>Wrote integration tests for the team's development pipelines, speeding up the deployment process (Java, AWS)</li>
      </ul>
    </div>;
  }

  let projectInfo = <></>;
  if (project) {
    projectInfo = 
    <div className="info">
      <a className="title" rel="noreferrer" href="http://www.uccesurveyresults.com/" target="_blank">
        ECS 193A/B: Senior Design Project
      </a>
      <span className="title"> (from January 2022 to June 2022)</span>
      <ul className="description">
        <li>Interactive website with data visualizations displaying the results of a survey conducted by our client</li>
        <li>Technologies Used: HTML, CSS, JavaScript, React.js, D3.js</li>
      </ul>
    </div>;
  }

  let workInfo = <></>;
  if (work) {
    workInfo = 
    <div className="info">
      <div>Placeholder</div>
    </div>;
  }

  return (
    <main>
      <h1>Darin Lee</h1>
      <div id="contactInfo">
        <a href="mailto: darinlee888@gmail.com">darinlee888@gmail.com</a>
        <a rel="noreferrer" href="https://github.com/darinlee888" target="_blank">GitHub</a>
        <a rel="noreferrer" href="https://www.linkedin.com/in/darin-lee-3486031b1/" target="_blank">LinkedIn</a>
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
        <button onClick={changeWorkDisplay}>Work</button>
        {workInfo}
        <br></br>
        <br></br>
      </div>
    </main>
  );
}

export default App;
