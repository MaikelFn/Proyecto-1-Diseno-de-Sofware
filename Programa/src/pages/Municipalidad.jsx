import { Link } from 'react-router-dom'

import {
  ArrowRight,
  Building2,
  Target,
  Eye,
  HeartHandshake,
  Network,
  Phone,
  Mail,
  Clock,
  MapPin,
  BookOpen,
  Landmark,
  Users,
} from 'lucide-react'

import logo from '../assets/images/logo.png'

function Municipalidad() {
  const valores = [
    'Solidaridad',
    'Tolerancia',
    'Responsabilidad',
    'Compromiso',
    'Honradez',
    'Ética',
    'Respeto',
    'Respeto a la naturaleza',
    'Identidad',
    'Equidad de género',
    'Eficiencia',
    'Honestidad',
    'Probidad',
  ]

  const principios = [
    'Autonomía institucional',
    'Políticas inclusivas y eficientes',
    'Compromiso con la identidad cultural',
    'Integridad',
    'Empoderamiento',
    'Acceso a la información',
    'Mejora continua',
    'Sostenibilidad',
    'Desarrollo económico sostenible',
    'Transparencia y rendición de cuentas',
    'Inclusión social',
    'Participación compartida',
  ]

  return (
    <main>
      {/* Encabezado de página */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Nuestra institución
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Municipalidad de Limón
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Conozca nuestra institución, sus principios, organización y
            principales medios de atención a la ciudadanía.
          </p>
        </div>
      </section>

      {/* Historia municipal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_0.55fr] gap-14 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Sobre nosotros
              </span>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Historia Municipal
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                El desarrollo municipal de Limón se encuentra estrechamente
                relacionado con la evolución histórica, territorial y social
                del cantón. La Municipalidad constituye el gobierno local
                encargado de atender las necesidades de la comunidad y
                promover el desarrollo del territorio.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                A lo largo del tiempo, la institución ha asumido funciones
                vinculadas con la prestación de servicios, infraestructura,
                planificación y administración de los recursos municipales.
              </p>

              <Link
                to="/nuestro-canton"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:gap-3 transition-all"
              >
                Conocer la historia del cantón
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Escudo de la Municipalidad de Limón"
                  className="w-44 h-44 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Misión */}
            <article>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                  <Target size={24} />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                    Propósito
                  </span>

                  <h2 className="text-3xl font-bold text-slate-900">
                    Nuestra misión
                  </h2>
                </div>
              </div>

              <p className="mt-7 text-slate-600 leading-relaxed">
                Limón es un cantón en ruta hacia el desarrollo, que busca
                mejorar constantemente la calidad de vida de sus habitantes
                mediante el trabajo conjunto, organizado y coordinado.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                La Municipalidad procura aprovechar los recursos y capacidades
                de la comunidad de forma eficiente y mantener coordinación con
                instituciones públicas y privadas, propiciando condiciones
                para un desarrollo sostenible, ecológico y portuario.
              </p>
            </article>

            {/* Visión */}
            <article className="lg:border-l lg:border-slate-200 lg:pl-14">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                  <Eye size={24} />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                    Futuro
                  </span>

                  <h2 className="text-3xl font-bold text-slate-900">
                    Nuestra visión
                  </h2>
                </div>
              </div>

              <p className="mt-7 text-slate-600 leading-relaxed">
                Aspiramos a un cantón moderno donde sus habitantes tengan
                cubiertas sus necesidades básicas y existan oportunidades
                para las generaciones presentes y futuras.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Se busca una comunidad segura, solidaria, tolerante y
                respetuosa de las leyes y del ambiente, con una Municipalidad
                que brinde servicios de calidad y contribuya al desarrollo y
                bienestar del cantón.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-14">
            <div>
              <HeartHandshake
                size={38}
                className="text-emerald-700"
              />

              <span className="block mt-6 text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Cultura institucional
              </span>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Valores y principios
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Los valores institucionales orientan el accionar y las
                actitudes de quienes trabajan al servicio de la Municipalidad
                de Limón.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Valores institucionales
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {valores.map((valor) => (
                  <span
                    key={valor}
                    className="px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium"
                  >
                    {valor}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  Principios
                </h3>

                <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {principios.map((principio) => (
                    <div
                      key={principio}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0" />
                      {principio}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organización */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
                Organización institucional
              </span>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Conozca la Municipalidad
              </h2>

              <p className="mt-5 text-slate-300 leading-relaxed">
                Acceda a información sobre la estructura institucional,
                autoridades municipales y organización del gobierno local.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* Nuestro Cantón */}
              <Link
                to="/nuestro-canton"
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Landmark size={27} className="text-lime-300" />

                <h3 className="mt-5 font-bold text-white">
                  Nuestro Cantón
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Historia, territorio e identidad de Limón.
                </p>

                <ArrowRight
                  size={18}
                  className="mt-5 text-lime-300 group-hover:translate-x-1 transition-transform"
                />
              </Link>

              {/* Alcaldía */}
              <Link
                to="/alcaldia"
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Building2 size={27} className="text-lime-300" />

                <h3 className="mt-5 font-bold text-white">
                  Alcaldía
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Autoridades, gestión y planificación municipal.
                </p>

                <ArrowRight
                  size={18}
                  className="mt-5 text-lime-300 group-hover:translate-x-1 transition-transform"
                />
              </Link>

              {/* Concejo */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Users size={27} className="text-lime-300" />

                <h3 className="mt-5 font-bold text-white">
                  Concejo Municipal
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Información relacionada con el Concejo Municipal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información institucional */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Información institucional
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Recursos de la Municipalidad
            </h2>
          </div>

          <div className="border-y border-slate-200 divide-y divide-slate-200">
            {/* Organigrama */}
            <Link
              to="/en-construccion"
              className="group py-7 grid md:grid-cols-[70px_260px_1fr_30px] gap-5 items-center"
            >
              <Network
                size={27}
                className="text-emerald-700"
              />

              <h3 className="font-bold text-slate-900">
                Organigrama institucional
              </h3>

              <p className="text-sm text-slate-600">
                Consulte la estructura organizativa de la Municipalidad de Limón.
              </p>

              <ArrowRight
                size={18}
                className="text-emerald-700 group-hover:translate-x-1 transition-transform"
              />
            </Link>

            {/* Directorio */}
            <Link
              to="/en-construccion"
              className="group py-7 grid md:grid-cols-[70px_260px_1fr_30px] gap-5 items-center"
            >
              <Phone
                size={27}
                className="text-emerald-700"
              />

              <h3 className="font-bold text-slate-900">
                Directorio telefónico
              </h3>

              <div className="text-sm text-slate-600">
                <p>
                  Central telefónica:
                  <strong className="text-slate-900"> 2758-4444</strong>
                </p>

                <p className="mt-1">
                  Fax:
                  <strong className="text-slate-900"> 2798-2727</strong>
                </p>

                <span className="inline-block mt-2 font-semibold text-emerald-700">
                  Ver directorio completo
                </span>
              </div>

              <ArrowRight
                size={18}
                className="text-emerald-700 group-hover:translate-x-1 transition-transform"
              />
            </Link>

            {/* Correo */}
            <div className="py-7 grid md:grid-cols-[70px_260px_1fr] gap-5 items-center">
              <Mail size={27} className="text-emerald-700" />

              <h3 className="font-bold text-slate-900">
                Correo institucional
              </h3>

              <a
                href="mailto:alcaldia@municlimon.go.cr"
                className="text-sm font-medium text-emerald-700 hover:underline"
              >
                alcaldia@municlimon.go.cr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y horarios */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
            {/* Contacto */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Atención ciudadana
              </span>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Contacto
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin
                    size={23}
                    className="text-emerald-700 shrink-0"
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Dirección
                    </h3>

                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      Diagonal a la Funeraria Hilton, 100 metros norte del
                      Estadio Juan Goban.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone
                    size={23}
                    className="text-emerald-700 shrink-0"
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Central telefónica
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      2758-4444
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail
                    size={23}
                    className="text-emerald-700 shrink-0"
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Correo institucional
                    </h3>

                    <a
                      href="mailto:alcaldia@municlimon.go.cr"
                      className="mt-1 block text-sm text-emerald-700 hover:underline"
                    >
                      alcaldia@municlimon.go.cr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div>
              <div className="flex items-center gap-3">
                <Clock size={27} className="text-emerald-700" />

                <h2 className="text-3xl font-bold text-slate-900">
                  Horarios de atención
                </h2>
              </div>

              <div className="mt-8 border-l-2 border-emerald-600 pl-7">
                <span className="text-sm font-semibold text-emerald-700">
                  Municipalidad
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Lunes a viernes
                </h3>

                <p className="mt-1 text-slate-600">
                  7:30 a. m. – 4:00 p. m.
                </p>
              </div>

              <div className="mt-8 border-l-2 border-lime-400 pl-7">
                <span className="text-sm font-semibold text-emerald-700">
                  Concejo Municipal
                </span>

                <div className="mt-3 grid sm:grid-cols-2 gap-5">
                  <div>
                    <p className="text-sm text-slate-500">
                      Sesiones ordinarias
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      Martes · 5:00 p. m.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Sesiones extraordinarias
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      Jueves · 5:00 p. m.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Municipalidad
