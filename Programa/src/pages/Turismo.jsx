import { 
  Landmark, 
  MapPin, 
  Camera, 
  Store,
  Palmtree,
  Image as ImageIcon,
  Utensils
} from 'lucide-react'

const patrimoniosInfo = [
  {
    nombre: 'Isla Uvita',
    descripcion: 'Pegar aquí el texto sobre la Isla Uvita...',
  },
  {
    nombre: 'Parque Vargas',
    descripcion: 'Pegar aquí el texto sobre el Parque Vargas...',
  }
]

const destinosInfo = [
  {
    nombre: 'Nombre del Destino 1',
    descripcion: 'Pegar aquí la descripción del destino...',
    Icono: Palmtree
  }
]

const comerciosInfo = [
  {
    nombre: 'Nombre del Comercio',
    categoria: 'Categoría (ej. Restaurante)',
    descripcion: 'Pegar aquí la descripción o contacto del comercio...',
    Icono: Utensils
  }
]

function Turismo() {
  return (
    <main>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Descubra Limón
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Turismo en nuestro Cantón
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Explore la riqueza cultural, arquitectónica y natural del Caribe costarricense. 
            Un destino lleno de historia, sabores únicos y paisajes inolvidables.
          </p>
        </div>
      </section>

      {/* Patrimonios Culturales */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Historia viva
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Patrimonios Culturales e Históricos</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Edificaciones y monumentos que cuentan la historia de nuestro desarrollo portuario y herencia afrocaribeña.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {patrimoniosInfo.map((patrimonio, index) => (
              <article key={index} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
                {patrimonio.imagen ? (
                  <img src={patrimonio.imagen} alt={patrimonio.nombre} className="h-64 w-full object-cover" />
                ) : (
                  <div className="flex h-64 items-center justify-center bg-slate-200 text-slate-500">
                    <Camera size={32} />
                    <span className="ml-3 text-sm font-medium">Espacio para imagen</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900">{patrimonio.nombre}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {patrimonio.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Destinos Turísticos */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Atracciones
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Destinos Turísticos</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destinosInfo.map((destino, index) => (
              <article key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <destino.Icono size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{destino.nombre}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {destino.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fotos Históricas */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Memoria visual
          </span>
          <h2 className="mt-3 text-3xl font-bold">Fotos Históricas</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Explore nuestra colección de fotografías que retratan la evolución de Limón.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex aspect-square flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-600">
                <ImageIcon className="mb-2" size={32} />
                <span className="text-xs">Espacio para Foto {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comercios Turísticos */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Apoyo local
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Comercios Turísticos</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {comerciosInfo.map((comercio, index) => (
              <article key={index} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <comercio.Icono size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{comercio.nombre}</h3>
                  <p className="mt-1 text-sm text-emerald-700 font-medium">{comercio.categoria}</p>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {comercio.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Turismo