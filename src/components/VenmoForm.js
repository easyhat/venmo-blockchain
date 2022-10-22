import React, { useContext } from 'react'
import { BiSend } from 'react-icons/bi'
import { VenmoContext } from '../context/context'

function VenmoForm() {
  const {
    amount,
    setAmount,
    addressTo,
    setAddressTo,
    message,
    setMessage,
    senTransaction,
  } = useContext(VenmoContext)
  const handleSubmit = (ev) => {
    ev.preventDefault()
    senTransaction()
  }

  return (
    <div className='max-w-5xl mx-auto mt-6 mb-8'>
      <div className='md:grid grid-cols-2 md:gap-2 flex flex-col-reverse space-y-2 shadow-lg shadow-blue-400 rounded-lg p-5'>
        <div className=''>
          <h2 className='text-xl font-semibold'>Send Payment/ Request</h2>
          <form className='px-5' onSubmit={handleSubmit}>
            <div className='my-5'>
              <label htmlFor='recipient'>
                Recipient <span className='text-blue-500'>(Address)</span>
              </label>
              <input
                type='text'
                placeholder='0xF7FB1767Ea066316AaB5e5134cA7Ad23c83bA12c'
                value={addressTo}
                onChange={(ev) => setAddressTo(ev.target.value)}
                className='block py-2 px-5 outline-none ring-0 bg-slate-200 rounded-xl focus:ring focus:ring-blue-400 shadow-md w-full'
              />
            </div>
            <div className='my-5'>
              <label htmlFor='recipient'>
                Amount <span className='text-blue-500'>(ETH)</span>
              </label>
              <input
                type='number'
                step='0.01'
                value={amount}
                onChange={(ev) => setAmount(ev.target.value)}
                placeholder='Amount(ETH)'
                className='block py-2 px-5 outline-none ring-0 bg-slate-200 rounded-xl focus:ring focus:ring-blue-400 shadow-md w-full'
              />
            </div>
            <div className='my-5'>
              <label htmlFor='recipient'>Message</label>
              <textarea
                className='block py-2 px-5 outline-none ring-0 bg-slate-200 rounded-xl focus:ring focus:ring-blue-400 shadow-md resize-none w-full'
                cols='30'
                rows='5'
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                placeholder='Your Message ...'
              ></textarea>
            </div>
            <button
              type='submit'
              className='flex items-center bg-blue-400 text-white border rounded-lg  px-4 py-2 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-600 w-40 hover:border-none shadow-none text-center'
            >
              <BiSend className='mr-1 text-white' width={40} height={40} />
              Send
            </button>
          </form>
        </div>
        <div>
          <img src='./assets/venmo-coin.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default VenmoForm
