import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Zekarias Tamiru</h1>
      <p>
        My name is Zekarias Tamiru. I'm a Software Engineering student at
        Haramaya University/Ethiopia, and I'm a passionated front-end developer.
      </p>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="zack.jpg" alt="Avatar" />; // Added alt attribute for accessibility
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="JavaScript" />
      <Skill skill="React" />
      <Skill skill="HTML + CSS" />
      <Skill skill="Git and github" />
      <Skill skill="Svelte" />
      <Skill skill="Web Design" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
