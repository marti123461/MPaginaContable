import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "MiPaginaContable transformó completamente la gestión financiera de mi empresa. Su equipo es profesional y siempre está disponible para resolver cualquier duda.",
      author: "María González",
      role: "CEO, Innovaciones Tecnológicas",
    },
    {
      quote:
        "Gracias a sus servicios de asesoría fiscal, hemos optimizado nuestra carga tributaria de manera significativa. Altamente recomendados.",
      author: "Carlos Rodríguez",
      role: "Director Financiero, Construcciones Modernas",
    },
    {
      quote:
        "La precisión y puntualidad en la entrega de informes financieros nos ha permitido tomar decisiones más informadas. Un servicio excepcional.",
      author: "Ana Martínez",
      role: "Propietaria, Boutique Elegance",
    },
  ]

  return (
    <div className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-6">
            <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
            <p className="mb-4 text-gray-500 dark:text-gray-400">{testimonial.quote}</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
