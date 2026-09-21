import { 
  FileSearch, 
  BarChart4, 
  Users, 
  Database,
  ArrowRight
} from 'lucide-react'

function Transparencia() {
  return (
    <main>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Gobierno Abierto
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Transparencia Municipal
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Garantizamos el acceso a la información pública, la rendición de cuentas y promovemos la participación ciudadana activa.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Acceso a la Información */}
            <article id="acceso" className="rounded-2xl border border-slate-200 bg-white p-8 scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <FileSearch size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Acceso a la Información</h2>
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Información institucional y del personal</span> <ArrowRight size={16} />
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Procesos de contratación</span> <ArrowRight size={16} />
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Accesibilidad del Sitio</span> <ArrowRight size={16} />
                </li>
              </ul>
            </article>

            {/* Rendición de Cuentas */}
            <article id="rendicion" className="rounded-2xl border border-slate-200 bg-white p-8 scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <BarChart4 size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Rendición de Cuentas</h2>
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Finanzas públicas</span> <ArrowRight size={16} />
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Planes y cumplimiento</span> <ArrowRight size={16} />
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Informes institucionales y toma de decisiones</span> <ArrowRight size={16} />
                </li>
              </ul>
            </article>

            {/* Participación Ciudadana */}
            <article id="participacion" className="rounded-2xl border border-slate-200 bg-white p-8 scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Users size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Participación Ciudadana</h2>
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Mecanismos de participación</span> <ArrowRight size={16} />
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Invitación a la participación</span> <ArrowRight size={16} />
                </li>
              </ul>
            </article>

            {/* Datos Abiertos */}
            <article id="datos" className="rounded-2xl border border-slate-200 bg-white p-8 scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Database size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Datos Abiertos</h2>
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Presupuesto público y su ejecución</span> <ArrowRight size={16} />
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Contratación administrativa</span> <ArrowRight size={16} />
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3 hover:text-emerald-700 cursor-pointer">
                  <span>Estadísticas o registros del sector</span> <ArrowRight size={16} />
                </li>
              </ul>
            </article>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Transparencia