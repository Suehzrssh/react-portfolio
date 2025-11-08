import React from 'react';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import "../scss/About.scss";

const About = () => {
  return (
    <div className='About sm:p-4 lap:p-0'>
      <h1 className="abMe sm:text-2xl lap:text-4xl">about <span className='me'>me</span></h1>
      <div className="aboutMid sm:flex-col tab:flex-row sm:w-full tab:w-2/3">
        <div className="left sm:w-full lap:w-1/2">
          <h2 className='text-2xl'>passionate web developer</h2>
          <p>
            I’m a passionate developer with years of experience turning ideas into practical projects. I enjoy solving problems, building clean and efficient applications.
          </p>

          <p>
            My goal is to combine creativity and functionality in every project, whether it’s a small feature or a full-scale application.
          </p>
          <div className="btns sm:flex-col lap:flex-row">
            <button className='touch'>get in touch</button>
            <button className='cvBtn'>Download CV</button>
          </div>
        </div>
        <div className="right sm:w-full lap:w-1/2">
          <div className="box">
            <div className="logo">
              <CodeIcon />
            </div>
            <div className="texts">
              <h3>web development</h3>
              <h5>Creating responsive web sites and applications with modern frameworks.</h5>
            </div>
          </div>
          <div className="box">
            <div className="logo">
              <PersonIcon />
            </div>
            <div className="texts">
              <h3>UI/UX Design</h3>
              <h5>Designing intuitive user interfaces and user experiences.</h5>
            </div>
          </div>
          <div className="box">
            <div className="logo">
              <AccountTreeIcon />
            </div>
            <div className="texts">
              <h3>Project Management</h3>
              <h5>Leading projects from conception to the completion with agile methodology.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;