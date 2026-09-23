import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Flower2,
  HardHat,
  Mail,
  MapPin,
  Phone,
  Route,
  Trash2,
  TreePine,
} from 'lucide-react'

// --- DATOS EXTRAÍDOS DE LAS IMÁGENES ---

const tareasResiduos = [
  'Brindar servicios de recolección de residuos ordinarios a la población limonense y garantizar su adecuada disposición final con el propósito de reducir al máximo su impacto ambiental y sanitario .',
  'Realizar las labores de campo para la recolección de residuos ordinarios, según rutas programadas .',
  'Brindar servicios de recolección de residuos valorizables a la población limonense y garantizar su adecuada disposición final con el propósito de promover su reutilización o reciclaje para reducir al máximo su impacto ambiental .',
]

const rutasResiduos = [
  'Ruta los días lunes y jueves ',
  'Ruta los días martes y viernes ',
  'Ruta los días miércoles ',
  'Ruta los días sábado ',
]

const funcionesObras = [
  'Formular los proyectos para construcción o mantenimiento de obras que facilitan el quehacer municipal con el propósito de establecer claramente el alcance, nivel de calidad aceptable, tiempo de ejecución y recursos asignados de manera que apoyen el cumplimiento del programa de proyectos .',
  'Ejecutar y dar seguimiento a los proyectos para construcción o mantenimiento de obras que facilitan el quehacer municipal, con el propósito de garantizar que los mismos se ejecuten bajo estándares de calidad, en el tiempo y costo establecido .',
  'Elaborar y dar seguimiento al programa de proyectos para construcción o mantenimiento de obras de conservación de caminos para garantizar que los mismos se encuentren alineados con el Plan de Infraestructura Municipal y el Plan de Gestión Vial .',
  'Formular los proyectos para construcción o mantenimiento de obras de conservación de caminos con el propósito de establecer claramente el alcance, nivel de calidad aceptable, tiempo de ejecución y recursos asignados .',
  'Ejecutar y dar seguimiento a los proyectos para construcción o mantenimiento de obras de conservación de caminos, con el propósito de garantizar que los mismos se ejecuten bajo estándares de calidad, en el tiempo y costo establecido .',
]

const funcionesVial = [
  'Mantener un inventario actualizado del estado de la infraestructura vial del cantón, con el propósito de priorizar, con evidencia, el uso de los recursos para conservación, mantenimiento rutinario, mantenimiento periódico, mejoramiento y rehabilitación según las necesidades del cantón .',
  'Elaborar y dar seguimiento al programa de proyectos para construcción o mantenimiento de infraestructura vial, con los recursos asignados por medio de la Ley 8114 y la Ley 9329 de Transferencia y Competencias, para garantizar que se encuentren alineados con el Plan de Gestión Vial .',
  'Formular los proyectos para construcción o mantenimiento de infraestructura vial con el propósito de establecer claramente el alcance, nivel de calidad aceptable, tiempo de ejecución y recursos asignados .',
  'Ejecutar y dar seguimiento a los proyectos para construcción o mantenimiento de infraestructura vial, con el propósito de garantizar que los mismos se ejecuten bajo estándares de calidad .',
  'Realizar las actividades operativas correspondientes a la Municipalidad para construir y dar mantenimiento a la infraestructura vial utilizando los recursos de la Ley 8114 y la Ley 9329 .',
  'Brindar soluciones a las necesidades de infraestructura vial que demanda la comunidad, ya sea por medio de intervenciones en tramos y vías o por medio de préstamo de maquinaria .',
  'Realizar la demarcación horizontal y vertical de la Red Vial del cantón de Limón (excepto las vías que son parte de la Red Vial Nacional) con el propósito de garantizar la seguridad vial de sus habitantes y la sana convivencia, incluida la demarcación para el funcionamiento de los parquímetros .',
]

function DireccionOperaciones() {
  return (
    <main>
      {/* Portada */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Gestión Municipal
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Dirección de Operaciones y Proyectos
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Conozca los servicios de mantenimiento cantonal, ornato, infraestructura pública y gestión integral de la red vial de Limón.
          </p>
        </div>
      </section>

      {/* Navegación interna */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 lg:px-8">
          {[
            ['Recolección de Residuos', '#residuos'],
            ['Aseo de Vías Públicas', '#aseo-vias'],
            ['Parques', '#parques'],
            ['Obras Municipales', '#obras'],
            ['Gestión Vial Municipal', '#vial'],
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

      {/* 1. Recolección de Residuos Sólidos */}
      <section id="residuos" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Salubridad y Aseo
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Recolección de Residuos Sólidos
          </h2>

          <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Trash2 size={24} />
                </div>
                <div>
                  <p className="mt-2 max-w-4xl leading-relaxed text-slate-600">
                    Su principal objetivo es mantener en buen estado mecánico los medios de transporte que funcionan para ofrecer los servicios municipales, de manera que se pueda ofrecer un servicio continuo .
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 p-7 lg:grid-cols-2 md:p-9">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Tareas destacadas</h4>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                  {tareasResiduos.map((tarea, index) => (
                    <li key={index}>{tarea}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Rutas de Recolección</h4>
                <div className="mt-5 space-y-3">
                  {rutasResiduos.map((ruta, index) => (
                    <div key={index} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                      <MapPin size={17} className="text-emerald-700 shrink-0" />
                      {ruta}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-7 md:p-9">
              <h4 className="font-bold text-slate-900">Contacto</h4>
              <p className="mt-3 text-sm text-slate-600">Joselee Rojas </p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                <a href="tel:+50627970077" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                  <Phone size={17} className="text-emerald-700" />
                  2797-0077 
                </a>
                <a href="mailto:joselee.rojas@municlimon.go.cr" className="inline-flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700">
                  <Mail size={17} className="shrink-0 text-emerald-700" />
                  joselee.rojas@municlimon.go.cr 
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 2 & 3. Aseo de Vías Públicas y Parques */}
      <section id="aseo-vias" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Ornato y Embellecimiento
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Aseo de Vías Públicas y Parques
          </h2>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            
            {/* Aseo de Vías Públicas */}
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <TreePine size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Aseo de Vías Públicas</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Su principal objetivo es brindar servicios de limpieza y ornato de parques con el propósito de prevenir y controlar la contaminación ambiental, así como preservar el embellecimiento del cantón .
                  </p>
                </div>
              </div>
              
              <div className="mt-auto border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">Contacto</h4>
                <p className="mt-3 text-sm text-slate-600">Víctor Díaz </p>
                <div className="mt-3 space-y-3">
                  <a href="tel:+50627970077" className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                    <Phone size={17} className="shrink-0 text-emerald-700" /> 2797-0077 
                  </a>
                  <a href="mailto:victor.diaz@municlimon.go.cr" className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                    <Mail size={17} className="shrink-0 text-emerald-700" /> victor.diaz@municlimon.go.cr 
                  </a>
                </div>
              </div>
            </article>

            {/* Parques */}
            <article id="parques" className="scroll-mt-24 flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Flower2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Parques</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Constituyen zonas públicas de esparcimiento. Los parques más importantes de Limón son el Parque Balvanero Vargas, Parque los Baños y el Parquecito Asís Esna, los cuales están cercanos al casco central del cantón de Limón .
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    En todas estas áreas el municipio realiza labores de mantenimiento y ornato para que sean lugares actos para el uso diario de los limonenses y visitantes .
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Además, existen otros parques en los que el municipio brinda mantenimiento, dichos parques se encuentran en las diferentes comunidades y pueden ser atendidos siempre y cuando sean áreas públicas, es decir que pertenezcas catastralmente al municipio o bien a una Asociación de Desarrollo .
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* 4. Proyectos de Obras Municipales */}
      <section id="obras" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Infraestructura
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Proyectos de Obras Municipales
          </h2>

          <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <HardHat size={24} />
                </div>
                <div>
                  <p className="mt-2 max-w-4xl leading-relaxed text-slate-600">
                    Su principal objetivo es elaborar, evaluar y actualizar un plan que permita construir o mantener la infraestructura cantonal necesaria para promover el desarrollo cultural, social y económico acorde con los objetivos del Plan de Desarrollo Humano Cantonal, los planes reguladores, así como con los planes nacionales cuando corresponda .
                  </p>
                  <p className="mt-3 max-w-4xl leading-relaxed text-slate-600">
                    Elaborar y dar seguimiento al programa de proyectos para construcción o mantenimiento de obras que facilitan el quehacer municipal para garantizar que los mismos se encuentren alineados con el Plan de Infraestructura Municipal .
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-9">
              <h4 className="text-lg font-bold text-slate-900">Funciones asignadas</h4>
              <ul className="mt-5 list-none space-y-4">
                {funcionesObras.map((funcion, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-700 mt-0.5" />
                    {funcion}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/proyectos" className="inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800">
                  Consultar portafolio de obras destacadas
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-7 md:p-9">
              <h4 className="font-bold text-slate-900">Contacto</h4>
              <p className="mt-3 text-sm text-slate-600">Dwigth Brown </p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                <a href="tel:+50627970076" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                  <Phone size={17} className="text-emerald-700" />
                  2797-0076 
                </a>
                <a href="mailto:dwight.brown@municlimon.go.cr" className="inline-flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700">
                  <Mail size={17} className="shrink-0 text-emerald-700" />
                  dwight.brown@municlimon.go.cr 
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 5. Unidad Técnica de Gestión Vial Municipal */}
      <section id="vial" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Red Vial Cantonal
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Unidad Técnica de Gestión Vial Municipal
          </h2>

          <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="border-b border-slate-200 p-7 md:p-9 bg-white">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Route size={24} />
                </div>
                <div>
                  <p className="mt-2 max-w-4xl leading-relaxed text-slate-600">
                    Su principal objetivo es elaborar, evaluar y actualizar un plan que permita construir o mantener la infraestructura vial necesaria para promover el desarrollo cultural, social y económico, acorde con los objetivos del Plan de Desarrollo Humano Cantonal, los planes reguladores, así como con los planes nacionales cuando corresponda .
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-9 bg-white">
              <h4 className="text-lg font-bold text-slate-900">Funciones operativas</h4>
              <ul className="mt-5 list-none space-y-4">
                {funcionesVial.map((funcion, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-700 mt-0.5" />
                    {funcion}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-7 md:p-9">
              <h4 className="font-bold text-slate-900">Contacto</h4>
              <p className="mt-3 text-sm text-slate-600">Yerlin Aguilar</p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                <a href="tel:+50627970113" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                  <Phone size={17} className="text-emerald-700" />
                  2797-0113
                </a>
                <a href="mailto:yerlin.aguilar@municlimon.go.cr" className="inline-flex items-center gap-2 break-all text-sm text-slate-700 hover:text-emerald-700">
                  <Mail size={17} className="shrink-0 text-emerald-700" />
                  yerlin.aguilar@municlimon.go.cr
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

    </main>
  )
}

export default DireccionOperaciones