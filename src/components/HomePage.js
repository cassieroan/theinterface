import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Welcome to Cassie's NFT Market 👋
      </h1>
      <div className="flex justify-center">
        <Link to="/quantum-cats">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4">
            Explore Quantum Cats
          </button>
        </Link>
        <Link to="/ordinal-maxi-biz">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Discover Ordinal Maxi Biz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
