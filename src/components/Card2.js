import React from 'react'

export default function Card2(props) {
  return (
    <div>
       <div class="d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
        <div class="icon-box">
          <div class="icon"><i class={props.icon}></i></div>
          <h4><a href="">{props.name}</a></h4>
          <p>{props.dis}</p>
        </div>
      </div>
   </div>
  )
}
