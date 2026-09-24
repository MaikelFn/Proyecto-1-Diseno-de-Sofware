import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Download,
  FileSearch,
  Landmark,
  Leaf,
  Mail,
  Map,
  Phone,
  Ruler,
  Trees,
  AlertCircle,
  ExternalLink
} from 'lucide-react'

// --- DATOS DE GESTIÓN TÉCNICA Y ESTUDIO ---
const reqObraMenor = [
  'Solicitud al Departamento de Ingeniería con timbre de 500 colones, indicando datos del solicitante, propiedad y proyecto.',
  'Dos (2) juegos de láminas de Planos Constructivos firmados por profesional responsable.',
  'Dos fotocopias del Plano Catastro, sin reducir, con visado municipal para trámites constructivos.',
  'Certificación de Propiedad / Estudio Literal actualizado o Carta de Venta.',
  'Constancia Póliza de Riesgos emitida por el INS.',
  'Carta de Disponibilidad de Agua Potable del A.Y.A o ASADA.',
]

const reqObraMayor = [
  'Solicitud al Departamento de Ingeniería con timbre de 500 colones.',
  'Constancia Póliza de Riesgos emitida por el I.N.S.',
  'Fotocopia de cédula del propietario, o personería jurídica si corresponde.',
  'Certificación de Propiedad Estudio Literal actualizada.',
  'Carta de disponibilidad del A.Y.A. o ASADA.',
  'Alineamientos vigentes según corresponda (MOPT, INVU, ICE, INCOFER, AYA, MINAET, DGAC, ZMT).',
  'Dos (2) Juegos de láminas de Planos Constructivos aprobados por instituciones involucradas y CFIA.',
  'Deberá contar con el Uso de Suelo.',
]

const requisitosEspeciales = [
  'Zonas de alta susceptibilidad: Estudio geotécnico, de suelos e infiltración.',
  'Proyectos de gran amplitud en vías: Estudio de impacto vial o Plan de Gestión Vial (MOPT).',
  'Plantas de tratamiento: Visto bueno de ubicación, planos aprobados (Ministerio de Salud) y autorización de Ingeniería.',
  'Copia del desfogue de aguas pluviales debidamente aprobado.',
  'Zonas de amenaza natural: Nota de la CNE certificando que el terreno no presenta problemas.',
  'Visto bueno del INVU y sellado de planos.',
  'Visto bueno del MINAE en caso de tala de árboles no frutales o maderables.',
  'Constancia extendida por el ICE sobre líneas de transmisión de alta voltaje.',
]

const aclaratorias = [
  'Estar al día con impuestos municipales y CCSS/FODESAP.',
  'Visto bueno del Centro Cultural y Patrimonio si el inmueble es de Valor Patrimonial.',
  'Cancelación del impuesto de construcción (1% sobre valor tasado).',
  'Certificación de Viabilidad Ambiental de SETENA para obras mayores a 500 m2.',
]

// --- DATOS DEL RESTO DE DEPARTAMENTOS ---
const funcionesPlanificacion = [
  'Aportar criterio técnico en la formulación de los planes reguladores tanto territorial como zona marítimo terrestre.',
  'Participar en la formulación del plan de infraestructura municipal y en el plan de infraestructura vial.',
  'Elaborar informe de seguimiento del cumplimiento de los planes reguladores y planes de infraestructura.',
  'Establecer los estándares o condiciones mínimas de las carreteras o caminos que conforman la red vial cantonal.',
  'Programar, coordinar, supervisar y ejecutar las actividades relacionadas con la elaboración del Plan Regulador.',
]

const tramitesCatastro = [
  'Solicitud de Alineamiento',
  'Solicitud de Uso de Suelo',
  'Requisitos para Visados',
  'Requisitos para Resello',
  'Visto Bueno de Ubicación',
]

const tramitesZMT = [
  'Formulario de Solicitud de Concesión',
  'Formulario de información del solicitante',
]

const campañasAmbientales = [
  'Materiales que se reciben en campaña',
  'Calendario Anual Campañas Recolección Valorizables Limón',
  'Calendario Anual Campañas Recolección Valorizables Valle Estrella',
  'Calendario Anual Campañas Recolección de Llantas 2025',
  'Campaña Recolección Residuos Tecnológicos 2024',
]

function DireccionIngenieria() {
  return (
    <main>
      {/* Portada */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Gestión Municipal
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Dirección de Ingeniería
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Agrupa las áreas relacionadas con el desarrollo urbano, la
            planificación del territorio, la valoración de inmuebles y la
            gestión ambiental del cantón.
          </p>
        </div>
      </section>

      {/* Navegación interna */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 lg:px-8">
          {[
            ['Gestión Técnica y Estudio', '#tecnica-estudio'],
            ['Planificación y Control Urbano', '#control-urbano'],
            ['Zona Marítimo Terrestre', '#zmt'],
            ['Catastro y Bienes Inmuebles', '#catastro-bienes'],
            ['Gestión Ambiental', '#gestion-ambiental'],
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

      {/* 1. Gestión Técnica y Estudio */}
      <section id="tecnica-estudio" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Trámites de Construcción
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión Técnica y Estudio
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Se entenderán como obras generales toda obra que no sea de mantenimiento, abarcando desde tapias y ampliaciones hasta urbanizaciones y condominios.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <FileSearch size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Requisitos Obra Menor</h3>
              </div>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                {reqObraMenor.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <FileSearch size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Requisitos Obra Mayor</h3>
              </div>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                {reqObraMayor.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </article>
            
            <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Requisitos Especiales (Obra Mayor)</h3>
              <p className="text-sm text-slate-500 mb-4">Aplica para urbanizaciones, condominios, gasolineras, obras industriales, etc.</p>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                {requisitosEspeciales.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </article>

            <div className="flex flex-col gap-6">
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Aclaratorias Importantes</h3>
                <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                  {aclaratorias.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-center gap-3 mb-3 text-amber-900">
                  <AlertCircle size={20} />
                  <h4 className="font-bold">Aviso Legal</h4>
                </div>
                <p className="text-sm text-amber-800 leading-relaxed">
                  En cumplimiento de la Ley General de Administración Pública, la Municipalidad se reserva el derecho de solicitar documentación extra si fuera necesario, con su respectivo fundamento legal. Los trámites tienen un plazo de resolución de 10 días.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">Contacto Técnico</h4>
                <p className="mt-1 text-sm text-slate-600">Ing. Nicolas Simpson Edwards</p>
                <div className="mt-4 flex flex-col gap-3">
                  <a href="tel:+50627584444" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                    <Phone size={17} className="text-emerald-700" /> 2758-4444
                  </a>
                  <a href="mailto:nicolas.simpson@municlimon.go.cr" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                    <Mail size={17} className="text-emerald-700" /> nicolas.simpson@municlimon.go.cr
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Planificación Territorial y Control Urbano */}
      <section id="control-urbano" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Desarrollo Urbano
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Planificación Territorial y Control Urbano
          </h2>

          <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="border-b border-slate-200 p-7 md:p-9 bg-white">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Ruler size={24} />
                </div>
                <div>
                  <p className="mt-2 max-w-4xl leading-relaxed text-slate-600">
                    Su principal objetivo es elaborar, evaluar y actualizar, con participación social, el Plan Regulador del Cantón de Limón que establezca el ordenamiento territorial.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-7 md:p-9">
              <h4 className="text-lg font-bold text-slate-900">Principales funciones</h4>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                {funcionesPlanificacion.map((funcion, index) => (
                  <li key={index}>{funcion}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-slate-200 bg-white p-7 md:p-9">
              <h4 className="font-bold text-slate-900">Contacto</h4>
              <p className="mt-3 text-sm text-slate-600">Ing. Antonio Babb Reid</p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                <a href="tel:+50627584444" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                  <Phone size={17} className="text-emerald-700" /> 2758-4444
                </a>
                <a href="mailto:antonio.babb@muclimon.go.cr" className="inline-flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700">
                  <Mail size={17} className="shrink-0 text-emerald-700" /> antonio.babb@muclimon.go.cr
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 3. Zona Marítimo Terrestre */}
      <section id="zmt" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Zonas Costeras
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Zona Marítimo Terrestre
          </h2>

          <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Trees size={24} />
                </div>
                <div>
                  <p className="mt-2 max-w-4xl leading-relaxed text-slate-600">
                    Regula la administración de las zonas costeras a lo largo de los litorales en el Mar Caribe. La oficina tiene la competencia legal de velar directamente por el cumplimiento normativo en temas de dominio, desarrollo, aprovechamiento y uso de las zonas turísticas.
                  </p>
                  <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
                    Proporciona a los usuarios y concesionarios de la zona costera y del Estero de Puntarenas una alta calidad en los servicios, permitiendo un uso responsable y sostenible. Su objetivo es brindar confiabilidad y oportunidad en la información requerida, evaluar solicitudes conforme a la ley, y operar con eficiencia. Asimismo, vigila y tutela permanentemente las áreas bajo su administración para evitar usurpaciones.
                  </p>
                  <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
                    En esta oficina se brinda atención personalizada a la comunidad llevando a cabo trámites de concesiones, inspecciones de campo para fiscalizar construcciones y atención de denuncias. Ante actos contra el Bien Público, se levantan infracciones y/o procesos de demolición. También se preparan edictos, se solicitan avalúos a Tributación Directa, y se realiza el cobro del primer periodo por adelantado de las concesiones aprobadas.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-8 p-7 lg:grid-cols-2 md:p-9">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Formularios de solicitud</h4>
                <div className="mt-5 space-y-3">
                  {tramitesZMT.map((tramite, index) => (
                    <Link key={index} to="/formulario-no-disponible" className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 text-sm font-medium text-slate-700 hover:border-emerald-400 hover:bg-emerald-50">
                      {tramite} <Download size={17} className="shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Financiamiento y Normativa</h4>
                <div className="mt-5 rounded-xl bg-slate-50 p-6 border border-slate-100">
                  <p className="text-sm leading-relaxed text-slate-600">
                    Corresponden a los que anualmente designa la administración y son incluidos en los presupuestos, provenientes de los recursos recaudados por los cánones de uso de la Zona Marítimo Terrestre y de la Ley 4071.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-200 bg-slate-50 p-7 md:p-9">
              <h4 className="font-bold text-slate-900">Contacto</h4>
              <p className="mt-3 text-sm text-slate-600">Lic. Juan Carlos Barrantes</p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                <a href="tel:+50627584444" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                  <Phone size={17} className="text-emerald-700" /> 2758-4444
                </a>
                <a href="mailto:juan.barrantes@municlimon.go.cr" className="inline-flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700">
                  <Mail size={17} className="shrink-0 text-emerald-700" /> juan.barrantes@municlimon.go.cr
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 4. Catastro y Bienes Inmuebles */}
      <section id="catastro-bienes" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Propiedades
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Catastro y Bienes Inmuebles
          </h2>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Map size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Catastro</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Su principal objetivo es otorgar el visado de planos que indique la situación y cabida de las porciones resultantes de fraccionamientos para asegurar el cumplimiento del ordenamiento territorial.
                  </p>
                </div>
              </div>
              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">Formularios</h4>
                <div className="mt-4 space-y-3">
                  {tramitesCatastro.map((tramite, index) => (
                    <Link key={index} to="/formulario-no-disponible" className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 text-sm font-medium text-emerald-700 hover:bg-emerald-50">
                      {tramite} <Download size={16} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-auto border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">Contacto</h4>
                <p className="mt-3 text-sm text-slate-600">Erwin Amador</p>
                <div className="mt-3 space-y-3">
                  <a href="tel:+50627584444" className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                    <Phone size={17} className="shrink-0 text-emerald-700" /> 2758-4444 ext. 215
                  </a>
                  <a href="mailto:erwin.amador@municlimon.go.cr" className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                    <Mail size={17} className="shrink-0 text-emerald-700" /> erwin.amador@municlimon.go.cr
                  </a>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Landmark size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Bienes Inmuebles</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Determinar los valores reales de las propiedades del cantón para actualizar la información catastral y el cobro del impuesto sobre bienes inmuebles.
                  </p>
                </div>
              </div>
              <div className="mt-7 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">Declaración de bienes inmuebles</h4>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>Certificación Literal del Inmueble a declarar.</li>
                  <li>Copia plano Catastro y copia cédula de identidad.</li>
                  <li>Recibo de electricidad donde habita el dueño.</li>
                  <li>Personería si es persona jurídica.</li>
                </ul>
              </div>
              <div className="mt-auto border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">Contacto</h4>
                <p className="mt-3 text-sm text-slate-600">Orlando Chavarría</p>
                <div className="mt-3 space-y-3">
                  <a href="tel:+50627584444" className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                    <Phone size={17} className="shrink-0 text-emerald-700" /> 2758-4444 ext. 209 / 208
                  </a>
                  <a href="mailto:orlando.chavarria@municlimon.go.cr" className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                    <Mail size={17} className="shrink-0 text-emerald-700" /> orlando.chavarria@municlimon.go.cr
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Gestión Ambiental */}
      <section id="gestion-ambiental" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Sostenibilidad
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Gestión Ambiental
          </h2>

          <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            
            {/* Descripción */}
            <div className="border-b border-slate-200 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Leaf size={24} />
                </div>
                <div className="flex-1">
                  <p className="mt-2 max-w-4xl leading-relaxed text-slate-600">
                    Su principal objetivo es elaborar, ejecutar, evaluar y actualizar un Plan Municipal de Gestión Integral de Residuos Sólidos para el Cantón Central de Limón, que establezca las acciones locales y municipales para garantizar el adecuado manejo de los residuos, minimizando su impacto en la salud humana, los ecosistemas, el agua, el suelo, el aire y en el cambio climático.
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <p className="max-w-4xl leading-relaxed text-slate-600">
                      Entre las tareas que realiza destacan atender y dar seguimiento a las denuncias, quejas o solicitudes del contribuyente en temas de impacto ambiental dentro del cantón. Asimismo, elabora, ejecuta, evalúa y actualiza programas que involucren políticas de buenas prácticas ambientales, la educación, formación y generación de capacidades tanto en los funcionarios municipales como en toda la población para prevenir y mitigar impactos negativos.
                    </p>
                    <p className="max-w-4xl leading-relaxed text-slate-600">
                      Participa en las actividades relacionadas con la elaboración del Plan Regulador Urbano y de la Zona Marítimo Terrestre. Además, identifica y motiva la participación de actores sociales, conduce la elaboración y evalúa la efectividad del plan de gestión integral de residuos, así como de los diversos programas de gestión ambiental que se proponen e implementan institucionalmente.
                    </p>
                    <p className="max-w-4xl leading-relaxed text-slate-600">
                      Adicionalmente, esta dirección coordina, supervisa y ejecuta diversos procesos tendientes a implementar políticas ambientales, diseña proyectos de recuperación y participación social, mantiene un banco de datos de indicadores y coordina la capacitación a diversos sectores cantonales. Por último, realiza inspecciones específicas junto con control urbano, atiende quejas en el sitio sobre emisiones, basura o malos olores, fomenta la educación ambiental y coordina planes integrales de residuos sólidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilares y Campañas */}
            <div className="grid gap-8 p-7 lg:grid-cols-2 md:p-9 bg-slate-50">
              <div className="flex flex-col">
                <h4 className="text-lg font-bold text-slate-900">Comité Coordinador y Pilares</h4>
                <div className="mt-4 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                  <p className="text-sm text-slate-600">
                    <strong>Reuniones:</strong> Segundos Martes del mes, hora 9:00 a.m. en el Concejo Municipal.
                  </p>
                  <p className="mt-3 text-sm text-slate-600 font-semibold">Pilares de acción:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    <li>Voluntariado y Capacitación</li>
                    <li>Campañas ambientales</li>
                    <li>Organización comunal</li>
                  </ul>
                </div>
                
                <a 
                  href="https://www.municlimon.go.cr/residuosmarinos_cegesti/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full justify-center items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                >
                  Ir al portal de Residuos Marinos <ExternalLink size={18} />
                </a>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Campañas y Materiales</h4>
                <div className="mt-4 space-y-3">
                  {campañasAmbientales.map((campaña, index) => (
                    <Link key={index} to="/formulario-no-disponible" className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-3 text-sm font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-700 shadow-sm">
                      <span className="truncate">{campaña}</span>
                      <Download size={16} className="shrink-0 text-emerald-700" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contactos */}
            <div className="border-t border-slate-200 bg-white p-7 md:p-9">
              <h4 className="font-bold text-slate-900 mb-5">Contactos</h4>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-semibold text-slate-800">Comité GIRS Limón</p>
                  <a href="mailto:comitegirslimon@gmail.com" className="mt-2 flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-700">
                    <Mail size={16} className="text-emerald-700" /> comitegirslimon@gmail.com
                  </a>
                  <a href="tel:+50627584444" className="mt-2 flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-700">
                    <Phone size={16} className="text-emerald-700" /> 2758-4444 ext. 310
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Lic. Juan Carlos Barrantes</p>
                  <a href="mailto:juan.barrantes@municlimon.go.cr" className="mt-2 flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-700">
                    <Mail size={16} className="text-emerald-700" /> juan.barrantes@municlimon.go.cr
                  </a>
                  <a href="tel:+50627584444" className="mt-2 flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-700">
                    <Phone size={16} className="text-emerald-700" /> 2758-4444
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

    </main>
  )
}

export default DireccionIngenieria