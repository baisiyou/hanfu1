import PageHero from '../components/PageHero'
import React from 'react'
import Filters from '../components/Filters'
import Sorting from '../components/Sorting'
import DisplayData from '../components/DisplayData'
const Products = () => {
  return (
    <section>
    
    <div style={{
        alignItems: 'start'
      }}
      className="ProductContainer grid grid-cols-8 lg:grid-cols-10 w-full m-h-screen my-[60px]">
      <Filters />
      <div className="singleList row-start-2 md:row-start-1 justify-items-center grid lg:ml-10 lg:col-start-4 col-start-3 col-end-10">
      <Sorting />
      <DisplayData />
    </div> 
    </div>    
  </section>
  
)
}

export default Products

