import React, { useEffect, useState,useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import { getOneOrderAPI, getOrderAPI } from './Services/allApi';
import { BASE_URL } from './Services/baseUrl';
import { useNavigate } from 'react-router-dom';
import { orderStatus } from './Context/OrderContext';


function Order() {
  const navigate=useNavigate()
  const[orders,setOrders]=useState([])
  const { orderId,setOrderId} = useContext(orderStatus);


const getAllorders=async()=>{
  try {
    const token = sessionStorage.getItem('token');
    const reqHeader = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const result = await getOrderAPI(reqHeader);
    // console.log(result.data);
    setOrders(result.data)

  } catch (error) {
    console.error('Unexpected error:', error);

}}

const gotoOrderview=(id)=>{
  setOrderId(id)
  sessionStorage.setItem("orderId",id)
  navigate(`/orderview`)
}

useEffect(()=>{
   getAllorders()
},[])

  return (
   <>
      <Header/>
      <div className='mb-5'>
  
        <Container>
          <h2 className='text-start text-success mt-5 mb-3'>
            Orders <i className='fa-solid fa-clipboard-check'></i>
          </h2>
  
      
             {orders.length>0? orders.map((item,index)=>(
                <Row onClick={(e)=>gotoOrderview(item._id)} key={index} className='border rounded shadow d-flex align-items-center justify-content-center mt-3'>
                <Col xs={4} md={1} lg={1}>
                  <span className='text-success'>#:</span> <br />
                  <span className='text-light mt-1 '>{index+1}</span>
                </Col>
              
                <Col xs={4} md={2} lg={2} className='p-1'>
                <img className='img-fluid w-50 shadow rounded' src= {item.image ? `${BASE_URL}/uploads/${item.image}` : 'N/A'}  alt='no image' />
                </Col>
                <Col xs={4} md={1} lg={1}>
                  <span className='text-success'>Qty:</span> <br />
                  <span className='text-light mt-1'>{item.qty}</span>
                </Col>
                <Col xs={4} md={1} lg={1}>
                  <span className='text-success'>Thickness:</span> <br />
                  <span className='text-light mt-1'>{item.thickness}</span>
                </Col>
                <Col xs={4} md={1} lg={1}>
                  <span className='text-success'>size:</span> <br />
                  <span className='text-light mt-1'>{item.size}</span>
                </Col>
                <Col xs={4} md={1} lg={2}>
                  <span className='text-success'>Price:</span> <br />
                  <span className='text-light mt-1'>{item.price} ₹</span>
                </Col>
                <Col xs={4} md={2} lg={2}>
                  <span className='text-success'>Date of order:</span> <br />
                  <span className='text-light mt-1'>{item.confirmeddate}</span>
                </Col>
                <Col xs={4} md={3} lg={2}>
                  <span className='text-success'>Order deliverd:</span> <br />
                  <span className='text-light mt-1 text-uppercase'>{!item.Delivered.status?"pending":item.Delivered.date}</span>
                </Col>
              </Row>)) :"No data found"}
           
        </Container>
      </div>
      <Footer/>
   </>
  );
}

export default Order;
