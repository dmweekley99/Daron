import React from 'react'
import "../style/WorkExperience.css"
import "../style/Publication.css"

const ContactInfo = () => {
  return (
    <div className='story-container'>
      <h1 className='publication'>Contact Me by Phone or Email</h1>
      <div className='work-section'>
        <h2 className='underline'>
          Phone:
        </h2>
        <h3>
          (304) 299-3023
        </h3>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          Personal Email: 
        </h2>
        <h3>
          <a href="mailto:dweekley99@gmail.com">dweekley99@gmail.com</a>
        </h3>
      </div>
    </div>
  )
}

export default ContactInfo