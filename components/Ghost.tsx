import { motion } from "framer-motion"

export const Ghost = () => {
  return (
    <motion.div
      className="fixed bottom-0 right-0 w-16 sm:w-24 md:w-32 opacity-70 pointer-events-none z-50"
      initial={{ y: "100%", opacity: 0 }}
      animate={{
        y: [100, -10, 0],
        opacity: [0, 1, 0.7],
        rotate: [0, -5, 5, -5, 0],
      }}
      transition={{
        duration: 3,
        times: [0, 0.6, 1],
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 7,
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50 3C25.7 3 6 22.7 6 47v50l14-15 10 10 10-10 10 10 10-10 10 10 14-15V47C84 22.7 74.3 3 50 3z"
          fill="#ffffff"
        />
        <circle cx="35" cy="40" r="5" fill="#000000" />
        <circle cx="65" cy="40" r="5" fill="#000000" />
        <path d="M40 60c0 5.5 4.5 10 10 10s10-4.5 10-10H40z" fill="#000000" />
      </svg>
    </motion.div>
  )
}

