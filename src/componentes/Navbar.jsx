import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { navbarLinks, banner } from "../data/data";
import { useState } from "react";
import MenuResponsivo from "./MenuResponsivo";

const Navbar = () => {
    const [abierto, setAbierto] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <div className="container flex justify-between items-center py-6 font-bold">
                    
                    {/* LOGO */}
                    <div className="flex items-center gap-3 text-2xl uppercase tracking-wide
                        font-extrabold cursor-pointer select-none
                        transition-all duration-300 hover:scale-105">
                        
                        <div className="bg-gradient-to-br from-primary to-secondary
                            p-2 rounded-xl shadow-md text-white">
                            <ImBooks />
                        </div>

                        <div className="flex gap-1">
                            <p>El sitio de <span className="text-primary">BARG</span></p>
                            <p className="text-secondary">Cursos</p>
                        </div>
                    </div>

                    {/* MENÚ */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-8 text-gray-600 font-semibold">
                            {navbarLinks.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.url}
                                        className="inline-block py-1 px-3 rounded-lg
                                        transition-all duration-300
                                        hover:text-primary hover:bg-primary/10"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ICONOS Y BOTÓN */}
                    <div className="flex items-center gap-4">
                        
                        {/* BUSCAR */}
                        <button className="text-2xl rounded-full p-2
                            text-gray-600 hover:text-white
                            hover:bg-gradient-to-br hover:from-primary hover:to-secondary
                            shadow-sm hover:shadow-md
                            transition-all duration-300">
                            <CiSearch />
                        </button>

                        {/* INGRESAR */}
                        <button className="hidden md:flex items-center gap-2
                            bg-gradient-to-r from-secondary to-primary
                            hover:from-primary hover:to-secondary
                            text-white font-semibold px-6 py-2.5 rounded-xl
                            shadow-md hover:shadow-xl
                            transition-all duration-300 hover:-translate-y-0.5">
                            Ingresar
                        </button>
                    </div>

                    {/* MENÚ MÓVIL */}
                    <div className="md:hidden">
                        <MdMenu
                            onClick={() => setAbierto(!abierto)}
                            className="text-4xl cursor-pointer
                            transition-all duration-300 hover:text-primary"
                        />
                    </div>
                </div>
            </nav>

            {/* BANNER */}
            <div className="bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
                <div className="container">
                    <div className="flex items-center py-4">
                        <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
                            {[...banner, ...banner].map((item, index) => (
                                <span
                                    key={index}
                                    className="text-white font-semibold text-lg"
                                >
                                    {item.text}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* MENÚ RESPONSIVO */}
            <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
        </>
    );
};

export default Navbar;
