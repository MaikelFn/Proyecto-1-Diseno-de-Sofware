import { Link } from 'react-router-dom'
import { Construction, ArrowLeft, Home } from 'lucide-react'

function PaginaEnConstruccion() {
  return (
    <main className="bg-slate-50">
      <section className="min-h-[65vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mx-auto w-20 h-20 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Construction size={38} />
          </div>

          <span className="block mt-8 text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Municipalidad de Limón
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Página en construcción
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Esta sección todavía no se encuentra disponible.
            Estamos trabajando para incorporar más información
            y servicios al sitio.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <ArrowLeft size={18} />
              Volver
            </button>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors"
            >
              <Home size={18} />
              Ir al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PaginaEnConstruccion
