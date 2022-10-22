import React from 'react'

function Hero() {
  return (
    <div className='max-w-5xl mx-auto mt-6 mb-8'>
      <div className='w-full flex flex-col justify-center mx-5 text-center  md:grid grid-cols-2 md:gap-5 my-8'>
        <div className='flex flex-col'>
          <h2 className='md:text-7xl md:mt-5 font-semibold text-2xl'>
            Fast, safe, social payments
          </h2>
          <p className='text-base text-gray-900 my-10'>
            Pay. Get paid. Shop. Share. Join tens of millions of people on
            Venmo.
          </p>
          <button className='flex items-center bg-blue-500 outline-none border-none rounded-full text-white px-4 py-2 transition-all duration-200 shadow-lg shadow-cyan-600 hover:scale-105 hover:ring hover:ring-blue-500 w-40'>
            <svg
              data-test-id='venmoIcon'
              className='w-4 h-4 mr-1 '
              viewBox='0 0 22 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.527 0.917969C21.3712 2.30466 21.75 3.73454 21.75 5.54027C21.75 11.2992 16.816 18.7782 12.8115 24.0295H3.66683L0 2.17963L8.00984 1.42188L9.95772 16.9687C11.7679 14.0271 14.0064 9.40482 14.0064 6.25559C14.0064 4.53018 13.7097 3.35718 13.2458 2.39104L20.527 0.917969Z'
                fill='white'
              ></path>
            </svg>
            Get Started
          </button>
        </div>
        <div className='px-5 w-full'>
          <img src='./assets/venmo.png' alt='' />
        </div>
      </div>
      {/*Cash */}
      <div className='w-full flex flex-col justify-center mx-5 text-center  md:grid grid-cols-2 md:gap-5 mt-8'>
        <div className='px-5 w-full'>
          <img src='./assets/venmo-cash.png' alt='' />
        </div>
        <div className='flex flex-col'>
          <h2 className='md:text-7xl md:mt-5 font-semibold text-2xl'>
            Earn customized cash back
          </h2>
          <p className='text-base text-gray-900 my-10'>
            With the Venmo Credit Card¹, you can earn up to 3% cash back² to
            send, spend, or even to auto-purchase the crypto of your choice from
            your Venmo account.³ Reward categories automatically update based on
            what you buy, so earning is easy. Plus, the card's personalized QR
            code makes paying — and getting paid back — a snap.
          </p>
          <button className='bg-slate-200 text-black border-slate-800 border rounded-full  px-4 py-2 transition-all duration-200 shadow-xl shadow-cyan-600 hover:scale-105 w-40 hover:shadow-none text-center hover:text-lg'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
