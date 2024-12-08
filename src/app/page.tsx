import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, BarChart3, Code2, Cpu, CheckCircle, MessageSquare, Phone, Zap } from 'lucide-react';
import Link from "next/link";
import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Machinlabs - Desarrollo de Software y Automatización",
  description: "Consultoría experta en desarrollo de software, automatización e inteligencia artificial para empresas en crecimiento. Soluciones tecnológicas innovadoras para impulsar tu negocio.",
  keywords: "Desarrollo de software, Automatización, Inteligencia artificial, Consultoría tecnológica, Soluciones digitales",
};

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
                Haz crecer tu negocio con tecnología
              </h1>
              <p className="text-xl text-gray-600">
                Desarrollamos herramientas a medida, analizamos tus datos y automatizamos procesos para que ahorres tiempo, tomes decisiones inteligentes y hagas crecer tu negocio.
              </p>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <span>Contáctanos para tu proyecto</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                width={800}
                height={600}
                src="/hero.jpg"
                alt="Innovación Tecnológica en Hermosillo"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="servicios" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tecnología diseñada para resolver tus retos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En cada proyecto, creamos soluciones únicas que se adaptan a tus necesidades específicas. Descubre lo que podemos construir para ti.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                width={600}
                height={400}
                src="/software.jpg"
                alt="Desarrollo de Software"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="bg-blue-100 p-3 rounded-lg inline-block">
                <Code2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Software hecho para tu visión</h3>
              <p className="text-xl text-gray-600">
                ¿Necesitas una plataforma para gestionar inventarios, un sistema para coordinar a tu equipo o una app móvil para tus clientes? Diseñamos y construimos las herramientas digitales que tu negocio necesita para crecer sin complicaciones.
              </p>
              <p className="text-lg text-blue-600 font-semibold">
                Reduce tus costos operativos hasta un 30% con soluciones de software personalizadas para tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <Image
                width={600}
                height={600}
                src="/analytics.jpg"
                alt="Ciencia de Datos"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="bg-green-100 p-3 rounded-lg inline-block">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Tus datos, transformados en decisiones</h3>
              <p className="text-xl text-gray-600">
                Creamos dashboards y reportes personalizados que convierten tus datos en estrategias claras. Desde identificar los productos más vendidos hasta encontrar áreas de oportunidad, nuestras herramientas te empoderan con información para avanzar con confianza.
              </p>
              <p className="text-lg text-green-600 font-semibold">
                Incrementa tus ingresos hasta un 20% con decisiones estratégicas basadas en el análisis de tus datos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                width={600}
                height={400}
                src="/automation.jpg"
                alt="Automatización"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="bg-purple-100 p-3 rounded-lg inline-block">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Automatiza lo tedioso, enfócate en lo estratégico</h3>
              <p className="text-xl text-gray-600">
                Imagina herramientas construidas específicamente para ti, que automatizan procesos como facturación, reportes o atención al cliente. Deja atrás las tareas repetitivas y redirige tu tiempo hacia hacer crecer tu negocio.
              </p>
              <p className="text-lg text-purple-600 font-semibold">
                Ahorra hasta 20 horas semanales en tareas repetitivas y enfócate en el crecimiento de tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Soluciones Destacadas</h2>
            <p className="text-xl text-gray-600">
              Descubre una de nuestras innovadoras soluciones diseñadas para impulsar negocios como el tuyo
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
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-blue-600">Kofei</h3>
              <h2 className="text-3xl font-bold">
                Fidelización y Automatización para Cafeterías
              </h2>
              <p className="text-xl text-gray-600">
                Una de nuestras soluciones personalizadas que demuestra cómo transformamos negocios con tecnología inteligente.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Fidelización de clientes con recompensas personalizadas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Campañas de marketing dirigidas y efectivas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Análisis de datos para mejorar la rentabilidad</span>
                </li>
              </ul>
              <div className="flex space-x-4">
                <Link href="/kofei">
                  <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    Descubre Kofei
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestros Fundadores</h2>
            <p className="text-xl text-gray-600">
              Conoce a los expertos detrás de las soluciones tecnológicas de Machinlabs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src="/gerardo_profile.jpeg"
                    alt="Gerardo Mayboca"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Gerardo Mayboca</h3>
                  <p className="text-blue-600 mb-4">Software Engineer</p>
                  <p className="text-gray-600 mb-0">
                    Ingeniero de Software apasionado por el desarrollo de soluciones tecnológicas innovadoras que impulsan el crecimiento empresarial.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Jose Manuel Pulido"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Jose Manuel Pulido</h3>
                  <p className="text-blue-600 mb-4">Data Scientist</p>
                  <p className="text-gray-600 mb-0">
                    Científico de datos especializado en transformar datos complejos en insights accionables para potenciar estrategias de negocio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Recibe una asesoría gratuita y una cotización personalizada para tus proyectos.
            </p>
            <p className="text-lg text-blue-600 font-semibold">
              Oferta especial: 25% de descuento en tu primer proyecto
            </p>
            <p className="text-sm text-gray-500">
              Cupos extremadamente limitados. ¡Asegura tu lugar antes de que se agoten!
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
                Impulsando negocios a través de soluciones tecnológicas innovadoras.
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
              &copy; 2024 Machinlabs. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}