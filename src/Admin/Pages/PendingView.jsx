import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import { adminorderStatus } from "../../Context/OrderContext";
import { deliveredAPI, getOneOrderAPI, updateMugPrintAPI, updateOutForDeliveryAPI } from "../../Services/allApi";
import { BASE_URL } from "../../Services/baseUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderView() {
  const { pendingorderId, setPendingOrderId } = useContext(adminorderStatus);

  const [order, setOrder] = useState({});
  const [orderdate, setOrderdate] = useState();
  const[mugPrint,setMugPrint]=useState()
  const[outForDelivery,setoutForDelivery]=useState()
  const[delivered,setDelivered]=useState()
  console.log(mugPrint);
//   get all pending orders
  const fetchOrder = async () => {
    const result = await getOneOrderAPI(pendingorderId);
    if (result.status === 200) {
      setOrder(result.data);
    } else {
      console.log(result);
    }
  };

  // update mugprint
  const mugPrintUpdate=async(id)=>{
    const reqBody={
        orderid:id,mugprintdate:mugPrint
    }
    const result=await updateMugPrintAPI(reqBody)
    if(result.status===200){
      toast.success("Mugprinted date updated")
    }else{
      console.log(result);
    }

  }
  // update outfordelvery
  const updateOutForDelivery=async(id)=>{
    const reqBody={
        orderid:id,outForDelivery:outForDelivery
    }
    const result=await updateOutForDeliveryAPI(reqBody)
    if(result.status===200){
      toast.success("out for delivery date updated")
    }else{
      console.log(result);
    }

  }
 console.log("delivered",delivered);
  // update deliverd
  const updateDelivered=async(id)=>{
    const reqBody={
        orderid:id,delivered:delivered
    }
    const result=await deliveredAPI(reqBody)
    if(result.status===200){
      toast.success("delivered date updated")
    }else{
      console.log(result);
    }

  }

  useEffect(() => {
    const savedOrderId = sessionStorage.getItem("adminorderId");
    if (savedOrderId) {
      setPendingOrderId(savedOrderId);
    }
  }, [setPendingOrderId]);
  useEffect(() => {
    const timestamp = order.confirmeddate;
    const dateObject = new Date(timestamp);

    const month = dateObject.toLocaleString("en-us", { month: "short" });
    const formattedDate = `${month} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
    setOrderdate(formattedDate);
  }, [order.confirmeddate]);
  useEffect(() => {
    fetchOrder();
  }, [pendingorderId]);
  console.log(order);
  return (
    <>
      <Container className="bg info mb-5 mt-3">
        <Row className="bg-light text-dark rounded shadow-lg pt-3">
          <Col xs={6} sm={6} md={3} lg={3}>
            <h4>Delivery Addres</h4>
            <b> {order.name}</b>
            <p>{order.address}</p>
            <b>
              Whatsapp number <i class="fa-brands fa-whatsapp text-success"></i>
            </b>
            <p>
              {" "}
              <Link
                className="text-dark"
                to={`https://wa.me/${order.whatsapp}`}
                target="_blank"
              >
                {order.whatsapp}
              </Link>
            </p>{" "}
            <b>Email</b>
            <p> {order.email}</p>{" "}
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} className="p-2">
            <div className="text-center">
              <img
                className="img-fluid w-100 rounded shadow"
                src={order.image ? `${BASE_URL}/uploads/${order.image}` : "N/A"}
                alt=""
              />
              {order.image && (
                <a
                  href={`${BASE_URL}/uploads/${order.image}`}
                  download="downloaded_image.jpg"
                  className="btn btn-primary mt-2"
                >
                  Download Image
                </a>
              )}
            </div>
          </Col>

          <Col xs={6} sm={6} md={3} lg={3} className="ps-5">
            <h4>WallArt Detailes</h4>
            <p>WallArt Size: {order.size}</p>
            <p>No.s of WallArt: {order.qty}</p>{" "}
            <p className="d-flex align-items-center">
             thickness:{" "}
              <div
                className="ms-1"
                style={{
                  backgroundColor: order.color,
                  width: "15px",
                  height: "15px",
                }}
              ></div>
              <span className="ms-1">{order.thickness}</span>
            </p>
            <p>WallMount Type: {order.wallmount}</p>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <h4>Delivery Detailes</h4>
            <p>Order Confirmed: {order.confirmeddate ? orderdate : ""}</p>
            <p>
            WallArt Printed Date:{" "}
              {order.mugprinted && order.mugprinted.status
                ? order.mugprinted.date || "Not available"
                : "Not available"}
            </p>
            <p>
              Out for Delivery:{" "}
              {order.outfordelivery && order.outfordelivery.status
                ? order.outfordelivery.date || "Not available"
                : "Not available"}
            </p>
            <p>
              Delivered:{" "}
              {order.Delivered && order.Delivered.status
                ? order.Delivered.date || "Not available"
                : "Not available"}
            </p>
            <p>
              Payment Id:{" "}
              {order.paymentId && order.paymentId
                ? order.paymentId || "Not available"
                : "Not available"}
            </p>
          </Col>
        </Row>
        <Row className="bg-light text-dark rounded shadow-lg mt-3 d-flex justify-content-center align-items-center">
          <Col xs={3} sm={3} md={3} lg={3}>
            <h5>Order status</h5>
          </Col>
          <Col
            xs={9}
            sm={9}
            md={9}
            lg={9}
            className="column d-flex flex-row"
          >
            <div className="orderstatus d-flex flex-column justify-content-center mt-3 ms-3">
              <label style={{ fontSize: "18px" }}>WallArt Printed</label>
              <div className="orderdisplay d-flex  align-items-center">
                <input
                  type="date"
                  className="form-control mb-2"
                  placeholder="Enter confirmation date"
                  value={mugPrint}
                  onChange={(e) => setMugPrint(e.target.value)}
                />
                <button
                  className="btn btn-success w-25 mb-2 ms-1 "   onClick={() => mugPrintUpdate(order._id)}>
                  <i class="fa-solid fa-right-to-bracket"></i>
                </button>
              </div>
            </div>
            <div className="orderstatus d-flex flex-column justify-content-center mt-3 ms-5">
              <label style={{ fontSize: "18px" }}>Out for Delivery</label>
              <div className="orderdisplay d-flex  align-items-center">
                <input
                  type="date"
                  className="form-control mb-2"
                  placeholder="Enter confirmation date"
                  value={outForDelivery}
                  onChange={(e) => setoutForDelivery(e.target.value)}
                />
                <button
                  className="btn btn-success w-25 mb-2 ms-1 "  onClick={() => updateOutForDelivery(order._id)}
                >
                  <i class="fa-solid fa-right-to-bracket"></i>
                </button>
              </div>
            </div>
            <div className="orderstatus d-flex flex-column justify-content-center mt-3 ms-5">
              <label style={{ fontSize: "18px" }}>Delivered</label>
              <div className="orderdisplay d-flex  align-items-center">
                <input
                  type="Date"
                  className="form-control mb-2"
                  placeholder="Enter confirmation date"
                  value={delivered}
                  onChange={(e) => setDelivered(e.target.value)}
                />
                <button
                  className="btn btn-success w-25 mb-2 ms-1 "   onClick={() => updateDelivered(order._id)}
                >
                  <i class="fa-solid fa-right-to-bracket"></i>
                </button>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />

    </>
  );
}

export default OrderView;
