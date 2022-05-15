import React, { useState } from 'react'
import "./Sidebar.css"

import Logo from "../../images/logo.png"
import { SidebarData } from '../../data/leftSidebarData'
import {UilSignOutAlt} from "@iconscout/react-unicons"

function Sidebar() {

    const [selected, setSelected] = useState(0);

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
    <div className="Sidebar">
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
    </div>
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