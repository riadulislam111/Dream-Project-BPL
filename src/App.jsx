
import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/DoubleDollar.png'


function App() {
  

  return (
    <>
      <div className="navbar">
  <div className="flex-1">
    <a className="text-xl"><img className='w-[60px] h-[60px]' src={navImg} alt="" /></a>
  </div>
  <div className="flex items-center">
    <span className='mr-2'>60000000000</span>
    <span className='mr-2'>Coin</span>
    <img src={dollarImg} alt="" />
  </div>
</div>
    </>
  )
}

export default App
