"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Baby as BabyIcon, 
  Brain, 
  Backpack, 
  Bone, 
  Dumbbell,Volleyball, 
  Activity 
} from "lucide-react"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export function Treatments() {
  // Verifica se está em dispositivo móvel
  const isMobile = useIsMobile()

  const treatments = [
    {
      title: "Patologias Neonatais",
      description:
        "Tratamento de condições ortopédicas presentes desde o nascimento, como pé torto congênito e displasia do quadril.",
      icon: <BabyIcon className="h-8 w-8 text-sky-600" />,
    },
    {
      title: "Patologias Neuromotoras",
      description:
        "Abordagem especializada para crianças com paralisia cerebral, mielomeningocele e outras condições neurológicas.",
      icon: <Brain className="h-8 w-8 text-sky-600" />,
    },
    {
      title: "Patologias da Infância",
      description:
        "Tratamento de condições comuns na infância, como pé plano, joelho valgo (pernas em X) e outras alterações do crescimento.",
      icon: <Backpack className="h-8 w-8 text-sky-600" />,
    },
    {
      title: "Traumatologia Pediátrica",
      description: "Cuidado especializado para fraturas, entorses e lesões traumáticas em crianças e adolescentes.",
      icon: <Bone className="h-8 w-8 text-sky-600" />,
    },
    {
      title: "Patologias do Esporte",
      description: "Tratamento de lesões relacionadas à prática esportiva em crianças e adolescentes.",
      icon: <Volleyball className="h-8 w-8 text-sky-600" />,
    },
    {
      title: "Patologias da Postura",
      description:
        "Avaliação e tratamento de problemas posturais, como escoliose, cifose e outras alterações da coluna vertebral.",
      icon: <Activity className="h-8 w-8 text-sky-600" />,
    },
  ]

  return (
    <section id="tratamentos" className="w-full py-12 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
            Tratamentos Especializados
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 text-sm md:text-xl">
            Oferecemos tratamentos personalizados para diversas condições ortopédicas infantis
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 md:gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-1 lg:gap-y-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              variants={isMobile ? fadeIn : item}
              whileHover={!isMobile ? {
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 },
              } : {}}
              className="h-full"
            >
              <Card className="h-full max-w-[280px] mx-auto border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index * 0.1,
                    }}
                    className="bg-sky-50 p-2 rounded-full"
                  >
                    {treatment.icon}
                  </motion.div>
                  <CardTitle className="text-sm sm:text-base md:text-lg text-sky-800 break-words">
                    {treatment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base whitespace-normal">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
