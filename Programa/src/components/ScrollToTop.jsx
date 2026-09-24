import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Si el enlace apunta a una sección específica,
    // por ejemplo: /direccion-administrativa#servicio-cliente
    if (hash) {
      const elemento = document.getElementById(
        decodeURIComponent(hash.slice(1))
      )

      elemento?.scrollIntoView({ behavior: 'instant' })
      return
    }

    // Si cambiamos de página, volvemos al inicio.
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default ScrollToTop
