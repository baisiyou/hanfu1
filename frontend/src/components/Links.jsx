import { Link } from 'react-router-dom'
import { useUserContext } from '../context/usercontext'

const Links = ({ showMenu, setShowMenu }) => {
  const {myUser} = useUserContext()
    return (
    <div
    className="text-lg hidden md:flex"
    style={{
      color: '#324d67'  
    }}
    >
    <ul
      className='relative'
    >
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
          <Link className='link' to='/products'>Products</Link>
          {myUser && <Link className='link' to='/checkout'>Checkout</Link>}
        </ul>
  </div>
  )
}

export default Links