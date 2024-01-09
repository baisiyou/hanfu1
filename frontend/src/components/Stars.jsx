import React, { useState } from 'react'
import {BsStarFill, BsStar, BsStarHalf} from 'react-icons/bs'

const Stars = ({stars}) => {
    const tempstars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5
        return (
            <span key={index} style={{color: 'rgb(255, 185, 0)'}}>
                {
                    stars >= index ? (
                        <BsStarFill />)
                        : stars >= number ? (
                            <BsStarHalf />
                        ) : (
                            <BsStar />
                        )
                }
            </span>
        )
    })
  return (
      <div className='flex gap-1'>
        {tempstars}
    </div>
  )
}

export default Stars