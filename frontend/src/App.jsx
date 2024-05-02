import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import AdminPanel from "./admin/AdminPanel";
import AllProducts from "./admin/AllProducts";
import CreateProduct from "./admin/CreateProduct";
import UpdateProduct from "./admin/UpdateProduct";
import Footer from "./components/footer/Footer";
import "./App.css";
import Dashboard from "./admin/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          {/* AUTH ROUTE */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ADMIN ROUTE */}
          <Route path="/admin" element={<AdminPanel />}>
            <Route index element={<Dashboard />} />
            <Route path="all_product" element={<AllProducts />} />
            <Route path="create_product" element={<CreateProduct />} />
            <Route path="update_product/:id" element={<UpdateProduct />} />
          </Route>
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
