import React, { useState } from 'react'
import {UilSignOutAlt, UilBars} from "@iconscout/react-unicons"
import { motion } from 'framer-motion'

import { SidebarData } from '../../data/leftSidebarData'

import "./Sidebar.css"
import Logo from "../../images/logo.png"

function Sidebar() {

    const [selected, setSelected] = useState(0);
    const [sideBarExpanded, setSideBarExpanded] = useState(true);
    
    function handleItemClick(id){
        setSelected(() => {
            return id
        })
    }

    const customItems = SidebarData.map((item, index) => {
        return(
            <MenuItem 
                selected={selected}
                id={index}
                handleMenuItemClick={handleItemClick}
                item={item}
            />
        )
    })

  return (
    <>
        <div className='Sidebar__bars' 
            style={sideBarExpanded ? {left: "48%"} : {left: "4%"}}
            onClick={() => setSideBarExpanded(!sideBarExpanded)}
        >
            <UilBars />
        </div>
        <motion.div className="Sidebar"
            style={sideBarExpanded ? {left: "0%"} : {left: "-48%"}}
            animate={window.innerHeight <= 768 ? `${sideBarExpanded}` : ""}
        >
            {/* Logo */}
            <div className="logo">            
                <img src={Logo} alt=""  draggable="false"/>
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            {/* menu */}
            <div className="menu">
                {customItems}
                <div className="menuItem UilSignOutAlt">
                    <UilSignOutAlt/>
                </div>
            </div>
        </motion.div>
    </>
  )
}


function MenuItem(item){
    return (
        <div className={item.selected === item.id ? "menuItem active" : "menuItem" }
            key={item.id}
            onClick={() => item.handleMenuItemClick(item.id)}
        >
            <item.item.icon/>
            <span>{item.item.heading}</span>
        </div>
    )
}

export default Sidebar