import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Coffee,
  ArrowRight,
  Check,
  ShoppingBag,
  Gift,
  BarChart,
  PhoneIcon as WhatsApp,
} from "lucide-react";
import { Smartphone, MessageSquare, BarChart3 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kofei - Sistema de Fidelización para Cafeterías",
  description:
    "Transforma tu cafetería con Kofei, el sistema de fidelización invisible que aumenta tus ventas y mejora la experiencia de tus clientes.",
};

export default function LandingPage() {
  const benefits = [
    {
      name: "Fidelización Invisible",
      description:
        "Sin tarjetas físicas, solo el número de teléfono del cliente. Fácil y conveniente.",
      stat: "Aumenta la retención de clientes en un 30% con nuestro sistema invisible",
      icon: Smartphone,
    },
    {
      name: "Comunicación Directa",
      description:
        "Envía ofertas personalizadas y notificaciones directamente a tus clientes.",
      stat: "Incrementa las ventas en un 25% con marketing personalizado",
      icon: MessageSquare,
    },
    {
      name: "Análisis Detallado",
      description:
        "Conoce mejor a tus clientes con análisis avanzados de sus preferencias y hábitos.",
      stat: "Aumenta el ticket promedio en un 15% con insights precisos",
      icon: BarChart3,
    },
  ];

  const steps = [
    {
      title: "Registro",
      description:
        "El cliente proporciona su número de teléfono en su primera visita, ¡así de fácil!",
      icon: Smartphone,
      step: 1,
    },
    {
      title: "Compras",
      description: "Cada compra se registra automáticamente en el sistema.",
      icon: ShoppingBag,
      step: 2,
    },
    {
      title: "Recompensas y Promociones",
      description:
        "Los clientes acumulan puntos y reciben recompensas personalizadas, además de promociones especiales que los mantienen regresando.",
      icon: Gift,
      step: 3,
    },
    {
      title: "Análisis",
      description:
        "Obtienes insights valiosos sobre el comportamiento de tus clientes para optimizar tus estrategias.",
      icon: BarChart,
      step: 4,
    },
  ];

  const faqs = [
    {
      question: "¿Es fácil de implementar este sistema en mi cafetería?",
      answer:
        "¡Absolutamente! Nuestro sistema está diseñado para ser sencillo de integrar en tu operación diaria. Solo necesitas registrar el número de teléfono de tu cliente en su primera visita, y todo lo demás se hace automáticamente, sin que tengas que preocuparte por procesos complicados.",
    },
    {
      question:
        "¿Qué tipo de recompensas o promociones puedo ofrecer a mis clientes?",
      answer:
        "Tú decides. Ofrecemos flexibilidad para crear un sistema de recompensas que se ajuste a las necesidades de tu negocio. Puedes premiar a tus clientes con puntos por cada compra, enviar ofertas personalizadas en fechas especiales, o incluso realizar promociones para aumentar el flujo de clientes en días tranquilos. ¡Todo es automático!",
    },
    {
      question:
        "¿Qué pasa si necesito más funciones o un software adicional para mi cafetería?",
      answer:
        "Si tu cafetería necesita funciones adicionales o un software personalizado, podemos ayudarte. Ofrecemos soluciones a medida para adaptarnos a tus necesidades específicas, asegurándonos de que tengas todo lo que necesitas para optimizar tu negocio.",
    },
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
              <a
                href="#sobre-nosotros"
                className="text-gray-600 hover:text-[#1A120B]"
              >
                Sobre Nosotros
              </a>
              <a
                href="#beneficios"
                className="text-gray-600 hover:text-[#1A120B]"
              >
                Beneficios
              </a>
              <a href="#planes" className="text-gray-600 hover:text-[#1A120B]">
                Planes
              </a>
            </div>

            {/* CTA Button */}
            <a href="#contacto">
              <button className="bg-[#1A120B] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2D1F15] transition-colors duration-300">
                Quiero hablar con un experto
              </button>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative bg-[#1A120B] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Haz que tus Clientes Regresen y Aumenten sus Compras con un{" "}
              <span className="block text-[#E5B299] mt-2">
                {" "}
                Sistema de Recompensas Automático
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Transforma cada visita en una oportunidad para que tus clientes
              vuelvan más seguido y gasten más. Con nuestro sistema fácil de
              implementar, premias su lealtad sin complicaciones.
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
                  En Kofei, somos un equipo apasionado por ayudar a las
                  cafeterías a fidelizar a sus clientes con sistemas automáticos
                  y sencillos. Nuestro objetivo es ofrecerte herramientas de
                  fidelización que funcionen sin que tengas que hacer nada
                  extra, permitiéndote enfocarte en lo que más importa: servir
                  café de calidad.
                </p>
                <p>
                  Nuestro sistema invisible registra automáticamente cada visita
                  y fomenta la lealtad de los clientes, con recordatorios,
                  promociones y mucho más. Todo esto, sin añadir complejidad a
                  tu operación diaria, ¡y con resultados que podrás ver desde el
                  primer momento!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F3E9DD] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Beneficios de Nuestro Sistema
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Soluciones innovadoras para el crecimiento de tu cafetería
            </p>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.name}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
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
                <h2 className="text-3xl font-bold text-gray-900">
                  Proceso Simple y Efectivo
                </h2>
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
                        <div className="flex items-center">
                          <div className="min-h-fit min-w-fit inline-flex mr-3 items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E5B299] text-[#1A120B] mb-2">
                            Paso {step.step}
                          </div>
                          <h3 className="xs:max-w-[150px] md:min-w-fit text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mt-2">{step.description}</p>
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
            <h2 className="text-3xl font-bold text-[#1A120B]">
              ¿Cómo saber si este sistema es para tu cafetería?
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              Fideliza a tus clientes, aumenta tus ventas y automatiza el
              marketing directo sin complicaciones.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1A120B] mb-6">
              Este sistema es ideal para ti si buscas:
            </h3>
            <ul className="space-y-4">
              {[
                "Hacer que tus clientes regresen más seguido con promociones y recompensas personalizadas.",
                "Personalizar tus ofertas y promociones según el comportamiento de tus clientes.",
                "Obtener datos y análisis útiles para mejorar tus estrategias y aumentar tus ingresos.",
                "Mejorar la experiencia del cliente haciéndola más atractiva y única.",
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

      <section
        id="contacto"
        className="py-16 bg-gradient-to-b from-white to-[#F3E9DD]"
      >
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#1A120B]">
            ¡Revoluciona la Fidelización en Tu Cafetería Hoy Mismo!
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Aumenta la lealtad de tus clientes y maximiza tus ventas con nuestro
            sistema automatizado. Aprovecha esta oportunidad única para
            transformar la experiencia de tus clientes,{" "}
            <span className="font-bold">
              ¡sin costo alguno por un tiempo limitado!
            </span>
          </p>
          <div className="sm:block md:grid md:grid-cols-2 gap-8">
            <Card className="md:col-span-2 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1A120B]">
                  Solicita tu demostración gratuita
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Al ser una de las primeras cafeterías en unirse, disfrutarás
                  de nuestro sistema de fidelización sin costo por un periodo
                  limitado. ¡No dejes pasar esta oferta exclusiva!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <Input
                      type="text"
                      placeholder="Javier Pérez"
                      // {...register("name", { required: "Por favor, ingresa tu nombre" })}
                      className="bg-white border-gray-300 focus:border-[#1A120B] focus:ring-[#1A120B]"
                    />
                    {/* {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>} */}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <Input
                      type="email"
                      placeholder="javierp@coffeshop.com"
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
                  <div className="flex flex-col gap-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#1A120B] hover:bg-[#2D1F15] text-white text-lg py-5"
                    >
                      <span className="block sm:hidden">
                        ¡Quiero mejorar la lealtad ahora!
                      </span>
                      <span className="hidden sm:block">
                        ¡Sí, quiero mejorar la lealtad de mis clientes ahora!
                      </span>
                      <ArrowRight className="ml-2 h-5 w-5 md:block sm:hidden" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-white border-[#1A120B] text-[#1A120B] hover:bg-[#F3E9DD] text-lg py-5"
                      asChild
                    >
                      <Link
                        href="https://w.app/YbP0So"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsApp className="mr-2 h-5 w-5" />
                        <span className="block sm:hidden">
                          Hablar con un experto
                        </span>
                        <span className="hidden sm:block">
                          Quiero hablar con un experto ahora
                        </span>
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
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1A120B]">
            Preguntas Frecuentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-[#1A120B]">
                  {faq.question}
                </AccordionTrigger>
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
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Sistema de Fidelización
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Análisis de Clientes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Marketing Automatizado
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Kofei by Machinlabs. Todos los
              derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="https://machinlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white"
              >
                Desarrollado por Machinlabs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
