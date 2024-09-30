import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Projects from './pages/Projects';



function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/joinus' element={<JoinUs />} />
        <Route path='/projects' element={<Projects />} />
 



      </Routes>

      <Footer />


    </BrowserRouter>
  )
}

export default App
