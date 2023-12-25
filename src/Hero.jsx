import React from 'react'

function Hero() {
  return (
    <>
    <section id="hero" class="d-flex">
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
                  Print a Mug
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