import React from 'react'
import { useReducer } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import products_Reducer from '../reducers/products_Reducer'
//const products_Url = 'https://us-east-2.aws.data.mongodb-api.com/app/data-mwhyh/endpoint/products'
//const single_Product_Url = 'https://us-east-2.aws.data.mongodb-api.com/app/data-mwhyh/endpoint/products?id='
import { products_url as url } from '../utils/constants'

const ProductContext = React.createContext()
import { useParams } from 'react-router-dom'
import {
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../reducers/actions'

const INITIAL_STATE = {
    product_Loading: false,
    products: [],
    productsError: false,
    featured_products: [],
    single_Product: [],
    productsErrorMsg: '',
    singleProductError: false,
    singleProductErrorMsg: ''
}

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(products_Reducer, INITIAL_STATE)
    const id = useParams()
    const fetchData = async () => {
        dispatch({type: GET_PRODUCTS_BEGIN})
        try {
            const request = await axios.get(url)
            const response = await request.data
            dispatch({type: GET_PRODUCTS_SUCCESS, payload: response})
        } catch (error) {
            dispatch({type: GET_PRODUCTS_ERROR})
        }
    }

    // const fetchSingleProduct = async (url) => {
    //     dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    //     try {
    //         const hardcodedProduct = {
    //             "id":"rec7CjDWKRgNQtrKe",
    //             "stock":3,"price":42999,
    //             "shipping":true,
    //             "colors":[""],
    //             "category":"Northern and Southern",
    //             "images":
                
    //              [{"id":"attub6EG88kJKuYs8",
    //              "width":1000,
    //              "height":667,
    //              "url":"https://thehanfustory.com/cdn/shop/products/IMG_4135_1296x.jpg?v=1681213690",
    //              "filename":"product-4.jpeg",
    //              "size":59641,"type":"image/jpeg",
    //              "thumbnails":
    //              {"small":{"url":"https://thehanfustory.com/cdn/shop/products/IMG_4135_1296x.jpg?v=1681213690",
    //              "width":54,"height":36},
    //              "large":{"url":"https://thehanfustory.com/cdn/shop/products/IMG_4135_1296x.jpg?v=1681213690",
    //              "width":768,
    //              "height":700},
    //              "full":{"url":"heroImage",
    //              "width":3000,"height":3000}}},
    //              {"id":"attaeT2Dex98o2jfW",
    //              "width":1000,
    //              "height":667,
    //              "url":"https://thehanfustory.com/cdn/shop/files/IMG_2025_68a57606-dd15-4571-b88a-2a3566cabbcc_1296x.jpg?v=1687910009",
    //              "filename":"extra-1.jpeg",
    //              "size":102108,"type":"image/jpeg",
    //              "thumbnails":{"small":{"url":"https://thehanfustory.com/cdn/shop/files/IMG_2025_68a57606-dd15-4571-b88a-2a3566cabbcc_1296x.jpg?v=1687910009","width":54,"height":36},"large":{"url":"https://thehanfustory.com/cdn/shop/files/IMG_2025_68a57606-dd15-4571-b88a-2a3566cabbcc_1296x.jpg?v=1687910009","width":768,"height":512},"full":{"url":"heroImage","width":3000,"height":3000}}},
    //              {"id":"attWsZasaaRD1P7mm","width":1000,"height":714,"url":"https://thehanfustory.com/cdn/shop/files/image_29fe4d79-85c1-46c1-8f68-cefc7dbbb1c6_1296x.jpg?v=1684688482","filename":"extra-2.jpeg","size":84418,"type":"image/jpeg","thumbnails":{"small":{"url":"https://thehanfustory.com/cdn/shop/files/image_29fe4d79-85c1-46c1-8f68-cefc7dbbb1c6_1296x.jpg?v=1684688482","width":50,"height":36},"large":{"url":"https://thehanfustory.com/cdn/shop/files/image_29fe4d79-85c1-46c1-8f68-cefc7dbbb1c6_1296x.jpg?v=1684688482","width":717,"height":700},"full":{"url":"heroImage","width":3000,"height":3000}}},
    //              {"id":"attTvaiDcADaAItLw","width":1000,"height":650,"url":"https://thehanfustory.com/cdn/shop/files/IMG_5507_2_1296x.jpg?v=1700800829","filename":"extra-3.jpeg","size":107838,"type":"image/jpeg","thumbnails":{"small":{"url":"https://thehanfustory.com/cdn/shop/files/IMG_5507_2_1296x.jpg?v=1700800829","width":55,"height":36},"large":{"url":"https://thehanfustory.com/cdn/shop/files/IMG_5507_2_1296x.jpg?v=1700800829","width":788,"height":512},"full":{"url":"https://thehanfustory.com/cdn/shop/files/IMG_5507_2_1296x.jpg?v=1700800829","width":3000,"height":3000}}},
    //              {"id":"attdxQmF0aCH5I32F","width":1000,"height":667,"url":"https://thehanfustory.com/cdn/shop/files/IMG_2130_1296x.jpg?v=1697527998","filename":"extra-4.jpeg","size":99481,"type":"image/jpeg","thumbnails":{"small":{"url":"https://thehanfustory.com/cdn/shop/files/IMG_2130_1296x.jpg?v=1697527998","width":54,"height":36},"large":{"url":"https://thehanfustory.com/cdn/shop/files/IMG_2130_1296x.jpg?v=1697527998O","width":768,"height":512},"full":{"url":"https://thehanfustory.com/cdn/shop/files/IMG_2130_1296x.jpg?v=1697527998","width":3000,"height":3000}}}],
    //              "reviews":25,"stars":4.9,"name":"Qiyao Ruqun_Danqing",
    //              "description":"Complete Set: Camisole, Da Xiu Shan (Coat), Wrapped Skirt, Fabric: Polyester",
    //              "company":"wowan"
    //            };
    //             // Simulate a delay to mimic an asynchronous operation
    //           // Replace this with your actual logic if needed
    //           await new Promise((resolve) => setTimeout(resolve, 1000));
         
    //           // Dispatch the success action with the hardcoded product
    //           dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: hardcodedProduct });
    //         } catch (error) {
    //           dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    //         }
    // }
    const fetchSingleProduct = async (url) => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
        try {
          const response = await axios.get(url)
          console.log(response)
          const singleProduct = response.data
          dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
        } catch (error) {
          dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
        }
      }
    
    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <ProductContext.Provider value={{...state, fetchSingleProduct}}>
            {children}
    </ProductContext.Provider>
  )
}
export const UseProductsProvider = () => {
    return React.useContext(ProductContext)
}
