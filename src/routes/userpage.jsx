import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/datacontext";
import CustomButton from "../components/custombutton";
import Avatar from "../assests/user-icon.jpg";

const Userpage = () => {
  const navigate = useNavigate();
  const { fields } = useContext(DataContext);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-3xl font-bold text-center">User Page</p>
      <img
        className="h-40 aspect-square rounded-[50%] border-black border-2 cursor-pointer object-cover"
        src={fields?.avatar ?? Avatar}
        alt="avatar"
      />
      <table className="w-[480px] border-black border-2">
        <thead>
          <tr className="bg-black text-white">
            <th className="border border-white">User Name</th>
            <th className="border border-white">User Type</th>
            <th className="border border-white">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border border-black">{fields?.username ?? "-"}</td>
            <td className="border border-black">{fields?.user ?? "-"}</td>
            <td className="border border-black">{fields?.password ?? "-"}</td>
          </tr>
        </tbody>
      </table>
      <Link onClick={() => navigate(-1)}>
        <CustomButton>Go Back</CustomButton>
      </Link>
    </div>
  );
};

export default Userpage;
