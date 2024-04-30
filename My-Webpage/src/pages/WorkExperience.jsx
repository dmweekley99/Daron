import React from 'react'
import "../style/WorkExperience.css"

const WorkExperience = () => {
  return (
    <div className='work-container'>
      <h1 className='underline'>
        Work Experience
      </h1>
      <div className='work-section'>
        <h2 className='underline'>
          Substitute Teacher 
        </h2>
        <h3>
          Tyler County Schools in West Virginia | 8/23-Present
        </h3>
        <p>
          As a substitute teacher in Tyler County, I work primarily in high school to help young adults advance 
          their understanding of various subjects. This experience is helping me to increase my leadership skills, 
          as well as helping me learn how to adapt to change. These changes could be anything from a forgotten lesson 
          plan to teaching a plethora of subjects a week and trying to re-learn different intricacies of the subject 
          matter that I am teaching on a particular day.
        </p>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          Ph.D. Student Researcher        
        </h2>
        <h3>
          Marshall University | 7/22 - 7/23        
        </h3>
        <p>
          As a Ph.D. student at Marshall University, I did two semesters of lab rotations. The first lab rotation was 
          in Dr. Chris Risher’s lab, studying the effects that prenatal opioid exposure has on the astrocytes of fetal 
          mice brains. This lab provided me with cell culture and animal experience. The next rotation was with Dr. Alejandro 
          Nato, in which I focused on bioinformatics and developed coding skills with R and Unix/Bash scripting. 
        </p>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          Graduate Researcher
        </h2>
        <h3>
          West Liberty University | 5/21 - 5/22
        </h3>
        <p>
          As a graduate researcher, I studied the mechanism through which thyrotoxicosis causes craniosynostosis in an avian model. 
          I was also working with histological staining of various types of cadaver tissue to determine the best methods for effectively 
          processing and staining embalmed tissue.
        </p>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          Undergraduate Researcher    
        </h2>
        <h3>
          West Liberty University | 5/19 - 3/20           
        </h3>
        <p>
          As an undergraduate researcher, I studied the <i>pilD</i> gene in <i>Francisella tularensis</i> to determine if the gene played 
          a role in the bacterium’s vulnerability to a novel strain of antibiotics called resazomycins. This research aims 
          to determine how resazomycins inhibit <i>Francisella tularensis</i> to help develop a new antibiotic to combat antibiotic 
          resistance.
        </p>
      </div>
    </div>
  )
}

export default WorkExperience