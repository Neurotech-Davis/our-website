import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import JoinUs from "./pages/JoinUs";
import Projects from "./pages/Projects";
import Entrepreneurship from "./pages/Entrepreneurship";
import Education from "./pages/Education";
import Team from './pages/Team'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Neurotech@Davis";
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/entrepreneurship" element={<Entrepreneurship />} />
        <Route path="/team" element={<Team />} />
        <Route path="/education" element={<Education />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
