import React from 'react'
import {GiCompass, GiDiamondHard, GiStabbedNote} from 'react-icons/gi'
const SectionTwo = () => {
  return (
      <section className='m-h-[25vh]  my-20 py-5'>
          <div className="section bg-[#eeeeee] h-[400px] flex">
              <div className="header w-full flex flex-col lg:flex-row lg:justify-around m-5 lg:m-0 lg:items-center relative lg:top-[-100px]" >
              <h3 className='text-[#171717] font-bold' style={{
                  fontSize: '30px'
              }}>
                Custom Hanfu
                <br />
                Only For You
              </h3>
              <p className='text-[#737373]'>
              Remember, this is just a conceptual idea, and the design should ultimately reflect your personal style, prefere7nces,  <br/> and the occasion for which you intend to wear the Hanfu. Working with a skilled tailor or designer can help bring your custom Hanfu design to life.
              </p>
          </div>
          </div>
          <div className="boxContainer flex justify-evenly flex-wrap gap-4 lg:gap-2 relative top-[-150px]">
              <div className="box bg-[#8f8f8f] h-[330px] rounded-md flex flex-col items-center justify-center gap-6">
                  <div className="img rounded-full bg-white w-14 h-14 flex justify-center items-center">
                      <GiCompass className='text-4xl'/>
                  </div>
                  <div className="info w-[90%] lg:w-[400px] text-center flex flex-col items-center">
                      <h2 className='font-bold text-3xl text-[#ffffff]'>Misson</h2>
                      <p className=' leading-7 mt-4 w-[100%] lg:w-[368px] text-[#ffffff] text-center'>
                      Preserve and protect traditional Han Chinese clothing as an integral part of China's cultural heritage &
                      Document historical clothing styles, patterns, and techniques.
                      </p>
                  </div>
              </div>

              <div className="box bg-[#8f8f8f] h-[330px] rounded-md flex flex-col items-center justify-center gap-6">
                  <div className="img rounded-full bg-white w-14 h-14 flex justify-center items-center">
                      <GiDiamondHard className='text-4xl'/>
                  </div>
                  <div className="info w-[90%] lg:w-[400px] text-center flex flex-col items-center">
                      <h2 className='font-bold text-3xl text-[#ffffff]'>Vision</h2>
                      <p className=' leading-7 mt-4 w-[100%] lg:w-[368px] text-[#ffffff] text-center'>
                      This cultural movement has gained momentum in recent years, driven by individuals and communities seeking to reconnect with China's rich historical and cultural heritage. 
                      </p>
                  </div>
              </div>

              <div className="box bg-[#8f8f8f] h-[330px] rounded-md flex flex-col items-center justify-center gap-6">
                  <div className="img rounded-full bg-white w-14 h-14 flex justify-center items-center">
                      <GiStabbedNote className='text-4xl'/>
                  </div>
                  <div className="info w-[90%] lg:w-[400px] text-center flex flex-col items-center">
                      <h2 className='font-bold text-3xl text-[#ffffff]'>History</h2>
                      <p className=' leading-7 mt-4 w-[100%] lg:w-[368px] text-[#ffffff] text-center'>
                      Sui (581–618) and Tang (618–907) Dynasties {'\n'}
                      Song (960–1279) and Yuan (1271–1368) Dynasties {'\n'}
                      Ming (1368–1644) and Qing (1644–1912) Dynasties
                      </p>
                  </div>
              </div>


          </div>
    </section>
  )
}

export default SectionTwo