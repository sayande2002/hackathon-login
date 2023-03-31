import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/custombutton";

const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-5 h-[70vh]">
      <span className="text-6xl font-black"> ERROR 404 ! </span>
      <span className="text-xl font-bold">
        Page Not Found Unfortunately, The Page You Are Looking For Does Not
        Exist. Please Navigate To Home. Thank You
      </span>
      <div className="flex flex-row gap-2 ">
        <Link to={"/"}>
          <CustomButton>Back to Home</CustomButton>
        </Link>
        <Link onClick={() => navigate(-1)}>
          <CustomButton>Go Back</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
