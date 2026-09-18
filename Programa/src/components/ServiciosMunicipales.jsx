import { Link } from 'react-router-dom'
import {
  HandCoins,
  MapPinned,
  HardHat,
  Users,
  ArrowRight,
} from 'lucide-react'

function ServiciosMunicipales() {
  const servicios = [
    {
      nombre: 'Gestión Tributaria',
      descripcion:
        'Información sobre impuestos, tasas y obligaciones municipales.',
      icono: HandCoins,
    },
    {
      nombre: 'Servicios Urbanos',
      descripcion:
        'Información relacionada con los servicios brindados en el cantón.',
      icono: MapPinned,
    },
    {
      nombre: 'Obras y Proyectos',
      descripcion:
        'Conozca las obras y proyectos desarrollados por la Municipalidad.',
      icono: HardHat,
    },
    {
      nombre: 'Proyección Social',
      descripcion:
        'Programas e iniciativas dirigidas al bienestar de la comunidad.',
      icono: Users,
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Servicios municipales
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Servicios para nuestra comunidad
          </h2>

          <p className="mt-4 text-slate-600">
            Conozca algunos de los principales servicios que ofrece la
            Municipalidad de Limón.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {servicios.map((servicio) => {
            const Icono = servicio.icono

            return (
              <div
                key={servicio.nombre}
                className="group border border-slate-200 rounded-2xl p-7 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-5">

                  <div className="shrink-0 w-14 h-14 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                    <Icono size={27} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {servicio.nombre}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {servicio.descripcion}
                    </p>

                    <Link to="/servicios" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:gap-3 transition-all">
                      Más información
                      <ArrowRight size={17} />
                    </Link>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ServiciosMunicipales
