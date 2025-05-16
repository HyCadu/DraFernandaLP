"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="w-full py-8 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-4 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-sky-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex flex-col items-center lg:items-start">
                  <Image
                    src="/images/logo.png"
                    alt="Dra. Fernanda Piumbini - Ortopedia Pediátrica"
                    width={500}
                    height={120}
                    className="mb-4 max-w-[280px] sm:max-w-[350px] md:max-w-full"
                  />
                </div>
              </motion.h1>
              <motion.p
                className="text-sky-600 font-medium text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                CRM 00000 | RQE 00000
              </motion.p>
              <motion.p
                className="text-gray-500 text-base md:text-xl mx-auto lg:mx-0 max-w-[600px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Especialista em Ortopedia e Traumatologia Infantil e Doenças Neuromusculares
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="#agendar">Agende sua consulta</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 w-full sm:w-auto">
                  <Link href="#tratamentos">Conheça os tratamentos</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 0.3,
            }}
          >
            <motion.div
              className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-8 border-white shadow-xl"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5hgvqHp3jYgWGElppWnVj6HOCBqY2l.png"
                alt="Dra. Fernanda Piumbini"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
