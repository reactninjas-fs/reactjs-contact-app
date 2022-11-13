import React from 'react'
import SadFace from "../../assets/sadface.gif"

const NoData = () => {
  return (
    <div className='nodata-container'>
        <div className="container text-center">
            <img src={SadFace} className="img-fluid" width="300" alt="" />
            <h5 className='mt-3'>Not Found Contact</h5>
        </div>
    </div>
  )
}

export default NoData