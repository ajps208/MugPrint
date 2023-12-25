import React from "react";
import PrintForm from "./PrintForm";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div
                class="col-lg-6 order-1 order-lg-2"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div class="about-img">
                  <img
                          src="assets/img/family.png"
                          alt=""
                  />
                </div>
              </div>

              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>
                  Elevate your surroundings with WallArt's unique printing
                  services.
                </h3>
                <p class="fst-italic">
                  Unleash your creativity and bring your spaces to life with our
                  custom printing solutions. Elevate your interiors with
                  personalized prints that make a statement.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check-circle"></i> Experience the art of
                    transformation through our exquisite glass designs.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> Immerse yourself in the
                    seamless integration of digital art into your home or
                    office.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> Collaborate with us to
                    turn your imagination into reality with our luxury glass art
                    panels.
                  </li>
                </ul>
                <p>
                  Elevate your living and working spaces with WallArt's
                  innovative approach to personalized printing. Let every print
                  tell a story and add a touch of sophistication to your
                  environment.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Why Us Section ======= --> */}
        <section id="why-us" class="why-us">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Why Us</h2>
              <p>Why Choose WallArt</p>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <div class="box" data-aos="zoom-in" data-aos-delay="100">
                  <span>01</span>
                  <h4>Personalized Printing</h4>
                  <p>
                    Welcome to WallArt, where we specialize in personalized
                    printing that transforms your spaces into unique expressions
                    of your style with creativity and unmatched quality.{" "}
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="200">
                  <span>02</span>
                  <h4>Innovative Designs</h4>
                  <p>
                    Explore the endless possibilities of digital printing with
                    WallArt. From custom wall murals to elegant glass
                    partitions, we turn ordinary surfaces into extraordinary
                    showcases.
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="300">
                  <span>03</span>
                  <h4>Luxurious Solutions</h4>
                  <p>
                    Whether designing your dream home or upgrading commercial
                    spaces, our custom glass art panels offer a sophisticated
                    solution that's sure to impress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- End Why Us Section --> */}

        {/* <!-- ======= Menu Section ======= --> */}

        {/* <!-- ======= Specials Section ======= --> */}
        <section id="specials" class="specials">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Specials</h2>
              <p>Check Our Specials</p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a
                      class="nav-link active show"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      Personalized Printing for Individual and Family Photos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                      Custom Wall Murals{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                      Decorative Door Panels{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                      3D Stair and Stair Rail Glass Printing{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-5">
                      Custom Glass Art Panels{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          {" "}
                          Elevate Your Memories with WallArt's Personalized
                          Printing:
                        </h3>
                        <ul>
                          <li>
                            High-quality prints for individual and family photos
                          </li>
                          <li>
                            Preserve cherished moments on premium materials
                          </li>
                          <li>Turn your photos into beautiful pieces of art</li>
                          <li>Tailor-made solutions for a personal touch</li>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          width={"800px"}
                          src="assets/img/fa.png"
                          alt=""
                          class="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3> Transform Your Space with Custom Wall Murals!</h3>
                        <ul>
                          <li>
                            Personalize your walls with stunning, unique designs
                          </li>
                          <li>Create a captivating atmosphere in any room</li>
                          <li>
                            Choose from our curated collection or bring your
                            vision to life
                          </li>
                          <li>
                            High-quality printing for vibrant and long-lasting
                            murals
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          width={"800px"}
                          src="assets/img/lp-5.png"
                          alt=""
                          class="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3> Elevate Entrances with Decorative Door Panels!</h3>
                        <ul>
                          <li>
                            Add a personal touch to your doors with custom
                            designs
                          </li>
                          <li>Enhance the aesthetics of your living spaces</li>
                          <li>Choose from a variety of decorative options</li>
                          <li>
                            High-quality printing for a stylish and welcoming
                            entrance
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          width={"800px"}
                          src="assets/img/lp-9.png"
                          alt=""
                          class="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          {" "}
                          Make a Statement with 3D Stair and Stair Rail Glass
                          Printing!
                        </h3>
                        <ul>
                          <li>
                            Add a touch of modern elegance to your staircase
                          </li>
                          <li>Transform ordinary stairs into a focal point</li>
                          <li>Customize glass with intricate 3D designs</li>
                          <li>
                            Elevate the aesthetic of your home or commercial
                            space
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          width={"800px"}
                          src="assets/img/lp-6.png"
                          alt=""
                          class="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-5">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Luxury Redefined with Custom Glass Art Panels!</h3>
                        <ul>
                          <li>Infuse sophistication into your interiors</li>
                          <li>
                            Seamlessly integrate personalized art into your
                            space
                          </li>
                          <li>Elevate home, office, or commercial interiors</li>
                          <li>Create a distinctive and luxurious atmosphere</li>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          width={"800px"}
                          src="assets/img/lp-7.png"
                          alt=""
                          class="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Specials Section --> */}

        {/* <!-- ======= Events Section ======= --> */}
        {/* <!-- End Events Section --> */}

        {/* <!-- ======= print mug Section ======= --> */}
        <PrintForm />

        {/* <!-- End Book A Table Section --> */}

        {/* <!-- ======= Gallery Section ======= --> */}
        <section id="gallery" class="gallery">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Gallery</h2>
              <p>Some works from Our WallArt</p>
            </div>
          </div>

          <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
            <div class="row g-0">
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/fa.png"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/fa.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/lp-1.png"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/lp-1.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/lp-3.png"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/lp-3.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/lp-4.png"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/lp-4.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/lp-5.png"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/lp-5.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/lp-12"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/lp-12.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/lp-6.png"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/lp-6.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/lp-7.png"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/lp-7.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Gallery Section --> */}
      </main>
      <Footer />
    </>
  );
}

export default Main;
