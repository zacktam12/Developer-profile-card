import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "Advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "Advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and github",
    level: "Intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#E84F3B",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3BBB",
  },
];
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

function Avatar() {
  return <img className="avatar" src="zack.jpg" alt="Avatar" />;
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

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
