import React from 'react'
import SadFace from "../../assets/sadface.gif"

const NoData = () => {
  return (
    <div className='nodata-container'>
        <div className="container">
            <img src={SadFace} className="img-fluid" alt="" />
            <h5 className='mt-3 text-center'>Not Found Contact</h5>
        </div>
    </div>
  )
}

export default NoData