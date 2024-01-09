
import useFilterContext from "../context/filter_Context";
import { UseProductsProvider } from "../context/products_context";
import {SingleProductView} from "./SingleProductView"
import {SingleProductList} from "./SingleProductList"
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonLoading from "./SkeletonLoading";
const DisplayData = () => {
const Data = ({productData}) => {
  return (
      productData == 0 ? 
    <div className='gridView mt-4 w-full grid grid-cols-1 col-start-1 col-end-6 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      Sorry, no products matched your search.
      </div>
    :
    <>
  { productData.map(
    (product) => {
      if(!grid_View) {
        return <SingleProductList {...product} />
      }
         return <SingleProductView {...product} />
      }
      )
    } 
  </>

  )
}
    const {
        product_Loading: loading,
      } = UseProductsProvider()
      const {
        grid_View,
        filtered_Products
      } = useFilterContext()
    
  return (
    <div className="displatItems w-fit mt-4 grid gap-3">
      {loading ? <SkeletonLoading display={`${grid_View ? 'view' : 'list'}`} /> : <Data productData={filtered_Products} />}
      
    </div>
  )
}

export default DisplayData