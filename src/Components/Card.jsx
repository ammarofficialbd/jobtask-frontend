import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Cotton bucket hat" />
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
      </div>
      <div className="p-4">
        <h2 className="text-gray-800 font-semibold text-lg">Cotton bucket hat</h2>
        <div className="mt-2">
          <span className="text-red-600 font-semibold">$18.00</span>
          <span className="text-gray-500 line-through ml-2">$20.00</span>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-gray-600 text-sm">Colors:</span>
          <div className="flex ml-2">
            <span className="w-6 h-6 bg-purple-300 rounded-full border border-gray-200 ml-1"></span>
            <span className="w-6 h-6 bg-gray-200 rounded-full border border-gray-200 ml-1"></span>
            <span className="w-6 h-6 bg-brown-600 rounded-full border border-gray-200 ml-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
