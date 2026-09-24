import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  Accessibility,
  Link2,
  Minus,
  Plus,
  RotateCcw,
  X,
  ZapOff,
} from 'lucide-react'

const ajustesIniciales = {
  tamanoTexto: 100,
  reducirMovimiento: false,
  resaltarEnlaces: false,
}

function Accesibilidad() {
  const [abierto, setAbierto] = useState(false)

  const [ajustes, setAjustes] = useState(() => {
    try {
      const guardados = localStorage.getItem('ajustes-accesibilidad')
      return guardados
        ? { ...ajustesIniciales, ...JSON.parse(guardados) }
        : ajustesIniciales
    } catch {
      return ajustesIniciales
    }
  })

  useEffect(() => {
    const raiz = document.documentElement

    raiz.style.setProperty(
      '--escala-texto',
      ajustes.tamanoTexto / 100
    )

    raiz.classList.toggle(
      'reducir-movimiento',
      ajustes.reducirMovimiento
    )

    raiz.classList.toggle(
      'resaltar-enlaces',
      ajustes.resaltarEnlaces
    )

    try {
      localStorage.setItem(
        'ajustes-accesibilidad',
        JSON.stringify(ajustes)
      )
    } catch {
      // El sitio sigue funcionando si el navegador no permite guardar.
    }
  }, [ajustes])

  useEffect(() => {
    function cerrarConEscape(evento) {
      if (evento.key === 'Escape') {
        setAbierto(false)
      }
    }

    document.addEventListener('keydown', cerrarConEscape)

    return () => {
      document.removeEventListener('keydown', cerrarConEscape)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('alto-contraste')
  }, [])

  function cambiarAjuste(nombre) {
    setAjustes((actuales) => ({
      ...actuales,
      [nombre]: !actuales[nombre],
    }))
  }

  function cambiarTexto(cantidad) {
    setAjustes((actuales) => ({
      ...actuales,
      tamanoTexto: Math.min(
        150,
        Math.max(100, actuales.tamanoTexto + cantidad)
      ),
    }))
  }

  return createPortal(
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 99999,
      }}
    >
      {abierto && (
        <div
          id="panel-accesibilidad"
          role="region"
          aria-label="Opciones de accesibilidad"
          className="mb-3 w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold">
              Accesibilidad
            </h2>

            <button
              type="button"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar panel de accesibilidad"
              className="rounded-lg p-2 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              <X size={20} />
            </button>
          </div>

          <p className="mt-2 text-sm text-slate-600">
            Ajustá la visualización del sitio según tus necesidades.
          </p>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="font-semibold">
              Tamaño del texto
            </p>

            <div className="mt-3 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => cambiarTexto(-10)}
                disabled={ajustes.tamanoTexto === 100}
                aria-label="Reducir tamaño del texto"
                className="rounded-lg border border-slate-200 p-2 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Minus size={19} />
              </button>

              <span className="font-semibold tabular-nums">
                {ajustes.tamanoTexto}%
              </span>

              <button
                type="button"
                onClick={() => cambiarTexto(10)}
                disabled={ajustes.tamanoTexto === 150}
                aria-label="Aumentar tamaño del texto"
                className="rounded-lg border border-slate-200 p-2 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Plus size={19} />
              </button>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <button
              type="button"
              onClick={() => cambiarAjuste('reducirMovimiento')}
              aria-pressed={ajustes.reducirMovimiento}
              className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 text-left hover:bg-slate-50"
            >
              <span className="flex items-center gap-3">
                <ZapOff size={20} />
                Reducir animaciones
              </span>

              <span className="text-sm font-semibold text-emerald-700">
                {ajustes.reducirMovimiento ? 'Activado' : 'Desactivado'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => cambiarAjuste('resaltarEnlaces')}
              aria-pressed={ajustes.resaltarEnlaces}
              className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 text-left hover:bg-slate-50"
            >
              <span className="flex items-center gap-3">
                <Link2 size={20} />
                Resaltar enlaces
              </span>

              <span className="text-sm font-semibold text-emerald-700">
                {ajustes.resaltarEnlaces ? 'Activado' : 'Desactivado'}
              </span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setAjustes(ajustesIniciales)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white hover:bg-slate-800"
          >
            <RotateCcw size={18} />
            Restablecer ajustes
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setAbierto((actual) => !actual)}
        aria-label={
          abierto
            ? 'Cerrar opciones de accesibilidad'
            : 'Abrir opciones de accesibilidad'
        }
        aria-expanded={abierto}
        aria-controls="panel-accesibilidad"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-xl transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
      >
        <Accessibility size={29} />
      </button>
    </div>,
    document.body
  )
}

export default Accesibilidad
