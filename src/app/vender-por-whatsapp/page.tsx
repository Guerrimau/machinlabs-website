import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageSquare, ShoppingBag, Users, ArrowRight, Clock, Target, Headphones, Cpu, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: "Automatización de WhatsApp con IA | Duplica Ventas 24/7 | Machinlabs",
  description: "Potencia tu negocio con la automatización de WhatsApp de Machinlabs. Aumenta ventas, mejora atención al cliente 24/7 y optimiza operaciones con IA. Soluciones personalizadas para negocios en Hermosillo.",
  keywords: "automatización WhatsApp, IA para negocios, aumento de ventas, atención al cliente 24/7, Hermosillo, chatbot WhatsApp, optimización de ventas"
}

export default function LandingPage() {
  // const { register, handleSubmit, formState: { errors } } = useForm();


  const benefits = [
    {
      icon: <Target className="h-12 w-12 text-green-600" />,
      title: "Impulsa tus ventas",
      description: "Respuesta instantánea 24/7, convierte consultas en ventas"
    },
    {
      icon: <Headphones className="h-12 w-12 text-green-600" />,
      title: "Atención al cliente superior",
      description: "IA que responde preguntas y resuelve problemas al instante"
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600" />,
      title: "Eficiencia operativa",
      description: "Automatiza tareas repetitivas, enfócate en el crecimiento"
    }
  ]

  const processSteps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Llamada de demostración",
      description: "Agenda una llamada con nuestros expertos para ver cómo nuestra IA puede transformar tu negocio."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Solución personalizada",
      description: "Nuestro equipo trabaja en una solución adaptada específicamente a las necesidades de tu negocio."
    },
    {
      icon: <Cpu className="h-8 w-8 text-green-600" />,
      title: "Atención automática",
      description: "Implementamos la solución y comienzas a atender a tus clientes automáticamente, 24/7."
    }
  ]

  const faqItems = [
    {
      question: "¿Cómo garantiza Machinlabs la seguridad en la atención al cliente con IA?",
      answer: "En Machinlabs, la seguridad es nuestra prioridad. Nuestra IA está diseñada con protocolos de seguridad avanzados para manejar consultas de manera segura y eficiente. Además, ofrecemos un control total sobre las respuestas, permitiéndote supervisar y ajustar la interacción en tiempo real cuando sea necesario."
    },
    {
      question: "¿Necesito experiencia técnica para implementar la solución de Machinlabs?",
      answer: "Absolutamente no. Hemos diseñado nuestra plataforma pensando en la facilidad de uso. Nuestro equipo de expertos te guiará paso a paso en todo el proceso de configuración, desde la integración inicial hasta la personalización avanzada. Además, ofrecemos soporte continuo para asegurar que obtengas el máximo beneficio de nuestra solución."
    },
    {
      question: "¿Cómo se integra la solución de Machinlabs con mi sistema actual de WhatsApp Business?",
      answer: "Nuestra solución se integra perfectamente con WhatsApp Business, sin interrumpir tus operaciones actuales. Utilizamos APIs oficiales y procesos de integración optimizados para asegurar una transición suave. Nuestro equipo trabaja contigo para personalizar la integración según tus necesidades específicas, garantizando que complementa y mejora tus procesos existentes."
    },
    {
      question: "¿Qué nivel de personalización ofrece Machinlabs para las respuestas de IA?",
      answer: "Ofrecemos un alto nivel de personalización. Nuestra IA se entrena con la información específica de tu negocio, incluyendo tu catálogo de productos, políticas de servicio y tono de comunicación. Esto permite generar respuestas altamente relevantes y personalizadas. Además, puedes ajustar y refinar las respuestas en tiempo real basándote en el feedback de tus clientes y las necesidades cambiantes de tu negocio."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Cpu className="h-6 w-6 text-green-600" />
            <span className="font-bold text-gray-900">Machinlabs</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#que-hacemos" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Soluciones
            </Link>
            <Link href="#beneficios" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Beneficios
            </Link>
            <Link href="#proceso" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Proceso
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Contacto
            </Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Quiero mi demo gratuita
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-green-50">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Convierte cada mensaje en WhatsApp en una oportunidad de venta
                </h1>
                <p className="text-xl text-gray-600">
                  Automatiza las respuestas y ahorra tiempo mientras tu negocio sigue creciendo.
                </p>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Quiero potenciar mis ventas ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Automatización de WhatsApp con IA para negocios"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Equipo de Machinlabs trabajando en soluciones innovadoras"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Machinlabs: Transformando tu negocio con innovación</h2>
                <p className="text-lg text-gray-600">
                  En Machinlabs somos un equipo apasionado de desarrolladores que crea soluciones automatizadas tan intuitivas y naturales que tus clientes sentirán que hablan con una persona real.
                </p>
                <p className="text-lg text-gray-600">
                  Con nuestra tecnología, simplificamos tus operaciones, potenciamos tus ventas y llevamos tu negocio al siguiente nivel sin complicaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="que-hacemos" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Soluciones innovadoras para tu negocio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Automatización inteligente de WhatsApp</CardTitle>
                  <CardDescription>
                    Respuestas instantáneas, gestión de pedidos y campañas personalizadas 24/7
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <ShoppingBag className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>E-commerce local optimizado</CardTitle>
                  <CardDescription>
                    Integración perfecta de WhatsApp para impulsar ventas y fidelización
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <Users className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Consultoría estratégica en IA</CardTitle>
                  <CardDescription>
                    Soluciones tecnológicas a medida para maximizar tu ROI
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-16 bg-green-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Beneficios transformadores para tu negocio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona nuestro proceso</h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/2">
                <ol className="relative border-l border-gray-200 ml-10">
                  {processSteps.map((step, index) => (
                    <li key={index} className="mb-10 ml-10">
                      <span className="absolute flex items-center justify-center w-10 h-10 bg-green-100 rounded-full p-6 -left-6">
                        <div>{step.icon}</div>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                        {step.title}
                        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                          Paso {index + 1}
                        </span>
                      </h3>
                      <p className="mb-4 text-base font-normal text-gray-500">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Proceso de implementación de Machinlabs"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Experimenta el futuro de la atención al cliente</h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden bg-white shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Demo interactiva de automatización de WhatsApp"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Quiero ver la demo en vivo ahora
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-green-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-6">¿Listo para revolucionar tu negocio?</h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              No esperes más para multiplicar tus ventas y optimizar tu atención al cliente. El futuro de tu negocio comienza hoy.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Solicita tu demostración personalizada gratuita</CardTitle>
                  <CardDescription>
                    Descubre cómo nuestra solución de IA puede transformar tu negocio en cuestión de días.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Nombre completo"
                        // {...register("name", { required: "Por favor, ingresa tu nombre" })}
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
                      />
                      {/* {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} */}
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Teléfono de contacto"
                        // {...register("phone", { required: "Por favor, ingresa tu número de teléfono" })}
                      />
                      {/* {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>} */}
                    </div>
                    <div>
                      <Textarea
                        placeholder="Cuéntanos brevemente sobre los desafíos de tu negocio"
                        // {...register("message", { required: "Por favor, cuéntanos sobre tu negocio" })}
                      />
                      {/* {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>} */}
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                      ¡Quiero potenciar mi negocio ahora!
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">¿Prefieres una consulta personalizada?</p>
              <Button variant="outline" className="bg-white" asChild>
                <Link href="https://wa.me/34123456789" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Quiero hablar con un experto en WhatsApp ahora
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cpu className="h-6 w-6 text-green-500" />
                <span className="font-bold">Machinlabs</span>
              </div>
              <p className="text-sm text-gray-400">
                Liderando la revolución digital en Hermosillo con soluciones de IA para WhatsApp
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explora</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#que-hacemos" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Nuestras Soluciones
                  </Link>
                </li>
                <li>
                  <Link href="#beneficios" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="#proceso" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Proceso
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacidad" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Términos y condiciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Conéctate</h4>
              <div className="flex space-x-4">
                <Link href="https://linkedin.com/company/machinlabs" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://wa.me/34123456789" className="text-gray-400 hover:text-white transition-colors">
                  <MessageSquare className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Machinlabs. Transformando negocios con IA en Hermosillo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}