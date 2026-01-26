import { motion } from "motion/react";
import { courses } from "../data/data";
import { FaClock, FaUsers, FaStar } from "react-icons/fa";

const Cursos = () => {
  const getLevelColor = (level) => {
    switch (level) {
      case "Principiante":
        return "bg-green-100 text-green-700";
      case "Intermedio":
        return "bg-blue-100 text-blue-700";
      case "Avanzado":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

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
              Nuestros <span className="text-orange-500">Cursos</span>
            </h1>
            <p className="text-xl text-gray-700">
              Explora nuestra selección de cursos diseñados para impulsar tu carrera en desarrollo web
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 text-white">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-300" />
                      <span className="text-sm font-bold">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <p className="text-orange-50 text-sm">Por {course.instructor}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaClock className="text-orange-500" />
                      <span className="text-sm">Duración: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaUsers className="text-orange-500" />
                      <span className="text-sm">{course.students} estudiantes</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Aprenderás:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.slice(0, 3).map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-md"
                        >
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                          +{course.topics.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">Precio</p>
                      <p className="text-2xl font-bold text-orange-500">{course.price}</p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                      Inscribirse
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contáctanos y cuéntanos qué te gustaría aprender
            </p>
            <a
              href="/contacto"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Contactar
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cursos; 