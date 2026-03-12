import { useEffect, useRef, useState } from "react"

export default function VantaHero() {
  const ref = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (vantaEffect) return

    let mounted = true

    async function initVanta() {
      try {
        const THREE = await import("three")
        const WAVES = (await import("vanta/dist/vanta.waves.min")).default

        if (!mounted || !ref.current) return

        const effect = WAVES({
          el: ref.current,
          THREE,
          color: 0x0a1628,
          shininess: 35,
          waveHeight: 15,
          waveSpeed: 0.5,
          zoom: 0.8,
          mouseControls: true,
          touchControls: false,
          minHeight: 200,
          minWidth: 200,
        })
        setVantaEffect(effect)
      } catch (e) {
        // Vanta failed to load — silent fallback (dark bg shows through)
      }
    }

    initVanta()
    return () => {
      mounted = false
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0"
      style={{ background: "linear-gradient(135deg, #0a0f1a, #0f1729, #0a1628)" }}
    />
  )
}
