import { useCart } from "../components/CartContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleBuyNow = (itemId) => {
    toast.success("Your order has been placed!");
    removeFromCart(itemId);
  };

  return (
    <div className="min-h-screen bg-purple-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-[#8F87F1] mb-8">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl shadow gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-[#8F87F1] font-medium">{item.price}</p>
                </div>
              </div>
              <div className="flex gap-3 justify-end sm:justify-start">
                <button
                  onClick={() => handleBuyNow(item.id)}
                  className="text-sm bg-green-500 text-white px-4 px-4 py-2 rounded text-[#8F87F1] bg-white border border-[#8F87F1] hover:bg-gray-100 transition"
                >
                  Buy Now
                </button>
                
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="w-full bg-[#8F87F1] text-white py-2 rounded-lg hover:bg-[#7a6df5] transition"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
