import React from 'react';
import Gfglogo from '../assets/Gfglogo .png';

const CommunityPartner = () => {
  return (
    <div className="flex flex-col items-center bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 relative">
        <span style={{ color: "#00B4D9" }}>O</span>
          <span>FFICIAL</span>
          <span className="inline-block w-6 sm:w-8 lg:w-6"></span>
          <span style={{ color: "#00B4D9" }}>A</span>
          <span>FFILIATES</span>
        <div className="h-1 w-24 bg-[#00B4D9] mx-auto mt-2 rounded-full"></div>
      </h1>

      <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300">
        <img
          src={Gfglogo}
          alt="Community Partner Logo"
          className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-full border-2 border-[#00B4D9] mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-700">GFG Student Chapter</h2>
        <p className="text-sm text-gray-500">K.S.R.I.E.T</p>
      </div>
    </div>
  );
};

export default CommunityPartner;
