import React, {useState} from 'react'

import { motion, AnimateSharedLayout} from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import Chart from "react-apexcharts";

import { UilTimes } from "@iconscout/react-unicons"
import 'react-circular-progressbar/dist/styles.css';
import "./Card.css"

import { chartOptionsData } from '../../data/chartOptionsData';

function Card(props) {
  
  const [expanded, setExpanded] = useState(false);

  function setExpandedCard(flag){
    setExpanded(() => {
      return flag
    })
  }

  return (
    <AnimateSharedLayout>
      {
        expanded ? 
          <ExpandedCard param={props} handleCardExpansion={setExpandedCard}/> : 
          <CompactCard param={props} handleCardExpansion={setExpandedCard}/>
      }
    </AnimateSharedLayout>
  )
}

function CompactCard({param, handleCardExpansion}) {
  const Png = param.png

  return (
    <motion.div 
      className="CompactCard"
      style={param.colors}
      layoutId="expandableCard"
      onClick={() => handleCardExpansion(true)}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>${param.title}</span>
      </div>
      <div className="details">
        <Png/>
        <span>${param.value}</span>        
        <span>Last 24 Hours</span>
      </div>
    </motion.div>
  )
}


function ExpandedCard({param, handleCardExpansion}) {
  const data = chartOptionsData
  return (
    <motion.div 
      className="ExpandedCard"
      style={param.colors}
      layoutId="expandableCard"
    >
      <div style={{
            alignSelf: "flex-end",
            cursor: "pointer",
            color: "#fff"
          }}>
        <UilTimes
          onClick={() => handleCardExpansion(false)}
        /> 
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart
          options={data.options}
          series={param.series}
          type="area"
        />
      </div>
      <span>Last 24 Hours</span>
    </motion.div>
  )
}




export default Card