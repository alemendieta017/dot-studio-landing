import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Image
              src="/logo_svg_black_font.svg"
              alt="DOT Studio"
              width={120}
              height={120}
              className="w-32 h-32 object-contain mb-4"
            />
            <p className="text-muted-foreground max-w-sm">
              Estudio fotográfico profesional especializado en contenido para negocios, ecommerce y marcas personales.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#packages" className="hover:text-[#0088d6] transition-colors">
                  Paquetes
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#0088d6] transition-colors">
                  Planes mensuales
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#0088d6] transition-colors">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#0088d6] transition-colors">
                  Agendar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#0088d6]" />
                <span>+595 994 925946</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#0088d6]" />
                <span>contacto@studiodot.site</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[#0088d6]" />
                <span>@dotstudio_py</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DOT Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
