import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      
      
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/RUET_logo.svg/220px-RUET_logo.svg.png"
        alt="Logo"
        className="h-20 mr-2"
      />
      <h1 className="font-bold text-xl">
        Rajshahi University of Engineering & Technology
      </h1>
      <h1 className="font-bold text-xl mb-2">
        Department of Mechatronics Engineering
      </h1>
      <h1 className="font-bold text-2xl">
        Origin Classification of Blood Clots in Ischemic Stroke and Treatment
        Plan Generation to Reduce the Likelihood of Another Stroke
      </h1>
      
    </div>
  );
};

export default Header;
