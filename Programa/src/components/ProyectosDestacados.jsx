import { Link } from 'react-router-dom'
import {
  Bridge,
  Construction,
  Route,
  ArrowRight,
} from 'lucide-react'

import proyecto1 from '../assets/images/proyecto-1.png'
import proyecto2 from '../assets/images/proyecto-2.png'
import proyecto3 from '../assets/images/proyecto-3.png'

function ProyectosDestacados() {
  const proyectos = [
    {
      categoria: 'Puentes',
      titulo: 'Construcción y mantenimiento de puentes',
      descripcion:
        'Obras orientadas a mejorar la conectividad y seguridad entre diferentes comunidades del cantón.',
      imagen: proyecto1,
      icono: Bridge,
    },
    {
      categoria: 'Alcantarillado',
      titulo: 'Construcción y mantenimiento de alcantarillas y vados',
      descripcion:
        'Mejoras en infraestructura pluvial para favorecer el manejo de aguas y reducir afectaciones en las comunidades.',
      imagen: proyecto2,
      icono: Construction,
    },
    {
      categoria: 'Calles',
      titulo: 'Calles asfaltadas',
      descripcion:
        'Trabajos de mejoramiento y asfaltado de calles en distintos sectores del cantón.',
      imagen: proyecto3,
      icono: Route,
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Proyectos destacados
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Obras que transforman nuestro cantón
            </h2>

            <p className="mt-4 text-slate-600">
              Conozca algunos de los proyectos de infraestructura que contribuyen
              al desarrollo de las comunidades de Limón.
            </p>
          </div>

          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 font-semibold text-emerald-700"
          >
            Ver todos los proyectos
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {proyectos.map((proyecto) => {
            const Icono = proyecto.icono

            return (
              <article
                key={proyecto.titulo}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                <div className="overflow-hidden">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase">
                    <Icono size={15} />
                    {proyecto.categoria}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {proyecto.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {proyecto.descripcion}
                  </p>

                  <Link
                    to="/proyectos"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:gap-3 transition-all"
                  >
                    Ver detalles
                    <ArrowRight size={17} />
                  </Link>

                </div>

              </article>
            )
          })}

        </div>

        <p className="mt-8 text-xs text-slate-400 text-center">
          Imágenes utilizadas con fines representativos.
        </p>

      </div>
    </section>
  )
}

export default ProyectosDestacados
