import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import noticia1 from '../assets/images/noticia-1.png'
import noticia2 from '../assets/images/noticia-2.png'
import noticia3 from '../assets/images/noticia-3.png'

function NoticiasMunicipales() {
  const noticiasSecundarias = [
    {
      titulo: 'Vuelta a Costa Rica regresará este año a Pococí',
      categoria: 'Deporte y recreación',
      imagen: noticia2,
    },
    {
      titulo: 'MAG destina ₡31,8 millones para fortalecer a productores del Caribe',
      categoria: 'Desarrollo productivo',
      imagen: noticia3,
    },
  ]

  return (
    <section id="noticias" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Noticias
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Actualidad de nuestro cantón
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl">
            Conozca noticias, proyectos y actividades de interés para las
            comunidades de Limón.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Noticia principal */}
          <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition">

            <div className="overflow-hidden">
              <img
                src={noticia1}
                alt="Obras para comunidades rurales de Limón"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Desarrollo comunal
              </span>

              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
                Más de ₡3.620 millones impulsan obras para comunidades rurales de Limón
              </h3>

              <p className="mt-4 text-slate-600">
                Inversión que contempla obras en Talamanca, Valle La Estrella y Guácimo.
              </p>

              <Link
                to="/noticias"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:gap-3 transition-all"
              >
                Leer más
                <ArrowRight size={18} />
              </Link>
            </div>

          </article>

          {/* Noticias secundarias */}
          <div className="grid gap-6">

            {noticiasSecundarias.map((noticia) => (
              <article
                key={noticia.titulo}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition"
              >
                <div className="grid sm:grid-cols-[220px_1fr] h-full">

                  <div className="overflow-hidden">
                    <img
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-center">

                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      {noticia.categoria}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {noticia.titulo}
                    </h3>

                    <Link
                      to="/noticias"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:gap-3 transition-all"
                    >
                      Leer más
                      <ArrowRight size={17} />
                    </Link>

                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>

        <div className="mt-10 text-center">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 font-semibold text-emerald-700"
          >
            Ver todas las noticias
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default NoticiasMunicipales
