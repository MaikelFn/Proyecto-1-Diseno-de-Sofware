import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'

import logo from '../assets/images/logo.png'

function PiePagina() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Municipalidad */}
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-2">
                <img
                  src={logo}
                  alt="Escudo de la Municipalidad de Limón"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div>
                <h2 className="font-bold text-lg">
                  Municipalidad de Limón
                </h2>

                <p className="text-sm text-slate-400">
                  Juntos por un mejor cantón
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Trabajamos por el desarrollo y bienestar de las comunidades
              del cantón de Limón.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Enlaces
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <Link to="/" className="hover:text-lime-300 transition">
                Inicio
              </Link>

              <Link to="/servicios" className="hover:text-lime-300 transition">
                Servicios
              </Link>

              <Link to="/tramites" className="hover:text-lime-300 transition">
                Trámites
              </Link>

              <Link to="/proyectos" className="hover:text-lime-300 transition">
                Proyectos
              </Link>

              <Link to="/noticias" className="hover:text-lime-300 transition">
                Noticias
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Contacto
            </h3>

            <div className="space-y-4 text-sm text-slate-400">

              <div className="flex gap-3">
                <MapPin
                  size={19}
                  className="text-lime-300 shrink-0"
                />
                <span>
                  Limón, Costa Rica
                </span>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={19}
                  className="text-lime-300 shrink-0"
                />
                <span>
                  +506 2758-4444
                </span>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={19}
                  className="text-lime-300 shrink-0"
                />
                <span>
                  alcaldia@municlimon.go.cr
                </span>
              </div>

              <div className="flex gap-3">
                <Clock
                  size={19}
                  className="text-lime-300 shrink-0"
                />
                <span>
                  Lunes a viernes
                </span>
              </div>

            </div>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Municipalidad
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed">
              Consulte información sobre servicios, proyectos, noticias
              y trámites municipales.
            </p>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row gap-3 justify-between text-xs text-slate-500">
          <p>
            © 2026 Municipalidad de Limón
          </p>

          <p>
            Sitio web municipal
          </p>
        </div>

      </div>
    </footer>
  )
}

export default PiePagina
