import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

export default function Details({ setShowCard, countries, currentDetails, setCurrentDetails }) {

    const [data, setData] = React.useState({
        name: '',
        flag: '',
        population: '',
        region: '',
        subregion: '',
        topLevelDomain: '',
        currencies: [],
        languages: []
    })
    React.useEffect(() => {
        countries?.map(country => {
            if (currentDetails === country.name) {
                setData(country)
          }
        })
    }, [])


  return (
    <section className="min-h-screen w-screen z-10 lg:overflow-hidden text-[#111517] dark:text-white bg-[#fafafa] dark:bg-[#202c37] absolute top-0">
        <div className='mx-10 my-10'>
            <button className='bg-white dark:bg-[#2b3945] drop-shadow-lg rounded px-3 py-1 mb-6' onClick={() => {
                setCurrentDetails('')
                setShowCard(false)
                }}>
                <ArrowBackIosIcon className='text-xs'/><span>Back</span>
            </button>
            <div className="flex flex-col lg:flex-row lg:gap-44">
                <img src={data.flag} alt={data.name} className='my-8 rounded lg:w-[50%] drop-shadow-lg'/>
                <div className="lg:flex lg:flex-col lg:my-auto"> 
                    <div>
                        <h2 className='text-2xl font-bold my-5'>{data.name}</h2>
                        <div className="mb-10 lg:flex lg:gap-16">
                            <div>
                                <p className='mb-2'>Native Name: <span className='text-sm opacity-70'>{data.nativeName}</span></p>
                                <p className='mb-2'>Population: <span className='text-sm opacity-70'>{data.population}</span></p>
                                <p className='mb-2'>Region: <span className='text-sm opacity-70'>{data.region}</span></p>
                                <p className='mb-2'>Sub Region: <span className='text-sm opacity-70'>{data.subregion}</span></p>
                                <p>Capital: <span className='text-sm opacity-70'>{data.capital}</span></p>
                            </div>
                            <div className="mt-10 lg:mt-0">
                                <p className='mb-2'>Top Level Domian: <span className='text-sm opacity-70'>{data.topLevelDomain}</span></p>
                                <p className='mb-2'>Currencies: <span className='text-sm opacity-70'>{data.currencies?.map(cur => {
                                    return cur.name + ' ';
                                })}</span></p>
                                <p className='mb-2'>Languages: <span className='text-sm opacity-70'>{data.languages.map(lang => {
                                    return lang.name + ' '
                                })}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
