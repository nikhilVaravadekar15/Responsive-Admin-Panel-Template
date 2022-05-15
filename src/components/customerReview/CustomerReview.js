import React from 'react'
import Chart from "react-apexcharts"

import { CustomerReviewData } from '../../data/customerReviewData'
import "./CustomerReview.css"


function CustomerReview() {
    const data = CustomerReviewData
    return (
        <div className="CustomerReview">
            <Chart 
                series={data.series}
                options={data.options}
                type="area"
            />
        </div>
    )
}

export default CustomerReview