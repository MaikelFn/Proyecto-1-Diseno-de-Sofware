import logo from '../assets/images/logo.png'
import { Search } from 'lucide-react'

function Encabezado() {
  const links = [
    'Inicio',
    'Municipalidad',
    'Servicios',
    'Trámites',
    'Proyectos',
    'Noticias',
    'Contacto',
  ]

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Escudo de la Municipalidad de Limón"
            className="w-16 h-16 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-lg font-bold text-slate-900">
              Municipalidad de Limón
            </h1>
            <p className="text-xs text-slate-500">
              Juntos por un mejor cantón
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
            >
              {link}
            </a>
          ))}

          <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
            <Search size={18} />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Encabezado
