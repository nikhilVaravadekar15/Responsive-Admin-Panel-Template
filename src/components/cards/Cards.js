import React from 'react'

import "./Cards.css"
import { cardsData } from '../../data/data'
import Card from '../card/Card'

function Cards() {

  const customCards = cardsData.map((cardItem, index) => {
    return (
      <div className="parentContainer">
        <Card 
          title={cardItem.title}
          colors={cardItem.colors}
          barValue={cardItem.barValue}
          value={cardItem.value}
          png={cardItem.png}
          series={cardItem.series}
        />
      </div>
    )
  })

  return (
    <div className="Cards">
      {customCards}
    </div>
  )
}

export default Cards