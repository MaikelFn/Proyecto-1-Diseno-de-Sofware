import {
  Building2,
  Users,
  HeartHandshake,
  GraduationCap,
  FileText,
  ClipboardList,
  BriefcaseBusiness,
  Scale,
  BookOpen,
} from 'lucide-react'

function Alcaldia() {
  const dependenciasSociales = [
    'Oficina de la Mujer',
    'Oficina de Intermediación de Empleo',
    'CECUDI',
    'CECUAM',
    'Servicios Educativos, Culturales y Deportivos',
    'Desarrollo Comunal',
  ]

  const categoriasLeyes = [
    'Constitucionales',
    'Electorales',
    'Financieras',
    'Gestión',
    'Laborales',
    'Orgánicas',
    'Urbanísticas',
    'Municipales',
  ]

  const departamentos = [
    'Aseo de Vías Públicas',
    'Archivo Central',
    'Administración de Zona Marítima Terrestre',
    'Auditoría Interna',
    'Administración de Patentes',
    'Administración de Mercados',
    'Relaciones Públicas y Comunicación',
    'Gestión del Talento Humano',
    'Planificación Institucional',
    'Gestión de Turismo y Atracción de Inversiones',
  ]

  return (
    <main>
      {/* Portada */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Gobierno municipal
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Alcaldía
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Conozca las autoridades municipales, la gestión de la Vicealcaldía,
            los planes, informes y normativa de la Municipalidad de Limón.
          </p>
        </div>
      </section>

      {/* Despacho */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Autoridades municipales
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Despacho de la Alcaldía
            </h2>

            <p className="mt-4 text-slate-600">
              Autoridades que integran el Despacho de la Alcaldía Municipal
              de Limón.
            </p>
          </div>

          {/* Alcaldesa */}
          <article className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white">
            <div className="flex flex-col md:flex-row md:items-center gap-7">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-lime-300 text-slate-900 flex items-center justify-center">
                <Building2 size={38} />
              </div>

              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
                  Alcaldesa
                </span>

                <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                  Ana Janniel Matarrita Mc Calla
                </h3>

                <p className="mt-3 text-slate-300">
                  Alcaldía Municipal de Limón
                </p>
              </div>
            </div>
          </article>

          {/* Vicealcaldías */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <article className="border border-slate-200 rounded-2xl p-7">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Users size={27} />
              </div>

              <span className="block mt-6 text-sm font-semibold text-emerald-700">
                Primera Vicealcaldía
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                John Gutiérrez Gómez
              </h3>
            </article>

            <article className="border border-slate-200 rounded-2xl p-7">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Users size={27} />
              </div>

              <span className="block mt-6 text-sm font-semibold text-emerald-700">
                Segunda Vicealcaldía
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Katherine Calvo Lobo
              </h3>
            </article>
          </div>
        </div>
      </section>

      {/* Gestión de Vicealcaldía */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Vicealcaldía
              </span>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Gestión de Vicealcaldía
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                La Vicealcaldía participa en diferentes áreas orientadas al
                desarrollo social, educativo y comunitario del cantón de Limón.
              </p>

              <div className="mt-8 w-16 h-1 bg-lime-300 rounded-full"></div>
            </div>

            <div className="space-y-5">

              <div className="bg-white border-l-4 border-emerald-600 rounded-r-2xl p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <HeartHandshake
                    size={28}
                    className="text-emerald-700 shrink-0 mt-1"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Desarrollo y Protección Social
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Integra servicios destinados al desarrollo y protección
                      de diferentes sectores de la población.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-emerald-700 font-medium">
                      {dependenciasSociales.map((dependencia) => (
                        <span key={dependencia}>
                          {dependencia}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-emerald-600 rounded-r-2xl p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <GraduationCap
                    size={28}
                    className="text-emerald-700 shrink-0 mt-1"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Servicios y Proyectos Comunitarios
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Impulsa la educación de la niñez y juventud mediante
                      iniciativas como el otorgamiento de becas.
                    </p>

                    <div className="mt-4 text-sm text-slate-500">
                      <span className="font-semibold text-slate-800">
                        Kenny Williams
                      </span>
                      <span className="mx-2">·</span>
                      kenny.williams@municlimon.go.cr
                      <span className="mx-2">·</span>
                      2758-4444 ext. 304
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Planificación e informes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Gestión municipal
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Planificación e informes
            </h2>

            <p className="mt-4 text-slate-600">
              Documentación relacionada con la planificación, gestión y
              rendición de cuentas municipal.
            </p>
          </div>

          <div className="border-y border-slate-200 divide-y divide-slate-200">

            <div className="py-7 grid md:grid-cols-[250px_1fr] gap-5">
              <div className="flex items-center gap-3">
                <FileText size={23} className="text-emerald-700" />
                <h3 className="font-bold text-slate-900">
                  Informes de Gestión
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {['2016', '2017', '2018', '2019', '2020', '2023', '2024'].map(
                  (anio) => (
                    <span
                      key={anio}
                      className="text-sm font-medium text-emerald-700 hover:text-emerald-900 cursor-pointer"
                    >
                      {anio}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="py-7 grid md:grid-cols-[250px_1fr] gap-5">
              <div className="flex items-center gap-3">
                <ClipboardList size={23} className="text-emerald-700" />
                <h3 className="font-bold text-slate-900">
                  Planes Municipales
                </h3>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <p>Plan Estratégico Cantonal, Cantón de Limón</p>
                <p>Plan de Desarrollo Humano Local, Cantón Limón</p>
                <p>Plan Estratégico Municipal vinculado al Gobierno 2024-2029</p>
              </div>
            </div>

            <div className="py-7 grid md:grid-cols-[250px_1fr] gap-5">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness size={23} className="text-emerald-700" />
                <h3 className="font-bold text-slate-900">
                  Informes de Labores
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  '2016',
                  '2017',
                  '2018',
                  '2019',
                  '2020',
                  '2021',
                  '2022',
                  '2023',
                ].map((anio) => (
                  <span
                    key={anio}
                    className="text-sm font-medium text-emerald-700 hover:text-emerald-900 cursor-pointer"
                  >
                    {anio}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Normativa */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Marco institucional
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Normativa Legal
            </h2>

            <p className="mt-4 text-slate-600">
              Consulte leyes, procesos y procedimientos relacionados con el
              funcionamiento municipal.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">

            <div className="grid lg:grid-cols-2 gap-10 lg:divide-x divide-slate-200">

              {/* Leyes */}
              <div className="lg:pr-10">
                <Scale size={30} className="text-emerald-700" />

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  Leyes
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Normativa organizada por categoría.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                  {categoriasLeyes.map((categoria) => (
                    <span
                      key={categoria}
                      className="text-sm font-medium text-slate-700 border-b border-slate-200 pb-3"
                    >
                      {categoria}
                    </span>
                  ))}
                </div>
              </div>

              {/* Procesos */}
              <div className="lg:pl-10">
                <BookOpen size={30} className="text-emerald-700" />

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  Procesos y Procedimientos
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Manuales institucionales organizados según las diferentes
                  dependencias municipales.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {departamentos.map((departamento) => (
                    <span
                      key={departamento}
                      className="text-sm text-slate-600"
                    >
                      {departamento}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Alcaldia
