import React, { useState } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';

const Enhancer = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Header Section with Profile */}
      <div className="w-full flex justify-end p-5 absolute z-50">
        <div className="relative group">
          <img
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-300 hover:shadow-md"
            src="https://img.freepik.com/premium-vector/social-media-logo_1305298-29989.jpg?semt=ais_items_boosted&w=740"
            alt="Profile"
          />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl py-3 flex flex-col items-center gap-2">
              <Link
                to="/profile"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Profile
              </Link>
              <Link
                to="/logout"
                className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            AI Image Enhancer
          </h1>
          <p className="text-lg text-gray-600">
            Upload your image and let AI enhance it in seconds!
          </p>
        </div>

        <Home />

        <footer className="text-sm text-gray-500 mt-8 text-center">
          Powered by <span className="font-semibold">@Pic Enhancer</span>
        </footer>
      </div>
    </>
  );
};

export default Enhancer;
