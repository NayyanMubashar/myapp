import React from 'react'
import Question from './Question'
import Card2 from '../components/Card2'
import { Loop,language,service,Team2,price } from '../components/Loop'
import Card3 from '../components/Card3'

export default function Team() {
  return (
    <div>
      <section id="team" class="team section-bg">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Team</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
<div className='container'>
    <div class="row">

{Team2.map((val,index)=>(
  <div key={index} className='col-md-6'>

<Card3
name={val.name}
span={val.span}
dis={val.dis}
image={val.image}/>

    </div>

))}
</div>


</div>

  </div>
</section>
<Question/>
    </div>
  )
}
