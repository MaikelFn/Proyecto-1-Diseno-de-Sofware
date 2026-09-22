import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ClipboardList,
  HandCoins,
  HardHat,
  Truck,
} from 'lucide-react'

const servicios = [
  {
    nombre: 'Atención Ciudadana',
    descripcion:
      'Información sobre Ventanilla Única, atención de solicitudes y servicios administrativos.',
    Icono: ClipboardList,
    ruta: '/direccion-administrativa',
  },
  {
    nombre: 'Gestión Tributaria',
    descripcion:
      'Información sobre cobros, rentas, patentes y gestiones financieras municipales.',
    Icono: HandCoins,
    ruta: '/direccion-financiera',
  },
  {
    nombre: 'Ingeniería y Gestión Territorial',
    descripcion:
      'Información sobre planificación territorial, catastro, bienes inmuebles y gestión ambiental.',
    Icono: HardHat,
    ruta: '/direccion-ingenieria',
  },
  {
    nombre: 'Servicios Urbanos',
    descripcion:
      'Información sobre recolección de residuos, aseo de vías, parques y mantenimiento del cantón.',
    Icono: Truck,
    ruta: '/direccion-operaciones',
  },
]

function ServiciosMunicipales() {
  return (
    <section className="bg-[#1c1e1e] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-teal-300">
          Servicios municipales
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Servicios para nuestra comunidad
        </h2>

        <p className="mt-4 text-slate-300">
          Conozca algunos de los principales servicios que ofrece
          la Municipalidad de Limón.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {servicios.map((servicio) => (
            <Link
              key={servicio.nombre}
              to={servicio.ruta}
              className="group flex gap-6 rounded-2xl border border-slate-700 bg-[#1c1e1e] p-7 transition-all hover:border-teal-400 hover:bg-slate-800/40"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-white">
                <servicio.Icono size={27} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {servicio.nombre}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {servicio.descripcion}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-300">
                  Más información
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gestion-municipal"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-200"
          >
            Ver toda la Gestión Municipal
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiciosMunicipales
