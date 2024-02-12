import React from 'react'

export default function Card4(props) {
  return (
    <div>
            <div class="" data-aos="fade-up" data-aos-delay="100">
        <div class="box">
          <h3>{props.name}</h3>
          <h4><sup>$</sup>{props.span}<span>per month</span></h4>
          <ul>
            <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
            <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
            <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
            <li class="na"><i class="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
            <li class="na"><i class="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
          </ul>
          <a href="#" class="buy-btn">Get Started</a>
        </div>
      </div>
    </div>
  )
}
