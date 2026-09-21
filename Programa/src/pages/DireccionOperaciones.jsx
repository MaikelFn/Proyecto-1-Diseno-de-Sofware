import {
  Trash2,
  TreePine,
  Flower2,
  HardHat,
  Route,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const serviciosMantenimiento = [
  {
    nombre: 'Aseo de Vías Públicas',
    descripcion: 'Funciones del servicio y mapeo de las zonas de atención para mantener nuestras calles limpias.',
    Icono: TreePine,
  },
  {
    nombre: 'Parques',
    descripcion: 'Mantenimiento y atención integral de los espacios públicos y recreativos del cantón.',
    Icono: Flower2,
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
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Dirección de Operaciones y Proyectos
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Esta página presentará los servicios de mantenimiento del cantón y la información sobre obras municipales.
          </p>
        </div>
      </section>

      {/* Navegación interna */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 lg:px-8">
          {[
            ['Recolección de Residuos', '#residuos'],
            ['Aseo y Parques', '#mantenimiento'],
            ['Infraestructura y Vías', '#obras-vial'],
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

      {/* Recolección de Residuos */}
      <section id="residuos" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Trash2 size={24} />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Recolección de Residuos Sólidos
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              Descripción del servicio integral de manejo de residuos para garantizar la salud pública y el ornato del cantón. 
            </p>
            <div className="mt-6 rounded-lg bg-slate-50 p-4 border border-slate-100">
              <p className="text-sm text-slate-600 font-medium">
                Nota: Los horarios y rutas de recolección se publicarán aquí.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Aseo y Parques */}
      <section id="mantenimiento" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Limpieza Urbana
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Aseo y Espacios Públicos
          </h2>
          
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {serviciosMantenimiento.map((servicio) => (
              <article key={servicio.nombre} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <servicio.Icono size={25} className="text-emerald-700" />
                <h3 className="mt-5 font-bold text-slate-900">{servicio.nombre}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{servicio.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Obras y UTGVM */}
      <section id="obras-vial" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Desarrollo e Infraestructura
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Obras y Gestión Vial
          </h2>
          
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            
            {/* Obras Municipales */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <HardHat size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Proyectos de Obras Municipales
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Puede visualizar los detalles de infraestructura utilizando la sección representativa principal.
              </p>
              <div className="mt-7 border-t border-slate-200 pt-6">
                <Link to="/proyectos" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:gap-3 transition-all">
                  Acceso a los proyectos destacados <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            {/* UTGVM */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Route size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Unidad Técnica de Gestión Vial Municipal
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Información sobre el mantenimiento y las obras de recuperación de la red vial en todos los distritos del cantón.
              </p>
            </article>

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

export default DireccionOperaciones