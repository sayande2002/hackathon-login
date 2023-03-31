import React from "react";

const CustomButton = ({ className, children }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 font-semibold px-5 py-[0.4rem]
bg-black text-white  hover:bg-white hover:text-black hover:ring-1 hover:ring-black ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
