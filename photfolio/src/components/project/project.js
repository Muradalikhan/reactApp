import React from 'react'
import p1 from '../../images/p1.jpg'

const ProjectCard = () => {
  return (
    <div className='project'>
        <img src={p1} className='project-img'/>
        <button>Demo</button>
        <button>Github</button>
    </div>
  )
}

export default ProjectCard