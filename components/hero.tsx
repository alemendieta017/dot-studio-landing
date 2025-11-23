"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"
import { getWhatsAppLink } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-4">
          <Image
            src="/logo-svg-white-font.svg"
            alt="DOT Studio"
            width={600}
            height={600}
            className="w-96 h-96 md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] object-contain"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance -mt-4">
          Fotografía profesional que impulsa tu negocio
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-balance">
          Capturamos la esencia de tu marca con sesiones fotográficas personalizadas para restaurantes, ecommerce y
          profesionales
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            className="bg-[#0088d6] hover:bg-[#0088d6]/90 text-white text-lg px-8"
            onClick={() => window.open(getWhatsAppLink(), '_blank')}
          >
            <Camera className="mr-2 h-5 w-5" />
            Agenda tu sesión
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-white text-white hover:bg-white hover:text-black bg-transparent"
            onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver paquetes
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
