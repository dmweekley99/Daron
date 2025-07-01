import React from 'react'
import "../style/WorkExperience.css"
import "../style/Publication.css"


const WorkExperience = () => {
  return (
    <div className='work-container'>
      <h1 className='publication'>
        Work Experience
      </h1>
      <div className='work-section'>
        <h2 className='underline'>
          Software Development Intern
        </h2>
        <h3>
          Next Gen Federal Systems | 1/25 - Present
        </h3>
            <p>Develop and deploy Angular-based frontends for ML pipelines</p>
            <p>Use Docker, Kubernetes, Helm, Git, and WSL for container orchestration</p>
            <p>Enhance usability and customer satisfaction in a machine learning platform</p>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          Graduate Researcher (Computer Science)
        </h2>
        <h3>
          Marshall University | 11/24 - 06/25
        </h3>
            <p>Used PyTorch and vedo to analyze cranial landmarks in 3D mesh data</p>
            <p>Worked on decimation and segmentation tradeoffs in oral-cranial structures</p>
            <p>Published findings on efficiency and segmentation accuracy balance</p>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          Substitute Teacher 
        </h2>
        <h3>
          Tyler County Schools in West Virginia | 8/23 - Present
        </h3>
            <p>Managed classrooms and followed lesson plans across grade levels</p>
            <p>Strengthened leadership, communication, and public speaking</p>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          Ph.D. Student Researcher (Biomedical Science)    
        </h2>
        <h3>
          Marshall University | 7/22 - 7/23        
        </h3>
          <p>Developed murine-human gene database using R</p>
          <p>Focused on genetic sequencing, bioinformatics workflows</p>
          <p>Worked with cell cultures, EM imaging, and murine harvesting</p>
          <p>Co-author to published findings on the impact of murine NAS on astrocyte function.</p>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          Graduate Researcher (Biology)
        </h2>
        <h3>
          West Liberty University | 5/21 - 5/22
        </h3>
          <p>Worked on histology, dissection, lab management, sanitation protocols, statistical analysis</p>
          <p>Integrated technology to improve lab workflows</p>
      </div>
      <div className='work-section'>
        <h2 className='underline'>
          Undergraduate Researcher (Biology)
        </h2>
        <h3>
          West Liberty University | 5/19 - 3/20           
        </h3>
          <p>Developed skills using PCR, purification, sterilization, and lab management</p>
          <p>Co-author to published findings on the genetic susceptibility of bacteria to a novel antibiotic.</p>
      </div>
    </div>
  )
}

export default WorkExperience