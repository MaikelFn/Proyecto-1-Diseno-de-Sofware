import { MapPin } from 'lucide-react'

import imgPabloPresbere from '../assets/images/PabloPresbere.png' 
import imgTemploMasonico from '../assets/images/TemploMasonico.png'
import imgCasaCultura from '../assets/images/CasaCultura.png'
import imgCasaHabitación from '../assets/images/CasaHabitación.png'
import imgCastilloSarkis from '../assets/images/CastilloSarkis.png'
import imgEDificioAduanas from '../assets/images/EdificioAduanas.png'

const items = [
  {
    titulo: 'Estatua de Pabru Presbere',
    descripcion: 'Presbere fue un indígena Talamanqueño que en 1709 levanto en armas las tribus desde Sixaola hasta Turrialba, con el fin de expulsar a los colonizadores que habían usurpado las tierras de sus pobladores. ',
    ubicacion: 'Ubicado Frente al antiguo Palacio Municipal.',
    imagen: imgPabloPresbere 
  },
  {
    titulo: 'Templo Masonico de Limón',
    descripcion: 'En 1886 comienza a funcionar la Gran Logia Masónica en Limón de acuerdo al rito escoses antiguo. Su templo se erigió en el mar, y fue consagrado el 24 de junio de 1892 y desocupado en 1946. Fue destruido por el abandono y la fuerza de la naturaleza.',
    ubicacion: 'Detrás del Poder Judicial',
    imagen: imgTemploMasonico
  },
  {
    titulo: 'Casa de la Cultura de Limón',
    descripcion: 'Fue construido en 1939, en principio fue construido para ser usada como un mercado de carne, sin embargo al Finalizar su construcción se utilizó como la Unidad Sanitaria por 20 años. La vieja casa de la cultura de limón tendrá un nuevo rostro gracias a la rehabilitación que ejecuta el ministerio de cultura y juventud y el centro de conservación patrimonial cultural.',
    ubicacion: 'Avenida 3 calle 3',
    imagen: imgCasaCultura
  },
  {
    titulo: 'Casa de habitación',
    descripcion: 'Donde vivió Marcus Garvey, Costado este del estadio Juan Goban. En esta vivienda multifamiliar vivió Marcus Garvey parte de su estadía en Limón. Sus seguidores sostienen que ahí fue donde planeó la creación del Black Star Line.',
    ubicacion: 'Avenidas 2 y 3, calle 8.',
    imagen: imgCasaHabitación
  },
  {
    titulo: 'El Castillo de Sarkis',
    descripcion: 'Lo que cuentan; La municipalidaeles prohibió construir más propiedades porque tenían demasiadas y fue abandonado. Luego el terremoto del 91 lo termino de derrumbar. Hoy en día hay varios apartamentos en el sitio, También se dice el Castillo en realidad pertenecía a la familia Dejuk Yunis',
    ubicacion: 'Avenida 5 Calle 7 y 8.',
    imagen: imgCastilloSarkis
  },
  {
    titulo: 'Edificio de Aduanas, Bodega # 1',
    descripcion: 'Esta es una de las bodegas que se utilizaban para el des almacenaje de mercadería que provenía de toda parte del mundo. Por aquí entraban y salían desde chocolates, quesos, leche hasta herramientas y armas de fuego.',
    ubicacion: 'Se ubicaba directamente en frente de las oficinas centrales de Japdeva en el patio del muelle Hernán Garrón.',
    imagen: imgEDificioAduanas
  }
]

function FotosHistoricas() {
  return (
    <main>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Turismo
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Fotos Históricas
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Un viaje al pasado a través de imágenes invaluables que narran la evolución, cultura e historia de la provincia de Limón.
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
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
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

export default FotosHistoricas