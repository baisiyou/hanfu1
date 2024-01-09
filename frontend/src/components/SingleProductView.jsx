import React from 'react'
import { formatPrice } from '../reducers/helpers';
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material'
import { UseProductsProvider } from '../context/products_context';
export const SingleProductView = ({ image, name, price, id }) => {
  const {
    product_Loading: loading,
} = UseProductsProvider()
  return (
      <div key={id} className="product min-w-[200px] max-w-[350px]">
      <div
        className="image w-full relative flex justify-center items-center"
      >
        {
          loading ? <Skeleton animation='wave' variant='rectangular' width={300} height={200} /> :
            <img src={image} loading='lazy' className=' w-[400px] min-h-[450px] aspect-square max-h-[250px] object-cover' />
            
        }
        <div
          className="overlay w-full duration-500	absolute top-0 h-full z-[2] transition opacity-0"
          style={{backgroundColor: 'rgba(34, 34, 34, 0.5)'}}
        ></div>
        <Link to={`/products/${id}`}
          className="searchOverlay duration-500	cursor-pointer z-10 absolute transition opacity-0 rounded-full text-white text-3xl bg-[#9c9c9c] p-2">
            <AiOutlineSearch />
          </Link>
          </div>
          <div className="info w-full mx-auto flex justify-between mt-[10px]">
              <h4 className='font-normal first-letter:uppercase text-[#102a42]'>{loading ? <Skeleton animation='wave' width={150} /> : name }</h4>
              <h4 className='text-[#797979] font-normal'>{ loading ? <Skeleton variant='text' animation='wave' width={60} /> : formatPrice(price) }</h4>
          </div>
    </div>
  )
}
