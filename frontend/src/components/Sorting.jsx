import {BsList, BsFillGridFill} from 'react-icons/bs'
import useFilterContext from '../context/filter_Context'
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'
const Sorting = () => {
  const {
    grid_View,
    list_View,
    gridView,
    listView,
    updateSort,
    sort,
    filtered_Products
  } = useFilterContext()
  return (

    <div
      className='sortDiv content-center gap-5 min-h-11 my-[15px] grid-flow-row grid md:grid-flow-col items-center min-w-[350px] md:max-w-full md:w-full'>
      <div className="buttons flex">
      <button
        className={`${grid_View && 'text-white bg-black'} text-xl w-fit p-1 border border-solid`}
        onClick={() => gridView()}
          >
              <BsFillGridFill />
          </button>
          <button
        className={`${list_View && 'text-white bg-black'} border border-solid  text-xl w-fit p-1`}
        onClick={() => listView()}
          >
              <BsList />
      </button>

        </div>
        <h4 className='ml-[1%] text-center w-100%'>{filtered_Products.length} Products Found</h4>
      <hr className='bg-black w-[90%] hidden md:block h-[2px]' />
      <FormControl fullWidth className='col-start-1 col-end-3'>
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          value={sort}
          name="sort"
          onChange={updateSort}
          labelId="demo-simple-select-label"
          className='outline-none'
          label="Sort by"
          id="demo-simple-select"
        >
          <MenuItem value="price-lowest">Price (Lowest)</MenuItem>
          <MenuItem value="price-highest">Price (highest)</MenuItem>
          <MenuItem value="name-a">name (a)</MenuItem>
          <MenuItem value="name-z">name (z)</MenuItem>
        </Select>
      </FormControl>

    </div>
  )
}

export default Sorting