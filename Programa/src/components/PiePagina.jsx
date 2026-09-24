import { Link } from 'react-router-dom'
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

import logo from '../assets/images/logo.png'

const enlaces = [
  { nombre: 'Inicio', ruta: '/' },
  { nombre: 'Conózcanos', ruta: '/municipalidad' },
  { nombre: 'Gestión Municipal', ruta: '/direccion-administrativa' },
  { nombre: 'Obras y Proyectos', ruta: '/proyectos' },
  { nombre: 'Transparencia', ruta: '/en-construccion' },
  { nombre: 'Turismo', ruta: '/en-construccion' },
  { nombre: 'En Línea', ruta: '/tramites' },
]

function PiePagina() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Identidad institucional */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                <img
                  src={logo}
                  alt="Escudo de la Municipalidad de Limón"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <span className="block text-lg font-bold leading-snug">
                  Municipalidad de Limón
                </span>

                <span className="mt-1 block text-sm text-slate-400">
                  Juntos por un mejor cantón
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
              Trabajamos por el desarrollo y bienestar de las
              comunidades del cantón de Limón.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h2 className="text-lg font-bold">
              Explorar el sitio
            </h2>

            <nav aria-label="Enlaces del pie de página">
              <ul className="mt-5 space-y-3">
                {enlaces.map((enlace) => (
                  <li key={enlace.nombre}>
                    <Link
                      to={enlace.ruta}
                      className="text-sm text-slate-400 transition-colors hover:text-lime-300 focus-visible:text-lime-300"
                    >
                      {enlace.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="text-lg font-bold">
              Contacto
            </h2>

            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-lime-300"
                />
                <span>Limón, Costa Rica</span>
              </li>

              <li>
                <a
                  href="tel:+50627584444"
                  className="flex items-center gap-3 transition-colors hover:text-lime-300"
                >
                  <Phone
                    size={18}
                    className="shrink-0 text-lime-300"
                  />
                  +506 2758-4444
                </a>
              </li>

              <li>
                <a
                  href="mailto:alcaldia@municlimon.go.cr"
                  className="flex items-start gap-3 break-all transition-colors hover:text-lime-300"
                >
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-lime-300"
                  />
                  alcaldia@municlimon.go.cr
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock3
                  size={18}
                  className="shrink-0 text-lime-300"
                />
                <span>Lunes a viernes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Municipalidad de Limón.
          </p>

          <p>
            Sitio web institucional
          </p>
        </div>
      </div>
    </footer>
  )
}

export default PiePagina
