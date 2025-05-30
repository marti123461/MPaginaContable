"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

interface ContactInfo {
  name: string
  email: string
  phone: string
  message: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "¡Hola! Soy el asistente virtual de MiPaginaContable. ¿En qué puedo ayudarte hoy? Puedo responder preguntas sobre nuestros servicios contables, precios, o cualquier consulta que tengas.",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getAIResponse = async (userMessage: string): Promise<string> => {
    // Respuestas predefinidas para servicios contables
    const responses: { [key: string]: string } = {
      servicios:
        "Ofrecemos tres servicios principales:\n\n📊 **Contabilidad General** - Mantenemos sus libros actualizados\n📈 **Asesoría Fiscal** - Optimizamos su carga tributaria\n💰 **Nóminas** - Gestionamos todo el proceso de nóminas\n\n¿Te interesa algún servicio en particular?",

      precios:
        "Nuestros precios varían según las necesidades de tu empresa. Ofrecemos:\n\n💼 **Paquete Básico** - Para pequeñas empresas\n🏢 **Paquete Empresarial** - Para medianas empresas\n🏭 **Paquete Corporativo** - Para grandes corporaciones\n\n¿Te gustaría recibir una cotización personalizada? Puedo tomar tus datos para que nuestro equipo te contacte.",

      contacto:
        "Puedes contactarnos de las siguientes maneras:\n\n📞 **Teléfono:** 809-448-3593\n📧 **Email:** martiaveturatejeda@gmail.com\n👤 **Contador:** Jhonson'S Brioso Tejeda\n\n¿Te gustaría que te contactemos directamente? Puedo tomar tus datos ahora mismo.",

      horarios:
        "Nuestros horarios de atención son:\n\n🕘 **Lunes a Viernes:** 8:00 AM - 6:00 PM\n🕘 **Sábados:** 9:00 AM - 2:00 PM\n🕘 **Domingos:** Cerrado\n\nPara emergencias contables, puedes contactarnos por WhatsApp.",

      experiencia:
        "Contamos con más de 15 años de experiencia en el sector contable. Nuestro equipo está certificado y actualizado con las últimas normativas fiscales. Hemos ayudado a cientos de empresas a optimizar sus finanzas.",

      impuestos:
        "Te ayudamos con todos los aspectos fiscales:\n\n📋 Declaraciones de impuestos\n📊 Planificación fiscal\n💡 Optimización tributaria\n📝 Cumplimiento normativo\n\n¿Necesitas ayuda con algún tema fiscal específico? Puedo programar una consulta con nuestros especialistas.",
    }

    const lowerMessage = userMessage.toLowerCase()

    // Detectar si el usuario quiere contacto o cotización
    if (
      lowerMessage.includes("contacta") ||
      lowerMessage.includes("llama") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("correo") ||
      lowerMessage.includes("cotiza") ||
      lowerMessage.includes("precio") ||
      lowerMessage.includes("costo") ||
      lowerMessage.includes("presupuesto") ||
      lowerMessage.includes("consulta")
    ) {
      setTimeout(() => {
        setShowContactForm(true)
      }, 1000)
      return "Me encantaría ayudarte con eso. Para brindarte la mejor atención personalizada, necesito algunos datos. ¿Podrías completar el siguiente formulario? Nuestro equipo te contactará a la brevedad."
    }

    // Buscar palabras clave en el mensaje
    for (const [key, response] of Object.entries(responses)) {
      if (
        lowerMessage.includes(key) ||
        (key === "servicios" &&
          (lowerMessage.includes("servicio") ||
            lowerMessage.includes("qué hacen") ||
            lowerMessage.includes("que hacen"))) ||
        (key === "precios" &&
          (lowerMessage.includes("precio") || lowerMessage.includes("costo") || lowerMessage.includes("cuanto"))) ||
        (key === "contacto" &&
          (lowerMessage.includes("contactar") ||
            lowerMessage.includes("teléfono") ||
            lowerMessage.includes("telefono") ||
            lowerMessage.includes("email"))) ||
        (key === "horarios" &&
          (lowerMessage.includes("horario") || lowerMessage.includes("hora") || lowerMessage.includes("abierto"))) ||
        (key === "experiencia" &&
          (lowerMessage.includes("experiencia") || lowerMessage.includes("años") || lowerMessage.includes("tiempo"))) ||
        (key === "impuestos" &&
          (lowerMessage.includes("impuesto") || lowerMessage.includes("fiscal") || lowerMessage.includes("tributario")))
      ) {
        return response
      }
    }

    // Respuestas para saludos
    if (lowerMessage.includes("hola") || lowerMessage.includes("buenos") || lowerMessage.includes("buenas")) {
      return "¡Hola! 👋 Bienvenido a MiPaginaContable. Soy tu asistente virtual y estoy aquí para ayudarte con cualquier pregunta sobre nuestros servicios contables. ¿En qué puedo asistirte?"
    }

    // Respuestas para agradecimientos
    if (lowerMessage.includes("gracias") || lowerMessage.includes("thank")) {
      return "¡De nada! 😊 Estoy aquí para ayudarte. Si tienes más preguntas sobre nuestros servicios contables, no dudes en preguntarme."
    }

    // Respuesta por defecto con oferta de contacto
    setTimeout(() => {
      setShowContactForm(true)
    }, 1000)
    return "Entiendo tu consulta. Para brindarte la mejor asistencia personalizada, te recomiendo que nos dejes tus datos para que nuestro equipo pueda contactarte directamente. ¿Podrías completar el siguiente formulario?"
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await getAIResponse(input)

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Lo siento, hubo un error. Por favor, contacta directamente con nosotros al 809-448-3593 o martiaveturatejeda@gmail.com",
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simular envío de email
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // En un entorno real, aquí enviarías el email usando una API route
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(contactInfo)
      // });

      setFormSubmitted(true)
      setShowContactForm(false)

      const thankYouMessage: Message = {
        id: Date.now().toString(),
        content: `¡Gracias ${contactInfo.name}! Hemos recibido tu información y nuestro equipo te contactará pronto al correo ${contactInfo.email} o al teléfono ${contactInfo.phone}. ¿Hay algo más en lo que pueda ayudarte mientras tanto?`,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, thankYouMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        content:
          "Lo siento, hubo un problema al enviar tu información. Por favor, intenta nuevamente o contáctanos directamente al 809-448-3593.",
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Ventana del chat */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 z-40 w-80 h-96 shadow-xl">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5 text-primary" />
              Asistente Contable
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-full p-0">
            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {message.role === "user" ? (
                        <User className="h-6 w-6 text-gray-500" />
                      ) : (
                        <Bot className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-3 text-sm whitespace-pre-line ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-primary" />
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Formulario de contacto */}
            {showContactForm && !formSubmitted ? (
              <div className="border-t p-4">
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-xs">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={contactInfo.name}
                      onChange={handleContactChange}
                      required
                      className="h-8 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-xs">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={contactInfo.email}
                      onChange={handleContactChange}
                      required
                      className="h-8 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-xs">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Tu teléfono"
                      value={contactInfo.phone}
                      onChange={handleContactChange}
                      className="h-8 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="message" className="text-xs">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="¿En qué podemos ayudarte?"
                      value={contactInfo.message}
                      onChange={handleContactChange}
                      required
                      className="text-sm min-h-[60px] resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full text-sm h-8" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar"}
                  </Button>
                </form>
              </div>
            ) : (
              /* Área de input normal */
              !formSubmitted && (
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Escribe tu pregunta..."
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button onClick={handleSend} disabled={isLoading || !input.trim()} size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            )}
          </CardContent>
        </Card>
      )}
    </>
  )
}
