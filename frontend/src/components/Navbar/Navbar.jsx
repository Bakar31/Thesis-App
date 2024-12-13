import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 text-black">
      <div className="flex items-start">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/RUET_logo.svg/220px-RUET_logo.svg.png"
          alt="Logo"
          className="h-10 mr-2"
        />
      </div>

      <div className="flex items-center">
        <h1 className="text-xl font-bold ">
          Origin Classification of Blood Clots in Ischemic Stroke and
          Personalised Treatment Plan Generation to Reduce the Likelihood of
          Another Stroke
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
