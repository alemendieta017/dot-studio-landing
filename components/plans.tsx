"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, TrendingUp } from "lucide-react"
import { getWhatsAppLink } from "@/lib/utils"

const plans = [
  {
    name: "Plan Basic",
    description: "Para marcas personales",
    frequency: "mensual",
    photos: "10 fotos/mes",
    duration: "45-60 min",
    features: [
      "1 sesión mensual (45-60 min)",
      "10 fotos editadas por mes",
      "Entrega digital en alta resolución",
      "Ideal para emprendedores",
      "Contenido fresco cada mes",
      "Cancela cuando quieras",
    ],
  },
  {
    name: "Plan Business",
    description: "Para negocios en crecimiento",
    frequency: "mensual",
    photos: "25-30 fotos/mes",
    duration: "2 horas",
    popular: true,
    features: [
      "1 sesión mensual (2 horas)",
      "25-30 fotos editadas por mes",
      "Entrega digital en alta resolución",
      "Ideal para restaurantes y tiendas",
      "Productos, platos y ambiente",
      "Cancela cuando quieras",
    ],
  },
  {
    name: "Plan Growth",
    description: "Para máximo contenido",
    frequency: "mensual",
    photos: "50 fotos/mes",
    duration: "2 sesiones",
    features: [
      "2 sesiones al mes (1-2h cada una)",
      "50 fotos editadas por mes",
      "Entrega digital en alta resolución",
      "Variedad constante de contenido",
      "Múltiples áreas/productos",
      "Soporte prioritario",
      "Cancela cuando quieras",
    ],
  },
]

export function Plans() {
  return (
    <section id="plans" className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0088d6]/10 text-[#0088d6] px-4 py-2 rounded-full mb-6">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Ahorra con suscripción</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Planes de suscripción</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
            Fotos nuevas cada mes. Mantén tu contenido siempre fresco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-zinc-900 border-zinc-800 text-white ${
                plan.popular ? "border-[#0088d6] border-2 shadow-lg shadow-[#0088d6]/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0088d6] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Recomendado
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <CardDescription className="text-base text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">{plan.photos}</div>
                  <div className="text-gray-400">
                    {plan.duration} • {plan.frequency}
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#0088d6] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#0088d6] hover:bg-[#0088d6]/90 text-white"
                      : "bg-white hover:bg-gray-100 text-black"
                  }`}
                  onClick={() => window.open(getWhatsAppLink(`Hola, me gustaría suscribirme al ${plan.name}.`), '_blank')}
                >
                  Comenzar ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
