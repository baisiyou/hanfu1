import useFilterContext from '../context/filter_Context'
import { formatPrice, getUniqueValues } from '../reducers/helpers'
import { Checkbox, MenuItem, Select, Slider } from '@mui/material'
import {MdOutlineDone} from 'react-icons/md'
const Filters = () => {
  const {
    updateFilter,
    filters: {
      text,
      company,
      category,
      color,
      price,
      min_price,
      max_price,
      shipping
    },
    all_Products,
    clearFilters
  } = useFilterContext()
  const categories = getUniqueValues(all_Products, 'category')
  const companies = getUniqueValues(all_Products, 'company')
  const colors = getUniqueValues(all_Products, 'colors')
 return (
    <div className='col-start-2 col-end-3 ml-6 lg:ml-0 lg:col-end-4 filters grid h-full'>
      <form className='sticky top-[1rem] h-fit w-full mt-10' onSubmit={(e) => e.preventDefault()}>
        <div className="form-Control">
          <input
            type="text"
            name='text'
           placeholder='Search'
           className='outline-none pl-2'
           onChange={updateFilter}
            value={text}
          />
        </div>
        {/* Category */}
       <div className="categories flex flex-col my-5">
         <h3 className='text-[#102a42] font-bold text-xl mb-3'>Categories</h3>
          {
            categories.map((c, index) => {
              return <button
                key={index}
                onClick={updateFilter}
                value={category}
                name='category'
                className={`${c === category ? 'border-b-[#617d98]' : ''} transition border border-transparent pb-1 h-fit w-fit text-lg text-[#617d98] first-letter:uppercase`}>
                { c }
                </button>
            })
          }
       </div>
       {/* Company */}
       <div className="company flex flex-col gap-4">
         <h3 className='text-[#102a42] font-bold text-xl'>Gender</h3>
         <Select
           className='outline-none w-[60%] ml-2'
           id="demo-simple-select"
           onChange={updateFilter}
           value={company}
          name='company'
         >
           {
             companies.map((c, index) => {
               return <MenuItem value={c} key={index}>{ c }</MenuItem>
             })
           }
         </Select>
         {/* Colors */}
         <div className="colors mt-5 flex flex-col gap-3">
  {/* <h3 className='text-[#102a42] font-bold text-xl self-start'>Size</h3> */}
           {/* <div className="colorsIterate flex items-center gap-3">
           {
               colors.map((c, index) => {
                 if (c === 'all') {
                   return <button
                     name='color'
                     key={index}
                     className={`${color === c ? 'border-b-[#617d98]' : null} border border-transparent`}
                     data-color='all'
                     onClick={updateFilter} >All</button>
               }
               return <button
                 className={`${color === c ? 'activeColor' : ''} flex justify-center items-center w-[22px] cursor-pointer h-[22px] rounded-full`}
                 key={index}
                 name='color'
                 style={{ backgroundColor: c }}
                 data-color={c}
                 onClick={updateFilter}
               >
                 {color === c ? <MdOutlineDone color='white' /> : null}
             </button>
             })
           }
           </div> */}
         </div>
         {/* Price */}
         <div className="price">
           <h3 className='text-[#102a42] font-bold text-xl mt-3'>Price</h3>
           <p className='price text-[#324d67] mt-2'>{formatPrice(price)}</p>

           <Slider
            
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: 'slider-horizontal',
                width: "80%"
              },
            }}
            orientation="horizontal"
             defaultValue={max_price}
             min={min_price}
             max={max_price}
             value={price}
             name='price'
             valueLabelDisplay="auto"
             onChange={updateFilter}
          />
         </div>
       </div>
       {/* Shipping */}
       <div className="shipping flex items-center justify-between mt-4">
         <h3 className='text-[#102a42]'>Free Shipping</h3>
         <Checkbox checked={shipping} onChange={updateFilter} name='shipping' />
       </div>
     <button
       type='button'
       onClick={clearFilters} 
       className='bg-[#4a714a] px-3 py-1 rounded-md font-bold text-white mt-6'
     >
       Clear Filter
     </button>
     </form>
    </div>
  )
}



export default Filters