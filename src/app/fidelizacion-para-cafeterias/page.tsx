'use client'

import Image from "next/image"
// import { Metadata } from "next"
import { Coffee, ShoppingBag, Gift, BarChart } from 'lucide-react'
import { Smartphone, MessageSquare, BarChart3 } from 'lucide-react'

// export const metadata: Metadata = {
//   title: "Kofei by Machinlabs | Sistema de Fidelización para Cafeterías",
//   description: "Transforma tu cafetería con Kofei, el sistema de fidelización invisible que aumenta tus ventas y mejora la experiencia de tus clientes.",
// }

export default function LandingPage() {
 const benefits = [
  {
    name: 'Fidelización Invisible',
    description: 'Sin tarjetas físicas, solo el número de teléfono del cliente. Fácil y conveniente.',
    stat: 'Aumenta la retención de clientes en un 30% con nuestro sistema invisible',
    icon: Smartphone,
  },
  {
    name: 'Comunicación Directa',
    description: 'Envía ofertas personalizadas y notificaciones directamente a tus clientes.',
    stat: 'Incrementa las ventas en un 25% con marketing personalizado',
    icon: MessageSquare,
  },
  {
    name: 'Análisis Detallado',
    description: 'Conoce mejor a tus clientes con análisis avanzados de sus preferencias y hábitos.',
    stat: 'Aumenta el ticket promedio en un 15% con insights precisos',
    icon: BarChart3,
  },
];
  
  const steps = [
  {
    title: 'Registro',
    description: 'El cliente proporciona su número de teléfono en su primera visita.',
    icon: Smartphone,
    step: 1
  },
  {
    title: 'Compras',
    description: 'Cada compra se registra automáticamente en el sistema.',
    icon: ShoppingBag,
    step: 2
  },
  {
    title: 'Recompensas',
    description: 'Los clientes acumulan puntos y reciben recompensas personalizadas.',
    icon: Gift,
    step: 3
  },
  {
    title: 'Análisis',
    description: 'Obtienes insights valiosos sobre el comportamiento de tus clientes.',
    icon: BarChart,
    step: 4
  }
];

  return (
    <div className="min-h-screen">
       <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-[#1A120B]" />
            <span className="text-xl font-bold text-[#1A120B]">Kofei</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[#1A120B]">About</a>
            <a href="#features" className="text-gray-600 hover:text-[#1A120B]">Benefits</a>
            <a href="#tiers" className="text-gray-600 hover:text-[#1A120B]">Membership</a>
          </div>

          {/* CTA Button */}
          <button className="bg-[#1A120B] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2D1F15] transition-colors duration-300">
            Get Started
          </button>
        </div>
      </nav>
    </header>
    
     <div className="relative bg-[#1A120B] text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Fideliza Clientes y Aumenta las Ventas
            <span className="block text-[#E5B299] mt-2">de tu Cafetería</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Potencia tu negocio con nuestro sistema automático de fidelización y marketing directo para cafeterías.
          </p>
          <div className="mt-10">
            <button className="bg-[#E5B299] text-[#1A120B] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#C98860] transition-colors duration-300">
              Aumenta tus ventas ahora
            </button>
          </div>
        </div>
      </div>
    </div>
    
     <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Coffee shop interior"
              width={450}
              height={450}
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Expertos en Fidelización para Cafeterías
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                En Kofei, nuestra misión es empoderar a las cafeterías locales con sistemas de 
                fidelización y marketing directo de nivel empresarial. Entendemos que cada taza 
                de café es una oportunidad para crear una conexión duradera con tus clientes.
              </p>
              <p>
                Nuestro objetivo es claro: proporcionar a las cafeterías las herramientas 
                necesarias para prosperar en un mercado competitivo, sin añadir complejidad 
                a sus operaciones diarias. Con nuestro sistema de fidelización invisible, 
                transformamos cada visita en una experiencia memorable, fomentando la lealtad 
                del cliente y el crecimiento del negocio de manera automática y sin esfuerzo 
                adicional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-[#F3E9DD] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Beneficios de Nuestro Sistema</h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluciones innovadoras para el crecimiento de tu cafetería
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-[#1A120B] text-white mx-auto">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                {benefit.name}
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                {benefit.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-[#1A120B] font-medium text-center">
                  {benefit.stat}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">Proceso Simple y Efectivo</h2>
              <p className="mt-4 text-lg text-gray-600">
                Implementa nuestro sistema en cuatro sencillos pasos
              </p>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200" />
              
              <div className="space-y-12">
                {steps.map((step) => (
                  <div key={step.step} className="relative flex items-start">
                    {/* Icon with background */}
                    <div className="flex-shrink-0 z-10">
                      <div className="bg-[#1A120B] rounded-full p-3">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E5B299] text-[#1A120B] mb-2">
                        Paso {step.step}
                      </div>
                      <p className="text-gray-600 mt-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80"
              alt="Coffee shop customer experience"
              width={600}
              height={400}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    
     <footer className="bg-[#1A120B] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-[#fff]" />
              <span className="font-bold text-[#fff]">Kofei</span>
            </div>
            <div className="flex gap-8">
              <p className="text-sm text-[#fff] hover:text-[#8B4513]">Términos</p>
              <p className="text-sm text-[#fff] hover:text-[#8B4513]">Privacidad</p>
              <p className="text-sm text-[#fff] hover:text-[#8B4513]">Contacto</p>
            </div>
            <p className="text-sm text-[#fff]">
              © {new Date().getFullYear()} Kofei by Machinlabs
            </p>
          </div>
        </div>
      </div>
    </footer>
    
    
      </div>
  )
}