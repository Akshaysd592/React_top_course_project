import React from 'react'
import RingLoader from 'react-spinners/RingLoader'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-2'>
    <RingLoader color="#36d6a0" size={100} />
    <p className='text-bgDark text-lg font-semibold'>
      Loading.....
    </p>
    </div>
  )
}

export default Spinner