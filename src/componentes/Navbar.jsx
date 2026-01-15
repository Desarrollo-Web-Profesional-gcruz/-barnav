import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { navbarLinks, banner } from "../data/data";
import { useState } from "react";
import MenuResponsivo from "./MenuResponsivo";

const Navbar = () => {
    const [abierto, setAbierto] = useState(false);
 return (
    <>
        <nav>
            <div className='container flex justify-between font-bold items-center py-8'>
                {
                //Sección de Logo
                //Se agrega al logo un estilo para que aparezca en infinito movimiento
                <div className="text-2xl flex items-center gap-2 uppercase transition-transform duration-300 hover:scale-105 animate-bounce">                    <ImBooks />
                    <p>El sitio de BARG</p>
                    <p className="text-secondary">Cursos</p>
                </div>
                }
                {
                    //Sección de Menú
                <div className="hidden md:block">
                    <ul className="flex items-center gap-7 text-gray-600">
                        {navbarLinks.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.url}
                                    className="inline-block py-1 px-3 hover:text-primary"
                                    >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                }
                {
                //Sección de Íconos
                <div className="flex items-center gap-4">
                    {/* Se agrega diseño para que el color del hover sea intermitente entre un naranja
                    fuerte y un naranja claro */}
                    <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300 animate-pulse">
                        <CiSearch />
                    </button>


                    <button className="hover:bg-primary font-semibold rounded-md
                    text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block">
                    Ingresar
                    </button>
                </div>
                }
                {
                //Sección de Móvil
                <div className="md:hidden">
                    <MdMenu onClick={() => setAbierto(!abierto)}
                    className="text-4xl" />
                </div>
                }
            </div>
        </nav>

        {/*Aquí se crea el banner con información cargada previamente
        en el archivo data.js en el arreglo llamado banner. Se utiliza un 
        .map para recorrer todo el arreglo */}
        <div className="bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
            <div className="container">
                <div className="flex items-center py-4">
                    <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
                        {[...banner, ...banner].map((item, index) => (
                            <span key={index} className="text-white font-semibold text-lg">
                                {item.text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        {
            <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
            //
        }
    </>
    )
}
export default Navbar