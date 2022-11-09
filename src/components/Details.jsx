import React, { useEffect, useState } from 'react'
import useFetch from '../useFetch'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

export default function Details({ setShowCard, currentDetails }) {

    const [data] = useFetch(`https://restcountries.com/v2/name/${currentDetails}?fullText=true`)

  return (
    <section className="min-h-screen w-screen z-10 lg:overflow-hidden text-[#111517] dark:text-white bg-[#fafafa] dark:bg-[#202c37] absolute top-0">
        <div className='mx-10 my-10'>
            <button className='bg-white dark:bg-[#2b3945] drop-shadow-lg rounded px-3 py-1 mb-6' onClick={() => setShowCard(false)}>
                <ArrowBackIosIcon className='text-xs'/><span>Back</span>
            </button>
            <div className="flex flex-col lg:flex-row lg:gap-44">
                <img src={data[0].flags.svg} alt={data[0].name} className='my-8 rounded lg:w-[50%]'/>
                <div className="lg:flex lg:flex-col lg:my-auto"> 
                    <div>
                        <h2 className='text-2xl font-bold my-5'>be</h2>
                        <div className="mb-10 lg:flex lg:gap-16">
                            <div className="">
                                <p className='mb-2'>Native Name: <span className='text-sm opacity-70'>{data[0].nativeName}</span></p>
                                <p className='mb-2'>Population: <span className='text-sm opacity-70'>{data[0].population}</span></p>
                                <p className='mb-2'>Region: <span className='text-sm opacity-70'>{data[0].region}</span></p>
                                <p className='mb-2'>Sub Region: <span className='text-sm opacity-70'>{data[0].subregion}</span></p>
                                <p>Capital: <span className='text-sm opacity-70'>{data[0].capital}</span></p>
                            </div>
                            <div className="mt-10 lg:mt-0">
                                <p className='mb-2'>Top Level Domian: <span className='text-sm opacity-70'>{data[0].topLevelDomain}</span></p>
                                <p className='mb-2'>Currencies: <span className='text-sm opacity-70'>{data[0].currencies[0].name}</span></p>
                                <p className='mb-2'>Languages: <span className='text-sm opacity-70'>{data[0].currencies[0].name}</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Border Countries:</h3>
                        <div className='flex gap-x-3 flex-wrap'>
                            <span className='bg-white dark:bg-[#2b3945] drop-shadow-lg mt-2 px-7 py-1 opacity-70 rounded text-xs'>none</span>
                            <span className='bg-white dark:bg-[#2b3945] drop-shadow-lg mt-2 px-7 py-1 opacity-70 rounded text-xs'>none</span>
                            <span className='bg-white dark:bg-[#2b3945] drop-shadow-lg mt-2 px-7 py-1 opacity-70 rounded text-xs'>none</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
