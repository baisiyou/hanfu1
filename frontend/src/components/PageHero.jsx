import { Link } from 'react-router-dom'

const PageHero = ({title}) => {
  return (
      <div className='pageHero h-[80px] flex-wrap  md:h-[120px] bg-[#eaded7] w-full flex items-center z-20'>
          <div className="path flex left-[30px] w-[80%] md:left-[100px] relative">
              <h1 color='#795744' className='text-2xl w-[80vw] flex gap-3 md:text-4xl font-bold'>
                  <Link to={'/'} className=' cursor-pointer' style={{ color: "#795744" }}>
                      Home
                  </Link> / {title}
              </h1> 
        </div>
    </div>
  )
}

export default PageHero