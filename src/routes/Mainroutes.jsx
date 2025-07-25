import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/explore" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Mainroutes;
