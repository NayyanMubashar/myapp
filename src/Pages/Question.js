import React from 'react'
import { Loop,language,service,Team2,price, question } from '../components/Loop'
import Card4 from '../components/Card4'
import { useState } from 'react';

export default function Question() {
  const [activediv,setactivediv]=useState(null);
  const togglediv=(id)=>{
    setactivediv (activediv===id?null:id)
};

  return (
    <div>
      <section id="pricing" class="pricing">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Pricing</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
<div className='container'>
    <div class="row">
{price.map((val,index)=>(
  <div key={index} className='col-md-4'>

  <Card4
  name={val.name}
  span={val.span}
  
  />
</div>

))}

     
</div>
    </div>

  </div>
</section>
<section id="faq" class="faq section-bg">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Frequently Asked Questions</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    {question.map((val)=>(
      <div>
      <div class="faq-list">
      <ul>
        <li data-aos="fade-up" data-aos-delay="50">
        <i class="bx bx-help-circle icon-help" style={{marginLeft:'-930px',fontSize:'1.7rem'}}></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">{val.title} <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close" onClick={()=>togglediv(val.id)}></i></a>
          <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
          {activediv===val.id &&   <p>
                  {val.content} 
                </p>}
          </div>
        </li>

      

        

      </ul>
    </div></div>
    ))}

    

  </div>
</section>
    </div>
  )
}
