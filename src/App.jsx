import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Card from './components/Card'
import Details from './components/Details'
import useFetch from './useFetch'

function App() {


  const [url, setUrl] = useState("https://restcountries.com/v2/all")
  const [searchInput, setSearchInput] = useState('')
  const [region, setRegion] = useState('')
  const [showCard, setShowCard] = useState(false)
  const [currentDetails, setCurrentDetails] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  
  
  const fetchData = () => {
    if (searchInput) {
      setUrl(`https://restcountries.com/v2/name/${searchInput}`)
    } else if (region) {
      setUrl(`https://restcountries.com/v2/region/${region}`)
    } else {
      setUrl('https://restcountries.com/v2/all')
    }
  }

  useEffect(() => {
    fetchData()
  }, [searchInput, region])
  
  const [countries] = useFetch(url)


  return (
    <div className={`App ${darkMode && 'dark'}`}>
      <div className="h-screen w-screen bg-[#fafafa] dark:bg-[#202c37] overflow-x-hidden transition ease delay-60">
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        {showCard && <Details
          showCard={showCard}
          setShowCard={setShowCard}
          currentDetails={currentDetails}
          setCurrentDetails={setCurrentDetails}
          countries={countries}
        />}
        <section className='w-auto mx-auto flex justify-center flex-col'>
          <Form
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            region={region}
            setRegion={setRegion}
          />
          <div className='w-full  px-10 grid gap-x-20 lg:gap-x-16 md:gap-x-10 place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
              { countries.message ? <h1 className='text-xl font-semibold text-center dark:text-white'>Not Found</h1> :
                countries.map(country => {
                  return <Card
                    key={country.name}
                    setShowCard={setShowCard}
                    flag={country.flags.png}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    setCurrentDetails={setCurrentDetails}
                  />
                })
              }
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
