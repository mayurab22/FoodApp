import React from 'react'
import { motion } from "framer-motion";


function SlidingModal() {
  return (
    <div><motion.div
    initial={{ x: "100%" }}
    animate={{ x: isOpen ? "0%" : "100%" }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
    className={`fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg z-50 p-6`}
  >
    {children}
  </motion.div></div>
  )
}

export default SlidingModal