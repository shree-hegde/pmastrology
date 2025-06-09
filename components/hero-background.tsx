"use client"
import { motion } from "framer-motion"

interface HeroBackgroundProps {
  title: string
  description?: string
  height?: string
}

export function HeroBackground({ title, description, height = "py-16 md:py-24" }: HeroBackgroundProps) {
  return (
    <section className={`relative ${height}`}>
      <div className="absolute inset-0 overflow-hidden">
        {/* Clean gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 to-purple-50/70 dark:from-gray-900/80 dark:to-purple-950/80"></div>

        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute -right-[30%] -top-[20%] w-[80%] h-[80%] animate-[spin_240s_linear_infinite]">
            <div className="w-full h-full rounded-full border-2 border-amber-300/30 dark:border-amber-500/30"></div>
          </div>
          <div className="absolute -left-[10%] -bottom-[10%] w-[40%] h-[40%] animate-[spin_180s_linear_infinite_reverse]">
            <div className="w-full h-full rounded-full border-2 border-purple-300/30 dark:border-purple-500/30"></div>
          </div>
        </div>
      </div>

      <div className="container relative px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-5xl">
              {title}
            </h1>
            {description && <p className="mb-8 text-lg text-purple-700 dark:text-purple-300">{description}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
