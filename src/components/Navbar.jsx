import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-800 text-white ">
        <div className="mycontainer flex justify-between items-center py-5 px-4 h-15">

        <div className="logo font-bold text-white text-2xl">
        <span className='text-green-500'>
          &lt;
          </span>
          Lockify/
          <span className='text-green-500'>
            &gt;
            </span>
          </div>
        
          <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center '> 
                    <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
