import {
  Calculator,
  FileSpreadsheet,
  Wallet,
  ShoppingCart,
  PieChart,
  Receipt,
  Download,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react'

const areasEgresos = [
  {
    nombre: 'Tesorería Municipal',
    descripcion: 'Custodia de valores y gestión de pagos institucionales.',
    Icono: Wallet,
  },
  {
    nombre: 'Proveeduría',
    descripcion: 'Adquisición transparente de bienes y servicios mediante SICOP.',
    Icono: ShoppingCart,
  },
]

const areasContables = [
  {
    nombre: 'Contabilidad',
    descripcion: 'Registro contable de toda la actividad económica municipal.',
    Icono: Receipt,
  },
  {
    nombre: 'Presupuesto',
    descripcion: 'Planificación anual y asignación de partidas institucionales.',
    Icono: PieChart,
  },
]

function DireccionFinanciera() {
  return (
    <main>
      {/* Portada */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Gestión Municipal
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Dirección Financiera
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Esta página reúne la información sobre ingresos, cobros, rentas y la administración financiera municipal.
          </p>
        </div>
      </section>

      {/* Navegación interna */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 lg:px-8">
          {[
            ['Cobros', '#cobros'],
            ['Rentas y Patentes', '#rentas'],
            ['Gestión de Egresos', '#egresos'],
            ['Gestión Financiera', '#financiera'],
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

      {/* Gestión de Ingresos (Cobros y Rentas) */}
      <section id="cobros" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Atención al Contribuyente
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión de Ingresos
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Áreas encargadas de la recaudación de tributos, emisión de licencias comerciales y facilitación de trámites.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            
            {/* Cobros */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Calculator size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Departamento de Cobros
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Unidad encargada del reporte de pagos, gestión de morosidad y asesoría al ciudadano.
              </p>
              
              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">Trámites y Requisitos</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Reporte de pagos', 'Arreglos de pago', 'Requisitos generales'].map((tag) => (
                    <span key={tag} className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">{tag}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  <Download size={15} className="inline mr-1" /> Los enlaces de descarga reales se incorporarán tras revisar el sitio original.
                </p>
              </div>
            </article>

            {/* Rentas y Patentes */}
            <article id="rentas" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <FileSpreadsheet size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Rentas y Patentes
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Gestión de solicitudes de patentes comerciales, modificaciones de licencias y recepción de declaraciones.
              </p>
              
              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">Formularios disponibles</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Patentes comerciales', 'Modificaciones de licencias', 'Declaraciones'].map((tag) => (
                    <span key={tag} className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">{tag}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  <Download size={15} className="inline mr-1" /> Los formularios podrán consultarse desde esta página próximamente.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Gestión de Egresos */}
      <section id="egresos" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Administración
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión de Egresos
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Departamentos responsables del control de pagos y adquisiciones institucionales.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {areasEgresos.map((area) => (
              <article key={area.nombre} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <area.Icono size={25} className="text-emerald-700" />
                <h3 className="mt-5 font-bold text-slate-900">{area.nombre}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gestión Financiera */}
      <section id="financiera" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Control de Recursos
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión Financiera
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Áreas enfocadas en garantizar la transparencia y el uso correcto de los fondos públicos.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {areasContables.map((area) => (
              <article key={area.nombre} className="rounded-2xl border border-slate-200 bg-white p-6">
                <area.Icono size={25} className="text-emerald-700" />
                <h3 className="mt-5 font-bold text-slate-900">{area.nombre}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.descripcion}</p>
              </article>
            ))}
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

export default DireccionFinanciera