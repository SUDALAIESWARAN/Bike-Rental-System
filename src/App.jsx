import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About' 
import Bikes from './pages/Bikes';
import Booking from "./pages/Booking";
import Register from './pages/Register';
//import Navbar from './components/Navbar';
import Login from './pages/Login';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/logout" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
