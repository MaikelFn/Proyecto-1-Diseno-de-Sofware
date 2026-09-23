import { useState } from 'react'
import { Search, FileText, Printer, Calendar, DollarSign, User, FileCode, AlertCircle } from 'lucide-react'

function Consulta() {
  const [cedula, setCedula] = useState('')
  const [tipoConsulta, setTipoConsulta] = useState('parcial')
  const [busquedaRealizada, setBusquedaRealizada] = useState(false)
  const [errorCedula, setErrorCedula] = useState(false)

  const manejarBusqueda = (e) => {
    e.preventDefault()
    
    // Validar cédula
    if (cedula.trim() === '') {
      setErrorCedula(true)
      setBusquedaRealizada(false)
      return
    }

    // Si pasa la validación
    setErrorCedula(false)
    setBusquedaRealizada(true)
  }

  // Datos dinámicos según el tipo de consulta seleccionado
  const datosResultado = tipoConsulta === 'anual' ? {
    totalPagar: '45,000.00',
    vencimiento: '02/11/2026',
    periodo: '20260112',
    convenio: '002'
  } : {
    totalPagar: '15,000.00',
    vencimiento: '30/06/2026',
    periodo: '20260101',
    convenio: '001'
  }

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      
      {/* Encabezado de la página */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Trámites en línea
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Consulta de Pendiente de Cobro
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Consulte sus pendientes de cobro y mantenga al día sus obligaciones con la municipalidad en pocos pasos.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8">
          
          {/* Tarjeta del Formulario */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Pendiente de Cobro</h2>
            </div>

            <form onSubmit={manejarBusqueda} className="space-y-6">
              
              {/* Campo para la cédula */}
              <div>
                <label htmlFor="cedula" className="block text-sm font-semibold text-slate-700 mb-2">
                  Número de Cédula (Física o Jurídica) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="cedula"
                  value={cedula}
                  onChange={(e) => {
                    setCedula(e.target.value)
                    if (e.target.value.trim() !== '') setErrorCedula(false)
                  }}
                  placeholder="Ej. 701230456 o 3101123456"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 outline-none focus:ring-2 ${
                    errorCedula 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-200 bg-red-50/20' 
                      : 'border-slate-300 focus:border-emerald-600 focus:ring-emerald-600'
                  }`}
                />
                
                {/* Mensaje de error en rojo si está vacío */}
                {errorCedula ? (
                  <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-red-600 animate-fadeIn">
                    <AlertCircle size={15} />
                    <span>El número de cédula es obligatorio para realizar la consulta.</span>
                  </div>
                ) : (
                  <span className="mt-1.5 block text-xs text-slate-500">
                    Digite el número de identificación sin guiones ni espacios.
                  </span>
                )}
              </div>

              {/* Opciones de tipo de consulta */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Tipo de Consulta <span className="text-red-500">*</span>
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  
                  <label className={`flex cursor-pointer items-start rounded-xl border-2 p-4 transition-all ${tipoConsulta === 'parcial' ? 'border-emerald-600 bg-emerald-50/40' : 'border-slate-200 hover:border-slate-300'}`}>
                    <input
                      type="radio"
                      name="tipoConsulta"
                      value="parcial"
                      checked={tipoConsulta === 'parcial'}
                      onChange={() => setTipoConsulta('parcial')}
                      className="mt-1 text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-bold text-slate-900">Parcial</span>
                      <span className="mt-0.5 block text-xs text-slate-500 leading-relaxed">Muestra únicamente los rubros vencidos o pendientes específicos.</span>
                    </div>
                  </label>

                  <label className={`flex cursor-pointer items-start rounded-xl border-2 p-4 transition-all ${tipoConsulta === 'anual' ? 'border-emerald-600 bg-emerald-50/40' : 'border-slate-200 hover:border-slate-300'}`}>
                    <input
                      type="radio"
                      name="tipoConsulta"
                      value="anual"
                      checked={tipoConsulta === 'anual'}
                      onChange={() => setTipoConsulta('anual')}
                      className="mt-1 text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-bold text-slate-900">Anual</span>
                      <span className="mt-0.5 block text-xs text-slate-500 leading-relaxed">Muestra el detalle completo de todo el periodo fiscal en curso.</span>
                    </div>
                  </label>

                </div>
              </div>

              {/* Botón de búsqueda */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 cursor-pointer"
                >
                  <Search size={18} />
                  Consultar Estado
                </button>
              </div>

            </form>
          </div>

          {/* Resultados Simulados */}
          {busquedaRealizada && (
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden animate-fadeIn">
              
              <div className="bg-slate-900 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white">Información consultada</h3>
                  <p className="text-xs text-slate-300">
                    Cédula: <span className="font-semibold text-white">{cedula.trim()}</span>
                  </p>
                </div>
                {/* Botón de imprimir */}
                <button 
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <Printer size={15} />
                  Imprimir
                </button>
              </div>

              <div className="p-8 space-y-6">
                
                <div className="space-y-4">
                  
                  {/* Contribuyente */}
                  <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                        <User size={20} />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-800">Nombre del contribuyente</span>
                        <span className="text-base font-bold text-slate-900">CONTRIBUYENTE DE PRUEBA</span>
                      </div>
                    </div>
                  </div>

                  {/* Cuadrícula de detalles */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    
                    {/* Total a Pagar */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <DollarSign size={18} className="text-emerald-600" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Total a pagar</span>
                      </div>
                      <span className="text-xl font-bold text-slate-900">₡ {datosResultado.totalPagar}</span>
                    </div>

                    {/* Vencimiento */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <Calendar size={18} className="text-emerald-600" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Vencimiento</span>
                      </div>
                      <span className="text-xl font-bold text-slate-900">{datosResultado.vencimiento}</span>
                    </div>

                    {/* Periodo y Convenio */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <FileCode size={18} className="text-emerald-600" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Periodo / Convenio</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900">{datosResultado.periodo}</span>
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                          Conv. {datosResultado.convenio}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">
                  Información del recibo
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

    </main>
  )
}

export default Consulta