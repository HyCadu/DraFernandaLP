"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { User, GraduationCap, Heart } from "lucide-react"

export function AboutMe() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 bg-beige-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 50,
            }}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sobre Mim
            </motion.h2>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start gap-4">
                <User className="h-16 w-16 sm:h-16 sm:w-16 text-sky-600" />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Sou a Dra. Fernanda Piumbini, médica especialista em Ortopedia e Traumatologia Infantil e Doenças
                  Neuromusculares. Minha jornada na medicina começou com a paixão por ajudar crianças a superarem
                  limitações físicas e alcançarem seu pleno potencial de desenvolvimento.
                </motion.p>
              </div>
              <div className="flex items-start gap-4">
                <GraduationCap className="h-16 w-16 sm:h-16 sm:w-16 text-sky-600" />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Formada pela Universidade Federal do Espírito Santo, com residência em Ortopedia e Traumatologia pelo
                  Hospital das Clínicas da Faculdade de Medicina da USP e especialização em Ortopedia Pediátrica pelo
                  Instituto de Ortopedia e Traumatologia do HC-FMUSP.
                </motion.p>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="h-16 w-16 sm:h-16 sm:w-16 text-sky-600" />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Acredito que cada criança merece um atendimento personalizado e humanizado, considerando não apenas os
                  aspectos clínicos, mas também emocionais e sociais. Meu compromisso é proporcionar o melhor tratamento
                  possível, com carinho e dedicação, para que seus filhos cresçam saudáveis e felizes.
                </motion.p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 50,
            }}
          >
            <motion.div
              className="relative h-[300px] w-[350px] md:h-[400px] md:w-[400px] overflow-hidden rounded-lg border-4 border-sky-600 shadow-lg before:absolute before:inset-0 before:-z-10 before:rounded-lg before:border-2 before:border-sky-400 before:translate-x-2 before:translate-y-2"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/dra-fernanda-portrait.png"
                alt="Dra. Fernanda Piumbini em consultório"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
