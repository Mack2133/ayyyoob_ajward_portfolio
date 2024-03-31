import React from 'react'
import CustomCard from '../Common/CustomCard'

function Projects() {
  return (
    <div className='flex flex-col items-center bg-gray-200 customSection'>
        <div>
            <h1 className='pb-10 font-bold text-center text-blue-600 text-7xl'>Projects</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center'>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
    </div>
  )
}

export default Projects