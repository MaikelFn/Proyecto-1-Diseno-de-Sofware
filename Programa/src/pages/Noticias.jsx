import Encabezado from '../components/Encabezado'
import PiePagina from '../components/PiePagina'

function Noticias() {
  return (
    <>
      <Encabezado />
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Noticias</h1>
          <p className="text-slate-600">Página en construcción</p>
        </div>
      </div>
      <PiePagina />
    </>
  )
}

export default Noticias
