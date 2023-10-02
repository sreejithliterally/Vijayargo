import React, {useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import {  Pagination } from 'swiper/modules';


import './home.css';
import bluehero from '../images/bluehero.png'

import qc4 from '../images/qc 4.png'
import herofix from '../images/herofix.png'
import carpet from '../images/carpet.png'
import stain from '../images/stain.png'
import saree from '../images/sareepol.png'
import qc1 from '../images/qc1.png'
import qc3 from '../images/qc3.png'
import qcog from '../images/qcreal.png'
import ogfix from '../images/ogfix.png'
import newhero from '../images/newherofix.png'
import section from '../images/newreal.png'

import vlogo from '../images/vlogo.png'
import orgfert from '../images/organicfert.jpg'
import chemfert from '../images/chemfert.jpg'
import insect from '../images/insect.jpg'
import pest from '../images/pesticide.jpg'
import seed from '../images/seed.jpg'
import tool from '../images/tool.jpg'
import sec from '../images/sec.png'







import pc1 from '../images/testimonials/1.jpeg'
import pc2 from '../images/testimonials/8.jpg'
import pc6 from '../images/testimonials/4.jpg'
import pc7 from '../images/testimonials/3.jpg'
import sam from '../images/testimonials/sam.jpeg'
import aravind from '../images/testimonials/aravind.jpeg'
import arun from '../images/testimonials/arun.jpeg'
import arya from '../images/testimonials/arya.jpeg'


import dryclean from '../images/dryclean.png'
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  


  
  return (
    <div>
      <header>
        <a href='#' className='logo'>
        <img src={vlogo} alt="quickclean logo" style={{ width: '20%', height: 'auto' }} />
        
        </a>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} style={{ maxHeight: isMenuOpen ? '230px' : '0' }}>
          <a className="active" href='#home'>Home</a>
          <a href='#about'>About us</a>
          <a href='#services'>Services</a>
          <a href='#contact'>Contact us</a>
        </nav>

        <div className='icons'>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} id="menu-bars" onClick={toggleMenu}></i>
        </div>
      </header>
      <section className='home' id="home">
        <div className='home-slider'>
          <div className="wrapper">
            <div className="slide">
              <div className="content">
                <div className='hero-fix'>
              {/* <span className='span-text'>Committed for your Agricultural Solutions</span> */}
                {/* <h3>Quick Clean</h3> */}
                <div className='hero-image'>
                <img src={vlogo} alt='card' style={{ width: '60%', height: 'auto' }}/>
                </div>
                </div>
               

              </div>
              {/* <div className='time-image'>
<img src={time} className='time' alt="quickclean logo" />
</div> */}

              <div className='image'>
  {/* <img src={newhero} alt="quickclean logo" style={{ width: '100%', height: 'auto' }} /> */}
  <div className="herotext">
    <h1>Vijay Agro Services</h1>
  </div>

  <div className='text-button-hero'>
                  {/* <div className='hero-p'>
              <p> Want to enquire about anything?</p>
                </div> */}
                {/* <p>Where Cleanliness Meets Convenience</p> */}
                <div className="btn-adjust">
  <a
    href="https://wa.me/+919846278353?text=Hi, I want to enquire about your service."
    className="rounded-button" // Apply the 'rounded-button' class here
    style={{ marginLeft: '14rem' }}
  >
    <i class="fab fa-whatsapp"></i> Whatsapp Us
  </a>
</div>
</div>

</div>

            <div className='time'>
</div>

            </div>
          </div>
        </div>

      </section>


      {/* <div className="responsive-image-section">
      <h3 className="sub-heading">How we work</h3>
        <h1 className="heading">From the root to the leaf</h1>
      <img src={section}  className="responsive-image" alt='test'/>

    </div> */}

{/* <div className="responsive-image-section">
      <h3 className="sub-heading">How we work</h3>
      <h1 className="heading">From the root to the leaf</h1>
      <img src={section}  className="responsive-image" alt='test'/>
    </div> */}


    


      <section className='services' id='services'>
        <h3 className="sub-heading">Authorized Wholesale & retail Dealer </h3>
        <h1 className="heading">Our Solutions</h1>
        <div className="box-container">
          <div className="box">
            <img src={orgfert} alt='card'/>
            <h3>Organic Fertilizers</h3>
            <p> Ivde enthengilum okke idanam</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={chemfert} alt='card'/>
            <h3>Chemical Fertilizers</h3>
            <p> Ivde enthengilum okke idanam</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={insect} alt='card'/>
            <h3>Insecticides</h3>
            <p> Ivde enthengilum okke idanam</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={pest} alt='card'/>
            <h3>Pesticides</h3>
            <p> Ivde enthengilum okke idanam</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={seed} alt='card'/>
            <h3>Seeds</h3>
            <p> Ivde enthengilum okke idanam</p>

            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={tool} alt='card'/>
            <h3>Tools & eqipments</h3>
            <p> Ivde enthengilum okke idanam</p>

            <a href='#' className='btn'>schedule now</a>
          </div>
          

        </div>
      </section>



     

      <section className='about' id='about'>
        <h3 className='sub-heading'>about us</h3>
        <h1 className='heading'>why choose us?</h1>
        <div className="row">
          <div className="image">
            <img src={sec} alt='test'/>
          </div>
          <div className="content">
            <h3>Because, we offer the best.</h3>
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical</p>
            <p>Lorem Ipsum is not simply random text. It has roots in</p>
            <div className="icons-container">
              <div className="icons">
                <i className='fas fa-shipping-fast'></i>
                <span>Idk what</span>
              </div>
              <div className="icons">
                <i className='fas fa-headset'></i>
                <span>customer friendly</span>
              </div>
              <div className="icons">
              <i className="fa-solid fa-wallet"></i>                
                <span>low cost</span>
              </div>
            </div>
            <a href='#' className='btn'>know more</a>

          </div>
        </div>
      </section>

     
      {/* <section className='review' id='review'> */}
        <h3 className='sub-heading'>customer's review</h3>
        <h1 className='heading'>what they say</h1>
          

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="review"
      >
        <div className="swiper-container review-slider">
          <div className="swiper-wrapper">
          <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={arun} alt=''/>
              <div className="user-info">
                <h3>Arun Vijay</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>            {/* </div> */}
            </SwiperSlide>
          <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={pc1} alt=''/>
              <div className="user-info">
                <h3>Robin Vargheese</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
              </div>
              </div>
              <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>            </SwiperSlide>

            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={pc2} alt=''/>
              <div className="user-info">
                <h3>Arun Kalesh</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>                          {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={arya} alt=''/>
              <div className="user-info">
                <h3>Anupama</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
              </div>
              </div>
              <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>           
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={aravind} alt=''/>
              <div className="user-info">
                <h3>Aravind</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
<p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={pc6} alt=''/>
              <div className="user-info">
                <h3>Sebastian</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
<p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>            </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={pc7} alt=''/>
              <div className="user-info">
                <h3>Riya Thomas</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
<p>QuickClean saved my favorite silk blouse from a coffee spill disaster! I thought it was ruined, but their stain removal experts worked their magic. I couldn't be happier with the results. I highly recommend their stain removal services to everyone</p>            {/* </div> */}
            </SwiperSlide>

            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={sam} alt=''/>
              <div className="user-info">
                <h3>Sam Kalarikal</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
              </div>
              </div>
<p>I'm a perfectionist when it comes to my clothes, and I've tried various dry cleaners in Kollam. QuickClean, however, is on a whole different level and my clothes smell wonderfully fresh. QuickClean is my newfound laundry obsession; I won't trust anyone else with my garments</p>            {/* </div> */}
          </SwiperSlide>
          </div>
        </div>
      {/* </section> */}
      </Swiper>

      
      <div className="container">
      <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5743391479605!2d76.80551207575503!3d8.731905891318076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e929c0a34655%3A0x3ccaeaffac449066!2sVijay%20Agro%20Services!5e0!3m2!1sen!2sin!4v1696274271742!5m2!1sen!2sin" width="600" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div className="contact-details" id ='contact'>
    <h1 className="title">Reach out to us through</h1>
    <div className="location">
    <h2>Mon-Sat (8am-5:30pm) </h2>
      <h2>Address:</h2>
      <p> Vijay Agro services
      Chathampara, Attingal, Kerala 695605</p>
    </div>
    <div className="contact-info">
      <h2>Contact Information:</h2>
      <p>Phone: +0470 261007</p>
      <p>Email: vijayagroservices@hotmail.com</p>
      <div className="copy">
      <p>copyright 2023</p>
      </div>
    </div>

  </div>
  
</div>




    </div>
  );
};

export default Home;
