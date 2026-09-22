import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Construction,
  Leaf,
  Map,
  Phone,
  Trees,
  Truck,
} from 'lucide-react'

const departamentos = [
  {
    id: 'recoleccion-residuos',
    nombre: 'Recolección de Residuos Sólidos',
    descripcion:
      'Información sobre el servicio municipal de recolección de residuos sólidos en el cantón.',
    Icono: Truck,
  },
  {
    id: 'aseo-vias',
    nombre: 'Aseo de Vías Públicas',
    descripcion:
      'Información sobre las labores municipales de limpieza y aseo de las vías públicas.',
    Icono: Leaf,
  },
  {
    id: 'parques',
    nombre: 'Parques',
    descripcion:
      'Información sobre el mantenimiento y la atención de los parques y espacios públicos municipales.',
    Icono: Trees,
  },
  {
    id: 'obras-municipales',
    nombre: 'Proyectos de Obras Municipales',
    descripcion:
      'Información sobre las funciones del departamento encargado de los proyectos de obras municipales.',
    Icono: Construction,
  },
  {
    id: 'gestion-vial',
    nombre: 'Unidad Técnica de Gestión Vial Municipal',
    descripcion:
      'Información sobre las funciones de la unidad municipal relacionadas con la gestión de la red vial cantonal.',
    Icono: Map,
  },
]

function DireccionOperaciones() {
  return (
    <main>
      {/* Portada */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Gestión Municipal
          </span>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold text-white md:text-5xl">
            Dirección de Operaciones y Proyectos
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Conozca las áreas municipales relacionadas con la
            recolección de residuos, el aseo de vías públicas,
            el mantenimiento de parques, las obras municipales
            y la gestión vial.
          </p>
        </div>
      </section>

      {/* Navegación interna */}
      <nav
        aria-label="Departamentos de Dirección de Operaciones y Proyectos"
        className="border-b border-slate-200 bg-white py-7"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 lg:px-8">
          {departamentos.map((departamento) => (
            <a
              key={departamento.id}
              href={`#${departamento.id}`}
              className="rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {departamento.nombre}
            </a>
          ))}
        </div>
      </nav>

      {/* Departamentos */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Áreas de trabajo
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Departamentos de Operaciones y Proyectos
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Consulte las funciones de cada área. Iremos incorporando
            sus servicios, datos de contacto y recursos disponibles
            conforme revisemos la información municipal original.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {departamentos.map((departamento) => {
              const Icono = departamento.Icono

              return (
                <article
                  key={departamento.id}
                  id={departamento.id}
                  className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 md:p-9"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <Icono size={24} />
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                        Dirección de Operaciones y Proyectos
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {departamento.nombre}
                      </h3>

                      <p className="mt-4 leading-relaxed text-slate-600">
                        {departamento.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Aquí incorporaremos la información original
                      de cada departamento. */}

                  {departamento.id === 'obras-municipales' && (
                    <Link
                      to="/proyectos"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                      Ver proyectos destacados
                      <ArrowRight size={17} />
                    </Link>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Acceso al directorio */}
      <section className="bg-slate-950 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <h2 className="text-xl font-bold text-white">
              ¿Necesita contactar con un departamento?
            </h2>

            <p className="mt-2 text-slate-300">
              Consulte los teléfonos y correos institucionales
              en el directorio municipal.
            </p>
          </div>

          <Link
            to="/directorio"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-lime-300 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-200"
          >
            Consultar directorio
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default DireccionOperaciones
