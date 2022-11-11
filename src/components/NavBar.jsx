import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'

export default function NavBar({ darkMode, setDarkMode }) {
  return (
    <header className='w-full bg-[#fff] dark:bg-[#2b3945] drop-shadow-lg flex items-center py-2 relative'>
        <h1 className='text-[#111517] dark:text-white/[.85] font-bold lg:text-xl text-sm pl-7 py-3 lg:pl-20'>Where Is The World ?</h1>
        <button className='transition ease delay-10 ml-auto lg:mr-20 lg:text-md text-xs mr-10 text-[#111517] dark:text-white/[.85] hover:opacity-50' onClick={() => setDarkMode(!darkMode)}>
            <DarkModeIcon />
            <span className='ml-2'>{ darkMode ? 'Light' : 'Dark'} mode</span>
        </button>
    </header>
  )
}
