import React, { useContext } from 'react'
import { VenmoContext } from '../context/context'
function Transactions() {
  const { transactions } = useContext(VenmoContext)
  return (
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-2 2xl:grid-cols-3 mx-auto gap-5'>
        {/* loop */}
        {transactions.map((tx) => {
          return (
            <div
              key={tx}
              className='flex flex-col shadow-lg rounded-lg shadow-blue-500 py-5 px-6'
            >
              <h3 className='text-base text-black'>
                Sender:{' '}
                <span className='ml-5 text-blue-500 text-sm'>{tx.sender}</span>
              </h3>
              <h3 className='text-base text-black'>
                Recipient:{' '}
                <span className='ml-5 text-blue-500 text-sm'>
                  {tx.addressTo}
                </span>
              </h3>
              <h4 className='text-base text-black'>
                Amount:{' '}
                <span className='ml-5 text-blue-500 text-sm'>
                  {tx.amount} ETH
                </span>
              </h4>
              <h4 className='text-base text-black'>
                Message:{' '}
                <span className='ml-5 text-blue-500 text-sm'>{tx.message}</span>
              </h4>
              <h4 className='text-base text-black'>
                Timestamp:{' '}
                <span className='ml-5 text-blue-500 text-sm'>
                  {tx.timestamp}
                </span>
              </h4>
            </div>
          )
        })}

        {/* loop */}
      </div>
    </div>
  )
}

export default Transactions
