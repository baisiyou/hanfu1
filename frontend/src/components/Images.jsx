import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Images = ({ images = [{ url: '' }] }) => {

  return (
    <div className="slide-container min-h-[200px] max-h-full min-w-[300px] max-w-full object-cover">
        <Slide cssClass='w-full h-full'>
         {images.map((image, index)=> (
            <div key={index} className='w-full h-full object-cover'>
              <div className='my-2 w-full min-h-[400px] max-h-full object-cover aspect-square cursor-pointer' style={{'backgroundImage': `url(${image.url})`, backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center center' }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default Images