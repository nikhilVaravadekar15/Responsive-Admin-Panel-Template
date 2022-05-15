import React from 'react'
import "./Updates.css"

import { UpdatesData } from '../../data/updatesData'

function Updates() {

    const customUpdates = UpdatesData.map((updateItem, index) => {
        return (
            <Update updateItem={updateItem} index={index}/>
        )
    })

  return (
    <div className="Updates">
         {customUpdates}
    </div>
  )
}

function Update({updateItem, index}){
    return (
            <div className="update" 
                key={index}
            >
                <img src={updateItem.image} alt={`${updateItem.name}`} />
                <div className="notification">
                    <div 
                        style={{ marginBottom: "0.5rem" }}
                    >
                        <span>{updateItem.name} </span>
                        <span>{updateItem.notification}</span>
                    </div>
                    <span className='updateItem-time'>{updateItem.time}</span>
                </div>
            </div>
        )
}

export default Updates
