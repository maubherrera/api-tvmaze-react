//paquetes
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//componentes
import Navbar from "./components/Navbar"

//paginas
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Singlepage from './pages/Singlepage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<Aboutpage/>} />
          <Route path="/singleshow/:id" element={<Singlepage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App