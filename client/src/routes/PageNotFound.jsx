import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const PageNotFound = () => {
  return (
    <div className="w-full h-screen mx-auto p-10 flex flex-col justify-center items-center gap-10">
      <div className="w-full flex justify-center items-center">
        <h1 className="md:text-7xl text-4xl font-bold mr-6">
          404{' '}
          <span className="md:ml-7 ml-3 border-r-4 h-full border-black "></span>
        </h1>
        <h2 className="md:text-6xl text-2xl font-light">
          This page could not be found
        </h2>
      </div>
      <div>
        <Link to="/">
          <Button text="GO BACK TO THE PANEL" color="white" />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
