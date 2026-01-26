import { motion } from "motion/react";
import { FaTarget, FaBinoculars, FaGem, FaCheckCircle } from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      name: "Juan Pérez",
      role: "Director General",
      specialty: "Liderazgo y Estrategia"
    },
    {
      name: "Gustavo Ramírez",
      role: "Instructor Principal",
      specialty: "Desarrollo Web Full Stack"
    },
    {
      name: "Ángel Torres",
      role: "Coordinador Académico",
      specialty: "Diseño de Cursos"
    },
    {
      name: "Cruz Méndez",
      role: "Instructor Senior",
      specialty: "Frontend & UX/UI"
    }
  ];

  const benefits = [
    "Instructores con experiencia real en la industria",
    "Contenido actualizado constantemente",
    "Certificaciones reconocidas",
    "Soporte personalizado 24/7",
    "Comunidad activa de estudiantes",
    "Precios accesibles y planes flexibles"
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 pb-12 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Sobre <span className="text-orange-500">BARG Cursos</span></h1>
            <p className="text-xl text-gray-700">
              Somos una plataforma educativa comprometida con la excelencia académica y el desarrollo profesional de nuestros estudiantes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl"
            >
              <FaTarget className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Misión</h3>
              <p className="text-gray-700">
                Proporcionar educación de calidad y accesible en tecnología, capacitando a profesionales para enfrentar los desafíos del mundo digital actual.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl"
            >
              <FaBinoculars className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Visión</h3>
              <p className="text-gray-700">
                Ser la plataforma educativa líder en Latinoamérica para el aprendizaje de tecnologías web y desarrollo profesional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl"
            >
              <FaGem className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-orange-500" />
                  Excelencia académica
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-orange-500" />
                  Innovación continua
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-orange-500" />
                  Compromiso con el estudiante
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-orange-500" />
                  Integridad y transparencia
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Nuestra Historia</h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                BARG Cursos nació en 2020 con la visión de democratizar el acceso a la educación tecnológica de calidad. Fundada por un equipo de profesionales apasionados por la enseñanza y el desarrollo web, comenzamos con solo 3 cursos y 50 estudiantes.
              </p>
              <p>
                Hoy, nos enorgullece contar con más de 500 estudiantes activos, 50+ cursos especializados y un equipo de instructores expertos comprometidos con la excelencia educativa.
              </p>
              <p>
                Nuestra plataforma ha evolucionado constantemente, incorporando las últimas tecnologías y metodologías de enseñanza para garantizar que nuestros estudiantes reciban la mejor preparación posible para el mercado laboral.
              </p>
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
            <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-gray-600 text-lg">Conoce a los expertos detrás de BARG Cursos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-orange-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">¿Por qué estudiar con nosotros?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                  <FaCheckCircle className="text-2xl flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 