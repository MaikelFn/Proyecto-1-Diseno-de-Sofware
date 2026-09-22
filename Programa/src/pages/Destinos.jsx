import { MapPin, Phone } from 'lucide-react'

import imgParkHotel from '../assets/images/ParkHotel.png' 
import imgHotelPlayaWestfalia from '../assets/images/HotelPlayaWestfalia.png'
import imgHotelMaribuCaribea from '../assets/images/HotelMaribuCaribe.png'
import imgHSelvaBananitoLodge from '../assets/images/SelvaBananitoLodge.png'
import imgHotelCerere from '../assets/images/HotelCerere.png'
import imgLoftsCacao from '../assets/images/LoftsCacao.png'
import imgHotelLaCueva from '../assets/images/HotelLaCueva.png'

const items = [
  {
    titulo: 'Park Hotel',
    descripcion: 'El Park Hotel se encuentra en la gran ciudad de Puerto Limón y dispone de terraza con vistas magníficas al océano. Algunas habitaciones también cuentan con ventanales con vistas al mar.',
    ubicacion: 'Avenida 3, entre las Calles 1 y 3',
    telefono: '2798-0555',
    imagen: imgParkHotel 
  },
  {
    titulo: 'Hotel Playa Westfalia',
    descripcion: 'Este establecimiento de estilo tropical está ubicado en una zona privada de la playa de Westfalia, a solo 7 km en dirección sur de la ciudad de Limón, y alberga jardines extensos, soláriums y una piscina al aire libre. Hay WiFi gratuita en las zonas comunes',
    ubicacion: '2 km al sur del aeropuerto de Puerto Limón, sobre la Ruta 36.',
    telefono: '2756-1300',
    imagen: imgHotelPlayaWestfalia
  },
  {
    titulo: 'El Hotel Maribu Caribe',
    descripcion: 'Este alojamiento tiene muy buena puntuación por la mejor relación calidad-precio en Puerto Limón. Los clientes sacan más partido a su dinero en comparación con otros alojamientos de la misma ciudad.',
    ubicacion: 'A 750 metros de la Playa Bonita',
    telefono: '2795-4110',
    imagen: imgHotelMaribuCaribea
  },
  {
    titulo: 'Selva Bananito Lodge',
    descripcion: 'Este lodge ecológico dispone de una amplia zona verde donde se pueden practicar actividades como tirolina, rapel en las cataratas, senderismo, escalada de árboles y montar a caballo.',
    ubicacion: '11 km al sur de Bananito Norte',
    telefono: '2253-8118',
    imagen: imgHSelvaBananitoLodge
  },
  {
    titulo: 'El Hotel Cerere',
    descripcion: 'El alojamiento cuenta con jardín y terraza. Las habitaciones disponen de TV de pantalla plana con canales por cable.Todas las habitaciones del hotel tienen escritorio. Algunas habitaciones del Hotel Cerere tienen vistas al mar y todas disponen de baño privado con bañera o ducha.',
    ubicacion: 'Del Hospital Dr. Tony Facio Castro, 100 metros al norte',
    telefono: '2758 0661',
    imagen: imgHotelCerere
  },
  {
    titulo: 'El Lofts Cacao',
    descripcion: 'Los alojamientos cuentan con patio, zona de cocina totalmente equipada con microondas, zona de estar con sofá, TV, lavadora y baño privado con ducha. Algunos alojamientos tienen zona de comedor y/o balcón.',
    ubicacion: 'A 2,4 km del puerto de Moin',
    telefono: '2795-0628',
    imagen: imgLoftsCacao
  },
  {
    titulo: 'Hotel La Cueva',
    descripcion: 'El alojamiento ofrece recepción 24 horas y servicio de habitaciones. Todos los alojamientos del hotel están equipados con zona de estar, TV de pantalla plana con canales por cable y baño privado con artículos de aseo gratuitos y ducha. Todas las habitaciones del Hotel La Cueva incluyen aire acondicionado y armario.',
    ubicacion: '900 metros o 1 kilómetro al oeste de Playa Piuta',
    telefono: '2758-4869',
    imagen: imgHotelLaCueva
  }
]

function Destinos() {
  return (
    <main>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Turismo
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Destinos Turísticos
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Explore las maravillas naturales, playas y atractivos que el cantón y la provincia tienen para ofrecer a sus visitantes.
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
                  
                  {/* Contenedor flexible para Ubicación y Teléfono */}
                  <div className="mt-3 flex flex-wrap items-center gap-5 text-sm font-medium text-emerald-700">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {item.ubicacion}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      {item.telefono}
                    </div>
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

export default Destinos