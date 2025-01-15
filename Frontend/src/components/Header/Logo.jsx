import React from 'react'
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
function Logo() {
  return (
    // <button className='flex items-center space-x-2 bg-gray-300 dark:bg-slate-700 p-3 '>
    //     <SnowboardingIcon fontSize="large" className='text-gray-800 dark:text-gray-200'/>
    //     <span className="hidden sm:inline text-xl font-bold text-gray-800 dark:text-gray-200">WanderLust</span>
    // </button>

    <button className="flex items-center space-x-2 bg-gray-300 dark:bg-slate-700 p-2">
  <SnowboardingIcon fontSize="large" className="text-gray-800 dark:text-gray-200" />
  <span className="hidden sm:inline text-xl font-bold text-gray-800 dark:text-gray-200">WanderLust</span>
</button>

  )
}

export default Logo