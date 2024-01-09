import { UseProductsProvider } from '../context/products_context'
// import Skeleton from 'react-loading-skeleton'
import { Skeleton } from '@mui/material'
import 'react-loading-skeleton/dist/skeleton.css'
import { SingleProductView } from './SingleProductView'
import { Link } from 'react-router-dom'
const Featured_Products = () => {
    const {
        product_Loading: loading,
        error,
        featured_products: products
    } = UseProductsProvider()

    const skeletonLoading = Array.from({ length: 3 }, (_, index) => {
        return (
          <div className="div">
            <Skeleton key={0} animation='wave' variant='rectangular' width={300} height={200} />
            <div className="infoLoad mt-2 flex justify-between">
            <Skeleton key={1} animation='wave' variant='text' width={100} />
            <Skeleton key={2} animation='wave' variant='text' width={70} />
            </div>
          </div>
        )
      })

    return (
        <div className="featuredProducts mt-24 p-5 flex flex-col justify-center w-full gap-4">
            <div className="header text-center flex items-center gap-4 flex-col text-3xl mb-9 font-bold">
                Featured Products
                <div className="underline w-28 h-1 bg-[#9b9b9a]"></div>
            </div>
            <div className="products flex gap-8 flex-wrap justify-center">
                 
                       
            {
            !loading ? products.slice(0, 3).map((product) => { return <SingleProductView key={product.id} {...product} /> }) 
            :
            skeletonLoading
            }

        
            </div>
            <div className="btn w-full flex justify-center mt-10">
                <Link
                    to='products'
                    className='bg-[#818181] rounded-md transition hover:text-[#1c1c1c] hover:bg-[#b1b1b1] text-white justify-center flex w-32 p-2'>
                All Products
            </Link>
        </div>
        </div>
  )
}

export default Featured_Products