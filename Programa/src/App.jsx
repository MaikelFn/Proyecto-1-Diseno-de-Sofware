import Encabezado from './components/Encabezado'
import PortadaPrincipal from './components/PortadaPrincipal'
import AccesosRapidos from './components/AccesosRapidos'
import ServiciosMunicipales from './components/ServiciosMunicipales'
import NoticiasMunicipales from './components/NoticiasMunicipales'
import ProyectosDestacados from './components/ProyectosDestacados'
import PiePagina from './components/PiePagina'

function App() {
  return (
    <>
      <Encabezado />
      <PortadaPrincipal />
      <AccesosRapidos />
      <ServiciosMunicipales />
      <NoticiasMunicipales />
      <ProyectosDestacados />
      <PiePagina />
    </>
  )
}

export default App
