import React from 'react'
import Updates from '../updates/Updates'
import CustomerReview from '../customerReview/CustomerReview'
import "./RightSideBar.css"

function RightSideBar() {
  return (
    <div className="RightSideBar">
        <div>
            <h3 className='RightSideBar-text'>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3 className='RightSideBar-text'>Customer Review</h3>
            <CustomerReview />
        </div>
    </div>
  )
}

export default RightSideBar