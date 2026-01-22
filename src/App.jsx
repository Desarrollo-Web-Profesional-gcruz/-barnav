import Navbar from './componentes/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componentes/secciones/Home'
import About from './componentes/secciones/About'
import Cursos from './componentes/secciones/Cursos'
const App = () => {
 return (
 <div className='overflow-x-hidden'>
    <Navbar />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cursos" element={<Cursos />} />
        </Routes>
    </BrowserRouter>
 </div>
 )
}
export default App