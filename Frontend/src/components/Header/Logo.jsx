import React from 'react'
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
function Logo() {
  return (
    <button className='flex items-center space-x-2 bg-slate-200 dark:bg-slate-800 p-3 '>
        <SnowboardingIcon fontSize="large" className='text-gray-800 dark:text-gray-200'/>
        <p className='text-2xl text-gray-800 dark:text-gray-200'>WanderLust</p>
    </button>
  )
}

export default Logo