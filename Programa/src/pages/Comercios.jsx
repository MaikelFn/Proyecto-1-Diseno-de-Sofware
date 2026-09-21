import { useState } from 'react'
import { MapPin, Phone, Mail, Store } from 'lucide-react'

// Base de datos extraída de las imágenes
const comercios = [
  // Cafeterías
  { categoria: 'Cafeterías', nombre: 'Coffee Shop El Crucero', telefono: '2758-7003', direccion: 'Al Frente de JAPDEVA', correo: 'coffeeshopelcrucero@gmail.com' },
  { categoria: 'Cafeterías', nombre: 'Cafetería San Benito', telefono: '2798-2156', direccion: 'Limón centro contiguo al Megasuper', correo: null },
  { categoria: 'Cafeterías', nombre: 'Caffellate', telefono: '4702-3415', direccion: 'Detrás al costado Norte del Banco de Costa Rica', correo: null },
  { categoria: 'Cafeterías', nombre: 'Cafetería Venecia Vene Café', telefono: '2758-0667', direccion: 'Contiguo a edificio de Sintrajap, calle 3, avenida 4 y 5', correo: 'venecafe@yahoo.com' },
  
  // Bares y Restaurantes
  { categoria: 'Bares y Restaurantes', nombre: 'Bar y Restaurante Tsunami', telefono: '2758-8628', direccion: 'Frente al Park Hotel', correo: null },
  { categoria: 'Bares y Restaurantes', nombre: 'Chicharronera los Almendros', telefono: '2798-3339 / 8348-9918', direccion: 'Urbanización los Almendros, segunda entrada 200 al este', correo: null },
  { categoria: 'Bares y Restaurantes', nombre: 'Athagy', telefono: '6173-7873', direccion: 'Rio banano 300 al Sur.', correo: 'alvarezmyuli@icloud.com' },
  { categoria: 'Bares y Restaurantes', nombre: 'Rancho vida Caribe', telefono: '2795-3536', direccion: 'Del cementerio de Moín 800 metros al Este.', correo: 'info@vidacaribe.com' },
  { categoria: 'Bares y Restaurantes', nombre: 'Bar Chicharronera Pilón', telefono: '2795-1683', direccion: 'Del puente del Rio Wesfalia 300 Norte al lado izquierdo', correo: 'roger7479@hotmail.com' },
  
  // Hoteles y Restaurantes
  { categoria: 'Hoteles', nombre: 'Oasys del Caribe', telefono: '2795-0024', direccion: 'A 5 minutos del Centro de Limón, Carretera a Portete 1 km.', correo: 'oasysdelcaribe@icloud.com' },
  { categoria: 'Hoteles', nombre: 'Hotel Maribú', telefono: '2795-4010', direccion: 'Del hospital Tony Facio 4 Km Norte, carretera hacia Moín.', correo: 'maribu@racsa.co.cr' },
  { categoria: 'Hoteles', nombre: 'Hotel Cerere', telefono: '2758-0661', direccion: 'De la Escuela Caribean 50 Norte, Zona Americana.', correo: 'hotelcerere@hotmail.com' },
  { categoria: 'Hoteles', nombre: 'Taylor´s Restaurant', telefono: '2798-1948', direccion: 'Calle 5, Ave. 5 costado este del Black Star Line.', correo: 'taylorsrestaurante7@gmail.com' },
  
  // Restaurantes
  { categoria: 'Restaurantes', nombre: 'Restaurante Quimbamba', telefono: '2799-1754', direccion: 'Playa Bonita, Restaurante Quimbamba', correo: 'quim2016bamba@gmail.com' },
  { categoria: 'Restaurantes', nombre: 'Gecko café and Grill', telefono: '2758-1558', direccion: 'De la playa Piuta 50 metros al sur sobre la calle principal', correo: 'geckolimoncr@gmail.com' },
  { categoria: 'Restaurantes', nombre: 'Restaurante Bambu Chill Zone & Bar', telefono: '2758-0267', direccion: 'Carretera Matama', correo: null },
  { categoria: 'Restaurantes', nombre: 'Restaurante Emanuel', telefono: '2758-6786', direccion: 'Frente a la Terminal de cruceros, edificio Cobre y Acero', correo: 'lauradpamer@gmail.com' },
  { categoria: 'Restaurantes', nombre: 'Terramar', telefono: '2758-4011', direccion: 'Barrio Santa Eduviges en la parada de auto bus', correo: 'karen_allen70@hotmail.com' },
  { categoria: 'Restaurantes', nombre: 'Red Snaper', telefono: '2758-7613', direccion: 'Barrio Santa Eduviges, 50 metros del Restaurante el Faro', correo: null },
  { categoria: 'Restaurantes', nombre: 'Restaurante Reinas', telefono: '2795-0879', direccion: 'Carretera Portete', correo: null },
  { categoria: 'Restaurantes', nombre: 'TCBY', telefono: '2758-0044', direccion: 'Frente a la iglesia Católica', correo: null },

  // Transportes & Aventureros
  { categoria: 'Transportes', nombre: 'Coottabus', telefono: '8307-9958 / 7298-9416', direccion: 'Limón centro, 50mtr al oeste de la entrada de radio Bahía', correo: 'limoncaribe2@gmail.com' },
  { categoria: 'Transportes', nombre: 'Carribbean Costaricans Tour Operador', telefono: '8862-4120', direccion: '50mtrs al oeste del Club Domino', correo: 'transnegietours@gmail.com' },
  { categoria: 'Aventureros', nombre: 'Veragua Rainforest', telefono: '4000-0949', direccion: 'De la entrada de Liverpool, 12 km sur, Brisas de Veragua', correo: 'info@veraguarainforest.com' },
  { categoria: 'Aventureros', nombre: 'Jungla De Bocuare', telefono: '8704-1813 / 8424-8004', direccion: 'Pandora, Valle de la Estrella', correo: 'bocuarejungle@yahoo.com' },
  { categoria: 'Aventureros', nombre: 'Brisas de la Jungla', telefono: '2797-1291', direccion: 'Liverpool, 1.5 km del puente del Río Blanco', correo: 'info@brisasdelajungla.com' },

  // Supermercados
  { categoria: 'Supermercados', nombre: 'Supermercado SAM', telefono: '2798-7055', direccion: 'Contiguo a radio casino, Limón', correo: null },
  { categoria: 'Supermercados', nombre: 'Más x menos', telefono: '2758-0070', direccion: 'Limón Centro', correo: null }
]

const categorias = ['Todos', 'Cafeterías', 'Restaurantes', 'Bares y Restaurantes', 'Hoteles', 'Aventureros', 'Transportes', 'Supermercados']

function ComerciosTuristicos() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const comerciosFiltrados = categoriaActiva === 'Todos' 
    ? comercios 
    : comercios.filter(c => c.categoria === categoriaActiva)

  return (
    <main>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Turismo
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Comercios Turísticos
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Encuentre los mejores restaurantes, hoteles, medios de transporte y opciones 
            de aventura para disfrutar al máximo su estadía en Limón.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Filtros por Categoría */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  categoriaActiva === cat
                    ? 'bg-emerald-700 text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de Tarjetas */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {comerciosFiltrados.map((comercio, index) => (
              <article key={index} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg transition-shadow">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Store size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                      {comercio.categoria}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mt-1">
                      {comercio.nombre}
                    </h3>
                  </div>
                </div>

                <div className="mt-auto space-y-3 border-t border-slate-100 pt-5">
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <MapPin size={16} className="shrink-0 text-emerald-700 mt-0.5" />
                    <span className="leading-relaxed">{comercio.direccion}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={16} className="shrink-0 text-emerald-700" />
                    <span>{comercio.telefono}</span>
                  </div>

                  {comercio.correo && (
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Mail size={16} className="shrink-0 text-emerald-700" />
                      <a href={`mailto:${comercio.correo}`} className="hover:text-emerald-700 break-all">
                        {comercio.correo}
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}

export default ComerciosTuristicos