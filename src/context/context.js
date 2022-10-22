/* eslint-disable no-unused-vars */
import { ethers } from 'ethers'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { createContext, useEffect, useState } from 'react'
import { contractAddress, contractAbi } from '../utils/constants'
export const VenmoContext = createContext()
// extract ethereum from window
const { ethereum } = window

// add Locate time
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

// connect to a venmo contract
const connectToContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, contractAbi, signer)
  return contract
}

export const VenmoProvider = ({ children }) => {
  const [account, setAccount] = useState('')
  const [addressTo, setAddressTo] = useState('')
  const [amount, setAmount] = useState(0)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  )

  // get All transactions
  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        // connect to contract
        const venmoContract = connectToContract()
        const availableTransactions = await venmoContract.getTransactions()
        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.recipient,
            sender: transaction.from,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
            message: transaction.message,
            timestamp: timeAgo.format(
              new Date(transaction.timestamp.toNumber() * 1000),
              'mini'
            ),
          })
        )
        setTransactions(structuredTransactions)
        console.log(structuredTransactions)
      } else {
        console.log('Ethereum is not exist')
      }
    } catch (err) {
      console.error(err)
    }
  }

  // check if wallet is connected
  const isWalletConnected = async () => {
    try {
      if (!ethereum) {
        console.warn('Ethereum not installed')
      }
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      if (accounts.length > 0) {
        setAccount(accounts[0])
        getAllTransactions()
      } else {
        console.log('No Accounts foundd')
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  // connect wallet
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        console.warn('Ethereum not installed')
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      if (accounts.length > 0) {
        setAccount(accounts[0])
      } else {
        console.log('No Accounts foundd')
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  // get Transaction count from blockchain
  const checkIfTransactionExists = async () => {
    try {
      // connect to contract
      const venmoContract = connectToContract()
      const transactionCount = await venmoContract.getTransactionCount()
      localStorage.setItem('transactionCount', parseInt(transactionCount))
    } catch (err) {
      console.error(err.message)
    }
  }

  // send transaction
  const senTransaction = async () => {
    try {
      if (ethereum) {
        // connect to contract
        const venmoContract = connectToContract()
        const parseAmount = ethers.utils.parseEther(amount)
        const params = {
          from: account,
          to: addressTo,
          gas: '0x5208',
          value: parseAmount._hex,
          chainId: 5, // georli network
        }
        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [params],
        })
        const transaction = venmoContract.createTransaction(
          addressTo,
          parseAmount,
          message
        )
        await transaction.wait()
        console.log(`Loading - ${transaction.hash}`)
        await transaction.wait()
        console.log(`Success - ${transaction.hash}`)
        setIsLoading(false)

        const transactionsCount = await venmoContract.getTransactionCount()

        setTransactionCount(transactionsCount.toNumber())
        window.location.reload()
      }
    } catch (err) {
      console.error(err)
    }
  }

  // useEffect
  useEffect(() => {
    isWalletConnected()
    checkIfTransactionExists()
  }, [transactionCount])
  return (
    <VenmoContext.Provider
      value={{
        connectWallet,
        account,
        addressTo,
        amount,
        message,
        transactions,
        setAddressTo,
        setAmount,
        setMessage,
        senTransaction,
        setTransactions,
      }}
    >
      {children}
    </VenmoContext.Provider>
  )
}
