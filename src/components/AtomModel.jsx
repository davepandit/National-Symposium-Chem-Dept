import { motion } from "framer-motion"

const AtomModel = () => {
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  return (
    <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute opacity-50">
      {/* Nucleus */}
      <g className="nucleus">
        <circle cx="200" cy="200" r="20" fill="#4299E1" className="glow" />
        <circle cx="210" cy="190" r="15" fill="#63B3ED" className="glow" />
        <circle cx="195" cy="205" r="12" fill="#90CDF4" className="glow" />
      </g>

      {/* Electron Orbits */}
      <g className="orbits">
        <motion.g variants={orbitVariants} animate="animate">
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="#4299E1" strokeWidth="1" className="glow" />
          <circle cx="380" cy="200" r="5" fill="#4299E1" className="glow" />
        </motion.g>
        <motion.g variants={orbitVariants} animate="animate">
          <ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="180"
            fill="none"
            stroke="#63B3ED"
            strokeWidth="1"
            className="glow"
            transform="rotate(60 200 200)"
          />
          <circle cx="200" cy="380" r="5" fill="#63B3ED" className="glow" transform="rotate(60 200 200)" />
        </motion.g>
        <motion.g variants={orbitVariants} animate="animate">
          <ellipse
            cx="200"
            cy="200"
            rx="150"
            ry="100"
            fill="none"
            stroke="#90CDF4"
            strokeWidth="1"
            className="glow"
            transform="rotate(-60 200 200)"
          />
          <circle cx="350" cy="200" r="5" fill="#90CDF4" className="glow" transform="rotate(-60 200 200)" />
        </motion.g>
      </g>
    </svg>
  )
}

export default AtomModel

