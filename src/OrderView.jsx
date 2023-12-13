import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { getOneOrderAPI } from "./Services/allApi";
import { orderStatus } from "./Context/OrderContext";
import { BASE_URL } from "./Services/baseUrl";
import { Link } from "react-router-dom";

function OrderView() {
  const { orderId, setOrderId } = useContext(orderStatus);
 
  const[order,setOrder]=useState({})
  const[orderdate,setOrderdate]=useState()
  console.log(orderId);
  const fetchOrder=async()=>{
    const result=await getOneOrderAPI(orderId)
    if(result.status===200){
     setOrder(result.data)
    }else{
      console.log(result);
    }
  }

    useEffect(() => {
    const savedOrderId = sessionStorage.getItem("orderId");
    if (savedOrderId) {
      setOrderId(savedOrderId);
    }
  }, [setOrderId]);
  useEffect(() => {
    const timestamp = order.confirmeddate;
    const dateObject = new Date(timestamp);
  
    const month = dateObject.toLocaleString('en-us', { month: 'short' });
    const formattedDate = `${month} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
    setOrderdate(formattedDate);
  }, [order.confirmeddate]);
  useEffect(()=>{fetchOrder()},[orderId])
  console.log(order);
  return (
    <>
      <Header />
      <Container className="bg info mb-5 mt-3">
        <Row className="bg-light text-dark rounded shadow-lg pt-3">
          <Col xs={4} sm={4} md={4} lg={4}>
            <h4>Delivery Addres</h4>
            <b> {order.name}</b>
            <p>
              {order.address}
            </p>
            <b>Whatsapp number  <i class="fa-brands fa-whatsapp text-success"></i></b>
            <p> <Link className="text-dark" to={`https://wa.me/${order.whatsapp}`} target="_blank">{order.whatsapp}</Link></p> <b>Email</b>
            <p> {order.email}</p>{" "}
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} className="p-2">
            {" "}
            <img
              className="img-fluid w-75 rounded shadow"
              src={order.image ? `${BASE_URL}/uploads/${order.image}` : 'N/A'}
              alt=""
            />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4}>
            <h4>Mug Detailes</h4>
            <p>Mug Size: {order.size}</p>
            <p>No.s of Mugs: {order.qty}</p>{" "}
            <p className="d-flex align-items-center">
              Mug Color:{" "}
              <div
                className="ms-2"
                style={{
                  backgroundColor: order.color,
                  width: "15px",
                  height: "15px",
                }}
              ></div>
              <span className="ms-1">{order.color}</span>
            </p>
            <p>Mug Style: {order.style}</p>
          </Col>
        </Row>
        <Row className="bg-light text-dark rounded shadow-lg mt-3 d-flex justify-content-center align-items-center">
          <Col xs={3} sm={3} md={3} lg={3}>
            <h5>Order status</h5>
          </Col>
          <Col xs={9} sm={9} md={9} lg={9} className="column d-flex flex-row">
            <div className="orderstatus d-flex flex-column justify-content-center mt-3">
              <p style={{ fontSize: "14px" }}>Order Confirmed</p>
              <div className="orderdisplay d-flex align-items-center">
                <div
                  className="mb-2"
                  style={{
                    backgroundColor: "green",
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  className="line1 mb-2"
                  style={{
                    backgroundColor: "green",
                    width: "120px",
                    height: "5px",
                  }}
                ></div>
              </div>
              <p style={{ fontSize: "14px" }}>{order.confirmeddate?orderdate:""}</p>
            </div>
            <div className="orderstatus d-flex flex-column justify-content-center  mt-3">
              <p style={{ fontSize: "14px" }}>Mug Printed</p>
              <div className="orderdisplay d-flex align-items-center">
                <div
                  className=" mb-2"
                  style={{
                    backgroundColor:order.mugprinted && !order.mugprinted.status ? "grey" : "green",
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  className="line mb-2"
                  style={{
                    backgroundColor: "grey",
                    width: "120px",
                    height: "5px",
                  }}
                ></div>
              </div>
              <p style={{ fontSize: "14px" }}>{order.mugprinted?.date || "Not available"}</p>
            </div>
            <div className="orderstatus d-flex flex-column justify-content-center  mt-3">
              <p style={{ fontSize: "14px" }}>Out For Delivery</p>
              <div className="orderdisplay d-flex align-items-center">
                <div
                  className="dot mb-2"
                  style={{
                    backgroundColor: order.mugprinted && !order.outfordelivery.status ? "grey" : "green",
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  className="line mb-2"
                  style={{
                    backgroundColor: "grey",
                    width: "120px",
                    height: "5px",
                  }}
                ></div>
              </div>
              <p style={{ fontSize: "14px" }}>{order.outfordelivery?.date || "Not available"}</p>
            </div>
            <div className="orderstatus d-flex flex-column justify-content-center  mt-3">
              <p style={{ fontSize: "14px" }}>Delivered</p>
              <div className="orderdisplay d-flex align-items-center">
                <div
                  className=" mb-2"
                  style={{
                    backgroundColor: order.mugprinted && !order.Delivered.status ? "grey" : "green",
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <p style={{ fontSize: "14px" }}>{order.Delivered?.date || "Not available"}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default OrderView;
