import React, { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { addOrderAPI, priceAPI } from "./Services/allApi";
import { useNavigate } from "react-router-dom";

function PrintForm() {
  const navigate=useNavigate()
  const [allPrice, setAllPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");
  const [mugsize, setMugsize] = useState("");

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    address: "",
    size: "",
    style: "",
    color: "",
    qty: "",
    message: "",
    image: "",
  });
  // console.log(formData);
  const mugprint = () => {
    const {
      name,
      whatsapp,
      email,
      address,
      size,
      style,
      color,
      qty,
      message,
      image,
    } = formData;
    if (
      !name ||
      !whatsapp ||
      !email ||
      !address ||
      !size ||
      !style ||
      !color ||
      !qty ||
      !image
    ) {
      alert("Please fill the form completely");
    } else {
      setShow(true);
    }
  };

  // console.log('total price :',totalPrice);
  const getAllPrice = async () => {
    const result = await priceAPI();
    if (result.status === 200) {
      setAllPrice(result.data);
    } else {
      console.log(result);
    }
  };

  // data add to database
  const addToOrder = async (e) => {
    e.preventDefault();
    const {
      name,
      whatsapp,
      email,
      address,
      size,
      style,
      color,
      qty,
      message,
      image,
    } = formData;

    const reqBody = new FormData();
    reqBody.append("name", name);
    reqBody.append("whatsapp", whatsapp);
    reqBody.append("email", email);
    reqBody.append("size", mugsize);
    reqBody.append("style", style);
    reqBody.append("color", color);
    reqBody.append("qty", qty);
    reqBody.append("address", address);
    reqBody.append("message", message);
    reqBody.append("image", image);
    reqBody.append("price", totalPrice);
    let reqHeader;
    if (token) {
      reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      console.log("reqheader",reqHeader);
      const result = await addOrderAPI(reqBody, reqHeader);
      console.log(result);
      if (result.status === 200) {
        console.log(result.data);
        setFormData({name: "", whatsapp: "",email: "", address: "", size: "", style: "", color: "",qty: "", message: "",image: ""})
        setTotalPrice("")
        setMugsize("")
        setPreview("")
        navigate('/order')
      } else {
        console.log(result);
        console.log(result.response.data);
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);
  useEffect(() => {
    getAllPrice();
    // console.log(allPrice);
  });
  useEffect(() => {
    if (formData.image) {
      setPreview(URL.createObjectURL(formData.image));
    }
  }, [formData.image]);
  useEffect(() => {
    if (
      allPrice.length > 0 &&
      allPrice[0].price &&
      formData.size &&
      formData.qty !== undefined
    ) {
      const totalTicketPrice = allPrice[0].price[formData.size] * formData.qty;
      setTotalPrice(totalTicketPrice);
      setMugsize(allPrice[0].size[formData.size])
    } else {
      setTotalPrice(0);
    }
  }, [formData.size, formData.qty]);

  return (
    <>
      <section id="book-a-table" class="book-a-table">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Print a Mug</h2>
            <p>Let's Print Your Favorite Mug</p>
          </div>

          <form
            role="form"
            class="php-email-form"
            data-aos="fade-up"
            data-aos-delay="100"
            enctype="multipart/form-data"
          >
            <div class="row">
              <div class="col-lg-4 col-md-6 form-group">
                <input
                  required
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  required
                  type="text"
                  class="form-control"
                  name="whatsapp"
                  id="whatsapp"
                  placeholder="Your WhatsApp Number"
                  data-rule="minlen:10"
                  data-msg="Please enter a valid WhatsApp number"
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsapp: e.target.value })
                  }
                />
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  required
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <div class="validate"></div>
              </div>

              <div class="col-lg-4 col-md-6 form-group">
                <select
                  required
                  name="mugsize"
                  class="form-select"
                  id="mugsize"
                  data-msg="Select Your Mug Size"
                  value={formData.size}
                  onChange={(e) =>
                    setFormData({ ...formData, size: e.target.value })
                  }
                >
                  <option value="" disabled defaultValue>
                    Select Your Mug Size
                  </option>
                  {allPrice.length > 0 &&
                    allPrice[0].size &&
                    allPrice[0].size.map((sizeItem, index) => (
                      <option key={index} value={index}>
                        {sizeItem} ml
                      </option>
                    ))}
                </select>

                <div class="validate"></div>
              </div>

              <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <select
                  required
                  class="form-select"
                  name="mugstyle"
                  id="mugstyle"
                  data-msg=" Select Your Mug Style"
                  value={formData.style}
                  onChange={(e) =>
                    setFormData({ ...formData, style: e.target.value })
                  }
                >
                  <option value="" disabled selected>
                    Select Your Mug Style
                  </option>
                  <option value="2 Sided">2 Sided</option>
                  <option value="Wraparound">Wraparound</option>
                </select>
                <div class="validate"></div>
              </div>

              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <select
                  required
                  className="form-select"
                  name="mug-color"
                  id="mug-color"
                  data-rule="required"
                  data-msg="Please select a color"
                  value={formData.color}
                  onChange={(e) =>
                    setFormData({ ...formData, color: e.target.value })
                  }
                >
                  <option value="" disabled selected>
                    Select Mug Color
                  </option>
                  <option
                    value="white"
                    style={{ color: "#ffffff" }}
                    data-color="#ffffff"
                  >
                    White
                  </option>
                  <option
                    value="red"
                    style={{ color: "#ff0000" }}
                    data-color="#ff0000"
                  >
                    Red
                  </option>
                  <option
                    value="green"
                    style={{ color: "#008000" }}
                    data-color="#008000"
                  >
                    Green
                  </option>
                  <option
                    value="blue"
                    style={{ color: "#0000ff" }}
                    data-color="#0000ff"
                  >
                    Blue
                  </option>
                  <option
                    value="yellow"
                    style={{ color: "#ffff00" }}
                    data-color="#ffff00"
                  >
                    Yellow
                  </option>
                  <option
                    value="black"
                    style={{ color: "white" }}
                    data-color="#000000"
                  >
                    Black
                  </option>
                  <option
                    value="pink"
                    style={{ color: "#ffc0cb" }}
                    data-color="#ffc0cb"
                  >
                    Pink
                  </option>
                  <option
                    value="orange"
                    style={{ color: "#ffa500" }}
                    data-color="#ffa500"
                  >
                    Orange
                  </option>
                </select>
                <div className="validate"></div>
              </div>
              <div className="col-lg-8 col-md-6 form-group mt-3 mt-md-0">
                <input
                  required
                  type="text"
                  class="form-control"
                  name="adress"
                  id="adress"
                  placeholder="Enter your address"
                  data-rule="minlen:10"
                  data-msg="Please enter your address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
                <div class="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <select
                  required
                  className="form-select"
                  name="mug-quantity"
                  id="mug-quantity"
                  data-rule="required"
                  data-msg="Please select quantity"
                  value={formData.qty}
                  onChange={(e) =>
                    setFormData({ ...formData, qty: e.target.value })
                  }
                >
                  <option value="" disabled selected>
                    Select No.s of Mugs
                  </option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <div className="validate"></div>
              </div>
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              <div class="validate"></div>
            </div>

            <div class="form-group mt-3">
              <label for="imageUpload">Upload Image</label>
              <input
                required
                type="file"
                class="form-control"
                id="imageUpload"
                name="image"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files[0] })
                }
              />
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

            <div class="text-center d-flex justify-content-between align-items-center">
              <div>
                <div className="d-flex align-items-center">
                  <input
                    style={{
                      backgroundColor: "transparent",
                      textAlign: "center", // Center text
                      border: "none", // Remove border
                      outline: "none", // Remove outline on focus
                      cursor: "default", // Disable hover effect
                      color: "white",
                    }}
                    value={`Total Price: ${totalPrice} ₹`}
                    readOnly
                    type="text"
                    className="form-control w-100 m-2 fs-4"
                  />
                  <i
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    class="fa-solid fa-angle-up ms-3"
                    style={{ transform: "rotate(180deg)" }}
                  ></i>
                </div>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    tax:180 ₹ <br />
                    printing cost:180 ₹<br />
                    postal charge:40 ₹
                  </div>
                </Collapse>
              </div>

              <button
                onClick={token ? mugprint : () => navigate("/login")}
                type="button"
              >
                Print a Mug
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header className="bg-dark" closeButton>
          <Modal.Title>Mug Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <img className="img-fluid" src={preview} alt="" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <p className="text-info">
                Mug Size: <span className="text-light">{mugsize} ml</span>
              </p>
              <p className="text-info">
                Mug Style: <span className="text-light">{formData.style}</span>
              </p>
              <p className="text-info">
                Mug Color: <span className="text-light">{formData.color}</span>
              </p>
              <p className="text-info">
                No.s of Mug: <span className="text-light">{formData.qty}</span>
              </p>
              {formData.message ? (
                <p className="text-info">
                  Message to be printed:{" "}
                  <span className="text-light">{formData.message}</span>
                </p>
              ) : (
                ""
              )}
              <p className="text-info">
                Price: <span className="text-light">{totalPrice} ₹</span>
              </p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addToOrder} variant="primary">
            Proceed to Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PrintForm;
