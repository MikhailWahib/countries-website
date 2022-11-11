import React from 'react'


export default function CardComp({ setShowCard, name, flag, population, region, capital, setCurrentDetails }) {
  return (
    <div className='h-[330px] lg:w-[92%] md:w-[100%] w-72 bg-white dark:bg-[#2b3945] text-[#111517] dark:text-white rounded mb-10 drop-shadow-xl hover:drop-shadow-2xl overflow-hidden cursor-pointer' onClick={() => {
      setShowCard(true)
      setCurrentDetails(name)
      }}>
      <img src={flag} alt={name + "flag"} className='w-full h-[160px]' />
      <h2 className='px-7 py-4 font-bold text-md'>{name}</h2>
      <div className="mb-7">
        <p className='px-7 mb-1 text-sm font-medium'>Population: <span className='text-xs opacity-70'>{population}</span></p>
        <p className='px-7 mb-1 text-sm font-medium'>Region: <span className='text-xs opacity-70'>{region}</span></p>
        <p className='px-7 mb-1 text-sm font-medium'>Capital: <span className='text-xs opacity-70'>{capital}</span></p>
      </div>
    </div>
  )
}
