import React from 'react';

const Button = ({ color, text }) => {
  return (
    <div
      className={`text-lg border-2 rounded-md px-5 py-3 ${
        color === 'black'
          ? 'bg-black text-white duration-500 hover:opacity-50 '
          : 'bg-white duration-500 hover:border-black'
      }`}
    >
      {text.toUpperCase()}
    </div>
  );
};

export default Button;
