const navbarLinks = [
 {
 id: 1,
 name: "Home",
 title: "Inicio",
 url: "/"
 },
 {
 id: 2,
 name: "About",
 title: "Acerca de",
 url: "/about"
 },
 {
 id: 3,
 name: "Cursos",
 title: "Cursos",
 url: "/cursos"
 },
 {
 id: 4,
 name: "Servicios",
 title: "Servicios",
 url: "/servicios"
 },
 {
 id: 5,
 name: "Contacto",
 title: "Contacto",
 url: "/contacto"
 },
 {
 id: 6,
 name: "Login",
 title: "Iniciar Sesión",
 url: "/login"
 }
];

const banner = [
    {
        id:1,
        name: "cursos",
        text: "Juan"
    },
        {
        id:2,
        name: "aprender",
        text: "Gustavo"
    },
    {
        id:3,
        name: "nombre",
        text: "Ángel"
    },
    {
        id:4,
        name: "certificados",
        text: "Cruz"
    },
        {
        id:5,
        name: "Descuentos",
        text: "Méndez"
    }
]

const courses = [
    {
        id: 1,
        title: "React Fundamentals",
        description: "Aprende los fundamentos de React desde cero. Construye aplicaciones web modernas e interactivas con uno de los frameworks más populares del mercado.",
        duration: "8 semanas",
        level: "Principiante",
        price: "$1,299",
        instructor: "Gustavo Ramírez",
        topics: ["Components", "Hooks", "State Management", "React Router"],
        students: 245,
        rating: 4.8
    },
    {
        id: 2,
        title: "Tailwind CSS Mastery",
        description: "Domina Tailwind CSS y crea interfaces hermosas y responsivas. Aprende utility-first CSS y diseño moderno para proyectos profesionales.",
        duration: "4 semanas",
        level: "Intermedio",
        price: "$899",
        instructor: "Cruz Méndez",
        topics: ["Utility Classes", "Responsive Design", "Custom Themes", "Components"],
        students: 189,
        rating: 4.9
    },
    {
        id: 3,
        title: "Framer Motion Animations",
        description: "Crea animaciones fluidas y atractivas para tus aplicaciones React. Aprende a dar vida a tus interfaces con animaciones profesionales.",
        duration: "3 semanas",
        level: "Intermedio",
        price: "$799",
        instructor: "Ángel Torres",
        topics: ["Animations", "Gestures", "Variants", "Layout Animations"],
        students: 156,
        rating: 4.7
    },
    {
        id: 4,
        title: "JavaScript Avanzado",
        description: "Profundiza en JavaScript moderno (ES6+). Domina conceptos avanzados como async/await, closures, y programación funcional.",
        duration: "10 semanas",
        level: "Avanzado",
        price: "$1,499",
        instructor: "Juan Pérez",
        topics: ["ES6+", "Async Programming", "Closures", "Functional Programming"],
        students: 312,
        rating: 4.9
    },
    {
        id: 5,
        title: "Node.js & Express Backend",
        description: "Construye APIs RESTful robustas y escalables. Aprende backend con Node.js y Express desde cero hasta nivel profesional.",
        duration: "12 semanas",
        level: "Intermedio",
        price: "$1,699",
        instructor: "Gustavo Ramírez",
        topics: ["Node.js", "Express", "REST APIs", "MongoDB", "Authentication"],
        students: 278,
        rating: 4.8
    },
    {
        id: 6,
        title: "Full Stack Web Development",
        description: "Conviértete en un desarrollador Full Stack completo. Aprende frontend y backend para crear aplicaciones web profesionales end-to-end.",
        duration: "16 semanas",
        level: "Intermedio",
        price: "$2,499",
        instructor: "Juan Pérez",
        topics: ["React", "Node.js", "MongoDB", "Deployment", "Git"],
        students: 421,
        rating: 5.0
    }
]

export { navbarLinks, banner, courses };


