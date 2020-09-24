import { useEffect } from 'react'

export function useOnClickOutside(
  ref: React.MutableRefObject<any>,
  handler: (event: CustomEvent) => void
) {
  useEffect(() => {
    const listener = (event: CustomEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener as EventListener)
    document.addEventListener('touchstart', listener as EventListener)

    return () => {
      document.removeEventListener('mousedown', listener as EventListener)
      document.removeEventListener('touchstart', listener as EventListener)
    }
  }, [ref, handler])
}
