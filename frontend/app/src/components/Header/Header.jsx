import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-4 mt-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/RUET_logo.svg/220px-RUET_logo.svg.png"
        alt="Logo"
        className="h-20 mr-2"
      />

      <h1 className="font-bold text-2xl mb-2">
        Origin Classification of Blood Clots in Ischemic Stroke and Treatment
        Plan Generation to Reduce the Likelihood of Another Stroke
      </h1>
      <p className="font-bold text-xl">Under the Supervision of</p>
      <p className="font-bold text-lg">Sarafat Hussain Abhi</p>
      <p className="font-bold text-lg">Assistant Professor</p>
      <h1 className="font-bold text-lg">
        Department of Mechatronics Engineering
      </h1>
      <h1 className="font-bold text-lg">
        Rajshahi University of Engineering & Technology
      </h1>
    </div>
  );
};

export default Header;
