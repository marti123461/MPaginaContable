"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UserIcon } from "lucide-react"
import { AuthForm } from "@/components/auth/login-form"
import { ClientDashboard } from "@/components/client-dashboard"

interface ClientUser {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
}

export function ClientPortal() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<ClientUser | null>(null)

  const handleLogin = (userData: ClientUser) => {
    setUser(userData)
    setIsOpen(false)
  }

  const handleLogout = () => {
    setUser(null)
    setIsOpen(false)
  }

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  // Si hay usuario logueado, renderizar SOLO el dashboard
  if (user) {
    return (
      <div className="fixed inset-0 bg-white z-[9999] overflow-hidden">
        <ClientDashboard user={user} onLogout={handleLogout} />
      </div>
    )
  }

  // Si no hay usuario, mostrar solo el botón y modal
  return (
    <>
      <Button variant="outline" className="flex items-center gap-2" onClick={handleOpenModal}>
        <UserIcon className="h-4 w-4" />
        Portal Cliente
      </Button>

      {/* Modal de login */}
      {isOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold">Portal de Cliente</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 text-xl font-bold">
                ✕
              </button>
            </div>
            <div className="p-4">
              <AuthForm onLogin={handleLogin} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
