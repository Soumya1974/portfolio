import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Index from './pages/Index'

function App() {

  return (
    <div className='no-scrollbar'>
      <>
        <Navbar/>
      </>
      <>
        <Index/>
      </>
    </div>
  )
}

export default App
