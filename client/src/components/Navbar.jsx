import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import esatto from '../assets/esattosa.png';

const Navbar = () => {
  return (
    <>
      <div className="w-full mx-auto h-20 bg-slate-50 flex items-center justify-between z-20 px-8 border-b border-gray-300">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto w-full">
          <Link to="/">
            <div className="flex items-center p-4">
              <img
                src={esatto}
                alt="logo"
                className="w-max h-10 object-cover"
              />
            </div>
          </Link>

          <div className="text-2xl italic font-extralight ">
            Internship 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
