import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { Search, ChevronDown } from 'lucide-react'

function Encabezado() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Escudo de la Municipalidad de Limón"
              className="w-16 h-16 object-contain"
            />
          </Link>

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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? 'text-emerald-700'
                  : 'text-slate-700 hover:text-emerald-700'
              }`
            }
          >
            Inicio
          </NavLink>

          {/* Conózcanos */}
          <div className="relative group">
            <NavLink
              to="/municipalidad"
              className={({ isActive }) =>
                `flex items-center gap-1.5 py-7 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-700'
                    : 'text-slate-700 hover:text-emerald-700'
                }`
              }
            >
              Conózcanos

              <ChevronDown
                size={15}
                className="transition-transform group-hover:rotate-180"
              />
            </NavLink>

            <div
              className="
                invisible opacity-0 translate-y-2
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                group-focus-within:visible group-focus-within:opacity-100
                group-focus-within:translate-y-0
                absolute top-full left-0 z-50
                w-64 rounded-xl border border-slate-200
                bg-white p-2 shadow-xl
                transition-all duration-200
              "
            >
              <Link
                to="/municipalidad"
                className="block rounded-lg px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Municipalidad
              </Link>

              <Link
                to="/nuestro-canton"
                className="block rounded-lg px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Nuestro Cantón
              </Link>

              <Link
                to="/alcaldia"
                className="block rounded-lg px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Alcaldía
              </Link>

              <Link
                to="/directorio"
                className="block rounded-lg px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Directorio Telefónico
              </Link>

              <div className="my-1 border-t border-slate-100" />

              <Link
                to="/en-construccion"
                className="block rounded-lg px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Organigrama Institucional
              </Link>
            </div>
          </div>

          {/* Conservamos temporalmente las demás secciones */}
          <NavLink
            to="/servicios"
            className="text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            Servicios
          </NavLink>

          <NavLink
            to="/tramites"
            className="text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            Trámites
          </NavLink>

          <NavLink
            to="/proyectos"
            className="text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            Proyectos
          </NavLink>

          <NavLink
            to="/noticias"
            className="text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            Noticias
          </NavLink>

          <NavLink
            to="/contacto"
            className="text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            Contacto
          </NavLink>

          <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
            <Search size={18} />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Encabezado
