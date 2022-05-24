import React from 'react';
import Overview from './Overview/Overview';
import Overdata from "./Overview/OverData";
import Chart from "./Charts/BarChart/Bar";
import RadarC from "./Charts/RadarChart/Radar";
const Middle = () => {
  return (
    <div className="middle">
  

     <div className="overview-wrapper">
       {Overdata.map((val, index) => {
         return (
           <Overview
             icons={val.icons}
             numbers={val.numbers}
             action={val.action}
             percent={val.percent}
           />
         );
       })}
     </div>

     <div className="bar-chart">
             <div className="left-chart">
             <h1>request overview</h1>
              <Chart/>
             </div>
             <div className="right-chart">
                <RadarC/>
             </div>
          </div>
    </div>
  )
}

export default Middle;