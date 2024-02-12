import { Collapse } from 'bootstrap'
import React from 'react'
import { question } from '../components/Loop'

export default function Toggletest() {
  return (
    <div>
      {question.map((val,index)=>(
        <div key={index}>
<button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}
aria-expanded="true" aria-controls={`collapse${index}`}>
Toggle

</button>
<div className='collapse' id={`collapse${index}`}>
   {val.content}
    </div>

            </div>
      ))}
    </div>
  )
}
