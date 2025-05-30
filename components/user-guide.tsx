import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserIcon, FileText, MessageCircle, Calculator, CheckCircle, ArrowRight, Mouse, Eye } from "lucide-react"

export function UserGuide() {
  const steps = [
    {
      step: 1,
      title: "Explora nuestros servicios",
      description: "Revisa la sección de servicios para conocer todo lo que ofrecemos",
      icon: <Calculator className="h-6 w-6 text-blue-500" />,
      details: "Contabilidad General, Asesoría Fiscal y Gestión de Nóminas",
      action: "Desplázate hacia arriba para ver los servicios",
    },
    {
      step: 2,
      title: "Usa el chatbot inteligente",
      description: "Haz clic en el botón de chat para obtener respuestas inmediatas",
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      details: "Pregunta sobre precios, servicios, horarios o solicita una cotización",
      action: "Busca el botón de chat en la esquina inferior derecha",
    },
    {
      step: 3,
      title: "Accede al Portal de Cliente",
      description: "Inicia sesión para ver tus documentos y servicios personalizados",
      icon: <UserIcon className="h-6 w-6 text-purple-500" />,
      details: "Usuarios demo: juan@empresa.com / 123456 o maria@negocio.com / 123456",
      action: "Haz clic en 'Portal Cliente' en la barra superior",
    },
    {
      step: 4,
      title: "Gestiona tus documentos",
      description: "Una vez dentro del portal, accede a todos tus documentos contables",
      icon: <FileText className="h-6 w-6 text-orange-500" />,
      details: "Descarga estados financieros, declaraciones de impuestos y reportes",
      action: "Ve a la pestaña 'Documentos' en tu portal",
    },
    {
      step: 5,
      title: "Revisa tus servicios",
      description: "Monitorea el progreso de tus servicios contables activos",
      icon: <Eye className="h-6 w-6 text-indigo-500" />,
      details: "Ve el estado y progreso de cada servicio contratado",
      action: "Visita la pestaña 'Servicios' para más detalles",
    },
    {
      step: 6,
      title: "Contacta directamente",
      description: "¿Necesitas ayuda personalizada? Contáctanos directamente",
      icon: <CheckCircle className="h-6 w-6 text-red-500" />,
      details: "Teléfono: 809-448-3593 | Email: martiaveturatejeda@gmail.com",
      action: "Usa el formulario de contacto o llama directamente",
    },
  ]

  return (
    <div className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <Card key={step.step} className="relative overflow-hidden hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge variant="default" className="w-8 h-8 rounded-full flex items-center justify-center p-0">
                {step.step}
              </Badge>
              {step.icon}
            </div>
            <CardTitle className="text-lg">{step.title}</CardTitle>
            <CardDescription className="text-sm">{step.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.details}</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Mouse className="h-4 w-4" />
              <span>{step.action}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="h-5 w-5 text-gray-300" />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
