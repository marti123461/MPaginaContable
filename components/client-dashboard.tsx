"use client"

import { useState } from "react"
import { FileText, Bell, Settings, LogOut } from "lucide-react"

interface ClientDashboardProps {
  user: {
    id: string
    name: string
    email: string
    phone?: string
    company?: string
  }
  onLogout: () => void
}

export function ClientDashboard({ user, onLogout }: ClientDashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="w-full h-full bg-gray-50 overflow-y-auto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Bienvenido, {user.name}</h1>
                <p className="text-sm text-gray-500">{user.company || "Cliente de MiPaginaContable"}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Bell className="h-4 w-4" />
              </button>
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Settings className="h-4 w-4" />
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <LogOut className="h-4 w-4" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "dashboard"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Panel Principal
              </button>
              <button
                onClick={() => setActiveTab("documents")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "documents"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Documentos
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "services"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Servicios
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "profile"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Perfil
              </button>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow p-6">
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Panel Principal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900">Documentos</h3>
                  <p className="text-2xl font-bold text-blue-600">3</p>
                  <p className="text-sm text-blue-700">2 completados, 1 pendiente</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900">Servicios Activos</h3>
                  <p className="text-2xl font-bold text-green-600">3</p>
                  <p className="text-sm text-green-700">Progreso promedio: 74%</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900">Próximo Vencimiento</h3>
                  <p className="text-2xl font-bold text-yellow-600">25</p>
                  <p className="text-sm text-yellow-700">Enero 2025</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900">Estado General</h3>
                  <p className="text-2xl font-bold text-purple-600">Excelente</p>
                  <p className="text-sm text-purple-700">Todo al día</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "documents" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Mis Documentos</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Estado Financiero Diciembre 2024</h3>
                    <p className="text-sm text-gray-500">PDF • 2.4 MB • 2025-01-05</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completado</span>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                      Descargar
                    </button>
                  </div>
                </div>
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Declaración de Impuestos Enero</h3>
                    <p className="text-sm text-gray-500">PDF • 1.8 MB • 2025-01-15</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completado</span>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                      Descargar
                    </button>
                  </div>
                </div>
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Reporte de Nómina Enero</h3>
                    <p className="text-sm text-gray-500">Excel • 856 KB • 2025-01-20</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pendiente</span>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Mis Servicios</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Contabilidad General</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Activo</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-sm text-gray-500">Progreso: 85% • Próximo vencimiento: 2025-02-01</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Asesoría Fiscal</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Activo</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <p className="text-sm text-gray-500">Progreso: 92% • Próximo vencimiento: 2025-01-25</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Gestión de Nóminas</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pendiente</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <p className="text-sm text-gray-500">Progreso: 45% • Próximo vencimiento: 2025-01-30</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Información Personal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                  <p className="text-gray-900">{user.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                  <p className="text-gray-900">{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <p className="text-gray-900">{user.phone || "No especificado"}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <p className="text-gray-900">{user.company || "No especificado"}</p>
                </div>
              </div>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Editar Información
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
