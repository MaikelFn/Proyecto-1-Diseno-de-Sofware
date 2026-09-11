import imagenPortada from '../assets/images/portada-limon.png'
import { ArrowRight } from 'lucide-react'

function PortadaPrincipal() {
  return (
    <section
      id="inicio"
      className="relative min-h-[560px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${imagenPortada})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 text-sm font-semibold tracking-[0.2em] uppercase text-lime-300">
            Municipalidad de Limón
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Un cantón con
            <span className="text-lime-300"> identidad, cultura y futuro</span>
          </h2>

          <p className="mt-6 text-lg text-slate-100 max-w-xl">
            Trabajamos por el desarrollo, la seguridad y el bienestar
            de todas las personas limonenses.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-lime-300 text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-lime-200 transition"
            >
              Conocer servicios
              <ArrowRight size={18} />
            </a>

            <a
              href="#tramites"
              className="inline-flex items-center px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white hover:text-slate-900 transition"
            >
              Ver trámites
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortadaPrincipal
