import { AiOutlineMenu } from 'react-icons/ai';

const Menu = ({sideBar, setSideBar}) => {
  return (
    <div
    className="menu md:hidden"
    onClick={() => setSideBar(!sideBar)}
  >
    <AiOutlineMenu
      className='text-2xl cursor-pointer'
      style={{
        color: '#ab7a5f'
      }}
    />
  </div>
  )
}

export default Menu