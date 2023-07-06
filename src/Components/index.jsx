import React from 'react'
import video from "../images/video.mp4";
import images1 from"../images/about-fullscreen-1-1920x700.jpg";


const index = () => {

  
  return (
    <>
    <>
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="index.html" className="logo">
              Job Agency<em> Website</em>
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li>
                <a href="index.html" className="active">
                  Login
                </a>
              </li>
              <li>
                <a href="jobs.html">Register</a>
              </li>
            
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>    
    </div>
  </header>
  {/* ***** Header Area End ***** */}
  {/* ***** Main Banner Area Start ***** */}
  <div className="main-banner" id="top">
  <video autoPlay muted loop id="bg-video">
    <source src={video} type="video/mp4" />
  </video>
  <div className="video-overlay header-text">
    <div className="caption">
      <h6>Lorem ipsum dolor sit amet</h6>
      <h2>
        Find the perfect <em>Job</em>
      </h2>
      <div className="main-button">
        <a href="contact.html">Contact Us</a>
      </div>
    </div>
  </div>
</div>

  <section
    className="section section-bg"
    id="schedule"
    style={{
      backgroundImage: `url(${images1})`
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading dark-bg">
            <h2>
              Read <em>About Us</em>
            </h2>
            <img src="assets/images/line-dec.png" alt="" />
            <p>
              Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
              viverra ipsum dolor, ultricies fermentum massa consequat eu.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-content text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              deleniti voluptas enim! Provident consectetur id earum ducimus
              facilis, aspernatur hic, alias, harum rerum velit voluptas,
              voluptate enim! Eos, sunt, quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              nulla quo cum officia laboriosam. Amet tempore, aliquid quia eius
              commodi, doloremque omnis delectus laudantium dolor reiciendis non
              nulla! Doloremque maxime quo eum in culpa mollitia similique eius
              doloribus voluptatem facilis! Voluptatibus, eligendi, illum.
              Distinctio, non!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 

</>

    </>
  )
}

export default index