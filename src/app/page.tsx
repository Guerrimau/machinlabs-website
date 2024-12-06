import Image from "next/image";
import { Metadata } from "next";
import {
  ArrowRight,
  Code2,
  Cpu,
  MessageSquare,
  Rocket,
  CheckCircle2,
  Phone,
  Search,
  HeartHandshake,
  Database,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = {
  title:
    "Machinlabs - Desarrollo de Software y Automatización en Hermosillo, Sonora",
  description:
    "Consultoría experta en desarrollo de software, automatización e inteligencia artificial para empresas en crecimiento en Hermosillo y todo Sonora. Soluciones tecnológicas innovadoras para impulsar tu negocio local.",
  keywords:
    "Desarrollo de software Hermosillo, Automatización Sonora, Inteligencia artificial Hermosillo, Consultoría tecnológica Sonora, Soluciones digitales Hermosillo",
};

const steps = [
  {
    icon: Search,
    title: "Descubrimiento",
    description:
      "Comprendemos tus necesidades específicas y objetivos de negocio.",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    description:
      "Creamos soluciones personalizadas utilizando tecnologías de vanguardia.",
  },
  {
    icon: Rocket,
    title: "Implementación",
    description:
      "Integramos la solución de manera fluida en tu operación existente.",
  },
  {
    icon: HeartHandshake,
    title: "Soporte",
    description:
      "Proporcionamos soporte continuo para asegurar tu éxito a largo plazo.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cpu className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">Machinlabs</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contacto
            </a>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors hidden md:block">
            Haz crecer tu negocio hoy
          </button>
        </div>
      </header>
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Impulsamos negocios en Hermosillo con tecnología inteligente
              </h1>
              <p className="text-xl text-gray-600">
                Consultoría experta en desarrollo de software y soluciones
                inteligentes para empresas en crecimiento en Sonora
              </p>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <span>Contáctanos para tu proyecto en Sonora</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                width={800}
                height={600}
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Innovación Tecnológica en Hermosillo"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="servicios" className="py-16 flex">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Nuestros Servicios en Hermosillo y Sonora
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Code2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Desarrollo de software a medida
              </h3>
              <p className="mb-4 text-gray-600">
                Aplicaciones robustas y escalables diseñadas para resolver los
                retos únicos de tu negocio en Sonora.
              </p>
              <div className="border-t border-gray-200 my-4"></div>
              <p className="text-sm text-blue-600">
                Reduce tus costos operativos en un 20% con soluciones
                personalizadas para empresas de Hermosillo
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Ciencia de Datos
              </h3>
              <p className="mb-4 text-gray-600">
                Convierte datos en decisiones inteligentes con nuestras
                soluciones de analítica avanzada.
              </p>
              <div className="border-t border-gray-200 my-4"></div>
              <p className="text-sm text-green-600">
                Aumenta tus ingresos hasta un 15% con decisiones basadas en
                datos para tu empresa en Hermosillo
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Automatización
              </h3>
              <p className="mb-4 text-gray-600">
                Ahorra tiempo y dinero automatizando tareas repetitivas y
                optimizando operaciones clave.
              </p>
              <div className="border-t border-gray-200 my-4"></div>
              <p className="text-sm text-purple-600">
                Mejora la eficiencia de tus procesos hasta en un 30% en tu
                empresa de Sonora
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
            <p className="text-xl text-gray-600">
              Un enfoque estructurado para garantizar el éxito de tu proyecto
            </p>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 hidden md:block" />

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative h-full">
                  <div className="bg-white rounded-xl p-6 shadow-lg relative z-10 flex flex-col h-full">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shrink-0">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-center mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-center flex-grow">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 right-0 w-full h-0.5 flex items-center justify-end z-0 md:flex">
                      <div className="w-2 h-2 rounded-full bg-blue-600 transform translate-x-1/2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Productos</h2>
            <p className="text-xl text-gray-600">
              Soluciones innovadoras diseñadas para impulsar tu negocio en
              Hermosillo y todo Sonora
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                width={800}
                height={600}
                src="https://images.unsplash.com/photo-1556742059-47b93231f536?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Kofei Fidelización y Automatización"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-blue-600">Kofei</h3>
                <h2 className="text-3xl font-bold mb-4">
                  Fidelización y Automatización para Cafeterías
                </h2>
                <p className="text-xl text-gray-600">
                  Descubre cómo nuestro sistema de fidelización y automatización
                  puede transformar la experiencia de tus clientes y optimizar
                  la operación de tu cafetería.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Mejora la experiencia del cliente
                    </h3>
                    <p className="text-gray-600">
                      Fideliza a tus clientes con un sistema de recompensas y
                      descuentos personalizado, ofreciéndoles una experiencia
                      única cada vez que visitan tu cafetería.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Promociones y campañas personalizadas
                    </h3>
                    <p className="text-gray-600">
                      Crea campañas de marketing dirigidas a tus clientes más
                      fieles, ofreciéndoles promociones personalizadas que
                      aumenten la lealtad y las visitas repetidas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Mejor seguimiento y análisis
                    </h3>
                    <p className="text-gray-600">
                      Obtén datos clave sobre el comportamiento de tus clientes
                      y el rendimiento de tu cafetería, lo que te permitirá
                      tomar decisiones informadas para mejorar la rentabilidad.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/kofei" className="inline-flex items-center">
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  Descubrir más
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Innovación Tecnológica a tu Alcance
            </h2>
            <p className="text-xl text-gray-600">
              Transformando ideas en soluciones digitales poderosas para
              impulsar el crecimiento de tu negocio
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:flex-shrink-0 p-6">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                  <Image
                    src="/gerardo_profile.jpeg"
                    alt="Gerardo Mayboca"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                  Gerardo Mayboca
                </div>
                <h3 className="mt-1 text-2xl font-semibold leading-tight">
                  Software Engineer & Data Scientist
                </h3>
                <p className="mt-2 text-gray-600">
                  Ingeniero de Software apasionado con más de 4 años de
                  experiencia en el desarrollo de soluciones tecnológicas
                  innovadoras. Mi experiencia abarca desde el desarrollo de
                  software hasta la ciencia de datos y la automatización,
                  permitiéndome ofrecer soluciones integrales y eficientes para
                  diversas industrias.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Desarrollo de aplicaciones web y móviles de vanguardia
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Ciencia de datos y soluciones de inteligencia artificial
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Automatización de procesos y optimización de flujos de
                    trabajo
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Experiencia en sectores como educación, bienes raíces y
                    servicios en la nube
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para impulsar tu negocio en Sonora?
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Contáctanos hoy y descubre cómo podemos transformar tu empresa en
              Hermosillo con tecnología inteligente
            </p>
            <p className="text-lg text-blue-600 font-semibold">
              Oferta especial: 20% de descuento en tu primer proyecto para
              empresas locales
            </p>
            <p className="text-sm text-gray-500">
              Válido solo para las próximas 2 empresas en Sonora. ¡No pierdas
              esta oportunidad!
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6">
              <ContactForm />
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              ¿Prefieres una respuesta inmediata?
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/526623691327"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700"
              >
                <MessageSquare className="h-5 w-5" />
                Chatea con nosotros
              </a>
              <a
                href="tel:+526623691327"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <Phone className="h-5 w-5" />
                Llámanos ahora
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cpu className="h-6 w-6 text-blue-500" />
                <span className="font-bold text-white">Machinlabs</span>
              </div>
              <p className="text-sm">
                Impulsando negocios en Hermosillo y todo Sonora a través de
                soluciones tecnológicas innovadoras.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>
              &copy; 2024 Machinlabs. Todos los derechos reservados. Hermosillo,
              Sonora, México.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
