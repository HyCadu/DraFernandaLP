"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, MessageCircle } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import { Locations } from "@/components/locations"
import { AboutMe } from "@/components/about-me"
import { Treatments } from "@/components/treatments"
import { Hero } from "@/components/hero"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />

      <motion.section
        id="intro"
        className="w-full py-12 md:py-24 bg-sky-50 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Pediatric/medical and playful icons as decorative backgrounds */}
        <span className="pointer-events-none absolute -top-10 -left-10 opacity-10 text-sky-300" aria-hidden>
          {/* Medical cross icon */}
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="pointer-events-none absolute -bottom-10 -right-10 opacity-10 text-yellow-300" aria-hidden>
          {/* Teddy bear icon (playful/toy) */}
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
        <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="12" cy="15" rx="7" ry="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="15" r="2" fill="currentColor"/>
        <ellipse cx="9.5" cy="13.5" rx="1" ry="1.5" fill="currentColor"/>
        <ellipse cx="14.5" cy="13.5" rx="1" ry="1.5" fill="currentColor"/>
          </svg>
        </span>
        <span className="pointer-events-none absolute top-8 right-8 opacity-10 text-green-300" aria-hidden>
          {/* Stethoscope icon */}
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
        <path d="M6 3v6a6 6 0 0 0 12 0V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 17v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="pointer-events-none absolute bottom-8 left-8 opacity-10 text-pink-300" aria-hidden>
          {/* Building blocks icon (toy) */}
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="8.5" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </span>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ortopedia Pediátrica
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-gray-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            O cuidado ortopédico infantil vai além da técnica médica. É sobre proporcionar um ambiente acolhedor
            onde cada criança se sinta segura e compreendida. Com atendimento humanizado e especializado, ajudamos
            seu filho a crescer com saúde e qualidade de vida.
          </motion.p>
        </div>
        <motion.div
          className="w-full max-w-sm space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white">
            <Link href="#agendar">Agende sua consulta</Link>
          </Button>
        </motion.div>
          </div>
        </div>
      </motion.section>

      <Treatments />
      <AboutMe />
      <Locations />

      <section id="agendar" className="w-full py-12 md:py-24 bg-sky-600 text-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-2">
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Escolha o melhor horário e agende sua consulta
              </motion.h2>
              <motion.p
                className="mx-auto max-w-[700px] text-sky-100 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Estamos prontos para atender você e seu filho com todo o cuidado e atenção que merecem.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-white text-sky-600 hover:bg-sky-100 shadow-md w-full sm:w-auto">
                  <Link href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-white text-sky-600 hover:bg-sky-100 shadow-md w-full sm:w-auto">
                  <Link href="tel:+5500000000000">
                    <Phone className="mr-2 h-4 w-4" />
                    Telefone
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-white text-sky-600 hover:bg-sky-100 shadow-md w-full sm:w-auto">
                  <Link href="#locais">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Consulta
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}
