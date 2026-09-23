import { Link } from 'react-router-dom'
import {
  CircleDollarSign,
  FileText,
  Building2,
  Megaphone,
  Phone,
} from 'lucide-react'

function AccesosRapidos() {
  const accesos = [
    {
      nombre: 'Impuestos',
      descripcion: 'Consulte información relacionada con impuestos municipales.',
      icono: CircleDollarSign,
      enlace: '/direccion-financiera',
    },
    {
      nombre: 'Trámites',
      descripcion: 'Acceda a los principales trámites y solicitudes.',
      icono: FileText,
      enlace: '/tramites',
    },
    {
      nombre: 'Ventanilla Única',
      descripcion: 'Encuentre información y atención municipal en un solo lugar.',
      icono: Building2,
      enlace: '/direccion-administrativa#servicio-cliente',
    },
    {
      nombre: 'Denuncias',
      descripcion: 'Reporte situaciones o comuníquese con la municipalidad.',
      icono: Megaphone,
      enlace: '/contacto',
    },
    {
      nombre: 'Contacto',
      descripcion: 'Consulte teléfonos, correo, horario y ubicación.',
      icono: Phone,
      enlace: '/contacto',
    },
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Accesos rápidos
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            ¿Qué necesita hacer?
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Acceda de forma rápida a los servicios y gestiones más utilizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {accesos.map((acceso) => {
            const Icono = acceso.icono

            return (
              <Link
                key={acceso.nombre}
                to={acceso.enlace}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                  <Icono size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {acceso.nombre}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {acceso.descripcion}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AccesosRapidos
