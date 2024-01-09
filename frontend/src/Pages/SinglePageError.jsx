import React from 'react'
import { Link } from 'react-router-dom'

const SinglePageError = ({ errorCode, errorMsg }) => {

  return (
      <section className='w-[98vw] h-[94vh] flex justify-center items-center flex-col gap-3'>
          <h1 className='text-8xl'>{ errorCode }</h1>
          <h3 className='text-2xl'>{ errorMsg }</h3>
          <Link to='/products' className='bg-[#7f7f7f] p-2'>Back Products</Link>
    </section>
  )
}

export default SinglePageError