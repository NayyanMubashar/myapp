import React, { useState } from 'react'
import { Loop } from './Loop';


export default function Card() {
  const [activediv,setactivediv]=useState(null);
  const togglediv=(id)=>{
    setactivediv (activediv===id?null:id)
};


  return (
    <div>
      {Loop.map((div,index)=>(
        <div class="accordion-list">
          <ul>
            <li>
 <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1">
     <span>{div.number}</span> {div.title} 
     <i class="bx bx-chevron-down icon-show" onClick={()=>togglediv(div.id)}></i>
     <i class="bx bx-chevron-up icon-close" ></i></a>
<div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                {activediv===div.id &&   <p>
                  {div.content} 
                </p>}
                
              
              </div>
            </li>
            </ul>
        </div>
      ))}
       
    </div>
  )
}
