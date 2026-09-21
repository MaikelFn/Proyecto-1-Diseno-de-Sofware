import { MapPin } from 'lucide-react'

// 1. Importar las imágenes


const items = [
  {
    titulo: 'Edificio de Correos y Telégrafos',
    descripcion: 'Joya arquitectónica de Limón construida a principios del siglo XX, símbolo de la época dorada y del desarrollo portuario.',
    ubicacion: 'Limón Centro',
    imagen: '/imgmonumento'
  },
  {
    titulo: 'Tajamar de Limón',
    descripcion: 'Muro de contención histórico que protege la ciudad del oleaje del Mar Caribe, ofreciendo uno de los mejores paseos peatonales.',
    ubicacion: 'Costa de Limón',
    imagen: '/imgarte'
  }
]

function FotosHistoricas() {
  return (
    <main>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Turismo
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Patrimonios Históricos
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Descubra la riqueza cultural, arquitectónica e histórica que hace 
            único al cantón de Limón.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.titulo} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900">{item.titulo}</h2>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-700">
                    <MapPin size={16} />
                    {item.ubicacion}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {item.descripcion}
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

export default FotosHistoricas