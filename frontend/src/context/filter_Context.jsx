import React, { useEffect } from 'react'
import { useReducer } from 'react'
import filterReducer from '../reducers/filterReducer'
import {LOAD_PRICE, CLEAR_FILTERS, LIST_VIEW, GRID_VIEW, UPDATE_SORT, LOAD_PRODUCTS, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS } from '../reducers/actions'
import { UseProductsProvider } from './products_context'

const getGridSystem = _ => {
  let grid = localStorage.getItem('grid_View')
  if (grid) {
    return JSON.parse(localStorage.getItem('grid_View'))
  } else {
    return true
  }
}

const getListSystem = _ => {
  let list = localStorage.getItem('list_View')
  if (list) {
    return JSON.parse(localStorage.getItem('list_View'))
  }else {
    return false
  }
}
 

const initialFilters = {
  filtered_Products: [],
  all_Products: [],
  grid_View: getGridSystem(),
  list_View: getListSystem(),
  sort: 'price-highest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {products} = UseProductsProvider()
  const [state, dispatch] = useReducer(filterReducer, initialFilters)
  
  useEffect(() => {
    dispatch({type: LOAD_PRODUCTS, payload: products})
  }, [products])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort, state.filters])

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS, payload: {name, value}})
  }

  useEffect(() => {
    dispatch({ type: LOAD_PRICE, payload: products})
  }, [products])

    const gridView = _ => dispatch({type: GRID_VIEW})
    useEffect(() => {
      state.list_View == localStorage.getItem('list_View')
      state.grid_View == localStorage.getItem('grid_View')
    }, [initialFilters.grid_View])
    
    const listView = _ => dispatch({type: LIST_VIEW})
    
  const updateSort = e => {
    const value = e.target.value;
    dispatch({type: UPDATE_SORT, payload: value})
  }
  
  const clearFilters = _ => dispatch({type:CLEAR_FILTERS})
  
  return (
    <FilterContext.Provider value={{...state, gridView, listView, updateSort, updateFilter, clearFilters}}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => React.useContext(FilterContext)

export default useFilterContext