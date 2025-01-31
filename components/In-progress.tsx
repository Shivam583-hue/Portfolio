"use client"

import { useState, useEffect } from "react"
import { AlertCircle } from "lucide-react"

export default function InProgressBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "." : prevDots + "."))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-4 flex items-center justify-between text-sm shadow-md transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-2">
        <AlertCircle className="h-4 w-4" />
        <span className="font-medium">Website in Progress{dots}</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-white hover:text-gray-200 transition-colors duration-200"
        aria-label="Close banner"
      >
        &times;
      </button>
    </div>
  )
}

