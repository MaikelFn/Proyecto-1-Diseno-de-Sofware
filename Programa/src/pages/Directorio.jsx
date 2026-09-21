import { useState } from 'react'
import {
  Search,
  Phone,
  Mail,
  Building2,
} from 'lucide-react'

function Directorio() {
  const [busqueda, setBusqueda] = useState('')

  const contactos = [
    {
      departamento: 'Alcaldía',
      funcionario: 'Correo general del departamento',
      correos: ['alcaldia@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: null,
    },
    {
      departamento: 'Vice Alcaldía',
      funcionario: 'Lic. John Gutiérrez Gómez',
      correos: ['vicealcaldia@municlimon.go.cr'],
      telefono: '2758-14-32',
      extension: null,
    },
    {
      departamento: 'Archivo',
      funcionario: 'Viviana Estrada',
      correos: ['viviana.estrada@municlimon.go.cr'],
      telefono: '2758-2468',
      extension: null,
    },
    {
      departamento: 'Almacenamiento',
      funcionario: 'Kindly Villalobos Cambronero',
      correos: [
        'kindly.villalobos@municlimon.go.cr',
        'almacenamiento@municlimon.go.cr',
      ],
      telefono: '2101-6941',
      extension: null,
    },
    {
      departamento: 'Auditoría',
      funcionario: 'Albín Vega',
      correos: ['albin.vega@municlimon.go.cr'],
      telefono: '2758-8176',
      extension: '206 / 207',
    },
    {
      departamento: 'Cobros',
      funcionario: 'Graylin Solano',
      correos: [
        'graylin.solano@municlimon.go.cr',
        'cobros@municlimon.go.cr',
      ],
      telefono: '2798-1101',
      extension: null,
    },
    {
      departamento: 'Bienestar Familiar',
      funcionario: 'Beatriz Soto',
      correos: ['beatriz.soto@municlimon.go.cr'],
      telefono: '2573-0250',
      extension: null,
    },
    {
      departamento: 'Casa de la Cultura',
      funcionario: 'Kenny Williams',
      correos: ['kenny.williams@municlimon.go.cr'],
      telefono: '2758-1046',
      extension: null,
    },
    {
      departamento: 'CECOEXA',
      funcionario: 'Junior Marin',
      correos: ['junior.marin@municlimon.go.cr'],
      telefono: '2758-2390',
      extension: null,
    },
    {
      departamento: 'CECUDI Barrio Cerro Mocho',
      funcionario: 'Pamela Padilla',
      correos: ['pamela.padilla@municlimon.go.cr'],
      telefono: '2572-1584',
      extension: null,
    },
    {
      departamento: 'CECUDI Barrio El Triunfo',
      funcionario: 'Pamela Padilla',
      correos: ['pamela.padilla@municlimon.go.cr'],
      telefono: '2572-1584',
      extension: null,
    },
    {
      departamento: 'Cementerio de Limón Centro',
      funcionario: null,
      correos: [],
      telefono: '2758-4923',
      extension: null,
    },
    {
      departamento: 'Comunicación',
      funcionario: 'Alexa Cuza',
      correos: ['alexa.cuza@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: null,
    },
    {
      departamento: 'Contabilidad',
      funcionario: 'Astor Velásquez',
      correos: ['astor.velasquez@municlimon.go.cr'],
      telefono: '2798-2436',
      extension: null,
    },
    {
      departamento: 'Contraloría de Servicios',
      funcionario: 'Harol Aguilar',
      correos: [
        'harol.aguilar@municlimo.go.cr',
        'controlaria.servicios@municlimon.go.cr',
      ],
      telefono: '2758-4444',
      extension: '115',
    },
    {
      departamento: 'Control Interno',
      funcionario: 'Manuel Azofeifa',
      correos: ['manuel.azofeifa@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: null,
    },
    {
      departamento: 'Concejo Municipal',
      funcionario: 'Derian Gutiérrez',
      correos: [
        'karol.hernandez@municlimon.go.cr',
        'concejo.presidencia@municlimon.go.cr',
      ],
      telefono: '2758-0319',
      extension: null,
    },
    {
      departamento: 'Dirección Administrativa',
      funcionario: 'Ricardo Boyer',
      correos: [
        'ricardo.boyer@municlimon.go.cr',
        'direccion.administrativa@municlimon.go.cr',
      ],
      telefono: '2758-0608',
      extension: '121',
    },
    {
      departamento: 'Dirección de Ingeniería',
      funcionario: 'Antonio Babb',
      correos: ['antonio.babb@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: '300',
    },
    {
      departamento: 'Dirección Financiera',
      funcionario: 'Gilberto Brown',
      correos: ['gilberto.brown@municlimon.go.cr'],
      telefono: '2798-2939',
      extension: null,
    },
    {
      departamento: 'Electromecánica',
      funcionario: 'Gerald Walker',
      correos: ['gerald.walker@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: '102',
    },
    {
      departamento: 'Gestión de Seguridad',
      funcionario: 'Jeison Arce',
      correos: ['jeison.arce@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: '124',
    },
    {
      departamento: 'Departamento Legal',
      funcionario: 'Gustavo Chaves',
      correos: ['gustavo.chavez@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: null,
    },
    {
      departamento: 'Mercado Municipal',
      funcionario: 'Silvia Rojas',
      correos: ['silvia.rojas@municlimon.go.cr'],
      telefono: '2798-2682',
      extension: null,
    },
    {
      departamento: 'Monitoreo',
      funcionario: 'Mirta Hibbert',
      correos: ['mirta.hibbert@municlimon.go.cr'],
      telefono: '2758-4274',
      extension: null,
    },
    {
      departamento: 'Parquímetros',
      funcionario: 'Aaron Acuña',
      correos: ['aaron.acuna@municlimon.go.cr'],
      telefono: '2758-3948',
      extension: null,
    },
    {
      departamento: 'Planificación',
      funcionario: 'Kenibeth Winter',
      correos: ['kennibeth.winter@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: '309',
    },
    {
      departamento: 'Plataforma',
      funcionario: 'Gary Washington',
      correos: [
        'gary.washington@municlimon.go.cr',
        'plataforma.servicios@municlimon.go.cr',
      ],
      telefono: '2798-4018',
      extension: null,
    },
    {
      departamento: 'Policía Municipal',
      funcionario: 'Jeison Arce',
      correos: [
        'jeison.arce@municlimon.go.cr',
        'policia.municipal@municlimon.go.cr',
      ],
      telefono: '2758-4444',
      extension: '124',
    },
    {
      departamento: 'Presupuesto',
      funcionario: 'Erick Rios',
      correos: ['erick.rios@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: '110',
    },
    {
      departamento: 'Proveeduría',
      funcionario: 'Licda. Doris Sanabria',
      correos: [
        'doris.sanabria@municlimon.go.cr',
        'proveeduria@municlimon.go.cr',
      ],
      telefono: '2758-0219',
      extension: '111',
    },
    {
      departamento: 'Unidad de Desarrollo Social',
      funcionario: 'Licda. Jessica Hernández',
      correos: ['jessica.hernandez@municlimon.go.cr'],
      telefono: '2573-0205',
      extension: '300',
    },
    {
      departamento: 'Recolección de Desechos',
      funcionario: 'Joselee Rojas',
      correos: ['joselee.rojas@municlimon.go.cr'],
      telefono: '2797-0077',
      extension: null,
    },
    {
      departamento: 'Rentas / Patentes',
      funcionario: 'Dinna Clark',
      correos: [
        'dinna.clark@municlimon.go.cr',
        'rentas@municlimon.go.cr',
      ],
      telefono: '2758-7220',
      extension: '112',
    },
    {
      departamento: 'Servicios Generales',
      funcionario: 'Rafael Oregón',
      correos: ['rafael.oregon@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: '101',
    },
    {
      departamento: 'Servicios y Proyectos Comunitarios',
      funcionario: 'Licda. Yocelyn Downs',
      correos: ['yocelyn.downs@municlimon.go.cr'],
      telefono: '2573-0250',
      extension: null,
    },
    {
      departamento: 'Talento Humano',
      funcionario: 'Licda. Valtaire Retana',
      correos: [
        'valtaire.retana@municlimon.go.cr',
        'recursos.humanos@municlimon.go.cr',
      ],
      telefono: '2758-0219',
      extension: '114',
    },
    {
      departamento: 'Taller de Operaciones',
      funcionario: 'Rosenda Obando',
      correos: [
        'rosenda.obando@municlimon.go.cr',
        'direccion.operaciones@municlimon.go.cr',
      ],
      telefono: '2797-0076',
      extension: null,
    },
    {
      departamento: 'Tecnología de Información',
      funcionario: 'Ing. Carlos Solano',
      correos: [
        'carlos.solano@municlimon.go.cr',
        'gti@municlimon.go.cr',
      ],
      telefono: '2758-4444',
      extension: '117',
    },
    {
      departamento: 'Tesorería',
      funcionario: 'Susette Dixon',
      correos: [
        'susette.dixon@municlimon.go.cr',
        'tesoreria@municlimon.go.cr',
      ],
      telefono: '2798-3814',
      extension: null,
    },
    {
      departamento: 'Turismo',
      funcionario: 'Reymond Smith',
      correos: [
        'reymon.smith@municlimon.go.cr',
        'turismo@municlimon.go.cr',
      ],
      telefono: '2758-4444',
      extension: null,
    },
    {
      departamento: 'Unidad de Bienes Inmuebles',
      funcionario: 'Orlando Chavarría',
      correos: ['orlando.chavarria@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: '208',
    },
    {
      departamento: 'Unidad de Censo y Catastro',
      funcionario: 'Erwin Amador',
      correos: ['erwin.amador@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: '219',
    },
    {
      departamento: 'Unidad Técnica y Estudio',
      funcionario: 'Ing. Nicolas Simpson',
      correos: [
        'nicolas.simpson@municlimon.go.cr',
        'ute@municlimon.go.cr',
      ],
      telefono: '2758-4444',
      extension: '221 / 216',
    },
    {
      departamento:
        'Unidad de Zona Marítimo Terrestre / Gestión Ambiental',
      funcionario: 'Juan Carlos Barrantes',
      correos: ['juan.barrantes@municlimon.go.cr'],
      telefono: '2758-4444',
      extension: '211',
    },
  ]

  const contactosFiltrados = contactos.filter((contacto) => {
    const texto = `
      ${contacto.departamento}
      ${contacto.funcionario || ''}
      ${contacto.correos.join(' ')}
      ${contacto.telefono}
      ${contacto.extension || ''}
    `.toLowerCase()

    return texto.includes(busqueda.toLowerCase())
  })

  return (
    <main>
      {/* Encabezado */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Información institucional
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Directorio telefónico
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Consulte la información de contacto de los diferentes
            departamentos de la Municipalidad de Limón.
          </p>
        </div>
      </section>

      {/* Información general */}
      <section className="py-12 bg-emerald-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-white">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-200">
                Central telefónica
              </span>

              <p className="mt-2 text-xl font-bold">
                2758-4444
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-200">
                Fax
              </span>

              <p className="mt-2 text-xl font-bold">
                2798-2727
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-200">
                Correo institucional
              </span>

              <a
                href="mailto:alcaldia@municlimon.go.cr"
                className="mt-2 block font-semibold hover:underline"
              >
                alcaldia@municlimon.go.cr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directorio */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Departamentos
              </span>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Encuentre un contacto
              </h2>
            </div>

            {/* Buscador */}
            <div className="relative w-full md:w-96">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={busqueda}
                onChange={(event) => setBusqueda(event.target.value)}
                placeholder="Buscar departamento o funcionario..."
                className="w-full bg-white border border-slate-300 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          {/* Contactos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {contactosFiltrados.map((contacto) => (
              <article
                key={`${contacto.departamento}-${contacto.correos.join('-')}`}
                className="bg-white border border-slate-200 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Building2 size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {contacto.departamento}
                    </h3>

                    {contacto.funcionario && (
                      <p className="mt-1 text-sm text-slate-500">
                        {contacto.funcionario}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                  {contacto.correos.length > 0 && (
                    <div className="flex items-start gap-3">
                      <Mail
                        size={17}
                        className="text-emerald-700 shrink-0 mt-0.5"
                      />

                      <div className="min-w-0 space-y-1">
                        {contacto.correos.map((correo) => (
                          <a
                            key={correo}
                            href={`mailto:${correo}`}
                            className="block text-sm text-slate-600 hover:text-emerald-700 break-all"
                          >
                            {correo}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={17} className="text-emerald-700 shrink-0" />

                    <span>
                      {contacto.telefono}

                      {contacto.extension && (
                        <span className="text-slate-400">
                          {' '}· Ext. {contacto.extension}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {contactosFiltrados.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-slate-500">
                No se encontraron contactos con esa búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Directorio
