import React, { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'
import { formatPrice } from '../reducers/helpers'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { UseProductsProvider } from '../context/products_context'
import {TbTrashXFilled} from 'react-icons/tb'
import { UseCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const SingleItemCart = ({ id, color, amount, image, name, price, max }) => {
    const { product_Loading: loading } = UseProductsProvider()
    const {removeItem, toggleAmount} = UseCartContext()
    var [count, setCount] = useState(amount)
  return (
      <div key={id} className="shopCart flex md:grid ">
          <Link to={`/products/${id}`} className="image_info flex md:grid ">
              {loading ? <Skeleton variant='rectangular' animation={'wave'} width={100} height={100} /> :
                <div className="image">
                <img src={image} className='h-[100px] w-[100px] object-cover'/>
                </div>
                }
              <div className="moreInfo flex flex-col gap-2">
                  <h3>{loading ? <Skeleton variant='text' animation={'wave'} width={80} /> : name }</h3>
                  {/* <h3 className='flex items-center gap-3'>Color: {loading ? <Skeleton variant='circular' animation={'wave'} width={18} height={18} /> : <div style={{backgroundColor: color}} className={`w-[18px] rounded-full h-[18px]`}></div> }</h3> */}
                    <h3 className='price md:hidden text-[#8c8c8c] font-normal'>{loading ? <Skeleton variant='text' animation={'wave'} width={80} /> : formatPrice(price)}</h3>
              </div>
          </Link>
          <div className="price hidden md:grid text-[#8c8c8c] font-normal">{loading ? <Skeleton variant='text' animation={'wave'} width={80} /> : formatPrice(price)}</div>
          
          <div className="quantity w-[100px] text-center">
              {loading ? <Skeleton variant='text' animation={'wave'} width={100} /> : 
                      <div className="moreInfo flex gap-4 justify-start max-w-[150px] items-center my-8">
                      <AiOutlineMinus fontSize={'20px'} className='p-0 m-0 cursor-pointer font-bold' onClick={() => {
                          if (count === 1) {
                              setCount(1)
                            } else {
                              setCount(count - 1)
                              toggleAmount(id, 'dec')
                            }
                      }} />
                      
                      <h3 className='text-[#102a42] text-3xl font-bold'>{count}</h3>
                      
                      <AiOutlinePlus fontSize={'20px'} className='p-0 m-0 cursor-pointer font-bold' onClick={() => {
                          
                          if (max == count) {
                              setCount(max)
                            } else {
                              setCount(count + 1)
                              toggleAmount(id, 'inc')
                          }
                            }}/>
                  </div>
              }
          </div>
          <div className="subtotal hidden md:grid text-[#617d98]">{loading ? <Skeleton variant='text' animation={'wave'} width={80} /> : formatPrice(price * amount)}</div>
          <div className="deleteBtn" onClick={() => removeItem(id)}>
              <TbTrashXFilled />
            </div>
    </div>
  )
}

export default SingleItemCart