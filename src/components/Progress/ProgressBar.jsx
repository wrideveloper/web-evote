import React from 'react'
import { Progress } from 'reactstrap'

const ProgressBar = ({ max, value, index }) => {
    return (
        <div className="d-md-flex justify-content-between mt-3">
            <div>
                <h5>C{index}</h5>
            </div>
            <div style={{ width: '95%', paddingTop: 5 }}>
                <Progress
                    color=""
                    max={max}
                    value={value}
                />
            </div>
        </div>
    )
}

export default ProgressBar
