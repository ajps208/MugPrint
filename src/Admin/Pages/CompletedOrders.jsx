import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getAllOrderAPI, getOrderAPI } from "../../Services/allApi";
import { useNavigate } from "react-router-dom";
import { adminorderStatus } from "../../Context/OrderContext";
import { BASE_URL } from "../../Services/baseUrl";

function CompletedOrders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const { pendingorderId, setPendingOrderId } = useContext(adminorderStatus);
  
    const getAllOrders = async () => {
      try {
        const result = await getAllOrderAPI();
  
        if (result.status === 200) {
          const pendingOrders = result.data.filter(
            (order) => order.orderstatus === true
          );
          setOrders(pendingOrders);
          console.log(pendingOrders);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
  
    const gotoOrderview = (id) => {
      setPendingOrderId(id);
      sessionStorage.setItem("adminorderId", id);
      navigate(`/pendingview`);
    };
  
    useEffect(() => {
      getAllOrders();
    }, []);
  return (
    <>
        <div className="mb-5">
        <Container>
          <h2 className="text-start text-success mt-5 mb-3">
            Completed Orders <i className="fa-solid fa-clipboard-check"></i>
          </h2>

          {orders.length > 0
            ? orders.map((item, index) => (
                <Row
                  onClick={(e) => gotoOrderview(item._id)}
                  key={index}
                  className="border rounded shadow d-flex align-items-center justify-content-center mt-3"
                >
                  <Col xs={4} md={1} lg={1}>
                    <span className="text-success">#:</span> <br />
                    <span className="text-light mt-1 ">{index + 1}</span>
                  </Col>

                  <Col xs={4} md={2} lg={2} className="p-1">
                    <img
                      className="img-fluid w-50 shadow rounded"
                      src={
                        item.image ? `${BASE_URL}/uploads/${item.image}` : "N/A"
                      }
                      alt="no image"
                    />
                  </Col>
                  <Col xs={4} md={1} lg={1}>
                    <span className="text-success">Qty:</span> <br />
                    <span className="text-light mt-1">{item.qty}</span>
                  </Col>
                  <Col xs={4} md={1} lg={1}>
                    <span className="text-success">size:</span> <br />
                    <span className="text-light mt-1">{item.size}</span>
                  </Col>
                  <Col xs={4} md={2} lg={2}>
                    <span className="text-success">Price:</span> <br />
                    <span className="text-light mt-1">{item.price} ₹</span>
                  </Col>
                  <Col xs={4} md={2} lg={2}>
                    <span className="text-success">Date of order:</span> <br />
                    <span className="text-light mt-1">
                      {item.confirmeddate}
                    </span>
                  </Col>
                  <Col xs={4} md={3} lg={3}>
                    <span className="text-success">Order deliverd:</span> <br />
                    <span className="text-light mt-1 text-uppercase">
                      {!item.Delivered.status ? "pending" : item.Delivered.date}
                    </span>
                  </Col>
                </Row>
              ))
            : "No data found"}
        </Container>
      </div>
    </>
  )
}

export default CompletedOrders