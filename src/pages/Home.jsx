import Navbar from './Navbar';
import './Home.css'
import Image1 from '/images/tvsxl.png'
import Image2 from '/images/RE1.png'
import Image3 from '/images/Hima1.png'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='home'>
          <br></br>
          <h1>Welcome To Our Website...!</h1>
          <img src={Image1} alt="image" width={470}></img>
          <img src={Image2} alt="image" width={470}></img>
          <img src={Image3} alt="image" width={440}></img>
          <div className='add'>
              <center><h2>Ride Easy, Rent Smart! 🚴‍♂️</h2>
              <h2>Seamless rentals, top-quality bikes, and 24/7 availability.</h2>
              </center>
          </div>
      </div>
    </div>
  )
}

export default Home