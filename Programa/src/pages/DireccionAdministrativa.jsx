import {
  Archive,
  ArrowRight,
  Building2,
  ClipboardList,
  ExternalLink,
  FileText,
  Mail,
  Monitor,
  Phone,
  ShieldCheck,
  Truck,
  HeartPulse,
  CarFront,
  Camera,
} from 'lucide-react'

const serviciosGenerales = [
  {
    nombre: 'Archivo Municipal',
    descripcion: 'Área de gestión documental de la Municipalidad.',
    Icono: Archive,
  },
  {
    nombre: 'Transporte',
    descripcion: 'Área relacionada con el transporte institucional.',
    Icono: Truck,
  },
  {
    nombre: 'Misceláneos',
    descripcion: 'Servicios generales de apoyo institucional.',
    Icono: Building2,
  },
  {
    nombre: 'Salud Ocupacional',
    descripcion: 'Área relacionada con la salud ocupacional institucional.',
    Icono: HeartPulse,
  },
]

const serviciosSeguridad = [
  {
    nombre: 'Seguridad Municipal',
    descripcion: 'Información sobre el área de seguridad municipal.',
    Icono: ShieldCheck,
  },
  {
    nombre: 'Vigilancia Electrónica',
    descripcion: 'Información sobre los servicios de vigilancia electrónica.',
    Icono: Camera,
  },
  {
    nombre: 'Estacionómetros',
    descripcion: 'Información relacionada con el estacionamiento regulado.',
    Icono: CarFront,
  },
  {
    nombre: 'Policía Municipal',
    descripcion: 'Información sobre los servicios de la Policía Municipal.',
    Icono: ShieldCheck,
  },
]

function DireccionAdministrativa() {
  return (
    <main>
      {/* Portada */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Gestión Municipal
          </span>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Dirección Administrativa
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Conozca los servicios de atención ciudadana y las áreas
            administrativas y de seguridad de la Municipalidad de Limón.
          </p>
        </div>
      </section>

      {/* Navegación interna */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 lg:px-8">
          {[
            ['Servicio al Cliente', '#servicio-cliente'],
            ['Servicios Generales', '#servicios-generales'],
            ['Tecnologías de Información', '#tecnologias-informacion'],
            ['Seguridad Ciudadana y Vial', '#seguridad-ciudadana'],
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

      {/* Servicio al Cliente */}
      <section
        id="servicio-cliente"
        className="scroll-mt-24 bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Atención ciudadana
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Servicio al Cliente
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Esta área comprende Ventanilla Única e Inspección General.
            A través de Ventanilla Única se reciben documentos y
            solicitudes de trámites presentados por los contribuyentes.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Ventanilla Única */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8 lg:col-span-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ClipboardList size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Ventanilla Única
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                Recibe, distribuye y traslada los documentos y las
                solicitudes de trámites a los departamentos encargados
                de analizarlos y resolverlos. También comunica y entrega
                al contribuyente la respuesta de la gestión realizada.
              </p>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Formularios disponibles en el sitio original
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'Catastro',
                    'Ingeniería',
                    'Rentas',
                    'Patente de licor',
                  ].map((categoria) => (
                    <span
                      key={categoria}
                      className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
                    >
                      {categoria}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  Los formularios específicos se incorporarán cuando
                  revisemos sus documentos y enlaces originales.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-5 border-t border-slate-200 pt-6">
                <a
                  href="tel:+50627584444"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
                >
                  <Phone size={17} className="text-emerald-700" />
                  2758-4444
                </a>

                <a
                  href="mailto:ventanilla.unica@municlimon.go.cr"
                  className="inline-flex items-center gap-2 break-all text-sm font-medium text-slate-700 hover:text-emerald-700"
                >
                  <Mail size={17} className="shrink-0 text-emerald-700" />
                  ventanilla.unica@municlimon.go.cr
                </a>
              </div>
            </article>

            {/* Inspección General */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <FileText size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Inspección General
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                Departamento incluido en el área de Servicio al Cliente
                del sitio municipal original.
              </p>

              <p className="mt-5 text-sm text-slate-500">
                Información detallada pendiente de incorporar.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Gestión y Servicios Generales */}
      <section
        id="servicios-generales"
        className="scroll-mt-24 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Organización administrativa
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión y Servicios Generales
          </h2>

          <p className="mt-4 max-w-3xl text-slate-600">
            Esta área agrupa los departamentos de apoyo y servicios
            generales de la institución.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviciosGenerales.map((servicio) => (
              <article
                key={servicio.nombre}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <servicio.Icono
                  size={25}
                  className="text-emerald-700"
                />

                <h3 className="mt-5 font-bold text-slate-900">
                  {servicio.nombre}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {servicio.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías de Información */}
      <section
        id="tecnologias-informacion"
        className="scroll-mt-24 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 md:flex-row md:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Monitor size={25} />
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Soporte institucional
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Tecnologías de Información
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                Área de Tecnologías de Información de la Municipalidad
                de Limón. Su información específica se incorporará
                cuando revisemos el contenido de la página original.
              </p>

              <div className="mt-5 flex flex-wrap gap-5 text-sm">
                <a
                  href="tel:+50627584444"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700"
                >
                  <Phone size={17} className="text-emerald-700" />
                  2758-4444, ext. 117
                </a>

                <a
                  href="mailto:gti@municlimon.go.cr"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700"
                >
                  <Mail size={17} className="text-emerald-700" />
                  gti@municlimon.go.cr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seguridad Ciudadana y Vial */}
      <section
        id="seguridad-ciudadana"
        className="scroll-mt-24 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Seguridad y movilidad
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión de Seguridad Ciudadana y Vial
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Esta área reúne Seguridad Municipal, Vigilancia Electrónica,
            Estacionómetros y Policía Municipal.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviciosSeguridad.map((servicio) => (
              <article
                key={servicio.nombre}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <servicio.Icono
                  size={25}
                  className="text-emerald-700"
                />

                <h3 className="mt-5 font-bold text-slate-900">
                  {servicio.nombre}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {servicio.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-slate-950 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              ¿Necesita contactar con un departamento?
            </h2>

            <p className="mt-2 text-slate-300">
              Consulte los teléfonos y correos institucionales
              en el directorio municipal.
            </p>
          </div>

          <a
            href="/directorio"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-lime-300 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-200"
          >
            Consultar directorio
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}

export default DireccionAdministrativa
