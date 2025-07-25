import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "text-gray-100 hover:bg-[#7a6df5] px-3 py-2 rounded transition duration-300";

  const { cart } = useCart();

  const navItems = (
    <>
      <NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={linkClasses}
        onClick={() => setIsOpen(false)}
      >
        Products
      </NavLink>

      <NavLink
        to="/about"
        className={linkClasses}
        onClick={() => setIsOpen(false)}
      >
        About
      </NavLink>

      <NavLink
        to="/shop"
        className={linkClasses}
        onClick={() => setIsOpen(false)}
      >
        Shop
      </NavLink>

      <NavLink
        to="/login"
        className={linkClasses}
        onClick={() => setIsOpen(false)}
      >
        Login
      </NavLink>

      <NavLink to="/cart" className="relative">
        <FaShoppingCart className="text-white text-xl" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            {cart.length}
          </span>
        )}
      </NavLink>
    </>
  );

  return (
    <div className="w-full bg-[#8F87F1] px-6 py-4 flex justify-between items-center relative shadow-md rounded-xl">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavLink to="/" className="text-white text-2xl font-bold tracking-wide">
          ZOUK.
        </NavLink>
      </motion.div>

      <div className="sm:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <motion.div
          className="space-y-1 cursor-pointer"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div
            className="w-6 h-0.5 bg-white"
            variants={{
              open: { rotate: 45, y: 6 },
              closed: { rotate: 0, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white"
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white"
            variants={{
              open: { rotate: -45, y: -6 },
              closed: { rotate: 0, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <motion.div
        className="hidden sm:flex gap-6 items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        {navItems}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-[#8F87F1] text-black-500  sm:hidden py-6 flex flex-col items-center gap-4 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
