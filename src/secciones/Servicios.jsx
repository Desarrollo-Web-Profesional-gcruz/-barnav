import { motion } from "motion/react";
import { FaLaptopCode, FaChalkboardTeacher, FaCertificate, FaHeadset, FaUsers, FaRocket } from "react-icons/fa";

const Servicios = () => {
  const services = [
    {
      icon: FaLaptopCode,
      title: "Cursos en Línea",
      description: "Accede a más de 50 cursos especializados en desarrollo web, programación y tecnologías modernas. Aprende a tu propio ritmo con contenido actualizado constantemente.",
      features: [
        "Acceso ilimitado 24/7",
        "Contenido en video HD",
        "Ejercicios prácticos",
        "Proyectos reales"
      ]
    },
    {
      icon: FaChalkboardTeacher,
      title: "Mentoría Personalizada",
      description: "Recibe guía directa de instructores expertos. Sesiones uno a uno para resolver dudas, revisar código y acelerar tu aprendizaje.",
      features: [
        "Sesiones en vivo",
        "Revisión de código",
        "Plan de estudio personalizado",
        "Seguimiento continuo"
      ]
    },
    {
      icon: FaCertificate,
      title: "Certificaciones",
      description: "Obtén certificados profesionales reconocidos al completar tus cursos. Valida tus habilidades y destaca en el mercado laboral.",
      features: [
        "Certificados verificables",
        "Credenciales digitales",
        "Perfil de LinkedIn",
        "Portfolio de proyectos"
      ]
    },
    {
      icon: FaHeadset,
      title: "Soporte Técnico",
      description: "Equipo de soporte disponible para ayudarte con problemas técnicos, dudas sobre el contenido o cualquier consulta relacionada con la plataforma.",
      features: [
        "Soporte 24/7",
        "Chat en vivo",
        "Base de conocimientos",
        "Foros de comunidad"
      ]
    },
    {
      icon: FaUsers,
      title: "Comunidad Activa",
      description: "Únete a una comunidad de estudiantes y profesionales. Networking, colaboración en proyectos y oportunidades de crecimiento profesional.",
      features: [
        "Grupos de estudio",
        "Eventos y webinars",
        "Proyectos colaborativos",
        "Networking profesional"
      ]
    },
    {
      icon: FaRocket,
      title: "Programa de Carrera",
      description: "Preparación completa para tu carrera profesional. Desde la construcción de tu portafolio hasta la preparación para entrevistas técnicas.",
      features: [
        "Orientación profesional",
        "Preparación de CV",
        "Simulación de entrevistas",
        "Bolsa de trabajo exclusiva"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-12 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              Nuestros <span className="text-orange-500">Servicios</span>
            </h1>
            <p className="text-xl text-gray-700">
              Todo lo que necesitas para impulsar tu carrera en tecnología
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar tu transformación profesional?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Únete a cientos de estudiantes que ya están construyendo su futuro en tecnología
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/cursos"
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              >
                Ver Cursos
              </a>
              <a
                href="/contacto"
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
