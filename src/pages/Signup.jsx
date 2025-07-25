import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Submitted", form);
    navigate("/");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 relative overflow-hidden">
      <button
        onClick={handleGoBack}
        className="absolute top-6 left-6 text-[#8F87F1] text-2xl font-bold hover:text-purple-500 transition cursor-pointer"
        aria-label="Go Back"
      >
        ❌
      </button>

      <motion.div
        className="relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl px-6 sm:px-10 py-10 w-[90%] max-w-md"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3E50] mb-6 text-center">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-[#5D4037] font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D35400] bg-white/80"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-[#5D4037] font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D35400] bg-white/80"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-[#5D4037] font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D35400] bg-white/80"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#8F87F1] text-white py-2 rounded-lg font-semibold transition-transform hover:cursor-pointer "
          >
            Sign Up
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-[#5D4037]">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-[#8F87F1] font-semibold hover:underline cursor-pointer"
          >
            Log in
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
