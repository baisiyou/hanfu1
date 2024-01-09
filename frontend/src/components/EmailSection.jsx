import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { CircularProgress } from '@mui/material';
const EmailSection = () => {
  const [state, handleSubmit] = useForm("xjvqykyg");
  if (state.succeeded) {
    return (
      <div className='w-[85vw] md:w-[95vw] h-[150px] flex justify-center'>
        <p className='text-4xl font-semibold'>Thanks for joining!</p>
      </div>
    )
}

  return (
      <section className=' lg:w-[100%] lg:my-12 lg:mb-24 relative top-[-50px] flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-evenly items-center'>
          <div className="w-[98%] lg:w-fit text flex flex-col gap-8">
              <h2 className='lg:text-3xl' style={{color: '#102a42'}}>Join our newsletter and get 20% off</h2>
              <p className='w-[80%] lg:w-[550px]' style={{color: '#617d98'}}>
                
              </p>
          </div>
          <div className="emailSide">
              <form
                  className='flex items-center justify-center'
                    action="https://formspree.io/f/xjvqykyg"
                    method="POST"
                  onSubmit={handleSubmit}
              >
                  <input
                      type="email"
                      placeholder='Enter Email'
                      name='_replyto'
                      className='email max-w-96 sm:w-96 lg:w-96 pl-3 h-[42px] border-2 border-solid border-black outline-none'
                    />
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                  <button disabled={state.submitting} className='p-2 h-[42px] w-[90px] ml-2 border border-solid border-black bg-[#66696b]  text-[#fff] outline-none'>
                      {state.submitting ? <CircularProgress size={'20px'} /> : 'Subscribe'}
                  </button>
              </form>

          </div>
    </section>
  )
}

export default EmailSection