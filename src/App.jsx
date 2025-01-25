import './App.css'
import Gaming from './components/Gaming'
import Hero from './components/Hero'
import PlayToEarn from './components/PlayToEarn'
import Powered from './components/PoweredBy'
import Roadmap from './components/Roadmap'
import Token from './components/TokenInfo'
import Uniswap from './components/Uniswap'
import Utility from './components/Utility'

function App() {

  return (
    <>
      <Hero />   
      <Utility />
      <PlayToEarn />
      <Gaming />
      <Token/>
      <Roadmap />
      <Uniswap />
      <Powered/>
    </>
  )
}

export default App
