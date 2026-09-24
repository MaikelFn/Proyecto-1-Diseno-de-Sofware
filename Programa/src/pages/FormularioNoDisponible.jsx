import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  FileWarning,
  Phone,
} from 'lucide-react'

function FormularioNoDisponible() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Formularios municipales
          </span>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Formulario no disponible
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            El formulario que intenta consultar todavía no está
            disponible en esta versión del sitio web.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <FileWarning size={32} />
            </div>

            <h2 className="mt-7 text-2xl font-bold text-slate-900">
              No podemos mostrar este formulario por ahora
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              Estamos incorporando los documentos y formularios de
              las distintas áreas municipales. Por el momento, este
              formulario no se encuentra disponible para consulta
              o descarga desde esta página.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              Si necesita información sobre el trámite, puede consultar
              los datos de contacto del departamento correspondiente
              en el directorio municipal.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/directorio"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-800"
              >
                <Phone size={18} />
                Consultar directorio
                <ArrowRight size={18} />
              </Link>

              <button
                type="button"
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                <ArrowLeft size={18} />
                Volver atrás
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FormularioNoDisponible
