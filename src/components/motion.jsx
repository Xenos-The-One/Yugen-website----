import { useEffect, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion'

export const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const FadeInEase = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

const offsets = { up: { y: 40, x: 0 }, left: { x: 40, y: 0 }, right: { x: -40, y: 0 } }

export const SlideIn = ({ children, delay = 0, className = '', direction = 'up' }) => (
  <motion.div
    initial={{ opacity: 0, ...offsets[direction] }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7, delay, type: 'spring', bounce: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
)

export const Tilt = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={className}
  >
    {children}
  </motion.div>
)

export const Counter = ({ from, to, duration, prefix = '', suffix = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`
      },
    })
    return () => controls.stop()
  }, [from, to, duration, inView, prefix, suffix])
  return (
    <span ref={ref}>
      {prefix}
      {from.toLocaleString()}
      {suffix}
    </span>
  )
}
