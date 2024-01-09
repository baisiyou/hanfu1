import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import {MdOutlineDone} from 'react-icons/md'
import { UseCartContext } from '../context/cart_context'
const AddToCard = ({ colors, stock, id, product }) => {
  const {addToCart} = UseCartContext()
  const [nowColor, setColor] = useState(colors[0])
  var [count, setCount] = useState(1)
  return (
    <>
      
      {/* <div className="moreInfo my-4 flex gap-4 items-center">
      <span className='text-[#324d67] font-bold'>Colors : </span>
          {
          colors.map((color, index) => {
              return <div className={`${nowColor === color ? 'activeColor' : ''} w-[22px]  cursor-pointer h-[22px] rounded-full`} key={index} onClick={() => setColor(colors[index])} style={{ backgroundColor: color }}>
                  <span className='hidden rounded-full w-full h-full justify-center items-center' style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
              }}><MdOutlineDone color='white'/></span>
          </div>
          })
          }
      </div> */}

      <div className="moreInfo flex gap-4 items-center my-8">
        <AiOutlineMinus fontSize={'22px'} className='cursor-pointer font-bold m-2' onClick={() => {
            setCount(count - 1)
            if (count == 1) {
              setCount(1)
            } 
        }} />
        
        <h3 className='text-[#102a42] text-3xl font-bold'>{count}</h3>
        
        <AiOutlinePlus fontSize={'22px'} className='cursor-pointer font-bold m-2' onClick={() => {
            setCount(count + 1)
            if (stock == count) {
              setCount(stock)
            }
              }}/>
          </div>
              
      <div onClick={() => addToCart(id, nowColor, count, product)}
        className='bg-[#999999] transition cursor-pointer rounded-md text-white hover:text-[#2e2e2e] hover:bg-[#f8f8f8] w-[130px] p-2 flex items-center justify-center'>
    <button className='font-medium'>ADD TO CART</button>
    </div>
    </>
  )
}

export default AddToCard