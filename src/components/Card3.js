import React from 'react'

export default function Card3(props) {
  return (
    <div>
      <div class="col-lg-12" data-aos="zoom-in" data-aos-delay="100">
  <div class="member d-flex align-items-start">
    <div class="pic"><img src={props.image} class="img-fluid" alt=""/></div>
    <div class="member-info">
      <h4>{props.name}</h4>
      <span>{props.span}</span>
      <p>{props.dis}</p>
      <div class="social">
        <a href=""><i class="ri-twitter-fill"></i></a>
        <a href=""><i class="ri-facebook-fill"></i></a>
        <a href=""><i class="ri-instagram-fill"></i></a>
        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
