
import React from 'react'
import { Heart, Search, ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Wedding Shop</p>
        <p className="copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p><Heart size={18} color="#ffddf4"/> Made with lots of love & a little bit of magic! ✨</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

