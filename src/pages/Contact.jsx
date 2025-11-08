import React, { useState } from 'react';
import "../scss/Contact.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationPinIcon from '@mui/icons-material/LocationOn'; // Note: Correct import name
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Optional: Validate email format (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    // Simulate sending message
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <div className="Contact sm:p-4 lap:p-0">
      <ToastContainer position="bottom-right" autoClose={2500} />
      
      <h2 className='get sm:text-2xl lap:text-4xl'>get in <span className='tch'>touch</span></h2>
      <p className='getp sm:pr-4 lap:pr-36 sm:pl-4 lap:pl-36'>
        Have a project in mind or want to collaborate? Feel free to reach out. I am always open to discussing new opportunities.
      </p>
      <section className='conSec sm:flex-col lap:flex-row sm:gap-16 lap:gap-40'>
        <div className="left">
          <h3 className='sm:text-xl lap:text-2xl'>contact information</h3>
          <div className="leftBox">
            <div className="leftIcon"><EmailIcon /></div>
            <div className="txts">
              <h3>Email</h3>
              <h4>suehzrssh.12@gmail.com</h4>
            </div>
          </div>
          <div className="leftBox">
            <div className="leftIcon"><PhoneIcon /></div>
            <div className="txts">
              <h3>Phone</h3>
              <h4>+90 (123) 456 7889</h4>
            </div>
          </div>
          <div className="leftBox">
            <div className="leftIcon"><LocationPinIcon /></div>
            <div className="txts">
              <h3>location</h3>
              <h4>Istanbul, TR</h4>
            </div>
          </div>

          <div className="connect">
            <h3>connect with me</h3>
            <div className="conicon">
              <a href="https://www.instagram.com/_syntaxia_/" target='_blank' rel="noreferrer"><InstagramIcon /></a>
              <a href="#" rel="noreferrer"><LinkedInIcon /></a>
              <a href="https://github.com/Suehzrssh" target='_blank' rel="noreferrer"><GitHubIcon /></a>
            </div>
          </div>
        </div>
        <div className="right">
          <h2 className='sm:text-xl lap:text-2xl'>Send a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="inp">
              <label htmlFor="name">your name</label>
              <input
                className='w-80 h-10'
                type="text"
                id="name"
                name="name"
                placeholder='e.g. John Doe'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="inp">
              <label htmlFor="email">your email</label>
              <input
                className='w-80 h-10'
                type="email"
                id="email"
                name="email"
                placeholder='e.g. doe@example.com'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="inp">
              <label htmlFor="message">your message</label>
              <textarea
                className='w-80 h-20'
                id="message"
                name="message"
                placeholder='I would like to say about...'
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className='msgBtn w-80 h-10'>
              send message <SendIcon />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
