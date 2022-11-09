import React from 'react'

export default function Form({ searchInput, setSearchInput, region, setRegion }) {

  const handleInput = (e) => {
    setSearchInput(e.target.value)
  }
  
  const handleFilter = (e) => {
    setRegion(e.target.value)
  }

  return (
    <div className='flex justify-between my-12 mx-[4%] text-sm font-light'>
      <input type="text" placeholder='search for a country...' className='md:w-96 sm:w-72 w-48 bg-[#fff] dark:bg-[#2b3945] drop-shadow-lg text-[#111517] dark:text-white py-2 px-5 rounded transition ease delay-60' onChange={handleInput}/>
      <select name="filter by region" id="filter by region" className='w-20 sm:w-32 bg-[#fff] dark:bg-[#2b3945] text-[#111517]/[.8] dark:text-white py-2 px-3 rounded drop-shadow-lg transition ease delay-60' onChange={handleFilter}>
        <option value="" className='text-sm'>All</option>
        <option value="Africa" className='text-sm'>Africa</option>
        <option value="Americas" className='text-sm'>Americas</option>
        <option value="Asia" className='text-sm'>Asia</option>
        <option value="Europe" className='text-sm'>Europe</option>
        <option value="Oceania" className='text-sm'>Oceania</option>
      </select>
    </div>
  )
}
