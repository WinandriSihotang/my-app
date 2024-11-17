import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">Toko Baju Wanita</Link>
        </h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-200">
            Produk
          </Link>
          <Link to="/cart" className="hover:text-gray-200">
            Keranjang <i className="bi bi-cart"></i>
          </Link>
          <Link to="/favorites" className="hover:text-gray-200">
            Favorit <i className="bi bi-heart-fill"></i>
          </Link>
          <Link to="/signup" className="hover:text-gray-200">
            Sign Up <i className="bi bi-person-circle"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
