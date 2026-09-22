import { Link } from 'react-router-dom'
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
    descripcion:
      'Garantiza la autenticidad, integridad y seguridad de la documentación municipal. También se encarga de su clasificación, conservación y custodia, incluyendo los documentos de valor histórico, científico y cultural.',
    contacto: 'Rafael Oregón Wiltshre',
    correo: 'rafael.oregon@municlimon.go.cr',
    telefono: '2758-4444',
    extension: '115',
    Icono: Archive,
  },
  {
    nombre: 'Transporte',
    descripcion:
      'Organiza el uso de la flotilla municipal para aprovechar adecuadamente los vehículos disponibles y atender las necesidades de los usuarios.',
    contacto: 'Johnny Montoya',
    correo: 'Johnny.montoya@uniclimon.go.cr',
    telefono: '2758-4444',
    extension: '115',
    Icono: Truck,
  },
  {
    nombre: 'Misceláneos',
    descripcion:
      'Realiza las actividades necesarias para mantener el aseo y la limpieza de los edificios municipales.',
    Icono: Building2,
  },
  {
    nombre: 'Salud Ocupacional',
    descripcion:
      'Elabora, ejecuta y actualiza el Plan de Emergencias de las oficinas municipales, como guía para la prevención, mitigación, preparación y respuesta ante emergencias.',
    tareas: [
      'Investigar las causas de los accidentes de trabajo para implementar acciones correctivas y preventivas.',
      'Identificar los riesgos de los distintos puestos de trabajo y proponer acciones para reducirlos.',
      'Velar por la seguridad, el bienestar y la integridad de los colaboradores municipales.',
      'Brindar un servicio integral a los colaboradores de la Municipalidad.',
    ],
    contacto: 'Aisha Robinson',
    correo: 'aisha.robinson@municlimon.go.cr',
    telefono: '2758-2867',
    Icono: HeartPulse,
  },
]

const serviciosSeguridad = [
  {
    nombre: 'Seguridad Municipal',
    descripcion:
      'Realiza labores de vigilancia en los edificios municipales, protege los activos institucionales, controla las entradas y salidas y resguarda los perímetros asignados.',
    Icono: ShieldCheck,
  },
  {
    nombre: 'Vigilancia Electrónica',
    descripcion:
      'Vigila mediante cámaras los distintos puntos del cantón, de forma continua durante todo el año. La ubicación de las cámaras responde a una planificación y al análisis de las zonas que requieren mayor atención. También brinda protección a espacios públicos, parques, escuelas y al sector comercial.',
    Icono: Camera,
  },
  {
    nombre: 'Estacionómetros',
    descripcion:
      'Vigila y supervisa el orden vial del cantón y aplica las multas correspondientes conforme a la normativa sobre estacionómetros. Su labor contribuye a ordenar el estacionamiento y el tránsito vehicular.',
    Icono: CarFront,
  },
  {
    nombre: 'Policía Municipal',
    descripcion:
      'Vigila y controla la actividad comercial del cantón, resguarda los bienes municipales y realiza labores de control y fiscalización tributaria. También vela por la seguridad de la ciudadanía y colabora con otras instituciones y organizaciones comunales en iniciativas de prevención del delito.',
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
            Conozca las funciones y los medios de contacto de Ventanilla
            Única e Inspección General.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Ventanilla Única */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ClipboardList size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Ventanilla Única
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                Unidad encargada de recibir, distribuir y trasladar
                documentos y solicitudes de trámites presentados por los
                contribuyentes a los departamentos responsables de
                analizarlos y resolverlos. Además, comunica y entrega al
                contribuyente la respuesta de la gestión realizada.
              </p>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Formularios
                </h4>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    'Catastro',
                    'Patente de licor',
                    'Ingeniería',
                    'Rentas',
                  ].map((categoria) => (
                    <Link
                      key={categoria}
                      to="/en-construccion"
                      className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {categoria}
                      <ArrowRight size={17} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-7 space-y-3 border-t border-slate-200 pt-6">
                <a
                  href="tel:+50627584444"
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Phone size={18} className="shrink-0 text-emerald-700" />
                  2758-4444
                </a>

                <a
                  href="mailto:ventanilla.unica@municlimon.go.cr"
                  className="flex items-center gap-3 break-all text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Mail size={18} className="shrink-0 text-emerald-700" />
                  ventanilla.unica@municlimon.go.cr
                </a>
              </div>
            </article>

            {/* Inspección General */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <FileText size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Inspección General
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                Su objetivo es comprobar y velar por el estricto
                cumplimiento de las leyes, reglamentos, disposiciones y
                normas aplicables a las actividades de patentes
                municipales y permisos de construcción.
              </p>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Inspectores autorizados
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Consulte la información sobre los inspectores autorizados.
                </p>

                <Link
                  to="/en-construccion"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Ver inspectores autorizados
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-7 space-y-3 border-t border-slate-200 pt-6">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">
                    Contacto indicado en el sitio original:
                  </span>{' '}
                  Antonio Babb
                </p>

                <a
                  href="tel:+50627584444"
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Phone size={18} className="shrink-0 text-emerald-700" />
                  2758-4444
                </a>

                <a
                  href="tel:+50627981101"
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Phone size={18} className="shrink-0 text-emerald-700" />
                  2798-1101
                </a>

                <a
                  href="mailto:plataforma.servicios@municlimon.go.cr"
                  className="flex items-center gap-3 break-all text-sm text-slate-700 hover:text-emerald-700"
                >
                  <Mail size={18} className="shrink-0 text-emerald-700" />
                  plataforma.servicios@municlimon.go.cr
                </a>
              </div>
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

          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Conozca las funciones de Archivo Municipal, Transporte,
            Misceláneos y Salud Ocupacional.
          </p>

          {/* Tres departamentos con contenido breve */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviciosGenerales
              .filter((servicio) => servicio.nombre !== 'Salud Ocupacional')
              .map((servicio) => (
                <article
                  key={servicio.nombre}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <servicio.Icono size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {servicio.nombre}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {servicio.descripcion}
                  </p>

                  {servicio.tareas && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-slate-900">
                        Principales funciones
                      </h4>

                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                        {servicio.tareas.map((tarea) => (
                          <li key={tarea}>{tarea}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {servicio.contacto && (
                    <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                      <h4 className="font-semibold text-slate-900">
                        Contacto
                      </h4>

                      <p className="text-sm text-slate-600">
                        {servicio.contacto}
                      </p>

                      <a
                        href={`tel:+506${servicio.telefono.replace(/\D/g, '')}`}
                        className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                      >
                        <Phone size={17} className="shrink-0 text-emerald-700" />
                        {servicio.telefono}
                        {servicio.extension && `, ext. ${servicio.extension}`}
                      </a>

                      <a
                        href={`mailto:${servicio.correo}`}
                        className="flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                      >
                        <Mail size={17} className="shrink-0 text-emerald-700" />
                        {servicio.correo}
                      </a>
                    </div>
                  )}
                </article>
              ))}
          </div>

          {/* Salud Ocupacional: bloque independiente */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="border-b border-slate-200 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <HeartPulse size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Salud Ocupacional
                  </h3>

                  <p className="mt-3 max-w-4xl leading-relaxed text-slate-600">
                    Elabora, ejecuta y actualiza el Plan de Emergencias de
                    las oficinas municipales, como guía para la prevención,
                    mitigación, preparación y respuesta ante emergencias.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-2">
              {/* Salud Ocupacional */}
              <div className="p-7 md:p-9">
                <h4 className="text-lg font-bold text-slate-900">
                  Salud y seguridad ocupacional
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Principales funciones
                </p>

                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>
                    Investigar las causas de los accidentes de trabajo
                    para implementar acciones correctivas y preventivas.
                  </li>
                  <li>
                    Identificar los riesgos de los distintos puestos de
                    trabajo y proponer acciones para reducirlos.
                  </li>
                  <li>
                    Velar por la seguridad, el bienestar y la integridad
                    de los colaboradores municipales.
                  </li>
                  <li>
                    Brindar un servicio integral a los colaboradores
                    de la Municipalidad.
                  </li>
                </ul>

                <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
                  <h5 className="font-semibold text-slate-900">
                    Contacto
                  </h5>

                  <p className="text-sm text-slate-600">
                    Aisha Robinson
                  </p>

                  <a
                    href="tel:+50627582867"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Phone size={17} className="shrink-0 text-emerald-700" />
                    2758-2867
                  </a>

                  <a
                    href="mailto:aisha.robinson@municlimon.go.cr"
                    className="flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Mail size={17} className="shrink-0 text-emerald-700" />
                    aisha.robinson@municlimon.go.cr
                  </a>
                </div>
              </div>

              {/* Psicología */}
              <div className="border-t border-slate-200 p-7 md:p-9 lg:border-l lg:border-t-0">
                <h4 className="text-lg font-bold text-slate-900">
                  Psicología
                </h4>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Promueve la salud integral de los colaboradores
                  municipales en los diferentes edificios de la institución.
                </p>

                <h5 className="mt-6 font-semibold text-slate-900">
                  Principales funciones
                </h5>

                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>
                    Establecer vínculos interinstitucionales para
                    desarrollar programas y acciones de bienestar
                    del personal municipal.
                  </li>
                  <li>
                    Brindar asesoría y acompañamiento psicológico
                    a los funcionarios municipales.
                  </li>
                  <li>
                    Desarrollar acciones formativas y educativas
                    para la promoción de la salud integral.
                  </li>
                  <li>
                    Promover el bienestar biopsicosocial y colaborar
                    en la resolución de conflictos laborales.
                  </li>
                </ul>

                <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
                  <h5 className="font-semibold text-slate-900">
                    Contacto
                  </h5>

                  <p className="text-sm text-slate-600">
                    Andrea Fuentes
                  </p>

                  <a
                    href="tel:+50627582867"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Phone size={17} className="shrink-0 text-emerald-700" />
                    2758-2867
                  </a>

                  <a
                    href="mailto:andrea.fuentes@municlimon.go.cr"
                    className="flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                  >
                    <Mail size={17} className="shrink-0 text-emerald-700" />
                    andrea.fuentes@municlimon.go.cr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías de Información */}
      <section
        id="tecnologias-informacion"
        className="scroll-mt-24 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 md:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Monitor size={25} />
              </div>

              <div className="flex-1">
                <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                  Soporte institucional
                </span>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Tecnologías de Información
                </h2>

                <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
                  El área de Tecnologías de Información atiende las
                  necesidades de cómputo de la Municipalidad. Brinda
                  asesoría en el uso de software, configura equipos para
                  impresión y conexión a Internet, realiza mantenimiento
                  de los equipos instalados y supervisa los asuntos
                  relacionados con las operaciones y los recursos
                  tecnológicos de la institución.
                </p>

                <div className="mt-7 border-t border-slate-200 pt-6">
                  <h3 className="font-semibold text-slate-900">
                    Contacto
                  </h3>

                  <p className="mt-3 text-sm text-slate-600">
                    Ing. Carlos Solano Martínez
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                    <a
                      href="tel:+50627584444"
                      className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700"
                    >
                      <Phone
                        size={17}
                        className="shrink-0 text-emerald-700"
                      />
                      2758-4444, ext. 117
                    </a>

                    <a
                      href="mailto:carlos.solano@municlimon.go.cr"
                      className="inline-flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700"
                    >
                      <Mail
                        size={17}
                        className="shrink-0 text-emerald-700"
                      />
                      carlos.solano@municlimon.go.cr
                    </a>
                  </div>
                </div>
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
            Conozca las funciones de Seguridad Municipal, Vigilancia
            Electrónica, Estacionómetros y Policía Municipal.
          </p>

          {/* Departamentos */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviciosSeguridad.map((servicio) => (
              <article
                key={servicio.nombre}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <servicio.Icono size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {servicio.nombre}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {servicio.descripcion}
                </p>
              </article>
            ))}
          </div>

          {/* Contacto compartido */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-950 p-7 md:p-9">
            <h3 className="text-xl font-bold text-white">
              Contacto de Seguridad Ciudadana y Vial
            </h3>

            <p className="mt-3 text-slate-300">
              Para consultas relacionadas con Seguridad Municipal,
              Vigilancia Electrónica, Estacionómetros y Policía Municipal,
              puede comunicarse mediante los siguientes datos de contacto.
            </p>

            <p className="mt-6 font-semibold text-white">
              Jeison Arce
            </p>

            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              <a
                href="tel:+50627584444"
                className="inline-flex items-center gap-2 text-sm text-slate-200 transition-colors hover:text-lime-300"
              >
                <Phone size={18} className="shrink-0 text-lime-300" />
                2758-4444, ext. 124
              </a>

              <a
                href="mailto:jeison.arce@municlimon.go.cr"
                className="inline-flex items-center gap-2 break-all text-sm text-slate-200 transition-colors hover:text-lime-300"
              >
                <Mail size={18} className="shrink-0 text-lime-300" />
                jeison.arce@municlimon.go.cr
              </a>
            </div>
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
