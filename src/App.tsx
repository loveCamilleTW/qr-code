import './App.css'
import QR_CODE from './images/image-qr-code.png';

function App() {
  return (
    <main>
      <div className='card'>
        <img src={QR_CODE} alt='QR code'/>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </main>
  )
}

export default App
