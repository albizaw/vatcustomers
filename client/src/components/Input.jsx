import React from 'react';

const Input = ({ placeholder, type, props }) => {
  return (
    <>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className=" text-sm border-2 border-gray-300 p-3 rounded-xl w-full shadow-sm focus:outline-none focus:border-gray-400"
      />
    </>
  );
};

export default Input;
