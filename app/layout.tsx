import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dra. Fernanda Piumbini | Ortopedia e Traumatologia Infantil",
  description:
    "Especialista em Ortopedia e Traumatologia Infantil e Doenças Neuromusculares. Atendimento humanizado e especializado para crianças.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Dra. Fernanda Piumbini - Ortopedia Pediátrica"
                width={150}
                height={40}
                className="block sm:hidden"
              />
              <Image
                src="/images/logo.png"
                alt="Dra. Fernanda Piumbini - Ortopedia Pediátrica"
                width={200}
                height={50}
                className="hidden sm:block"
              />
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#tratamentos"
                className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors duration-200 hover:scale-105 inline-block"
              >
                Tratamentos
              </Link>
              <Link
                href="#sobre"
                className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors duration-200 hover:scale-105 inline-block"
              >
                Sobre Mim
              </Link>
              <Link
                href="#locais"
                className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors duration-200 hover:scale-105 inline-block"
              >
                Locais
              </Link>
              <Link
                href="#agendar"
                className="text-sm font-medium text-sky-600 hover:text-sky-800 transition-colors duration-200 hover:scale-105 inline-block"
              >
                Agendar Consulta
              </Link>
            </nav>
            <div className="flex md:hidden">
              <Link
                href="#agendar"
                className="text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200"
              >
                Agendar
              </Link>
            </div>
          </div>
        </header>
        {children}
        <footer className="w-full py-6 bg-sky-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Dra. Fernanda Piumbini</h3>
                <p className="text-sky-100">CRM 00000 | RQE 00000</p>
                <p className="text-sky-100">Especialista em Ortopedia e Traumatologia Infantil</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <p className="text-sky-100">Telefone: (27) 3333-3333</p>
                <p className="text-sky-100">WhatsApp: (27) 99999-9999</p>
                <p className="text-sky-100">Email: contato@drapiumbini.com.br</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
                <div className="flex flex-col space-y-2">
                  <Link href="#tratamentos" className="text-sky-100 hover:text-white">
                    Tratamentos
                  </Link>
                  <Link href="#sobre" className="text-sky-100 hover:text-white">
                    Sobre Mim
                  </Link>
                  <Link href="#locais" className="text-sky-100 hover:text-white">
                    Locais de Atendimento
                  </Link>
                  <Link href="#agendar" className="text-sky-100 hover:text-white">
                    Agendar Consulta
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-sky-700 pt-6 text-center text-sky-200">
              <p>© {new Date().getFullYear()} Dra. Fernanda Piumbini. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
