import {
  Map,
  Ruler,
  Trees,
  Leaf,
  FileSearch,
  AlertCircle,
  ArrowRight
} from 'lucide-react'

const areasTerritoriales = [
  {
    nombre: 'Gestión Técnica y Estudio',
    descripcion: 'Descripción de las funciones del departamento de análisis y viabilidad técnica.',
    Icono: FileSearch,
  },
  {
    nombre: 'Zona Marítimo Terrestre',
    descripcion: 'Información institucional y gestiones relacionadas con el cuidado y administración de la franja costera.',
    Icono: Trees,
  },
  {
    nombre: 'Gestión Ambiental',
    descripcion: 'Información sobre los servicios y las iniciativas ambientales impulsadas por la municipalidad.',
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
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Esta página agrupará las áreas relacionadas con el desarrollo urbano, el territorio y la gestión ambiental.
          </p>
        </div>
      </section>

      {/* Navegación interna */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 lg:px-8">
          {[
            ['Control Urbano', '#control-urbano'],
            ['Catastro', '#catastro'],
            ['Gestión Ambiental y ZMT', '#ambiental-zmt'],
          ].map(([nombre, destino]) => (
            <a
              key={destino}
              href={destino}
              className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {nombre}
            </a>
          ))}
        </div>
      </section>

      {/* Nota de requisitos pendientes */}
      <section className="bg-slate-50 pt-12 pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-900 shadow-sm">
            <AlertCircle size={24} className="shrink-0 text-amber-700" />
            <p className="text-sm leading-relaxed">
              <strong>Información en proceso de actualización:</strong> Todavía debemos revisarlas.
            </p>
          </div>
        </div>
      </section>

      {/* Control Urbano y Catastro */}
      <section id="control-urbano" className="scroll-mt-24 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Desarrollo de la Ciudad
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Planificación y Propiedades
          </h2>
          
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            
            {/* Planificación Territorial */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Ruler size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Planificación Territorial y Control Urbano
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Información sobre la planificación y el control estricto del desarrollo urbano en el cantón para asegurar el cumplimiento del ordenamiento jurídico.
              </p>
            </article>

            {/* Catastro */}
            <article id="catastro" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Map size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Catastro y Bienes Inmuebles
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Servicios y formularios disponibles para los ciudadanos sobre las inscripciones y variaciones de sus terrenos y propiedades.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* Áreas de Estudio, ZMT y Ambiente */}
      <section id="ambiental-zmt" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Sostenibilidad
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión Ambiental y Territorio
          </h2>
          
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areasTerritoriales.map((area) => (
              <article key={area.nombre} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <area.Icono size={25} className="text-emerald-700" />
                <h3 className="mt-5 font-bold text-slate-900">{area.nombre}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-slate-950 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white">¿Necesita contactar con un departamento?</h2>
            <p className="mt-2 text-slate-300">Consulte los teléfonos y correos institucionales en el directorio municipal.</p>
          </div>
          <a href="/directorio" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-lime-300 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-200">
            Consultar directorio <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}

export default DireccionIngenieria