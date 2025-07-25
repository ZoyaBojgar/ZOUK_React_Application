import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="px-2 py-10 mt-15 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="text-sm uppercase text-[#8F87F1] font-medium mb-8 hover:cursor-pointer "
            onClick={() => navigate("/shop")}
          >
            Explore
          </p>

          <h2 className="text-3xl text-gray-400 md:text-4xl font-bold text-gray-900">
            Stylish and functional <br /> bags for every occasion.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Sleek and Stylish Wallets",
              desc: "Keep your essentials organized with our range of elegant wallets.",
              img: "/assets/images/w3.jpg",
            },
            {
              title: "Durable and Versatile Backpacks",
              desc: "Perfect for work, travel, and everyday adventures.",
              img: "/assets/images/bp2.jpg",
            },
            {
              title: "Chic and Elegant Handbags",
              desc: "Elevate your style with our stunning handbags.",
              img: "/assets/images/h1.jpg",
            },
            {
              title: "Unmatched Quality and Design",
              desc: "Crafted with care for lasting durability and style.",
              img: "/assets/images/h7.jpg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-4 hover:shadow-xl rounded-xl transition duration-300 bg-white p-4"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                <div className="mt-4 flex gap-4 text-sm text-indigo-600">
                  <button
                    className="hover:underline hover:text-[#8F87F1] transition duration-200"
                    onClick={() => navigate("/shop")}
                  >
                    Shop
                  </button>
                  <button
                    className="hover:underline hover:text-[#8F87F1] transition duration-200"
                    onClick={() => navigate("/shop")}
                  >
                    View →
                  </button>
                </div>
              </div>
              <motion.img
                src={item.img}
                alt={item.title}
                className="rounded-xl w-full h-48 object-cover transition duration-300 h-80"
                whileHover={{ scale: 1.01 }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
