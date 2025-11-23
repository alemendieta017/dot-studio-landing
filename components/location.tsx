import { MapPin } from 'lucide-react'

export function Location() {
	return (
		<section id="location" className="py-24 px-4 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Nuestro estudio
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
						Un espacio profesional diseñado para capturar la mejor versión de tu
						marca
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="flex items-start gap-4">
							<div className="bg-[#0088d6]/10 p-3 rounded-lg">
								<MapPin className="h-6 w-6 text-[#0088d6]" />
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Ubicación conveniente
								</h3>
								<p className="text-muted-foreground">
									Estudio profesional equipado con iluminación de última
									generación y fondos versátiles
								</p>
							</div>
						</div>

						<div className="bg-muted p-6 rounded-lg">
							<h4 className="font-semibold mb-2">Dirección del estudio</h4>
							<p className="text-muted-foreground mb-4">
								Consulta la ubicación exacta al confirmar tu reserva. Contamos
								con fácil acceso.
							</p>
							<p className="text-sm text-muted-foreground">
								📍 Asunción, Paraguay
							</p>
						</div>
					</div>

					<div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2550.033537938847!2d-57.59341216152829!3d-25.32798038913526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9f24dad2019%3A0x5c7ed0d66746f20c!2sDOT%20Studio%20PY!5e0!3m2!1ses-419!2spy!4v1763928884340!5m2!1ses-419!2spy"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Ubicación del estudio"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
