import React from 'react'
import { formatPrice } from '../reducers/helpers';
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material'
import { UseProductsProvider } from '../context/products_context';
export const SingleProductList = ({ image, name, price, id, description }) => {
  const {
    product_Loading: loading,
} = UseProductsProvider()
  return (
      <div key={id} className="product w-full gap-2 grid min-w-[200px] max-w-[350px]">
      <div
        className="image transition w-auto relative flex justify-center items-center"
      >
        {
          loading ? <Skeleton animation='wave' variant='rectangular' width={200} height={200} /> :
            <img src={image} loading='lazy' className=' w-full object-cover aspect-square min-h-[200px] max-h-[250px]' />
            
        }
          </div>
          <div className="info w-auto flex flex-col gap-2">
              <h4 className='font-bold first-letter:uppercase text-[#102a42]'>{loading ? <Skeleton animation='wave' width={150} /> : name }</h4>
              <h4 className='text-[#727272] font-normal'>{ loading ? <Skeleton variant='text' animation='wave' width={60} /> : formatPrice(price) }</h4>
        <p className='max-w-full'>{description.substring(0, 150)}...</p>
        <Link className='bg-[#6b6b6b] mt-2 w-20 p-1 rounded-md text-center text-white' to={`/products/${id}`}>
          Details
          </Link>
      </div>
    </div>
  )
}
