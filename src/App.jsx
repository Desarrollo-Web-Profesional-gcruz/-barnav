import Navbar from './componentes/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './secciones/Home'
import About from './secciones/About'
import Cursos from './secciones/Cursos'
import Servicios from './secciones/Servicios'
import Contacto from './secciones/Contacto'
import Login from './secciones/Login'

const App = () => {
 return (
 <div className='overflow-x-hidden'>
    <Navbar />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
 </div>
 )
}
export default App