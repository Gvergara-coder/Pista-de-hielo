'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Menu, X, MapPin, Phone, Mail, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroImages = ['/pista-portada.jpg', '/patinaje-artistico-2.jpg'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const prevHeroImage = () => setHeroIndex((current) => (current - 1 + heroImages.length) % heroImages.length);
  const nextHeroImage = () => setHeroIndex((current) => (current + 1) % heroImages.length);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 300000); // 5 minutos

    return () => clearTimeout(timeout);
  }, [heroIndex]);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            La pista de hielo
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#servicios" className="text-foreground hover:text-primary font-medium transition">Servicios</a>
            <a href="#ubicacion" className="text-foreground hover:text-primary font-medium transition">Ubicación</a>
            <a href="#faq" className="text-foreground hover:text-primary font-medium transition">FAQ</a>
            <Button className="bg-primary hover:bg-blue-700 text-white">Reserva tu sesión</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 py-4">
            <div className="flex flex-col gap-4 px-4">
              <a href="#servicios" className="text-foreground hover:text-primary font-medium">Servicios</a>
              <a href="#ubicacion" className="text-foreground hover:text-primary font-medium">Ubicación</a>
              <a href="#faq" className="text-foreground hover:text-primary font-medium">FAQ</a>
              <Button className="bg-primary hover:bg-blue-700 text-white w-full">Reserva tu sesión</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src={heroImages[heroIndex]}
          alt="Pista de hielo"
          fill
          className="absolute inset-0 object-cover transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-blue-50 opacity-60"></div>

        <button
          type="button"
          onClick={prevHeroImage}
          aria-label="Imagen anterior"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-blue-900 shadow-lg transition hover:bg-white"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          type="button"
          onClick={nextHeroImage}
          aria-label="Siguiente imagen"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-blue-900 shadow-lg transition hover:bg-white"
        >
          <ChevronRight size={28} />
        </button>
        
        {/* Animated ice effect background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6 inline-block">
            <span className="bg-blue-100 text-primary px-4 py-2 rounded-full font-semibold">🧊 Bienvenido al frío</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance" style={{ color: 'white' }}>
            Disfruta de la pista de hielo más alta del mundo
          </h1>
          
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            En el corazón de Caracas, donde el calor tropical se encuentra con la magia del hielo congelado. Una experiencia única a 2.100 metros de altura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg">
              Reserva tu sesión
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-primary text-primary hover:bg-blue-50 rounded-lg">
              Ver más
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-foreground/70">Elige la experiencia perfecta para ti y tu familia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="bg-white hover:shadow-2xl transition border-0 overflow-hidden">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/patinaje-artistico.jpg"
                  alt="Clases de patinaje artístico"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Clases de Patinaje Artístico</h3>
                <p className="text-foreground/70 mb-6">
                  Aprende técnicas profesionales con nuestros instructores certificados. Desde principiante hasta avanzado, tenemos programas para todas las edades.
                </p>
                <ul className="text-sm space-y-2 text-foreground/60">
                  <li>✓ Instructores certificados</li>
                  <li>✓ Grupos reducidos</li>
                  <li>✓ Horarios flexibles</li>
                </ul>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="bg-white hover:shadow-2xl transition border-0 overflow-hidden">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/patines.jpg"
                  alt="Sesiones Libres"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Sesiones Libres</h3>
                <p className="text-foreground/70 mb-6">
                  ¡Disfrutá de la pista a tu propio ritmo! Perfectas para familias, amigos o una salida especial. Sin presión, solo pura diversión.
                </p>
                <ul className="text-sm space-y-2 text-foreground/60">
                  <li>✓ Sin instrucciones</li>
                  <li>✓ Música en vivo</li>
                  <li>✓ Ambiente familiar</li>
                </ul>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="bg-white hover:shadow-2xl transition border-0 overflow-hidden">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/eventos.png"
                  alt="Eventos corporativos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Eventos Corporativos y Cumpleaños</h3>
                <p className="text-foreground/70 mb-6">
                  Celebrá momentos especiales en un lugar único. Paquetes personalizados que incluyen catering, decoración y actividades.
                </p>
                <ul className="text-sm space-y-2 text-foreground/60">
                  <li>✓ Catering incluido</li>
                  <li>✓ Grupos privados</li>
                  <li>✓ Paquetes personalizados</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Hours Section */}
      <section id="tarifas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Horarios</h2>
            <p className="text-xl text-foreground/70">Horarios de funcionamiento de la pista</p>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Horarios</h3>
            <div className="grid md:grid-cols-1 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-primary">Miércoles a Domingo</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>1:00 PM - 8:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">¿Dónde nos encuentras?</h2>
            <p className="text-xl text-foreground/70">En la zona de María Pérez, a 2.100 metros sobre el nivel del mar</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="bg-white border-0 shadow-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ubicación</h3>
                    <p className="text-foreground/70">María Pérez, Caracas, Venezuela</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Teléfono</h3>
                    <p className="text-foreground/70">0424-1513938</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-foreground/70">lapistadehielowaraira@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Instagram className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Instagram</h3>
                    <p className="text-foreground/70">@Lapistadehielo</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg shadow-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-foreground font-semibold">Google Maps</p>
                <p className="text-sm text-foreground/70">Mapa interactivo aquí</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-foreground/70">Resolvemos tus dudas sobre la pista</p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
              <summary className="flex justify-between items-center font-bold text-lg text-foreground">
                <span>¿Alquilan patines?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-foreground/70 mt-4">
                Sí, ofrecemos alquiler de patines de alta calidad a un precio muy accesible (50 Bs. por sesión). Disponemos de tallas para niños y adultos. Nuestro personal te ayudará a encontrar el tamaño correcto para máximo confort y seguridad.
              </p>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
              <summary className="flex justify-between items-center font-bold text-lg text-foreground">
                <span>¿Qué ropa debo llevar?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <div className="text-foreground/70 mt-4">
                <p>
                  Te recomendamos ropa cómoda y abrigada. Aunque el hielo está a baja temperatura, el ambiente se mantiene controlado. Usa:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Pantalones o leggings (evita shorts)</li>
                  <li>Suéter o abrigo ligero</li>
                  <li>Calcetines abrigados (no obligatorio pero recomendado)</li>
                  <li>Evita ropa muy suelta que pueda engancharse</li>
                </ul>
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
              <summary className="flex justify-between items-center font-bold text-lg text-foreground">
                <span>¿Hay comida en la pista?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <div className="text-foreground/70 mt-4">
                <p>¡Por supuesto! Contamos con una cafetería moderna donde puedes disfrutar de:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Bebidas calientes (chocolate, café, té)</li>
                  <li>Snacks y frutos secos</li>
                  <li>Bebidas frías</li>
                  <li>Empanadas y arepas caseras</li>
                </ul>
                <p className="mt-4">También disponemos de áreas para comer y descansar entre sesiones.</p>
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
              <summary className="flex justify-between items-center font-bold text-lg text-foreground">
                <span>¿Hay estacionamiento?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-foreground/70 mt-4">
                Sí, contamos con estacionamiento amplio y seguro para nuestros visitantes. El acceso es gratuito y vigilado durante todo el día.
              </p>
            </details>

            {/* FAQ Item 5 */}
            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
              <summary className="flex justify-between items-center font-bold text-lg text-foreground">
                <span>¿Cuáles son las medidas de seguridad?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <div className="text-foreground/70 mt-4">
                <p>La seguridad es nuestra prioridad. Implementamos:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Personal capacitado en la pista</li>
                  <li>Equipos de protección disponibles (casco, muñequeras, rodilleras)</li>
                  <li>Límite de personas por sesión para máxima seguridad</li>
                  <li>Piso antideslizante en áreas de entrada y salida</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">¿Listo para patinar?</h2>
          <p className="text-xl mb-8 text-white/90">
            Reserva ahora y vive la experiencia más refrescante de Caracas a 2.100 metros de altura.
          </p>
          <Button className="bg-white hover:bg-gray-100 text-primary px-8 py-6 text-lg rounded-lg font-bold">
            Reservar Ahora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">La pista de hielo</h3>
              <p className="text-white/70">La mejor experiencia de patinaje en la altura de Caracas</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
                <li><a href="#tarifas" className="hover:text-white transition">Tarifas</a></li>
                <li><a href="#ubicacion" className="hover:text-white transition">Ubicación</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-white/70">
                <li>📱 0424-1513938</li>
                <li>✉️ lapistadehielowaraira@gmail.com</li>
                <li>📍 María Pérez, Caracas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociales</h4>
              <a href="https://instagram.com/Lapistadehielo" className="text-white/70 hover:text-white transition">
                Instagram @Lapistadehielo
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2024 La pista de hielo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
