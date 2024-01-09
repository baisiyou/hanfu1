import React from 'react'
import { SectionCenter } from '../components/SectionCenter'
import SectionTwo from '../components/SectionTwo'
import EmailSection from '../components/EmailSection'
import Featured_Products from '../components/Featured_Products'

const Home = () => {
  return (
    <>
      <SectionCenter />
      <Featured_Products />
      <SectionTwo />
      <EmailSection />
    </>
  )
}

export default Home