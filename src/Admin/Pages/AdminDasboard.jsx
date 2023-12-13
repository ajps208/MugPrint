import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../Components/Sidebar'
import { getAllOrderAPI, getAllUsersAPI } from '../../Services/allApi'

function AdminDasboard() {
    const[allOrder,setAllOrder]=useState([])
    const[currentmonth,setMonth]=useState()
    const[totalOrder,settotalOrder]=useState()
    const[totalOrdermonth,settotalOrderMonth]=useState()
    const[totalcompletedOrder,settotalcompletedOrder]=useState()
    const[totalcompletedOrdermonth,settotalcompletedOrdermonth]=useState()
    const[pendingorders,setpendingorders]=useState()
    const[pendingordersMonth,setpendingordersMonth]=useState()
    const[totalAmount,setTotalAmount]=useState()
    const[monthTotalAmount,setMonthTotalAmount]=useState()
    const[credit,setCredit]=useState()
    const[Monthcredit,setMonthCredit]=useState()
    const[allUsers,setAllusers]=useState([])

    const getAllOrders = async () => {
        try {
          const result = await getAllOrderAPI();
      
          if (result.status === 200) {
            const ordersForCurrentMonth = result.data.filter(order => {
              const orderDate = new Date(order.confirmeddate);
              const currentMonth = new Date().getMonth();
              const currentYear = new Date().getFullYear();
              return orderDate.getMonth() === currentMonth && orderDate.getFullYear() === currentYear;
            });
      
            const totalcompletedorders = result.data.filter(order => order.orderstatus === true);
            const completedordersForCurrentMonth = ordersForCurrentMonth.filter(order => order.orderstatus === true);
      
            setAllOrder(result.data);
            settotalOrder(result.data.length);
            settotalOrderMonth(ordersForCurrentMonth.length);
            settotalcompletedOrder(totalcompletedorders.length);
            settotalcompletedOrdermonth(completedordersForCurrentMonth.length);
            setpendingorders(result.data.length - totalcompletedorders.length);
            setpendingordersMonth(ordersForCurrentMonth.length - completedordersForCurrentMonth.length);
            setTotalAmount(result.data.reduce((acc, order) => acc + order.price, 0));
            setMonthTotalAmount(ordersForCurrentMonth.reduce((acc, order) => acc + order.price, 0));
            setCredit(totalcompletedorders.reduce((acc, order) => acc + order.price, 0))
            setMonthCredit(completedordersForCurrentMonth.reduce((acc, order) => acc + order.price, 0))
          } else {
            console.log(result);
          }
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
    const getAllusers=async()=>{
        try {
                const result = await getAllUsersAPI();
                if (result.status === 200) {
                        setAllusers(result.data.length)
                }
        }catch(error){
                console.error('Error fetching orders:', error);
        }

    }
    useEffect(()=>{getAllOrders()},[])
    useEffect(()=>{getAllusers()},[])
    useEffect(()=>{
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        const d = new Date();
         let name = month[d.getMonth()];
         setMonth(name)
    },[])
  
    console.log(allOrder);
  return (
    <div style={{backgroundColor:"white",minHeight:"100vh",color:"black"}}>
    <Row className=' w-100'>
    <Col  xs={12} md={2} lg={2} ><Sidebar/></Col>
     <Col  xs={12} md={10} lg={10}><Container className='mt-5 d-flex flex-column align-items-center justify-content-center' >
         <Row className='mt-5' >
            <Col xs={6} md={4} lg={4} style={{width:"380px"}}>
                   <div className='border rounded shadow p-3'>
                    <h4><i class="fa-solid fa-chart-line"></i> Total Orders:{totalOrder}</h4>
                    <p className='pt-4'><i class="fa-regular fa-calendar"></i> Total Orders in {currentmonth} :{totalOrdermonth}</p>
                    </div>
            </Col>
            <Col xs={6} md={4} lg={4} style={{width:"380px"}}>
            <div className='border rounded shadow p-3'>
                    <h4><i class="fa-regular fa-square-check"></i> Completed Orders:{totalcompletedOrder}</h4>
                    <p className='pt-4' ><i class="fa-regular fa-calendar"></i> Completed Orders in  {currentmonth} :{totalcompletedOrdermonth}</p>
                    </div>
            </Col>
            <Col xs={6} md={4} lg={4} style={{width:"380px"}}>
            <div className='border rounded shadow p-3'>
                    <h4><i class="fa-solid fa-clock-rotate-left"></i> Pending Orders:{pendingorders}</h4>
                    <p className='pt-4'><i class="fa-regular fa-calendar"></i> Pending Orders in  {currentmonth} :{pendingordersMonth}</p>
                    </div>
            </Col>
         </Row>
         <Row className='mt-5' >
            <Col xs={6} md={4} lg={4} style={{width:"380px"}}>
                   <div className='border rounded shadow p-3'>
                    <h4><i class="fa-solid fa-money-bill-1-wave"></i> Total Amount:{totalAmount} ₹ </h4>
                    <p className='pt-4'><i class="fa-regular fa-calendar"></i> Total Amount in  {currentmonth} :{monthTotalAmount} ₹</p>
                    </div>
            </Col>
            <Col xs={6} md={4} lg={4} style={{width:"380px"}}>
            <div className='border rounded shadow p-3'>
                    <h4><i class="fa-solid fa-clock-rotate-left"></i> Credit Amount:{credit} ₹</h4>
                    <p className='pt-4'><i class="fa-regular fa-calendar"></i> Total credit in  {currentmonth} :{Monthcredit} ₹</p>
                    </div>
            </Col>
            <Col xs={6} md={4} lg={4} style={{width:"380px"}}>
            <div className='border rounded shadow p-5'>
                    <h4><i class="fa-solid fa-users"></i> Total Users:{allUsers}</h4>
                    {/* <p className='pt-4' ><i class="fa-regular fa-calendar"></i> Completed Orders in April :52</p> */}
                    </div>
            </Col>
            
         </Row>
        </Container></Col>
      </Row>
    
    </div>  )
}

export default AdminDasboard