import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [mdp, setmdp] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordVisible = () => {
    setPasswordVisible((p) => !p);
  };
  const handleConnectUser = async () => {
    const user = {
      username,
      mdp,
    };
    axios
      .post(`http://localhost:3000/admin/login`, user)
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.error);
        } else {
          toast.success("Login Successful.Welcome!");
          navigate("/admin/cars");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-gray-950 bg-cover bg-center h-screen flex justify-center items-center">
      <div className="border-white border-2 w-[800px] h-[550px] flex">
        <div className="w-[500px] border-r-2 border-r-white h-full">
          <h1 className="text-white flex justify-center font-cdb text-[40px]">
            Login
          </h1>
          <div className="ml-8 p-4 border-b-2 border-b-white w-fit flex">
            <label className="text-white"></label>
            <br />
            <IoPersonSharp className="text-white mt-1 mr-1" />
            <input
              type="text"
              className="bg-transparent text-white focus:outline-none"
              value={username}
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="ml-8 p-4 border-b-2 border-b-white w-fit flex mt-6">
            <label className="text-white"></label>
            <br />
            <FaLock className="text-white mt-1 mr-1" />
            <input
              type={passwordVisible ? "text" : "password"}
              className="bg-transparent text-white focus:outline-none"
              value={mdp}
              placeholder="Password"
              onChange={(e) => {
                setmdp(e.target.value);
              }}
            />
            <MdOutlineRemoveRedEye
              className="text-white mt-2"
              onClick={handlePasswordVisible}
              title="Show Password"
            />
          </div>
          <div className="flex justify-center items-center ">
            <button
              className="text-white mt-8 border-2 border-white w-[100px] h-[40px] rounded-md hover:bg-white hover:text-black transform ease-in duration-300"
              onClick={handleConnectUser}
            >
              Login
            </button>
          </div>
        </div>
        <div className="bg-[url('https://images.unsplash.com/photo-1595853035070-59a39fe84de3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center w-full"></div>
      </div>
    </div>
  );
};

export default Login;
