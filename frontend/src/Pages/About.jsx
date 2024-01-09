import React from 'react'
import  Hero  from '../assets/hero.png'
import PageHero from '../components/PageHero'

const About = () => {
  return (
      <>
      
      <section className='flex gap-14 flex-col lg:flex-row justify-center items-center lg:h-[90vh]'>
          <div className="image ml-16 lg:w-1/2">
              <img
                  src={Hero}
                  alt="Hero"
                  className='lg:w-full w-[98%] m-auto mt-4'
                  width={'600px'}
              />
          </div>
          <div className="info mb-8 lg:mb-0 lg:h-[80vh] lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
              <div className="header ml-6 flex flex-col justify-center items-start mb-6">
                <div className="text-4xl font-bold" color='#102a42'>Our Story</div>
                <div className="underLine bg-[#617d98] w-20 h-1 mt-2 ml-1"></div>
            </div>
              <p className='text-xl lg:w-[80%] w-[100%] ml-6 lg:ml-8 lg:m-0'>
              The HanfuTale emerged from a deep-rooted passion for unraveling the essence of Chinese culture 
          and sharing its exquisite beauty with the global community. Our mission is to select a collection 
          that not only reflects the intricacies of Hanfu design but also encapsulates the stories woven 
          into each garment, offering wearers a journey back to the golden age of Chinese arts and culture.
          
          We firmly believe that Hanfu transcends cultural backgrounds, providing a transformative and 
          enlightening experience in Chinese culture and arts for all. By embracing Hanfu and showcasing 
          its allure, individuals can forge a profound connection with and appreciation for this rich heritage.

           In our endeavor, we are committed to promoting equality and inclusivity, ensuring that everyone, 
           irrespective of background, has the opportunity to engage with or rediscover the cultural essence 
           embodied by Hanfu.
              </p>
          </div>
    </section>
      </>
  )
}

export default About