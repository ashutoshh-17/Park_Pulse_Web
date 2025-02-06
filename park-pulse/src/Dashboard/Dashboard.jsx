"use client"

import { motion } from "framer-motion"
import { Car, CreditCard, Camera, Calendar, ParkingSquare } from 'lucide-react'

const features = [
  {
    name: "Show Slots",
    icon: ParkingSquare,
    description: "View available parking spots in real-time",
  },
  {
    name: "Reservation",
    icon: Calendar,
    description: "Book your parking spot in advance",
  },
  {
    name: "Find your Car",
    icon: Car,
    description: "Locate your parked vehicle easily",
  },
  {
    name: "Live Camera",
    icon: Camera,
    description: "Monitor your vehicle through security cameras",
  },
  {
    name: "Payment",
    icon: CreditCard,
    description: "Secure and convenient payment options",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Dashboard() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <div className="mb-8 inline-block rounded-lg bg-[#1a2e35] p-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            PARK PULSE
          </h1>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Welcome User!
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.name}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-lg bg-muted/60 p-4 transition-colors hover:bg-muted"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-primary/20" />
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}