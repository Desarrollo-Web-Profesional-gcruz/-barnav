import { motion } from "motion/react";
import { FaGraduationCap, FaChalkboardTeacher, FaClock } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section
        id="/"
        className="h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Bienvenido a <span className="text-orange-500">BARG Cursos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Tu plataforma de aprendizaje profesional para desarrollar tus habilidades en tecnología
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/cursos" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Ver Cursos
              </a>
              <a href="/about" className="bg-white hover:bg-gray-50 text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Conocer Más
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegir BARG Cursos?</h2>
            <p className="text-gray-600 text-lg">Las mejores características para tu aprendizaje</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cursos Certificados",
                description: "Obtén certificados reconocidos al completar tus cursos",
                icon: FaGraduationCap
              },
              {
                title: "Instructores Expertos",
                description: "Aprende de profesionales con experiencia en la industria",
                icon: FaChalkboardTeacher
              },
              {
                title: "Aprende a tu Ritmo",
                description: "Accede al contenido cuando quieras, desde donde quieras",
                icon: FaClock
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all hover:shadow-lg"
              >
                <feature.icon className="text-5xl text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Estudiantes" },
              { number: "50+", label: "Cursos" },
              { number: "95%", label: "Satisfacción" },
              { number: "24/7", label: "Soporte" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-orange-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">¿Listo para comenzar?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Únete a nuestra comunidad y comienza a aprender hoy mismo
            </p>
            <a href="/login" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              Iniciar Sesión
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 