import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
      <div className='w-[98vw] h-[94vh] flex justify-center items-center flex-col gap-3'>
          <h1 className='text-8xl'>404</h1>
          <h3 className='text-2xl'>Sorry, the page you tried cannot be found</h3>
          <Link to='/' className='bg-[#cdcdcd] p-2'>Back Home</Link>
    </div>
  )
}

export default ErrorPage