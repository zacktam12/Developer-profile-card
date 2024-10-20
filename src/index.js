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
      <Skill skill="JavaScript" emoji="😊" color="red" />
      <Skill skill="React" emoji="👌" color="blue" />
      <Skill skill="HTML + CSS" emoji="😎" color="green" />
      <Skill skill="Git and github" emoji="😍" color="yellow" />
      <Skill skill="Svelte" emoji="👍" color="grey" />
      <Skill skill="Web Design" emoji="🙌" color="red" />
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
