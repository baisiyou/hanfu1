
const CartColunms = () => {
  return (
      <ul
          className=
          ' w-full justify-center hidden md:flex'
      >
          <div style={{
              border: '1px solid transparent',
              borderBottomColor: '#bcccdc'
          }}
              className="tableContainer"
          >
          <li className='table'>Item</li>
          <li className='table'>Price</li>
          <li className='table'>Quantity</li>
          <li className='table'>Subtotal</li>
          </div>
    </ul>
  )
}

export default CartColunms