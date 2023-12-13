import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import { adminorderStatus } from "../../Context/OrderContext";
import { getOneOrderAPI, updateMugPrintAPI } from "../../Services/allApi";
import { BASE_URL } from "../../Services/baseUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { error } from "console";

function OrderView() {
  const { pendingorderId, setPendingOrderId } = useContext(adminorderStatus);

  const [order, setOrder] = useState({});
  const [orderdate, setOrderdate] = useState();
  const[mugPrint,setMugPrint]=useState()
  const[outForDelivery,setoutForDelivery]=useState()
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
      console.log(error);
    }

  }
  // update outfordelvery
  const updateOutForDelivery=async(id)=>{
    const reqBody={
        orderid:id,outForDelivery:outForDelivery
    }
    const result=await updateMugPrintAPI(reqBody)
    if(result.status===200){
      toast.success("out for delivery date updated")
    }else{
      console.log(error);
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
          <Col xs={6} sm={6} md={3} lg={3}>
            <h4>Delivery Detailes</h4>
            <p>Order Confirmed: {order.confirmeddate ? orderdate : ""}</p>
            <p>
              Mug Printed Date:{" "}
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
          </Col>
        </Row>
        <Row className="bg-light text-dark rounded shadow-lg mt-3 d-flex justify-content-center align-items-center">
          <Col xs={2} sm={2} md={2} lg={2}>
            <h5>Order status</h5>
          </Col>
          <Col
            xs={10}
            sm={10}
            md={10}
            lg={10}
            className="column d-flex flex-row"
          >
            <div className="orderstatus d-flex flex-column justify-content-center mt-3 ms-3">
              <label style={{ fontSize: "18px" }}>Mug Printed</label>
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
            <div className="orderstatus d-flex flex-column justify-content-center mt-3 ms-3">
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
            <div className="orderstatus d-flex flex-column justify-content-center mt-3 ms-3">
              <label style={{ fontSize: "18px" }}>Delivered</label>
              <div className="orderdisplay d-flex  align-items-center">
                <input
                  type="Date"
                  className="form-control mb-2"
                  placeholder="Enter confirmation date"
                  value={order.confirmeddate || ""}
                  onChange={(e) => setOrderdate(e.target.value)}
                />
                <button
                  className="btn btn-success w-25 mb-2 ms-1 " //   onClick={() => handleConfirmationDateUpdate(order._id)}
                >
                  <i class="fa-solid fa-right-to-bracket"></i>
                </button>
              </div>
            </div>
            <div className="orderstatus d-flex flex-column justify-content-center mt-3 ms-3">
              <label style={{ fontSize: "18px" }}>Order Status</label>
              <div className="orderdisplay d-flex  align-items-center">
                <select
                  className="form-select mb-2"
                  value={order.status || "Pending"}
                //   onChange={(e) =>handleStatusUpdate(order._id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
                <button
                  className="btn btn-success w-25 mb-2 ms-1 " //   onClick={() => handleConfirmationDateUpdate(order._id)}
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
