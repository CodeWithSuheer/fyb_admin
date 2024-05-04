import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import AdminPanel from "./admin/AdminPanel";
import AllProducts from "./admin/AllProducts";
import CreateProduct from "./admin/CreateProduct";
import UpdateProduct from "./admin/UpdateProduct";
import "./App.css";
import Dashboard from "./admin/Dashboard";
import ViewOrders from "./admin/ViewOrders";
import OrderDetailPage from "./admin/OrderDetailPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSessionAsync } from "./features/authSlice";
import SendOtp from "./auth/SendOtp";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(userSessionAsync());
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* AUTH ROUTE */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sendOtp" element={<SendOtp />} />
          <Route path="/verifyOtp" element={<SendOtp />} />

          {/* ADMIN ROUTE */}
          <Route path="/admin" element={<AdminPanel />}>
            <Route index element={<Dashboard />} />
            <Route path="all_product" element={<AllProducts />} />
            <Route path="create_product" element={<CreateProduct />} />
            <Route path="update_product/:id" element={<UpdateProduct />} />
            <Route path="view_orders" element={<ViewOrders />} />
            <Route path="orderDetail/:id" element={<OrderDetailPage />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
