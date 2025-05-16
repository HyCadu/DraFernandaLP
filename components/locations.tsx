"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function Locations() {
  const locations = [
    {
      name: "Hospital Meridional",
      address: "R. Meridional, 200 - 2º andar - Alto Lage, Cariacica - ES",
      phone: "(27) 3333-3333",
      schedule: "Segunda a Sexta: 8h às 18h",
      image: "/images/hospital-meridional.png",
    },
    {
      name: "Instituto Santa Mônica Ortopedia e Traumatologia",
      address: "R. Prof. Augusto Rusch, 600 - Praia de Itaparica, Vila Velha - ES",
      phone: "(27) 3333-4444",
      schedule: "Terça e Quinta: 8h às 18h",
      image: "/images/clinica-ismot.png",
    },
  ]

  return (
    <section id="locais" className="w-full py-2 md:py-24 bg-beige-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
            Locais de Atendimento
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Atendemos em duas unidades para sua maior comodidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="w-full"
            >
              <Card className="h-full border-sky-100 hover:shadow-xl transition-all duration-300">
                <Image
                  src={location.image}
                  alt={`Imagem do ${location.name}`}
                  width={400}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-2xl text-sky-800 flex items-center gap-2">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      <MapPin className="h-5 w-5 text-sky-600" />
                    </motion.div>
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{location.address}</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4 text-sky-600" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-sky-600" />
                    <span>{location.schedule}</span>
                  </div>
                  <div className="pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white shadow-md">
                        <Link href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                          Agendar Consulta
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
