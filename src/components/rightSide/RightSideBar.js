import React from 'react'
import Updates from '../updates/Updates'
import CustomerReview from '../customerReview/CustomerReview'
import "./RightSideBar.css"

function RightSideBar() {
  return (
    <div className="RightSideBar">
        <div className='RightSideBar-Updates'>
            <h3 className='RightSideBar-text'>Updates</h3>
            <Updates/>
        </div>
        <div className='RightSideBar-CustomerReview'>
            <h3 className='RightSideBar-text'>Customer Review</h3>
            <CustomerReview />
        </div>
    </div>
  )
}

export default RightSideBar