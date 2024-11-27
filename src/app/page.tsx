import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowRight,
  Code,
  Database,
  Zap,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { SolutionsCarrousel } from "./_components/solutions-carrousel";

export const metadata: Metadata = {
  title: "Machinlabs - Soluciones Tecnológicas para Impulsar tu Negocio",
  description:
    "Desarrollo de software personalizado, ciencia de datos y automatización para transformar y optimizar tu empresa.",
};

export default function HomePage() {
  return (
    <div className=" font-sans bg-gray-50">
      <header className="flex sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container m-auto px-10 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Cpu className="h-6 w-6 text-blue-900" />
            <span className="font-bold text-gray-900">Machinlabs</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#servicios"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#starter-kits"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Starter Kits
            </Link>
            <Link
              href="#casos-exito"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Casos de Éxito
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contacto
            </Link>
          </nav>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white transition-colors duration-300">
            Haz crecer tu negocio hoy
          </Button>
        </div>
      </header>

      <main className="flex flex-col flex-grow">
        <section className="flex py-20 md:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transforma tu Negocio con Tecnología Inteligente
                </h1>
                <p className="text-xl text-gray-600">
                  Soluciones personalizadas que impulsan tu crecimiento,
                  optimizan tus operaciones y maximizan tus resultados.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-900 hover:bg-blue-800 text-white transition-colors duration-300"
                >
                  Haz crecer tu negocio hoy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Soluciones tecnológicas avanzadas"
                width={500}
                height={400}
                className="rounded-lg shadow-xl animate-float"
              />
            </div>
          </div>
        </section>

        <section id="servicios" className="py-16 flex">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Code className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Desarrollo de software a medida
                </h3>
                <p className="mb-4 text-gray-600">
                  Aplicaciones robustas y escalables diseñadas para resolver los
                  retos únicos de tu negocio.
                </p>
                <p className="text-sm text-blue-600 mb-4">
                  Redujimos el tiempo de desarrollo en un 40% para StartupX
                </p>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Más información
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Database className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Ciencia de Datos
                </h3>
                <p className="mb-4 text-gray-600">
                  Convierte datos en decisiones inteligentes con nuestras
                  soluciones de analítica avanzada.
                </p>
                <p className="text-sm text-green-600 mb-4">
                  Aumentamos la precisión de predicciones en un 35% para
                  DataCorp
                </p>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  Más información
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Zap className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Automatización
                </h3>
                <p className="mb-4 text-gray-600">
                  Ahorra tiempo y dinero automatizando tareas repetitivas y
                  optimizando operaciones clave.
                </p>
                <p className="text-sm text-purple-600 mb-4">
                  Redujimos costos operativos en un 25% para LogisTech
                </p>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  Más información
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="starter-kits" className="flex py-16 bg-gray-100">
          <SolutionsCarrousel />
        </section>

        <section id="casos-exito" className="flex py-16 bg-blue-900 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Casos de Éxito
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Automatización de atención al cliente
                </h3>
                <p className="mb-4">
                  Ayudamos a una pyme a automatizar su atención al cliente con
                  un chatbot, mejorando la satisfacción del cliente en un 40%.
                </p>
                <Link
                  href="/casos/atencion-cliente"
                  className="inline-flex items-center text-white hover:underline"
                >
                  Ver caso completo
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Gráfico de mejora en atención al cliente"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="flex py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Contáctanos
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Tu nombre completo"
                  required
                  className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                />
                <Input
                  type="email"
                  placeholder="Tu correo empresarial"
                  required
                  className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                />
                <Select name="area_interes">
                  <SelectTrigger className="border-gray-300 focus:border-blue-900 focus:ring-blue-900">
                    <SelectValue placeholder="Área de interés" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desarrollo">
                      Desarrollo de software
                    </SelectItem>
                    <SelectItem value="datos">Ciencia de datos</SelectItem>
                    <SelectItem value="automatizacion">
                      Automatización
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Cuéntanos sobre tu proyecto o necesidad"
                  className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Quiero recibir información adicional
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white transition-colors duration-300"
                >
                  Solicita tu consulta gratuita
                </Button>
              </form>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">
                ¿Prefieres contactarnos directamente?
              </p>
              <p className="text-gray-800">Email: info@machinlabs.com</p>
              <p className="text-gray-800">Teléfono: +34 123 456 789</p>
              <Button
                variant="outline"
                className="mt-4 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-300"
              >
                <Link
                  href="https://wa.me/34123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos por WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="flex py-16 bg-blue-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="mb-8 text-xl">
              Contrata tu Starter Kit este mes y obtén soporte extendido
              gratuito.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-900 hover:bg-gray-100 transition-colors duration-300"
            >
              Aprovecha esta oferta limitada
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="flex bg-gray-800 text-white py-8">
        <div className="container grid grid-cols-1 mx-auto md:grid-cols-4 gap-8">
          <div>
            <Cpu className="h-6 w-6 text-white mb-2" />
            <p>© 2024 Machinlabs. Todos los derechos reservados.</p>
          </div>
          <nav className="space-y-2">
            <Link
              href="/"
              className="block hover:text-blue-400 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="block hover:text-blue-400 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#starter-kits"
              className="block hover:text-blue-400 transition-colors"
            >
              Starter Kits
            </Link>
            <Link
              href="#casos-exito"
              className="block hover:text-blue-400 transition-colors"
            >
              Casos de Éxito
            </Link>
          </nav>
          <div>
            <h4 className="font-semibold mb-2">Contacto</h4>
            <p>Email: info@machinlabs.com</p>
            <p>Teléfono: +34 123 456 789</p>
            <p>Dirección: Calle Tecnología, 123, Madrid</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <Link
              href="/privacidad"
              className="block hover:text-blue-400 transition-colors"
            >
              Política de privacidad
            </Link>
            <Link
              href="/terminos"
              className="block hover:text-blue-400 transition-colors"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
