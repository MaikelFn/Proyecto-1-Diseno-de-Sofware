import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Encabezado from './components/Encabezado'
import PiePagina from './components/PiePagina'
import Inicio from './pages/Inicio'
import Municipalidad from './pages/Municipalidad'
import Alcaldia from './pages/Alcaldia'
import NuestroCanton from './pages/NuestroCanton'
import PaginaEnConstruccion from './pages/PaginaEnConstruccion'
import Servicios from './pages/Servicios'
import Tramites from './pages/Tramites'
import Proyectos from './pages/Proyectos'
import Noticias from './pages/Noticias'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Encabezado />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/municipalidad" element={<Municipalidad />} />
        <Route path="/alcaldia" element={<Alcaldia />} />
        <Route path="/nuestro-canton" element={<NuestroCanton />} />
        <Route path="/en-construccion" element={<PaginaEnConstruccion />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<PaginaEnConstruccion />} />
      </Routes>

      <PiePagina />
    </BrowserRouter>
  )
}

export default App
