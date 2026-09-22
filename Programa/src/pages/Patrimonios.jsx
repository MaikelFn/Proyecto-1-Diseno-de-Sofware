import { MapPin } from 'lucide-react'

import imgIslaUvita from '../assets/images/IslaUvita.png'
import imgParqueVargas from '../assets/images/ParqueVargas.png'
import imgAntiguaCapitanía from '../assets/images/AntiguaCapitanía.png'
import imgEdificioUnitedFruitCompany from '../assets/images/EdificioUnitedFruitCompany.png'
import imgCorreosTelégrafos from '../assets/images/CorreosTelégrafos.png'
import imgEscuelaGeneralTomasGuardia from '../assets/images/EscuelaGeneralTomasGuardia.png'

const items = [
  {
    titulo: 'Isla Uvita',
    descripcion: 'El 25 de setiembre del año 1502 llego Cristóbal Colon en su cuarto y último viaje a las costas del caribe costarricense. Sus naves fondearon nuestro litoral y anclaron en las proximidades de lo que hoy es Puerto Limón.',
    ubicacion: 'Vista desde el Tajamar del Parque Vargas',
    imagen: imgIslaUvita 
  },
  {
    titulo: 'Parque Vargas',
    descripcion: 'Durante la gestión del Gobernador Balvanero Vargas, se empezó la construcción del parque como parte de su proyecto de embellecimiento de la ciudad. Su construcción empezó en 1895.',
    ubicacion: 'Limón Centro',
    imagen: imgParqueVargas
  },
  {
    titulo: 'Antigua Capitanía de Puerto',
    descripcion: 'El edificio de la Capitanía debía albergar oficinas y vivienda del Gobernador con recargo de Capitán de puerto, una oficina para el medico de puerto, y otro para el ingeniero de la secretaria de fomento.',
    ubicacion: 'Costa de Limón',
    imagen: imgAntiguaCapitanía
  },
  {
    titulo: 'Edificio de la United Fruit Company',
    descripcion: 'Debido auge que surge Limón con la construcción del ferrocarril en 1998 el Sr. Minor Keith firma un acuerdo con la Boston Fruit Company dando origen a la United Fruit Company, de la cual es vicepresidente y director.',
    ubicacion: 'Avenida 1 y 2 Calle 2',
    imagen: imgEdificioUnitedFruitCompany
  },
  {
    titulo: 'Correos y Telégrafos de Limón',
    descripcion: 'A partir de 1973 es utilizado como edificio de Correos y Telégrafos. En la segunda planta funciono en el pasado la Corte Suprema, la Alcaldía penal, la Agencia de Policía, la oficina de Desarrollo de Japdeva, la Guardia Rural, el Museo de Limón, también abrieron sus puertas el Liceo Nuevo, y a mediados de la década de los setenta la sede Regional de la Universidad de Costa Rica en Limón.',
    ubicacion: 'Calle 4',
    imagen: imgCorreosTelégrafos
  },
  {
    titulo: 'Escuela General Tomas Guardia',
    descripcion: 'Para el 12 de Durante el gobierno de Tomas Guardia Gutiérrez, se acuerda construir un instituto Escolar Superior para varones en el Centro de la ciudad de Limón.',
    ubicacion: 'Calle 5',
    imagen: imgEscuelaGeneralTomasGuardia
  }
]

function Patrimonios() {
  return (
    <main>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Turismo
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Patrimonios Históricos
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Descubra la riqueza cultural, arquitectónica e histórica que hace 
            único al cantón de Limón.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {items.map((item) => (
              <article 
                key={item.titulo} 
                className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden bg-slate-200 shrink-0">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-slate-900">{item.titulo}</h2>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-700">
                    <MapPin size={16} />
                    {item.ubicacion}
                  </div>
                  <p className="mt-5 text-slate-600 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Patrimonios