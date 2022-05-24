import React, { useState } from "react";
import sidedata from "./Comps/Side/SideData";
// import SideNav from "./Comps/Side/SideNav";
import img from "./Comps/images/Group.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import TopNav from "./Comps/TopNav/TopNav";
import Middle from "./Comps/Middle";
import Quo from "./Comps/SideBar/Quo";
import { Routes, Route } from "react-router-dom";
import Profile from "./Comps/SideBar/Profile";
import Settings from "./Comps/SideBar/Settings";
import Order from "./Comps/SideBar/Order";
import Final from "./Comps/SideBar/Final";
import data from "./Comps/SideBar/Quotation/QuoData";
const App = () => {
  return (
    <div className="main-wrap">
      <div className="whole-wrapper">
        <div className="left-comp">
          <div className="left-top">
            {/* {sidedata.map((val) => {
              return <SideNav icon={val.icon} text={val.head} />;
            })} */}
            
          </div>

          <div className="left-bottom">
            <div className="actual-bot">
              <BsFillArrowRightCircleFill className="left-arrow" />
              <h1>our team will help you estimate</h1>
              <img src={img} alt="man" style={{ height: "12rem" }} />
            </div>
          </div>
        </div>

        <div className="middle-comp">
          <div className="top-nav">
            <TopNav />
          </div>

          <div className="router">
          <Final/>
            <Routes>
              <Route path="/" element={<Middle />} />
              <Route path="/quotation" element={<Quo />} />
              <Route path="/Profile" element={<Profile/>} />
              <Route path="/order" element={<Order/>} />
              <Route path="/setting" element={<Settings/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
