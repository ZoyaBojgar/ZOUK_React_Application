import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#8F87F1] mt-20 px-6 md:px-10 py-12 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-logo font-semibold mb-4">ZOUK</h2>
          <div className="text-sm space-y-2">
            <p>
              <span className="font-semibold">Address:</span>
              <br />
              Level 1, 12 Sample St, Sydney NSW 2000
            </p>
            <p>
              <span className="font-semibold">Contact:</span>
              <br />
              1800 123 4567
              <br />
              support@bags.com
            </p>
          </div>
          <div className="flex space-x-4 mt-4 text-lg">
            <FaFacebookF className="hover:text-blue-200 cursor-pointer" />
            <FaInstagram className="hover:text-pink-300 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-200 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-300 cursor-pointer" />
            <FaYoutube className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <h4 className="font-semibold mb-2">Explore</h4>
          <Link to="/shop" className="hover:underline block">
            Shop Now
          </Link>
          <Link to="/about" className="hover:underline block">
            About Us
          </Link>
          <Link to="/login" className="hover:underline block">
            Contact
          </Link>
          <p className="hover:underline cursor-pointer">FAQ Section</p>
          <p className="hover:underline cursor-pointer">Returns Policy</p>
        </div>

        <div className="space-y-2 text-sm">
          <h4 className="font-semibold mb-2">Resources</h4>
          <p className="hover:underline cursor-pointer">Gift Cards</p>
          <p className="hover:underline cursor-pointer">Track Order</p>
          <p className="hover:underline cursor-pointer">Customer Reviews</p>
          <p className="hover:underline cursor-pointer">Blog Posts</p>
          <p className="hover:underline cursor-pointer">Social Media</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-10 border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white gap-3">
        <p>© 2025 ZOUK. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:underline cursor-pointer">
            Cookies Settings
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
