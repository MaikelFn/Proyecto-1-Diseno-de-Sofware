import {
  BookOpen,
  Mountain,
  Waves,
  ExternalLink,
  Landmark,
} from 'lucide-react'

import imagenLimon from '../assets/images/portada-limon.png'

function NuestroCanton() {
  return (
    <main>
      {/* Portada */}
      <section className="relative min-h-[420px] flex items-end overflow-hidden">
        <img
          src={imagenLimon}
          alt="Paisaje del cantón de Limón"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-transparent" />

        <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 pb-16 pt-28">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Conozca Limón
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Nuestro Cantón
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">
            Historia, territorio y riqueza natural de un cantón marcado por
            su identidad caribeña y su importancia para Costa Rica.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Nuestra historia
              </span>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Historia del cantón
              </h2>

              <div className="mt-7 w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <BookOpen size={27} />
              </div>
            </div>

            <div className="text-slate-600 leading-relaxed space-y-5">
              <p>
                El territorio de Limón estuvo habitado por pueblos originarios
                antes de la llegada de los españoles. En septiembre de 1502,
                durante su cuarto y último viaje, Cristóbal Colón llegó a las
                costas limonenses y dio el nombre de La Huerta a la zona por
                la diversidad de su flora.
              </p>

              <p>
                Posteriormente, el desarrollo del ferrocarril al Atlántico
                transformó la región y facilitó la exportación del café
                costarricense hacia Europa. Las obras ferroviarias también
                impulsaron la llegada de población jamaiquina al Caribe
                costarricense.
              </p>

              <p>
                Con el paso del tiempo, Limón se consolidó como una región de
                gran importancia económica, portuaria y cultural, con una
                identidad profundamente vinculada al Caribe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Territorio */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Territorio
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Características naturales
            </h2>

            <p className="mt-4 text-slate-600">
              El territorio limonense posee características geológicas e
              hidrográficas que forman parte de su riqueza natural.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Geología */}
            <article>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                  <Mountain size={24} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Geología
                </h3>
              </div>

              <p className="mt-6 text-slate-600 leading-relaxed">
                El cantón de Limón presenta formaciones geológicas de los
                períodos Terciario y Cuaternario, con presencia de rocas
                sedimentarias, volcánicas e intrusivas.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Estas formaciones se distribuyen en diferentes sectores del
                cantón, incluyendo Valle La Estrella, río Cuen, río Banano y
                zonas cercanas a Matama.
              </p>
            </article>

            {/* Hidrografía */}
            <article className="lg:border-l lg:border-slate-200 lg:pl-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                  <Waves size={24} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Hidrografía
                </h3>
              </div>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Limón forma parte de la vertiente del Caribe y cuenta con una
                extensa red hidrográfica que recorre diferentes sectores del
                cantón.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Entre sus principales cuencas se encuentran los ríos Estrella,
                Matina, Banano, Moín y Bananito, acompañados por numerosos
                afluentes que desembocan en el mar Caribe.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Imagen del cantón */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden h-[380px]">
              <img
                src={imagenLimon}
                alt="Cantón de Limón"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Identidad caribeña
              </span>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Limón, puerta del Caribe
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                La historia, diversidad cultural, actividad portuaria y
                riqueza natural han contribuido a formar la identidad del
                cantón de Limón y su papel dentro del Caribe costarricense.
              </p>

              <div className="mt-7 flex items-center gap-3 text-slate-500">
                <Landmark size={21} className="text-emerald-700" />
                <span className="text-sm">
                  Cantón Central de Limón, Costa Rica
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SICOP */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
                Compras públicas
              </span>

              <h2 className="mt-2 text-3xl font-bold text-white">
                Sistema Integrado de Compras Públicas
              </h2>

              <p className="mt-3 max-w-2xl text-slate-300">
                Acceda a SICOP para consultar información relacionada con los
                procesos de contratación pública.
              </p>
            </div>

            <a
              href="https://www.sicop.go.cr/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-lime-300 text-slate-950 font-semibold px-6 py-3 rounded-xl hover:bg-lime-200 transition-colors shrink-0"
            >
              Acceder a SICOP
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NuestroCanton
