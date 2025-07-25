import React, { useState } from "react";
import { motion } from "framer-motion";
import { categories, products, PRODUCTS_PER_PAGE } from "../data";
import { useCart } from "../components/CartContext";
import { toast } from "react-toastify";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIdx,
    startIdx + PRODUCTS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuy = () => {
    toast.success("Your order has been placed!");
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-12 bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#8F87F1] text-center mb-[-20px]"
      >
        Shop Now
      </motion.h1>

      {!selectedCategory && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-40 mb-10"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                setSelectedCategory(cat.name);
                setCurrentPage(1);
              }}
              className="cursor-pointer text-center"
            >
              <h2 className="text-2xl mb-3 font-semibold text-[#8F87F1]">
                {cat.label}
              </h2>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-72 h-72 mx-auto object-cover rounded-xl shadow-lg w-[80%]"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Products Section */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-6 mt-20">
            <h2 className="text-3xl font-semibold text-gray-800">
              {selectedCategory} Collection
            </h2>
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 text-sm text-[#8F87F1] bg-white font-medium rounded hover:bg-gray-200 transition"
            >
              Back to Categories
            </button>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {paginatedProducts.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl shadow-md overflow-hidden bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1 text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-md font-medium text-[#8F87F1]">
                    {item.price}
                  </p>
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="px-4 py-2 rounded text-white bg-[#8F87F1] hover:bg-[#7a6df5] transition"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="px-4 py-2 rounded text-[#8F87F1] bg-white border border-[#8F87F1] hover:bg-gray-100 transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === i + 1
                      ? "bg-[#8F87F1] text-white"
                      : "bg-white text-[#8F87F1]"
                  } font-medium border border-[#8F87F1] hover:bg-[#8F87F1]/80 transition`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Product Modal */}
      {selectedProduct && (
        <div className="p-5 fixed inset-0 bg-purple-50 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg relative"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-4 text-gray-500 text-2xl hover:text-gray-700"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mb-4">
              {selectedProduct.description ||
                "This is a beautifully crafted product made with high-quality materials. Perfect for your everyday use or special occasions."}
            </p>
            <p className="text-lg font-bold text-[#8F87F1] mb-4">
              {selectedProduct.price}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="px-4 py-2 rounded text-white bg-[#8F87F1] hover:bg-[#7a6df5] transition"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuy}
                className="px-4 py-2 rounded text-[#8F87F1] bg-white border border-[#8F87F1] hover:bg-gray-100 transition"
              >
                Buy Now
              </button>
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className="px-4 py-2 rounded text-white bg-[#8F87F1] hover:bg-[#7a6df5] transition"
              >
                Go Back to Product
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Shop;
