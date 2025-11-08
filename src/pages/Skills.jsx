import React from 'react';
import "../scss/Skills.scss";

const skills = [
  //frontend
  {name:"HTML/CSS", level:95, category:"frontend"},
  {name:"Javascript", level:85, category:"frontend"},
  {name:"React", level:90, category:"frontend"},
  {name:"TypeScript", level:75, category:"frontend"},
  {name:"Tailwind CSS", level:80, category:"frontend"},
  {name:"SASS", level:85, category:"frontend"},

  //backend
  {name:"Node JS", level:80, category:"backend"},
  {name:"Express JS", level:70, category:"backend"},
  {name:"MySQL", level:75, category:"backend"},
  {name:"MongoDB", level:60, category:"backend"},
  {name:"RestAPI", level:60, category:"backend"},
  {name:"C++", level:70, category:"backend"},

  //tools
  {name:"Git", level:85, category:"tools"},
  {name:"GitHub", level:85, category:"tools"},
  {name:"VS Code", level:90, category:"tools"},
]

const Skills = () => {
  return (
    <div className='Skills'>
      <h2 className='sm:text-2xl lap:text-4xl'>
        My <span className='sklls'>Skills</span>
      </h2>
      <div className="skillBox grid sm:grid-cols-1 tab:grid-cols-2 lap:grid-cols-3">
        {skills.map((skill, key) => (
          <div className='skl' key={key}>
            <div className="skillHeader">
              <span className="skillName">{skill.name}</span>
              <span className="skillLevel">{skill.level}%</span>
            </div>
            <div className="progressBar">
              <div 
                className="progressFill" 
                style={{width: `${skill.level}%`}}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
