import React from "react";
import "./home.css";


const Home = () => {
  return (
    <>
    
  <Header />


    <section id="home" >
      <div className="home_parent">
      <div className="home_wrap">


        <div className="doctor">

          <div className="banner_wrap">
            <div className="divider"></div>
            <p className="total_health">Total Health care solution</p>
            <h1> Your most trusted health partner</h1>
            <p className="parab"> A good laugh and a long sleep are the best cures in the doctor's book. </p>
            <p className="parab"> Good health is not something we can buy. However, it can be an extremely valuable savings account</p>

            <div className="btn-container ">
              <Link to="/contact" className="btn">   <span>  Contact Us  </span> <MdKeyboardArrowRight className="arrowcolor" /> <span>   </span> </Link>
              {/* <a href="/" target="_blank" className="btn" >  </a> */}
            </div>

          </div>

        </div>


       

      </div>
      </div>

      {/* <div className="card_section">
          <div className="card_item"> <FaRegClock className="cardIcon" />
            <p>Timing schedule</p>
            <h5> Working Hours</h5>
            <ul className="time_listing">

              <li><span> Sun - Wed :  </span>  <span>  24:00  </span></li>
              <li><span> Thu - Fri : </span>  <span>  24:00  </span></li>
              <li><span> Sat - sun :  </span>  <span>  24:00  </span></li>


            </ul>
          </div>
          <div className="card_item"> <HiUserGroup className="cardIcon" />

        </div> */}
    </section>

    <section className="hesitate">
<div className="hesitate_wrap"> 
<p>Health Care Services </p>
<h2> Don’t Hesitate, Contact
  Us For Better Help & Services.</h2>
</div>
    </section>

    <section className="our_testinomial">
      <div className="testimonial_wrap">

      <h3>Our Testimonials</h3>
      </div>

       

    </section>

<Footer />
</>

  );



};

export default Home;
