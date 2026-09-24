import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  ExternalLink,
  FileText,
  HandCoins,
  Landmark,
  Mail,
  Phone,
  ReceiptText,
  Wallet,
} from 'lucide-react'

const gestionesCobros = [
  {
    nombre: 'Reporte de pagos por depósito o transferencia',
    ruta: 'https://docs.google.com/forms/d/e/1FAIpQLScNLT8NVIDHxcpcUyr8QoTuGE-TeC4_vSsO-fGTU1pN7E1XEw/viewform',
  },
  {
    nombre: 'Derechos de zarpe',
    ruta: 'https://docs.google.com/forms/d/e/1FAIpQLScYfpRqjPsXg8v_goFOLG50jU0QJztP3-WMk1JkTRNf2BqOsQ/viewform',
  },
]

const documentosCobros = [
  'Solicitud de arreglo de pago',
  'Reglamento para el procedimiento de cobro administrativo y judicial',
]

const formulariosRentas = [
  'Solicitud de patente comercial',
  'Eliminación de patente comercial',
  'Traspaso de patente comercial',
  'Traslado de licencia comercial',
  'Cambio de actividad o ampliación de licencia comercial',
  'Declaración jurada de patente comercial',
  'Cobro de rótulos, anuncios y vallas publicitarias',
  'Reposición de certificado de licencia comercial',
  'Solicitud de trámite de patente provisional',
  'Solicitud de patente de licor por categorías',
  'Eliminación de licencia de licor',
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
            Conozca las áreas encargadas de la gestión de ingresos,
            egresos y recursos financieros de la Municipalidad de Limón.
          </p>
        </div>
      </section>

      {/* Navegación interna */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 lg:px-8">
          {[
            ['Gestión de Ingresos', '#gestion-ingresos'],
            ['Gestión de Egresos', '#gestion-egresos'],
            ['Gestión Financiera', '#gestion-financiera'],
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

      {/* Gestión de Ingresos */}
      <section
        id="gestion-ingresos"
        className="scroll-mt-24 bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Administración tributaria
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión de Ingresos
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Información sobre Cobros, Rentas y Mercado y Plazas.
          </p>

          {/* Cobros */}
          <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <HandCoins size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Cobros
                  </h3>

                  <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
                    La Unidad de Cobros y Facturación gestiona y controla
                    los niveles de morosidad, procesa los pagos recibidos
                    mediante depósitos bancarios y vela por el cumplimiento
                    de las normas que regulan el cobro administrativo y
                    judicial de las cuentas vencidas que se adeudan a la
                    Municipalidad de Limón.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 p-7 lg:grid-cols-2 md:p-9">
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Formularios en línea
                </h4>

                <div className="mt-5 space-y-3">
                  {gestionesCobros.map((gestion) => (
                    <a
                      key={gestion.nombre}
                      href={gestion.ruta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {gestion.nombre}
                      <ExternalLink size={17} className="shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Documentos de descarga
                </h4>

                <div className="mt-5 space-y-3">
                  {documentosCobros.map((documento) => (
                    <Link
                      key={documento}
                      to="/formulario-no-disponible"
                      className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {documento}
                      <ArrowRight size={17} className="shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-7 md:p-9">
              <h4 className="font-bold text-slate-900">
                Requisitos indicados para solicitar un arreglo de pago
              </h4>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                <li>Presentar el formulario de solicitud de arreglo de pago.</li>
                <li>Presentar la cédula.</li>
                <li>Depositar una prima del 25 % de lo adeudado.</li>
              </ul>

              <p className="mt-4 text-sm text-slate-500">
                Requisitos reproducidos del sitio original. Se recomienda
                confirmar su vigencia directamente con la Municipalidad
                antes de realizar la gestión.
              </p>
            </div>

            <div className="border-t border-slate-200 p-7 md:p-9">
              <h4 className="font-bold text-slate-900">
                Contacto
              </h4>

              <p className="mt-3 text-sm text-slate-600">
                Graylin Solano
              </p>

              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                <a
                  href="tel:+50627584444"
                  className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Phone size={17} className="text-emerald-700" />
                  2758-4444
                </a>

                <a
                  href="tel:+50627981101"
                  className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Phone size={17} className="text-emerald-700" />
                  2798-1101
                </a>

                <a
                  href="mailto:cobros@municlimon.go.cr"
                  className="inline-flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Mail size={17} className="shrink-0 text-emerald-700" />
                  cobros@municlimon.go.cr
                </a>
              </div>
            </div>
          </article>

          {/* Rentas */}
          <article className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <ReceiptText size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Rentas
                  </h3>

                  <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
                    La Unidad de Rentas se encarga de las prácticas y
                    acciones para la regularización de la actividad
                    económica del cantón, de acuerdo con las disposiciones
                    sobre licencias de funcionamiento y patentes municipales.
                    También desarrolla procesos de administración,
                    fiscalización y recaudación del impuesto de patentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-9">
              <h4 className="text-lg font-bold text-slate-900">
                Solicitudes y formularios
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Consulte las gestiones relacionadas con patentes,
                licencias comerciales y declaraciones.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {formulariosRentas.map((formulario) => (
                  <Link
                    key={formulario}
                    to="/formulario-no-disponible"
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {formulario}
                    <ArrowRight size={17} className="shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-7 md:p-9">
              <h4 className="font-bold text-slate-900">
                Contacto
              </h4>

              <p className="mt-3 text-sm text-slate-600">
                Licda. Dina Clark Sambo
              </p>

              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                <a
                  href="tel:+50627587220"
                  className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Phone size={17} className="text-emerald-700" />
                  2758-7220
                </a>

                <a
                  href="tel:+50627584444"
                  className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Phone size={17} className="text-emerald-700" />
                  2758-4444, ext. 112
                </a>

                <a
                  href="mailto:dina.clark@municlimon.go.cr"
                  className="inline-flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Mail size={17} className="shrink-0 text-emerald-700" />
                  dina.clark@municlimon.go.cr
                </a>

                <a
                  href="mailto:rentas@municlimon.go.cr"
                  className="inline-flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Mail size={17} className="shrink-0 text-emerald-700" />
                  rentas@municlimon.go.cr
                </a>
              </div>
            </div>
          </article>

          {/* Mercado y Plazas */}
          <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Building2 size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Mercado y Plazas
                </h3>

                <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
                  Facilita la operación del mercado municipal para
                  desarrollar las relaciones comerciales en un ambiente
                  agradable, seguro y respetuoso entre vendedores
                  y compradores.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="font-bold text-slate-900">
                  Principales funciones
                </h4>

                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>
                    Administrar el alquiler de locales del mercado
                    conforme a la normativa correspondiente.
                  </li>
                  <li>
                    Recibir y gestionar solicitudes relacionadas
                    con los locales comerciales.
                  </li>
                  <li>
                    Gestionar el cobro correspondiente por el
                    uso de los locales del mercado.
                  </li>
                  <li>
                    Coordinar acciones para mantener el orden
                    y la seguridad del mercado.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-slate-50 p-6">
                <h4 className="font-bold text-slate-900">
                  Contacto
                </h4>

                <p className="mt-4 text-sm text-slate-600">
                  Silvia Rojas
                </p>

                <div className="mt-4 space-y-3">
                  <a
                    href="tel:+50627982882"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Phone size={17} className="text-emerald-700" />
                    2798-2882
                  </a>

                  <a
                    href="mailto:silvia.rojas@municlimon.go.cr"
                    className="flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Mail
                      size={17}
                      className="shrink-0 text-emerald-700"
                    />
                    silvia.rojas@municlimon.go.cr
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Gestión de Egresos: pendiente de completar */}
      <section
        id="gestion-egresos"
        className="scroll-mt-24 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Administración financiera
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión de Egresos
          </h2>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            {/* Tesorería */}
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Wallet size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Tesorería
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    Se encarga de elaborar y entregar los cheques correspondientes
                    para que la Municipalidad cumpla sus compromisos financieros
                    dentro de los plazos establecidos.
                  </p>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Principales funciones
                </h4>

                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>
                    Gestionar las transacciones bancarias y los pagos necesarios
                    para cumplir los compromisos financieros municipales.
                  </li>
                  <li>
                    Custodiar y controlar los fondos de caja chica y las
                    garantías de participación de los procesos de contratación.
                  </li>
                  <li>
                    Elaborar estados de flujo de efectivo y administrar los
                    recursos financieros disponibles.
                  </li>
                  <li>
                    Gestionar la recuperación de fondos pendientes y los
                    recursos necesarios para gastos institucionales.
                  </li>
                </ul>
              </div>

              <div className="mt-auto border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Contacto
                </h4>

                <p className="mt-3 text-sm text-slate-600">
                  Susette Dixon
                </p>

                <div className="mt-4 space-y-3">
                  <a
                    href="tel:+50627982939"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Phone size={17} className="shrink-0 text-emerald-700" />
                    2798-2939
                  </a>

                  <a
                    href="tel:+50627983814"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Phone size={17} className="shrink-0 text-emerald-700" />
                    2798-3814
                  </a>

                  <a
                    href="mailto:susette.dixon@municlimon.go.cr"
                    className="flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Mail size={17} className="shrink-0 text-emerald-700" />
                    susette.dixon@municlimon.go.cr
                  </a>

                  <a
                    href="mailto:tesoreria@municlimon.go.cr"
                    className="flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Mail size={17} className="shrink-0 text-emerald-700" />
                    tesoreria@municlimon.go.cr
                  </a>
                </div>
              </div>
            </article>

            {/* Proveeduría Municipal */}
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Building2 size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Proveeduría Municipal
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    Las compras de bienes y servicios de la Municipalidad se
                    realizan mediante SICOP. Se invita a los proveedores
                    interesados a inscribirse en la plataforma y presentar
                    sus ofertas conforme a la normativa aplicable.
                  </p>
                </div>
              </div>

              {/* Acceso a SICOP */}
              <div className="mt-7 rounded-xl bg-emerald-50 p-5">
                <h4 className="font-semibold text-slate-900">
                  Concursos y contrataciones
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Consulte los procedimientos de contratación publicados
                  en la plataforma SICOP.
                </p>

                <a
                  href="https://www.sicop.go.cr/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Ir a SICOP
                  <ExternalLink size={17} />
                </a>
              </div>

              {/* Documentos */}
              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Documentos de consulta
                </h4>

                <div className="mt-4 space-y-3">
                  {[
                    'Plan de Compras',
                    'Reglamentos de Proveeduría Municipal y Almacenamiento (Bodega)',
                  ].map((documento) => (
                    <Link
                      key={documento}
                      to="/formulario-no-disponible"
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {documento}
                      <ArrowRight size={17} className="shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contacto */}
              <div className="mt-auto border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Contacto
                </h4>

                <p className="mt-3 text-sm text-slate-600">
                  Licda. Lucila Mayorga Balmaceda
                </p>

                <div className="mt-4 space-y-3">
                  <a
                    href="tel:+50627590219"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Phone size={17} className="shrink-0 text-emerald-700" />
                    2759-0219
                  </a>

                  <a
                    href="mailto:lucila.mayorga@municlimon.go.cr"
                    className="flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Mail size={17} className="shrink-0 text-emerald-700" />
                    lucila.mayorga@municlimon.go.cr
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Gestión Financiera */}
      <section
        id="gestion-financiera"
        className="scroll-mt-24 bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Administración financiera
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión Financiera
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Conozca las funciones y los medios de contacto de los
            departamentos de Contabilidad y Presupuesto.
          </p>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            {/* Contabilidad */}
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <ReceiptText size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Contabilidad
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    El Departamento de Contabilidad registra las
                    transacciones que realiza la Municipalidad y vela
                    por el cumplimiento del marco legal vigente en
                    materia contable.
                  </p>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Principales funciones
                </h4>

                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>
                    Registrar las distintas transacciones realizadas
                    por la Municipalidad.
                  </li>
                  <li>
                    Mantener la información contable de las operaciones
                    institucionales.
                  </li>
                  <li>
                    Velar por el cumplimiento de la normativa legal
                    aplicable a la gestión contable.
                  </li>
                </ul>
              </div>

              <div className="mt-auto border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Contacto
                </h4>

                <p className="mt-3 text-sm text-slate-600">
                  Astor Velásquez
                </p>

                <div className="mt-4 space-y-3">
                  <a
                    href="tel:+50627982436"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Phone size={17} className="shrink-0 text-emerald-700" />
                    2798-2436
                  </a>

                  <a
                    href="tel:+50627584444"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Phone size={17} className="shrink-0 text-emerald-700" />
                    2758-4444
                  </a>

                  <a
                    href="mailto:astor.velasquez@municlimon.go.cr"
                    className="flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Mail size={17} className="shrink-0 text-emerald-700" />
                    astor.velasquez@municlimon.go.cr
                  </a>
                </div>
              </div>
            </article>

            {/* Presupuesto */}
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Wallet size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Presupuesto
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    Coordina y asesora la planificación y ejecución
                    presupuestaria de la Municipalidad, procurando
                    una administración eficiente de los recursos
                    institucionales y el cumplimiento de la normativa
                    aplicable.
                  </p>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Principales funciones
                </h4>

                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>
                    Elaborar los presupuestos ordinarios,
                    extraordinarios y sus modificaciones.
                  </li>
                  <li>
                    Controlar y dar seguimiento a la ejecución
                    de los recursos presupuestarios.
                  </li>
                  <li>
                    Preparar las liquidaciones presupuestarias
                    anuales y los informes de ejecución.
                  </li>
                  <li>
                    Registrar y presentar información presupuestaria
                    ante las instancias correspondientes.
                  </li>
                </ul>
              </div>

              <div className="mt-auto border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Contacto
                </h4>

                <p className="mt-3 text-sm text-slate-600">
                  Erick Ríos
                </p>

                <div className="mt-4 space-y-3">
                  <a
                    href="tel:+50627584444"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Phone size={17} className="shrink-0 text-emerald-700" />
                    2758-4444, ext. 110
                  </a>

                  <a
                    href="mailto:erick.rios@municlimon.go.cr"
                    className="flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Mail size={17} className="shrink-0 text-emerald-700" />
                    erick.rios@municlimon.go.cr
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DireccionFinanciera
