import { useReducedMotion } from '../hooks/useReducedMotion'

export function MinecraftBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className={`world-background${reducedMotion ? ' world-background--still' : ''}`}
      aria-hidden="true"
    >
      <div className="world-background__mist" />
      <span className="floating-block floating-block--one" />
      <span className="floating-block floating-block--two" />
      <span className="floating-block floating-block--three" />
    </div>
  )
}
