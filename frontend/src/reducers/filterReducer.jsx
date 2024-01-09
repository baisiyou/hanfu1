import {LOAD_PRICE, CLEAR_FILTERS, GRID_VIEW, LIST_VIEW, UPDATE_SORT, LOAD_PRODUCTS, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS } from './actions'

const filterReducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return {
            ...state,
            all_Products: [...action.payload],
            filtered_Products: [...action.payload]
        }
    }
    if (action.type === SORT_PRODUCTS) {
        const { sort, filtered_Products } = state;
        let tempProducts = [...filtered_Products];
        if (sort === 'price-lowest') {
            tempProducts = tempProducts.sort((a, b) => {
                if (a.price < b.price) {
                    return -1
                }
                if (a.price > b.price) {
                    return 1
                }
                return 0
            })
        }
        
        if (sort === 'price-highest') {
            tempProducts = tempProducts.sort((a, b) => {
                if (a.price < b.price) {
                    return 1
                }
                if (a.price > b.price) {
                    return -1
                }
                return 0
            })
        }

        if (sort === 'name-a') {
            tempProducts = tempProducts.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
        }

        if (sort === 'name-z') {
            tempProducts = tempProducts.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })
        }
       return {...state, filtered_Products: [...tempProducts]}
    }
    if (action.type === GRID_VIEW) {
        localStorage.setItem('grid_View', true)
        localStorage.setItem('list_View', false)
        return {...state, grid_View: true, list_View: false}
    }
    if (action.type === LIST_VIEW) {
        localStorage.setItem('grid_View', false)
        localStorage.setItem('list_View', true)
        return {...state, grid_View: false, list_View: true}
    }
    if (action.type === UPDATE_SORT) {
        return {...state, sort: action.payload}
    }
    if (action.type === UPDATE_FILTERS) {
        const {name, value} = action.payload
        return {...state, filters: {...state.filters, [name]: value}}
    } 
    if (action.type === FILTER_PRODUCTS) {
        const { all_Products } = state;
        const { text, category, company, color, price, shipping } = state.filters;
        let tempProducts = [...all_Products]
        // filters
        if (text) {
            tempProducts = tempProducts.filter(product => {
                return product.name.toLowerCase().startsWith(text)
            })
        }
        if (category !== 'all') {
            tempProducts = tempProducts.filter(product => {
                return product.category === category
            })
        }

        if (company !== 'all') {
            tempProducts = tempProducts.filter(product => {
                return product.company == company
            })
        }

        if (color !== 'all') {
            tempProducts = tempProducts.filter(product => {
                return product.colors.find(c => c === color)
            })
        }
        if (shipping) {
            tempProducts = tempProducts.filter(product => {
                return product.shipping === true
            })
        }
        tempProducts = tempProducts.filter(product => {
            return product.price <= price
        })
        return {...state, filtered_Products: [...tempProducts]}
    }
    if (action.type === LOAD_PRICE) {
        let maxPrice = action.payload.map(p => p.price)
        maxPrice = Math.max(...maxPrice)
        
        return {
            ...state, all_Products: [...action.payload],
            filtered_Products: [...action.payload],
            filters:{...state.filters, max_price: maxPrice, price: maxPrice}
        }
    }
    if (action.type === CLEAR_FILTERS) {
        return {
            ...state,
            filters: {
                ...state.filters,
                text: '',
                company: 'all',
                category: 'all',
                color: 'all',
                price: state.filters.max_price,
                shipping: false
              }
        }
    }
}

export default filterReducer