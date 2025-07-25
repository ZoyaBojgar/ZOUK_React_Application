import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();
  const hideOnAuthPages =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <div className="px-3 py-5">
      {!hideOnAuthPages && <Navbar />}
      <Mainroutes />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
