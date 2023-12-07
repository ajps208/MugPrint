import React from "react";

function Main() {
  return (
    <>
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
                    src="https://images7.alphacoders.com/133/1332876.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
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
              <p>Why Choose Our MugHub</p>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <div class="box" data-aos="zoom-in" data-aos-delay="100">
                  <span>01</span>
                  <h4>Lorem Ipsum</h4>
                  <p>
                    Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                    consectetur ducimus vero placeat
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="200">
                  <span>02</span>
                  <h4>Repellat Nihil</h4>
                  <p>
                    Dolorem est fugiat occaecati voluptate velit esse. Dicta
                    veritatis dolor quod et vel dire leno para dest
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="300">
                  <span>03</span>
                  <h4> Ad ad velit qui</h4>
                  <p>
                    Molestiae officiis omnis illo asperiores. Aut doloribus
                    vitae sunt debitis quo vel nam quis
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
                      Custom Mugs Black
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                      Colour Changing Mugs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                      Personalised Heart Cut Handle Printed Mugs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                      Personalised Skinny Tumbler 600ml
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3> Printed Mugs that bring smiles every day!</h3>
                        <ul>
                          <li>Mug size is 190 ml, 325 ml & 450 ml</li>
                          <li>Personalise with photos, logo and more</li>
                          <li>Sharp, high-quality photo printing</li>
                          <li>8 colour options for handle and mug interior</li>
                          <li>2-side and wraparound print options available</li>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          width={"800px"}
                          src="assets/img/mug1.png"
                          alt=""
                          class="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3> Printed Mugs that bring smiles every day!</h3>
                        <ul>
                          <li>Mug size is 190 ml, 325 ml & 450 ml</li>
                          <li>Personalise with photos, logo and more</li>
                          <li>Sharp, high-quality photo printing</li>
                          <li>8 colour options for handle and mug interior</li>
                          <li>2-side and wraparound print options available</li>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          width={"800px"}
                          src="assets/img/mug1.png"
                          alt=""
                          class="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3> Printed Mugs that bring smiles every day!</h3>
                        <ul>
                          <li>Mug size is 190 ml, 325 ml & 450 ml</li>
                          <li>Personalise with photos, logo and more</li>
                          <li>Sharp, high-quality photo printing</li>
                          <li>8 colour options for handle and mug interior</li>
                          <li>2-side and wraparound print options available</li>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          width={"800px"}
                          src="assets/img/mug1.png"
                          alt=""
                          class="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3> Printed Mugs that bring smiles every day!</h3>
                        <ul>
                          <li>Mug size is 190 ml, 325 ml & 450 ml</li>
                          <li>Personalise with photos, logo and more</li>
                          <li>Sharp, high-quality photo printing</li>
                          <li>8 colour options for handle and mug interior</li>
                          <li>2-side and wraparound print options available</li>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          width={"800px"}
                          src="assets/img/mug1.png"
                          alt=""
                          class="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-5">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Est eveniet ipsam sindera pad rone matrelat sando reda
                        </h3>
                        <p class="fst-italic">
                          Omnis blanditiis saepe eos autem qui sunt debitis
                          porro quia.
                        </p>
                        <p>
                          Exercitationem nostrum omnis. Ut reiciendis
                          repudiandae minus. Omnis recusandae ut non quam ut
                          quod eius qui. Ipsum quia odit vero atque qui
                          quibusdam amet. Occaecati sed est sint aut vitae
                          molestiae voluptate vel
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/specials-5.png"
                          alt=""
                          class="img-fluid"
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

        {/* <!-- ======= Book A Table Section ======= --> */}
        <section id="book-a-table" class="book-a-table">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Print a Mug</h2>
              <p>Let's Print Your Favorite Mug</p>
            </div>

            <form
              action="forms/book-a-table.php"
              method="post"
              role="form"
              class="php-email-form"
              data-aos="fade-up"
              data-aos-delay="100"
              enctype="multipart/form-data"
            >
              <div class="row">
                <div class="col-lg-4 col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="text"
                    class="form-control"
                    name="whatsapp"
                    id="whatsapp"
                    placeholder="Your WhatsApp Number"
                    data-rule="minlen:10"
                    data-msg="Please enter a valid WhatsApp number"
                  />
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div class="validate"></div>
                </div>
                <div class="d-flex flex-column col-lg-4 col-md-6 form-group mt-3">
                  <input
                    type="file"
                    class="form-control"
                    name="image"
                    id="image"
                    accept="image/*"
                    style={{ display: "none" }}
                    onchange="previewImage(this)"
                    data-msg="Please upload an image"
                  />
                  <label for="image" class="upload-label">
                    Click to Upload Image
                  </label>
                  <img
                    width="250px"
                    id="imagePreview"
                    class="img-preview"
                    src="..."
                    alt="Image Preview"
                  />
                </div>
                <div class="col-lg-6 form-group mt-3">
                  <label for="bgcolor">Choose Background Color:</label>
                  <input
                    type="color"
                    class="form-control"
                    name="bgcolor"
                    id="bgcolor"
                  />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                ></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your mug printing request was sent. We will get back to you
                  soon. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit">Print a Mug</button>
              </div>
            </form>
          </div>
        </section>

        {/* <!-- End Book A Table Section --> */}

        {/* <!-- ======= Gallery Section ======= --> */}
        <section id="gallery" class="gallery">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Gallery</h2>
              <p>Some works from Our Mughub</p>
            </div>
          </div>

          <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
            <div class="row g-0">
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-1.jpg"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/gallery/gallery-1.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-2.jpg"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/gallery/gallery-2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-3.jpg"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/gallery/gallery-3.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-4.jpg"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/gallery/gallery-4.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-5.jpg"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/gallery/gallery-5.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-6.jpg"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/gallery/gallery-6.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-7.jpg"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/gallery/gallery-7.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-8.jpg"
                    class="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src="assets/img/gallery/gallery-8.jpg"
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
    </>
  );
}

export default Main;
