import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import logo from '../assets/images/logo.png'

const menus = [
  {
    nombre: 'Conózcanos',
    opciones: [
      { nombre: 'Municipalidad', ruta: '/municipalidad' },
      { nombre: 'Nuestro Cantón', ruta: '/nuestro-canton' },
      { nombre: 'Alcaldía', ruta: '/alcaldia' },
      { nombre: 'Directorio Telefónico', ruta: '/directorio' },
      { nombre: 'Organigrama Institucional', ruta: '/en-construccion' },
    ],
  },
  {
    nombre: 'Gestión Municipal',
    opciones: [
      { nombre: 'Servicios Municipales', ruta: '/servicios' },
      { nombre: 'Ventanilla Única', ruta: '/tramites' },
      { nombre: 'Cobros', ruta: '/tramites' },
      { nombre: 'Rentas', ruta: '/tramites' },
      { nombre: 'Seguridad Municipal', ruta: '/servicios' },
      { nombre: 'Gestión Ambiental', ruta: '/servicios' },
    ],
  },
  {
    nombre: 'Obras y Proyectos',
    opciones: [
      { nombre: 'Proyectos de Infraestructura', ruta: '/proyectos' },
      { nombre: 'Distrito Limón Centro', ruta: '/en-construccion' },
      { nombre: 'Distrito Valle de la Estrella', ruta: '/en-construccion' },
      { nombre: 'Distrito Río Blanco', ruta: '/en-construccion' },
      { nombre: 'Distrito Matama', ruta: '/en-construccion' },
    ],
  },
  {
    nombre: 'Transparencia',
    opciones: [
      { nombre: 'Acceso a la Información', ruta: '/en-construccion' },
      { nombre: 'Rendición de Cuentas', ruta: '/en-construccion' },
      { nombre: 'Participación Ciudadana', ruta: '/en-construccion' },
      { nombre: 'Datos Abiertos', ruta: '/en-construccion' },
    ],
  },
  {
    nombre: 'Turismo',
    opciones: [
      { nombre: 'Patrimonios', ruta: '/en-construccion' },
      { nombre: 'Destinos Turísticos', ruta: '/en-construccion' },
      { nombre: 'Fotos Históricas', ruta: '/en-construccion' },
      { nombre: 'Comercios Turísticos', ruta: '/en-construccion' },
    ],
  },
  {
    nombre: 'En Línea',
    opciones: [
      { nombre: 'Consulta', ruta: '/tramites' },
      { nombre: 'Preguntas Frecuentes', ruta: '/en-construccion' },
    ],
  },
]

function Encabezado() {
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false)
  const [submenuMovil, setSubmenuMovil] = useState(null)

  const cerrarMenuMovil = () => {
    setMenuMovilAbierto(false)
    setSubmenuMovil(null)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-6 lg:px-8">
        {/* Identidad municipal */}
        <Link
          to="/"
          onClick={cerrarMenuMovil}
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src={logo}
            alt="Escudo de la Municipalidad de Limón"
            className="h-14 w-14 object-contain"
          />

          <div className="leading-tight">
            <span className="block text-base font-bold text-slate-900 md:text-lg">
              Municipalidad de Limón
            </span>

            <span className="block text-xs text-slate-500">
              Juntos por un mejor cantón
            </span>
          </div>
        </Link>

        {/* Navegación de escritorio */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-4 xl:gap-6 lg:flex"
        >
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

          {menus.map((menu) => (
            <div key={menu.nombre} className="group relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex h-20 items-center gap-1 whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700 focus:text-emerald-700"
              >
                {menu.nombre}

                <ChevronDown
                  size={15}
                  className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                />
              </button>

              <div
                className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
              >
                {menu.opciones.map((opcion) => (
                  <Link
                    key={opcion.nombre}
                    to={opcion.ruta}
                    className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700"
                  >
                    {opcion.nombre}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Acciones */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/tramites"
            aria-label="Ir a consultas y trámites"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-colors hover:bg-emerald-100 hover:text-emerald-700"
          >
            <Search size={19} />
          </Link>

          <button
            type="button"
            aria-label={menuMovilAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuMovilAbierto}
            aria-controls="menu-movil"
            onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 lg:hidden"
          >
            {menuMovilAbierto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navegación móvil */}
      {menuMovilAbierto && (
        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white px-6 py-4 lg:hidden"
        >
          <Link
            to="/"
            onClick={cerrarMenuMovil}
            className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Inicio
          </Link>

          {menus.map((menu) => {
            const abierto = submenuMovil === menu.nombre

            return (
              <div key={menu.nombre} className="border-b border-slate-100">
                <button
                  type="button"
                  aria-expanded={abierto}
                  onClick={() =>
                    setSubmenuMovil(abierto ? null : menu.nombre)
                  }
                  className="flex w-full items-center justify-between rounded-lg px-3 py-4 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  {menu.nombre}

                  <ChevronDown
                    size={17}
                    className={`transition-transform ${
                      abierto ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {abierto && (
                  <div className="mb-3 ml-3 border-l-2 border-emerald-100 pl-3">
                    {menu.opciones.map((opcion) => (
                      <Link
                        key={opcion.nombre}
                        to={opcion.ruta}
                        onClick={cerrarMenuMovil}
                        className="block rounded-lg px-3 py-3 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        {opcion.nombre}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default Encabezado
