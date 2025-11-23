"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar } from "lucide-react"
import { getWhatsAppLink } from "@/lib/utils"

export function BookingForm() {
  return (
    <section id="booking" className="py-24 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Agenda tu sesión</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
            Contáctanos directamente por WhatsApp para agendar tu sesión o consultar sobre disponibilidad
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 md:p-12 w-full text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-[#0088d6]/10 p-4 rounded-full">
                <MessageCircle className="h-12 w-12 text-[#0088d6]" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Escríbenos por WhatsApp y te ayudaremos a encontrar el paquete o plan perfecto para tu proyecto
            </p>
            <Button
              size="lg"
              className="bg-[#0088d6] hover:bg-[#0088d6]/90 text-white text-lg px-8 py-6"
              onClick={() => window.open(getWhatsAppLink(), '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Abrir WhatsApp
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 w-full mt-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <Calendar className="h-8 w-8 text-[#0088d6] mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Agendar sesión</h4>
              <p className="text-sm text-gray-400">
                Consulta disponibilidad y agenda tu sesión fotográfica
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <MessageCircle className="h-8 w-8 text-[#0088d6] mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Consultar agendamiento</h4>
              <p className="text-sm text-gray-400">
                Revisa o modifica tu reserva existente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
