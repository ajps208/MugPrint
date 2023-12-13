import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonApi"

// register
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")

}

// login
export const loginrAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")

}

// price
export const priceAPI=async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/price`,"","")

}

// addorder
export const addOrderAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/user/addorder`,reqBody,reqHeader)

}

// getall orders
export const getOrderAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/getorders`,"",reqHeader)

}

// getone order
export const getOneOrderAPI=async(orderid)=>{
    return await commonAPI("GET",`${BASE_URL}/user/getoneorder?id=${orderid}`,"","")

}
// --------------------------------Admin--------------------------------------------------

// get admin login

export const loginAPI=async(admin)=>{
    return await commonAPI("POST",`${BASE_URL}/admin/login`,admin,"")

}

// / getall orders
export const getAllOrderAPI=async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/getallorders`,"","")

}
// / getall users
export const getAllUsersAPI=async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/getallusers`,"","")

}

// upadte order by mugprint
export const updateMugPrintAPI=async(reqBody)=>{
    return await commonAPI("PATCH",`${BASE_URL}/user/mugprint`,reqBody,"")

}
// upadte order by outfordelivery
export const updateOutForDeliveryAPI=async(reqBody)=>{
    return await commonAPI("PATCH",`${BASE_URL}/user/outfordelivery`,reqBody,"")

}
// upadte order by delivered
export const deliveredAPI=async(reqBody)=>{
    return await commonAPI("PATCH",`${BASE_URL}/user/delivered`,reqBody,"")

}