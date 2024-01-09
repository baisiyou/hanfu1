import CartColunms from './CartColunms'
import { Link } from 'react-router-dom'
import {formatPrice} from '../reducers/helpers'
import { UseCartContext } from '../context/cart_context'
import {useUserContext} from '../context/usercontext'
import SingleItemCart from './SingleItemCart'

const CartContent = () => {
    const { total_amount, shipping_fee, cart, clearCart } = UseCartContext()
    const { isAuthenticated, loginWithRedirect } = useUserContext()
  return (
      <section className='flex flex-col min-h-[100vh] w-full md:w-[98vw] mt-[100px] md:mt-0 items-center'>
          <CartColunms />
          <div
              className="content flex flex-col gap-6 items-center md:w-[80%] min-h-fit py-5"
          >

              {
                  cart.map((item) => {
                      return <SingleItemCart {...item} />
                  })
              }

              <div style={{
              border: '1px solid transparent',
              borderTopColor: '#bcccdc'
          }}
                  className="btns flex w-full pt-5 justify-between"
              >
              <Link className='bg-[#858585] text-white w-[160px] text-center p-1 rounded-md'>Continue Shopping</Link>
              <Link className='bg-[#222] text-white w-[160px] text-center p-1 rounded-md' onClick={() => clearCart()}>Clear Shopping Cart</Link>
          </div>
          
          <div className="total w-full flex items-center flex-col">
                  <div style={{
                      border: '1px solid #bcccdc'
                  }}
                      className="totalContainer min-w-[340px] gap-4 h-[200px] p-10 flex flex-col items-center justify-center">
                  <div className="subtotal flex gap-5">
                  <h3 className='text-[#102a42]'>Subtotal:</h3>
                <span>{ formatPrice(total_amount) }</span>
              </div>
              <div className="shoppingFee flex gap-5">
                  <h3>Shipping Fee :</h3>
                <span>{formatPrice(shipping_fee)}</span>
              </div>
              <hr className='w-full bg-black h-[30px] block' style={{backgroundColor: 'red'}} />
              <div className="orderTotal flex gap-5 w-full text-2xl">
                  <h2>Order Total :</h2>
                <span>{ formatPrice(total_amount + shipping_fee) }</span>
              </div>
                  </div>
                  
                  
              </div>
                  <div className="div flex justify-center w-full text-white">
                  {isAuthenticated ?
                      <Link to='/checkout' className='w-[350px] text-xl flex items-center justify-center tracking-[2px] h-[40px] bg-[#ab7a5f]'>Proceed to checkout</Link> :
                      <button className='w-[350px] h-[40px] tracking-[2px] bg-[#9b9b9b]'
                         onClick={() => loginWithRedirect()}>LOGIN</button>
                    }
                  </div>
              </div>
    </section>
  )
}

export default CartContent