import React from 'react';
import "../scss/Projects.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import calculator from "../projects/calculator.png";
import kitchen from "../projects/kitchen.png";
import pulse from "../projects/pulse.png";

const projects = [
  {
    id: 1,
    title: "calculator",
    description: "A sleek, customizable calculator designed for everyday use",
    image: calculator,
    demoUrl: "#",
    gitHub: "#"
  },
   {
    id: 2,
    title: "interior design",
    description: "Discover the art of living well through design",
    image: kitchen,
    demoUrl: "#",
    gitHub: "#"
  },
   {
    id: 3,
    title: "Pulse",
    description: "Perfect for growing businesses ready to take control.",
    image: pulse,
    demoUrl: "#",
    gitHub: "#"
  },
]

const Projects = () => {
  return (
    <div className='Projects sm:pb-16 lap:pb-36 sm:pr-6 lap:pr-52 sm:pl-6 lap:pl-52'>
      <h2 className='sm:text-2xl lap:text-4xl'>featured <span className='prj'>projects</span></h2>
      <p className='sm:pr-4 lap:pr-32 sm:pl-4 lap:pl-32'>
        Here are some of my recent projects. Each of them was carefully crafted with attention of detail and user experience
      </p>
      <div className="projectBox grid grid-cols-1 tab:grid-cols-2 lap:grid-cols-3">
        {projects.map((proj, key) => {
          return (
            <div className="proj p-2" key={key}>
              <div className="imgs h-22">
                <img src={proj.image} alt={proj.title} loading='lazy' />
              </div>
              <div className="explain w-full">
                <h3 className='text-xl lap:text-2xl'>{proj.title}</h3>
                <h4 className='text-sm p-8'>{proj.description}</h4>

                <div className="linkBtns">
                  <a href={proj.demoUrl} target='_blank'> <GitHubIcon /> </a>
                  <a href={proj.gitHub} target='_blank'> <PodcastsIcon /> </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="ghPage">
        <a className='aLink' href="https://github.com/Suehzrssh" target="_blank">check my github</a>
        <KeyboardDoubleArrowRightIcon />
      </div>
    </div>
  )
}

export default Projects;