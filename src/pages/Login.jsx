import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", { email, password });

    navigate("/");
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 relative overflow-hidden">
      <button
        onClick={handleGoBack}
        className="absolute top-6 left-6 text-purple-500 text-2xl font-bold hover:text-purple-700 transition cursor-pointer"
        aria-label="Go Back"
      >
        ❌
      </button>

      <motion.div
        className="relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl px-6 sm:px-10 py-10 w-[90%] max-w-md"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3E50] mb-6 text-center">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-[#5D4037] font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D35400] bg-white/80"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              id="password"
              autoComplete="off"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D35400] bg-white/80"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#8F87F1] text-white py-2 rounded-lg font-semibold transition-all hover:cursor-pointer"
          >
            Log In
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-[#5D4037]">
          Don't have an account?{" "}
          <button
            onClick={handleSignupRedirect}
            className="text-[#8F87F1] font-semibold hover:underline cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
