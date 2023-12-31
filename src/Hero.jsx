import React, { useEffect, useState } from 'react'

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'url("/assets/img/lp-1.png") center',
    'url("/assets/img/lp-2.png") center',
    'url("/assets/img/lp-3.png") center',
    'url("/assets/img/lp-4.png") center',
    'url("/assets/img/lp-5.png") center',
    'url("/assets/img/lp-6.png") center',
    'url("/assets/img/lp-7.png") center',
    'url("/assets/img/lp-12.png") center', // Add more image URLs as needed
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount

  }, [images.length]);

  return (
    <>
    <section id="hero" class="d-flex" style={{background: images[currentImageIndex]}}>
        <div
          class="container position-relative text-center  text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row mt-5">
            <div class="col-lg-8">
              <h1>
                Welcome to <span>WallArt</span>
              </h1>
              <h2>Transform your spaces with personalized printing, expressing your unique style.</h2>

              <div class="btns">
                <a href="#gallery"class="btn-menu animated fadeInUp scrollto">
                  Our Works
                </a>
                <a
                  href="#book-a-table"
                  class="btn-book animated fadeInUp scrollto"
                >
                 Order Your WallArt
                </a>
              </div>
            </div>
            <div
              class="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <a
                href="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
                class="glightbox play-btn"
              ></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero