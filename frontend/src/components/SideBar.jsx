import React, { useEffect } from 'react'
import Logo from './Logo'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Links from './Links'
import Utilits from './Utilits'
import { FaCartShopping } from 'react-icons/fa6'
import CardButton from './CardButton'
import { useUserContext } from '../context/usercontext'
import { UseCartContext } from '../context/cart_context'
const SideBar = ({ show, setSide }) => {
  const { myUser } = useUserContext()
  const {total_items} = UseCartContext()
    useEffect(() => {
        document.querySelector('.mainSidebar').classList.toggle('showNavbar', show)
    }, [show])

  return (
      <div
        className='mainSidebar md:hidden w-screen h-screen bg-white absolute p-5'
        style={{
            top: '0',
            width: '100%',
            height: '98vh',
            left: '0',
        }}
      >
          <div className="sideBarUtilits flex items-center justify-between">
              <Logo />
              <IoCloseSharp onClick={() => setSide(!show)} color='red' className=' font-bold text-4xl cursor-pointer'/>
          </div>
        <div className="sideBar Links">
            <ul className='relative sidebar flex flex-col'>
                <Link className='sideLink' to='/' onClick={() => setSide(!show)}>Home</Link>
                <Link className='sideLink' to='about' onClick={() => setSide(!show)}>About</Link>
                <Link className='sideLink' to='products' onClick={() => setSide(!show)}>Products</Link>
                {myUser && <Link className='sideLink' to='/checkout' onClick={() => setSide(!show)}>Checkout</Link>}
            </ul>
          </div>
          <div className="utilites">
          <div className="card flex gap-4 justify-center">
          <h3 style={{color: '#102a42'}} className='flex relative items-center text-2xl gap-1 cursor-pointer'>
            Cart
          <span className='cart-num'>
              <Link to='/cart' onClick={() => setSide(!show)} className="div relative flex">
                <FaCartShopping />
                <span className='absolute text-[14px] top-[-15px] right-[-10px] flex justify-center items-center h-[24px] w-[24px] bg-[#979797] p-1 rounded-full'>{total_items}</span>
              </Link>
            </span>
          </h3>
            <CardButton />

        </div>
          </div>
    </div>
  )
}

export default SideBar