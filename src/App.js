import { useContext } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tabs from './components/Tabs'
import { VenmoContext } from './context/context'

function App() {
  const { account } = useContext(VenmoContext)
  return (
    <div className='w-full'>
      <header>
        <Navbar />
      </header>

      {!account && <Hero />}
      {account && <Tabs />}
    </div>
  )
}

export default App
