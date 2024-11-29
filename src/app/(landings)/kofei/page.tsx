import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Coffee,  ArrowRight, Check, ShoppingBag, Gift, BarChart, PhoneIcon as WhatsApp } from 'lucide-react'
import { Smartphone, MessageSquare, BarChart3 } from 'lucide-react'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kofei - Sistema de Fidelización para Cafeterías",
  description: "Transforma tu cafetería con Kofei, el sistema de fidelización invisible que aumenta tus ventas y mejora la experiencia de tus clientes.",
}

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
    description: 'El cliente proporciona su número de teléfono en su primera visita, ¡así de fácil!',
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
    title: 'Recompensas y Promociones',
    description: 'Los clientes acumulan puntos y reciben recompensas personalizadas, además de promociones especiales que los mantienen regresando.',
    icon: Gift,
    step: 3
  },
  {
    title: 'Análisis',
    description: 'Obtienes insights valiosos sobre el comportamiento de tus clientes para optimizar tus estrategias.',
    icon: BarChart,
    step: 4
  }
];

  const faqs = [
    {
      question: "¿Es fácil de implementar este sistema en mi cafetería?",
      answer: "¡Absolutamente! Nuestro sistema está diseñado para ser sencillo de integrar en tu operación diaria. Solo necesitas registrar el número de teléfono de tu cliente en su primera visita, y todo lo demás se hace automáticamente, sin que tengas que preocuparte por procesos complicados."
    },
    {
      question: "¿Qué tipo de recompensas o promociones puedo ofrecer a mis clientes?",
      answer: "Tú decides. Ofrecemos flexibilidad para crear un sistema de recompensas que se ajuste a las necesidades de tu negocio. Puedes premiar a tus clientes con puntos por cada compra, enviar ofertas personalizadas en fechas especiales, o incluso realizar promociones para aumentar el flujo de clientes en días tranquilos. ¡Todo es automático!"
    },
    {
      question: "¿Qué pasa si necesito más funciones o un software adicional para mi cafetería?",
      answer: "Si tu cafetería necesita funciones adicionales o un software personalizado, podemos ayudarte. Ofrecemos soluciones a medida para adaptarnos a tus necesidades específicas, asegurándonos de que tengas todo lo que necesitas para optimizar tu negocio."
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
              <a href="#sobre-nosotros" className="text-gray-600 hover:text-[#1A120B]">Sobre Nosotros</a>
              <a href="#beneficios" className="text-gray-600 hover:text-[#1A120B]">Beneficios</a>
              <a href="#planes" className="text-gray-600 hover:text-[#1A120B]">Planes</a>
            </div>

            {/* CTA Button */}
            <button className="bg-[#1A120B] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2D1F15] transition-colors duration-300">
              Quiero hablar con un experto
            </button>
          </div>
        </nav>
      </header>
    
      <div className="relative bg-[#1A120B] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Haz que tus Clientes Regresen y Aumenten sus Compras con un <span className="block text-[#E5B299] mt-2"> Sistema de Recompensas Automático</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Transforma cada visita en una oportunidad para que tus clientes vuelvan más seguido y gasten más. Con nuestro sistema fácil de implementar, premias su lealtad sin complicaciones.
            </p>
            <div className="mt-10">
              <button className="bg-[#E5B299] text-[#1A120B] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#C98860] transition-colors duration-300">
                ¡Quiero Mejorar Mis Ventas!
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
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                width={1950}
                height={1300}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Entusiastas de la Automatización y el Café
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  En Kofei, somos un equipo apasionado por ayudar a las cafeterías a fidelizar a sus clientes con sistemas automáticos y sencillos. Nuestro objetivo es ofrecerte herramientas de fidelización que funcionen sin que tengas que hacer nada extra, permitiéndote enfocarte en lo que más importa: servir café de calidad.
                </p>
                <p>
                  Nuestro sistema invisible registra automáticamente cada visita y fomenta la lealtad de los clientes, con recordatorios, promociones y mucho más. Todo esto, sin añadir complejidad a tu operación diaria, ¡y con resultados que podrás ver desde el primer momento!
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
                        <div className="flex">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <div className="inline-flex ml-3 items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E5B299] text-[#1A120B] mb-2">
                            Paso {step.step}
                          </div>
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
                className="absolute inset-0 w-full h-full object-cover"
                width={1947}
                height={1298}
              />
            </div>
          </div>
        </div>
      </div>

      {/* New section: ¿Cómo saber si este sistema es para mi negocio? */}
      <div className="bg-[#F3E9DD] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A120B]">¿Cómo saber si este sistema es para tu cafetería?</h2>
            <p className="mt-4 text-xl text-gray-700">
              Fideliza a tus clientes, aumenta tus ventas y automatiza el marketing directo sin complicaciones.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1A120B] mb-6">Este sistema es ideal para ti si buscas:</h3>
            <ul className="space-y-4">
              {[
                "Hacer que tus clientes regresen más seguido con promociones y recompensas personalizadas.",
                "Personalizar tus ofertas y promociones según el comportamiento de tus clientes.",
                "Obtener datos y análisis útiles para mejorar tus estrategias y aumentar tus ingresos.",
                "Mejorar la experiencia del cliente haciéndola más atractiva y única."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section id="contacto" className="py-16 bg-gradient-to-b from-white to-[#F3E9DD]">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#1A120B]">¡Revoluciona la Fidelización en Tu Cafetería Hoy Mismo!</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
           Aumenta la lealtad de tus clientes y maximiza tus ventas con nuestro sistema automatizado. Aprovecha esta oportunidad única para transformar la experiencia de tus clientes, <span className="font-bold">¡sin costo alguno por un tiempo limitado!</span>
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="md:col-span-2 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1A120B]">Solicita tu demostración gratuita</CardTitle>
                <CardDescription className="text-gray-600">
                  Al ser una de las primeras cafeterías en unirse, disfrutarás de nuestro sistema de fidelización sin costo por un periodo limitado. ¡No dejes pasar esta oferta exclusiva!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Nombre completo"
                      // {...register("name", { required: "Por favor, ingresa tu nombre" })}
                      className="bg-white border-gray-300 focus:border-[#1A120B] focus:ring-[#1A120B]"
                    />
                    {/* {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>} */}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Correo electrónico empresarial"
                      // {...register("email", {
                      //   required: "Por favor, ingresa tu correo electrónico",
                      //   pattern: {
                      //     value: /\S+@\S+\.\S+/,
                      //     message: "Por favor, ingresa un correo electrónico válido"
                      //   }
                      // })}
                      className="bg-white border-gray-300 focus:border-[#1A120B] focus:ring-[#1A120B]"
                    />
                    {/* {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} */}
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Teléfono de contacto"
                      // {...register("phone", { required: "Por favor, ingresa tu número de teléfono" })}
                      className="bg-white border-gray-300 focus:border-[#1A120B] focus:ring-[#1A120B]"
                    />
                    {/* {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>} */}
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button type="submit" className="w-full bg-[#1A120B] hover:bg-[#2D1F15] text-white text-lg py-6">
                      ¡Sí, quiero mejorar la lealtad de mis clientes ahora!
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full bg-white border-[#1A120B] text-[#1A120B] hover:bg-[#F3E9DD] text-lg py-6"
                      asChild
                    >
                      <Link href="https://w.app/YbP0So" target="_blank" rel="noopener noreferrer">
                        <WhatsApp className="mr-2 h-5 w-5" />
                        Quiero hablar con un experto ahora
                      </Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-[#F3E9DD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1A120B]">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-[#1A120B]">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>


      <footer className="bg-[#1A120B] text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Coffee className="h-6 w-6 text-[#fff]" />
                <span className="font-bold text-[#fff] text-xl">Kofei</span>
              </div>
              <p className="text-sm text-gray-300">
                Sistema de fidelización automático para cafeterías.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Productos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Sistema de Fidelización</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Análisis de Clientes</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Marketing Automatizado</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Guías</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Soporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Términos de Servicio</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Política de Privacidad</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Kofei by Machinlabs. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="https://machinlabs.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white">
                Desarrollado por Machinlabs
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}