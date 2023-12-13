import React, { createContext, useState } from "react";

export const orderStatus = createContext();
export const adminorderStatus = createContext();
function OrderContext({ children }) {
  const [orderId, setOrderId] = useState({});
  const [pendingorderId, setPendingOrderId] = useState({});
  return (
    <>
      <orderStatus.Provider value={{ orderId, setOrderId }}>
        <adminorderStatus.Provider value={{ pendingorderId, setPendingOrderId }}>
          {children}
        </adminorderStatus.Provider>
      </orderStatus.Provider>
    </>
  );
}

export default OrderContext;
