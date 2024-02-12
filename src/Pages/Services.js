import React from 'react'
import Card2 from '../components/Card2'
import { Loop,language,service } from '../components/Loop'

export default function Service() {
  return (
    <div>
    
      <section id="services" class="services section-bg">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Services</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className="container">
      <div className="row">
        {service.map((item, index) => (
          <div key={index} className="col-md-3">
            {/* Adjust the column size based on your requirements */}
          
              <Card2
              name={item.name}
              dis={item.dis}
              icon={item.icon}
              
              />
      
          </div>
        ))}
      </div>
    </div> 

  </div>
</section>
    </div>
  )
}
