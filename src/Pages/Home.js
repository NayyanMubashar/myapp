import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from './About'
import Card from '../components/Card'
import { Loop,language,service} from '../components/Loop'
import Card1 from '../components/Card1'
import Service from './Services'
import Portfolio from './Portfolio'
import Team from './Team'
import Contact from './Contact'

import Toggletest from './Toggletest'

export default function Home() {
  return (
    <div>
        <Header/>
    
      <section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>Better Solutions For Your Business</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <div class="d-flex justify-content-center justify-content-lg-start">
        <a href="#about" class="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src="assets/img/hero-img.png" class="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>

<About/>


<section id="why-us" class="why-us section-bg">
  <div class="container-fluid" data-aos="fade-up">

    <div class="row">

      <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

        <div class="content">
          <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
        </div>

      <Card/>

      </div>

      <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: "url(assets/img/why-us.png)"}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
    </div>

  </div>
</section>
<section id="skills" class="skills">
  <div class="container" data-aos="fade-up">

    <div class="row">
      <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
        <img src="assets/img/skills.png" class="img-fluid" alt=""/>
      </div>
      <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
        <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>

        <div class="skills-content">
{language.map((val)=>{
  return(<>
  <Card1
  lang={val.lang}
  per={val.per}
  progress={val.progress}
  
  
  />
  </>)
})}

        </div>

      </div>
    </div>

  </div>
</section>

<Service/>
<Portfolio/>
<Team
/>

<Contact/>
<Toggletest/>

<Footer/>
    </div>

  )
}
