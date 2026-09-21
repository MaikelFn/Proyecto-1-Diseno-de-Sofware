import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Encabezado from './components/Encabezado'
import PiePagina from './components/PiePagina'
import Inicio from './pages/Inicio'
import Municipalidad from './pages/Municipalidad'
import Alcaldia from './pages/Alcaldia'
import NuestroCanton from './pages/NuestroCanton'
import DireccionAdministrativa from './pages/DireccionAdministrativa'
import DireccionFinanciera from './pages/DireccionFinanciera'
import DireccionIngenieria from './pages/DireccionIngenieria'
import DireccionOperaciones from './pages/DireccionOperaciones'
import Directorio from './pages/Directorio'
import PaginaEnConstruccion from './pages/PaginaEnConstruccion'
import Servicios from './pages/Servicios'
import Tramites from './pages/Tramites'
import Proyectos from './pages/Proyectos'
import Noticias from './pages/Noticias'
import Contacto from './pages/Contacto'
import Transparencia from './pages/Transparencia'
import Turismo from './pages/Turismo'
import Patrimonios from './pages/Patrimonios'
import Destinos from './pages/Destinos'
import FotosHistoricas from './pages/FotosHistoricas'
import Comercios from './pages/Comercios'

function App() {
  return (
    <BrowserRouter>
      <Encabezado />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/municipalidad" element={<Municipalidad />} />
        <Route path="/alcaldia" element={<Alcaldia />} />
        <Route path="/nuestro-canton" element={<NuestroCanton />} />
        <Route path="/direccion-administrativa" element={<DireccionAdministrativa />} />
        <Route path="/direccion-financiera" element={<DireccionFinanciera />} />
        <Route path="/direccion-ingenieria" element={<DireccionIngenieria />} />
        <Route path="/direccion-operaciones" element={<DireccionOperaciones />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/transparencia/acceso" element={<PaginaEnConstruccion />} />
        <Route path="/transparencia/rendicion" element={<PaginaEnConstruccion />} />
        <Route path="/transparencia/participacion" element={<PaginaEnConstruccion />} />
        <Route path="/transparencia/datos" element={<PaginaEnConstruccion />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/turismo/patrimonios" element={<Patrimonios />} />
        <Route path="/turismo/destinos" element={<Destinos />} />
        <Route path="/turismo/fotos" element={<FotosHistoricas />} />
        <Route path="/turismo/comercios" element={<Comercios />} /> 
        <Route path="/en-construccion" element={<PaginaEnConstruccion />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Cualquier ruta que no exista caerá aquí */}
        <Route path="*" element={<PaginaEnConstruccion />} />
      </Routes>

      <PiePagina />
    </BrowserRouter>
  )
}

export default App