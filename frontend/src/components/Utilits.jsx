import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import CardButton from './CardButton'
import { UseCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
const Utilits = ({ style }) => {
  const {total_items, cart} = UseCartContext()
  return (
    <div className="utilits hidden md:flex w-full justify-center md:w-72" style={{display: style}}>
        <div className="card flex gap-4 justify-center">
          <Link  to='/cart' style={{color: '#102a42'}} className='flex relative items-center text-2xl gap-1 cursor-pointer'>
            Cart
          <div  className='cart'>
            <div
              className=
              'absolute text-[16px] top-[-12px] right-[-14px] flex justify-center items-center rounded-full h-[25px] w-[25px] bg-[#4a714a] text-white'>
              {total_items}
            </div>
              <FaCartShopping />
            </div>
          </Link>
            <CardButton />
        </div>
      </div>
  )
}

export default Utilits