import React from "react";

const CustomInput = ({ children, ...otherprops }) => {
  return (
    <input
      className="py-1 pl-3 w-80 font-semibold	border-2 border-black"
      {...otherprops}
    >
      {children}
    </input>
  );
};

export default CustomInput;
