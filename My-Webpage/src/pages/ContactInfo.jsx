import React from 'react'
import "../style/WorkExperience.css"

const ContactInfo = () => {
  return (
    <div className='story-container'>
      <h1 className='underline'>Contact Me by Phone or Email</h1>
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
          dweekley99@gmail.com
        </h3>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          School Email:
        </h2>
        <h3>
          weekley49@marshall.edu
        </h3>
      </div>
    </div>
  )
}

export default ContactInfo