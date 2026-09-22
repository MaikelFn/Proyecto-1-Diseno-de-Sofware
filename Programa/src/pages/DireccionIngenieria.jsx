import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  ClipboardList,
  FileSearch,
  Leaf,
  Mail,
  Map,
  MapPinned,
  Ruler,
} from 'lucide-react'

const departamentos = [
  {
    id: 'gestion-tecnica',
    nombre: 'Gestión Técnica y Estudio',
    descripcion:
      'Área encargada de las funciones de análisis y estudio técnico relacionadas con la gestión municipal.',
    Icono: FileSearch,
  },
  {
    id: 'planificacion-territorial',
    nombre: 'Planificación Territorial y Control Urbano',
    descripcion:
      'Área relacionada con la planificación del territorio y el control del desarrollo urbano del cantón.',
    Icono: Ruler,
  },
  {
    id: 'zona-maritimo-terrestre',
    nombre: 'Zona Marítimo Terrestre',
    descripcion:
      'Área relacionada con la gestión y administración de la zona marítimo terrestre del cantón.',
    Icono: MapPinned,
  },
  {
    id: 'catastro',
    nombre: 'Catastro',
    descripcion:
      'Información y gestiones relacionadas con los registros catastrales de los terrenos del cantón.',
    Icono: Map,
  },
  {
    id: 'bienes-inmuebles',
    nombre: 'Bienes Inmuebles',
    descripcion:
      'Información sobre las gestiones municipales relacionadas con los bienes inmuebles.',
    Icono: Building2,
  },
  {
    id: 'gestion-ambiental',
    nombre: 'Gestión Ambiental',
    descripcion:
      'Información sobre las funciones e iniciativas ambientales desarrolladas por la Municipalidad.',
    Icono: Leaf,
  },
]

function DireccionIngenieria() {
  return (
    <main>
      {/* Portada */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Gestión Municipal
          </span>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Dirección de Ingeniería
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Conozca los departamentos relacionados con la gestión
            técnica, la planificación territorial, el catastro,
            los bienes inmuebles y la gestión ambiental del cantón.
          </p>
        </div>
      </section>

      {/* Navegación interna */}
      <nav
        aria-label="Departamentos de Dirección de Ingeniería"
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
            Departamentos de Ingeniería
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Seleccione un departamento para consultar su información.
            Incorporaremos las funciones, los contactos y los recursos
            disponibles de cada área.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {departamentos.map((departamento, indice) => (
              <article
                key={departamento.id}
                id={departamento.id}
                className={`scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 md:p-9 ${
                  indice === 0 || indice === 5
                    ? 'lg:col-span-2'
                    : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <departamento.Icono size={24} />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                      Dirección de Ingeniería
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {departamento.nombre}
                    </h3>

                    <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
                      {departamento.descripcion}
                    </p>
                  </div>
                </div>

                {/* Aquí agregaremos el contenido original
                    de cada departamento. */}
              </article>
            ))}
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

export default DireccionIngenieria
