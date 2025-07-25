import { motion } from "framer-motion";
import Products from "./Products";
import { BsBag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="px-4 md:px-16 py-16 bg-purple-50 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Discover Your Perfect Bag for Every Occasion
            </h1>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Explore our exclusive collection of stylish and functional bags
              designed to meet all your needs. Whether you're heading to work,
              school, or a weekend getaway, we have the perfect companion for
              you.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/shop")}
                className="bg-[#8F87F1] hover:bg-[#7a6df5] text-white px-6 py-2 rounded-md text-sm font-medium shadow-lg transition duration-200"
              >
                Shop
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
                className="border border-gray-400 hover:border-gray-600 text-gray-700 px-6 py-2 rounded-md text-sm font-medium shadow-sm transition duration-200"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <motion.img
              src="/assets/images/hero.png"
              alt="Stylish bag"
              className=" w-full md:w-[500px] lg:w-[600px] transition-transform duration-300 hover:scale-105 object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <Products />
      </section>

      <section className="max-w-screen-xl mx-auto px-4 py-12 mt-20 bg-purple-50 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-xl">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <BsBag className="text-3xl text-gray-800" />
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Explore Our Exclusive <br className="hidden md:block" />
            Collection of Bags
          </motion.h1>

          <motion.p
            className="text-gray-600 text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover the perfect bag for every occasion. From stylish wallets to
            durable backpacks, our featured products combine functionality with
            flair.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button
              onClick={() => navigate("/shop")}
              className="text-sm font-medium text-white px-4 py-2 rounded bg-[#8F87F1] hover:bg-[#7a6df5] transition"
            >
              Shop
            </button>

            <button
              onClick={() => navigate("/shop")}
              className="text-sm font-medium text-black border border-gray-300 px-4 py-2 rounded hover:border-[#7a6df5] transition"
            >
              View →
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/assets/images/h4.jpg"
            alt="Man with bag"
            className="w-full max-w-sm rounded-xl object-cover shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
