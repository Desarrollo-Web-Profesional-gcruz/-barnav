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

                    {/* LOGO CON MOVIMIENTO */}
                    <div
                        className="flex items-center gap-3 text-2xl uppercase tracking-wide
                        font-extrabold cursor-pointer select-none
                        transition-transform duration-300 hover:scale-105
                        animate-float"
                    >
                        <div
                            className="bg-gradient-to-br from-primary to-secondary
                            p-2 rounded-xl shadow-md text-white
                            transition-transform duration-500 hover:rotate-6"
                        >
                            <ImBooks />
                        </div>

                        <div className="flex gap-1">
                            <p>
                                El sitio de <span className="text-primary">BARG</span>
                            </p>
                            <p className="text-secondary">Cursos</p>
                        </div>
                    </div>

                    {/* MENÚ DESKTOP */}
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

                    {/* ICONOS + BOTÓN */}
                    <div className="flex items-center gap-4">

                        {/* BUSCAR */}
                        <button
                            className="text-2xl rounded-full p-2
                            text-gray-600
                            hover:text-white
                            hover:bg-gradient-to-br hover:from-primary hover:to-secondary
                            shadow-sm hover:shadow-md
                            transition-all duration-300"
                        >
                            <CiSearch />
                        </button>

                        {/* BOTÓN INGRESAR (2 ESTILOS) */}
                        <button
                            className="hidden md:flex items-center gap-2
                            bg-gradient-to-r from-secondary to-primary
                            text-white font-semibold px-6 py-2.5 rounded-xl
                            shadow-md
                            transition-all duration-300
                            hover:from-primary hover:to-secondary
                            hover:shadow-2xl hover:-translate-y-1
                            active:scale-95"
                        >
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

            {/* BANNER DE NAVEGACIÓN */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary">

                {/* Overlay sutil para profundidad */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

                {/* Contenido */}
                <div className="relative container py-4">
                    <div className="flex items-center">
                        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">

                            {[...banner, ...banner].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-5 py-2
                                    bg-white/10 backdrop-blur-md
                                    rounded-full border border-white/20
                                    shadow-sm
                                    transition-all duration-300
                                    hover:bg-white/20 hover:scale-105"
                                >
                                    {/* Indicador animado */}
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />

                                    {/* Texto */}
                                    <span className="text-white font-semibold text-base md:text-lg tracking-wide">
                                        {item.text}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* Fade izquierdo */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24
                    bg-gradient-to-r from-primary to-transparent" />

                {/* Fade derecho */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24
                    bg-gradient-to-l from-primary to-transparent" />
            </div>


            {/* MENÚ RESPONSIVO */}
            <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
        </>
    );
};

export default Navbar;
