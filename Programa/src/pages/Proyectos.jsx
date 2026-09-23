import { useSearchParams } from 'react-router-dom'
import { HardHat, MapPin, Route, Bridge, Construction } from 'lucide-react'

// Datos de prueba (Mock data)
const proyectosData = [
  {
    id: 1,
    titulo: 'Asfaltado de vías céntricas',
    distrito: 'Limón Centro',
    categoria: 'Calles',
    icono: Route,
  },
  {
    id: 2,
    titulo: 'Mantenimiento de puente colgante',
    distrito: 'Valle de la Estrella',
    categoria: 'Puentes',
    icono: Bridge,
  },
  {
    id: 3,
    titulo: 'Construcción de alcantarillado',
    distrito: 'Río Blanco',
    categoria: 'Alcantarillado',
    icono: Construction,
  },
  {
    id: 4,
    titulo: 'Mejora de caminos vecinales',
    distrito: 'Matama',
    categoria: 'Calles',
    icono: Route,
  },
  {
    id: 5,
    titulo: 'Renovación de parque central',
    distrito: 'Limón Centro',
    categoria: 'Obras Públicas',
    icono: HardHat,
  },
]

const distritos = [
  { nombre: 'Todos', valor: 'todos' },
  { nombre: 'Limón Centro', valor: 'limon-centro' },
  { nombre: 'Valle de la Estrella', valor: 'valle-de-la-estrella' },
  { nombre: 'Río Blanco', valor: 'rio-blanco' },
  { nombre: 'Matama', valor: 'matama' },
]

function Proyectos() {
  const [searchParams, setSearchParams] = useSearchParams()

  const distritoURL = searchParams.get('distrito')

  const distritoActivo = distritos.some(
    (distrito) => distrito.valor === distritoURL
  )
    ? distritoURL
    : 'todos'

  const nombreDistritoActivo = distritos.find(
    (distrito) => distrito.valor === distritoActivo
  )?.nombre

  const proyectosFiltrados =
    distritoActivo === 'todos'
      ? proyectosData
      : proyectosData.filter(
          (proyecto) => proyecto.distrito === nombreDistritoActivo
        )

  const cambiarDistrito = (valor) => {
    setSearchParams(valor === 'todos' ? {} : { distrito: valor })
  }

  return (
    <main>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Obras y Proyectos
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Proyectos de Infraestructura
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Conozca las obras en ejecución y finalizadas en los diferentes distritos de nuestro cantón.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Filtros por Distrito */}
          <div className="mb-12 flex flex-wrap gap-3">
            {distritos.map((distrito) => (
              <button
                key={distrito.valor}
                type="button"
                onClick={() => cambiarDistrito(distrito.valor)}
                aria-pressed={distritoActivo === distrito.valor}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  distritoActivo === distrito.valor
                    ? 'border-emerald-700 bg-emerald-700 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                {distrito.nombre}
              </button>
            ))}
          </div>

          {/* Lista de Proyectos */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proyectosFiltrados.map((proyecto) => {
              const Icono = proyecto.icono
              return (
                <article key={proyecto.id} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-700">
                    <Icono size={15} />
                    {proyecto.categoria}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {proyecto.titulo}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={17} className="text-emerald-700" />
                    Distrito: <span className="font-medium text-slate-900">{proyecto.distrito}</span>
                  </div>
                </article>
              )
            })}
          </div>

          {proyectosFiltrados.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No hay proyectos registrados para este distrito actualmente.
            </div>
          )}

        </div>
      </section>
    </main>
  )
}

export default Proyectos