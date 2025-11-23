"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { getWhatsAppLink } from "@/lib/utils"

const packages = [
  {
    name: "Pack Esencial",
    description: "Ideal para profesionales y retratos",
    duration: "1 hora",
    photos: "15 fotos editadas",
    features: [
      "Sesión de 1 hora",
      "15 fotos editadas profesionalmente",
      "Entrega digital en alta resolución",
      "Ideal para retratos y perfiles",
      "Productos básicos",
    ],
  },
  {
    name: "Pack Negocio",
    description: "Perfecto para tiendas y restaurantes",
    duration: "2 horas",
    photos: "30 fotos editadas",
    popular: true,
    features: [
      "Sesión de 2 horas",
      "30 fotos editadas profesionalmente",
      "Entrega digital en alta resolución",
      "Ideal para catálogos pequeños",
      "Fotos de ambiente y productos",
      "Renovación completa de imagen",
    ],
  },
  {
    name: "Pack Plus",
    description: "Para ecommerce y catálogos grandes",
    duration: "3 horas",
    photos: "50 fotos editadas",
    features: [
      "Sesión de 3 horas",
      "50 fotos editadas profesionalmente",
      "Entrega digital en alta resolución",
      "Ideal para catálogos extensos",
      "Múltiples ángulos y variaciones",
      "Sesiones divididas en el mismo día",
    ],
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Paquetes únicos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Compra puntual, sin compromisos. Perfecto para proyectos específicos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.name} className={`relative ${pkg.popular ? "border-[#0088d6] border-2 shadow-lg" : ""}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0088d6] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">{pkg.photos}</div>
                  <div className="text-muted-foreground">{pkg.duration} de sesión</div>
                </div>

                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#0088d6] shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${pkg.popular ? "bg-[#0088d6] hover:bg-[#0088d6]/90" : ""}`}
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => window.open(getWhatsAppLink(`Hola, me gustaría reservar el ${pkg.name}.`), '_blank')}
                >
                  Reservar ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
