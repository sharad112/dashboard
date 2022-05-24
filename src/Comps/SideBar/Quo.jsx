import React from "react";
import { BsThreeDots } from "react-icons/bs";
import data from "./Quotation/QuoData";

const Quo = (props) => {
  return (
    <div className="quo-card-wrap">
      {data.map((val) => {
        return (
          <div className="quo-card">
            <div className="name">
              <div className="img1">
                <img src={val.img} alt="status" />
              </div>

              <div className="details">
                <h1>{val.head}</h1>
                <p>{val.serial}</p>
              </div>
            </div>

            <div className="items">
              <h1>{val.value}</h1>
              <p>{val.items}</p>
            </div>

            <div className="date">
              <h1>{val.date}</h1>
              <p>{val.time}</p>
            </div>

            <div className="name1">
              <img src={val.img1} alt="person profile" />
              <h1>{val.name1}</h1>
            </div>

            <div className="status">
              <h1>{val.status}</h1>
            </div>

            <div className="options">
              <BsThreeDots />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Quo;
