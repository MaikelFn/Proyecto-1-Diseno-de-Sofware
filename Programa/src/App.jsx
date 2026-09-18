import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Municipalidad from './pages/Municipalidad'
import Servicios from './pages/Servicios'
import Tramites from './pages/Tramites'
import Proyectos from './pages/Proyectos'
import Noticias from './pages/Noticias'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/municipalidad" element={<Municipalidad />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
