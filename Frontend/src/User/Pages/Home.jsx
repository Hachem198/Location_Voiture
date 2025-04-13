import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchSpace from "../components/SearchSpace/SearchSpace";
import InformationBar from "../components/InformationBar";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[url('C:\Users\ezrea\Desktop\Location_Voiture-main\Frontend\src\assets\imgs\locationVoiture.jpg')] h-screen bg-center filter flex flex-wrap bg-fixed">
        <SearchSpace></SearchSpace>
        <InformationBar></InformationBar>
      </div>
    </div>
  );
};

export default Home;
