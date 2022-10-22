/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext } from 'react'
import Blockies from 'react-blockies'
import { VenmoContext } from '../context/context'
import { shortAddress } from '../utils/shortenAddress'

function Navbar() {
  const { connectWallet, account } = useContext(VenmoContext)
  return (
    <nav className='w-full flex justify-between items-center bg-slate-50 shadow-lg md:py-3 py-2 md:px-5 px-2'>
      <div>
        <img src='./assets/logo.svg' className='w-20' alt='' />
      </div>

      <ul className='flex justify-between items-center'>
        <li className='md:mx-4 text-gray-700 md:inline hidden'>
          <a
            href='#'
            className='hover:text-blue-500 transition-all duration-300 ease-out  hover:font-medium'
            href='https://www.twitter.com'
          >
            Home
          </a>
        </li>
        <li className='md:ml-4 md:mr-8 text-gray-700 md:inline hidden'>
          <a
            href='#'
            className='hover:text-blue-500 transition-all duration-300 ease-out hover:font-medium'
            href='https://www.twitter.com'
          >
            Pay with Venmo
          </a>
        </li>
        <li>
          {account ? (
            <div className='flex items-center  p-1'>
              <span className='text-base text-blue-600 font-semibold'>
                {shortAddress(account)}
              </span>
              <span className='text-blue-500 ml-1'>
                <Blockies
                  seed={account.toLowerCase()}
                  className='rounded-full'
                />
              </span>
            </div>
          ) : (
            <button
              onClick={() => connectWallet()}
              className='flex items-center bg-blue-500 outline-none border-none rounded-lg text-white shadow-none px-4 py-1 transition-all duration-200 hover:shadow-lg hover:shadow-blue-600 hover:scale-105 hover:ring hover:ring-blue-500'
            >
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
              Connect
            </button>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
