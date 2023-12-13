import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./Main";
import Orders from "./Order";
import OrderView from "./OrderView";
import Auth from "./Auth";
import AdminLogin from "./Admin/AdminLogin";
import AdminDasboard from "./Admin/Pages/AdminDasboard";
import PendingOrderView from "./Admin/Pages/PendingOrderView";
import PendingView from "./Admin/Pages/PendingView";

function App() {
  return (
    <>
  
      <Routes>
      {/* --------------admin------------ */}
      <Route path='/adminlogin' element={<AdminLogin />}/>
      <Route path="/admindashboard" element={<AdminDasboard />}></Route>
      <Route path="/pending" element={<PendingOrderView />}></Route>
      <Route path="/pendingview" element={<PendingView />}></Route>


      {/* --------------user------------- */}
      <Route path='/login' element={<Auth />}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/order" element={<Orders/>}/>
      <Route path="/orderview" element={<OrderView/>}/>
      </Routes>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
