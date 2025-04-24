import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/grab.svg';
import { Link } from "react-router-dom";
import { Menu, X } from 'react-feather';

export default function Navbar() {
    const navigate = useNavigate();
    const controls = useAnimation();
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
                controls.start({ opacity: 1, y: 0 });
            } else {
                setScrolling(false);
                controls.start({ opacity: 0, y: -20 });
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    const menu = [
        { text: "Tentang", path: "#tentang-kami" },
        { text: "Services", path: "#service" },
        { text: "Home", path: "/home" },
    ];

    const handleNav = (path) => {
        setMenuOpen(false);
        if (path.startsWith('#')) {
            document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(path);
        }
    };

    return (
        <>
            {/* Desktop Navbar (lg+) */}
            <div className={`fixed top-0 w-full hidden lg:flex justify-center items-center px-20 py-5 z-20 transition-all duration-500 ${scrolling ? "hidden" : "bg-transparent"}`}>
                <div className="py-3 w-screen flex justify-between items-center">
                    <img src={Logo} className="cursor-pointer w-[100px]" onClick={() => navigate("/")} />
                    <ul className="list-none flex justify-end items-center w-full gap-8">
                        {menu.map(x => (
                            <li key={x.text} className="text-white text-lg font-medium h-12 flex items-center justify-center px-4 rounded-md transition-all delay-75 cursor-pointer hover:bg-green-400/80 active:bg-green-500/80"
                                onClick={() => handleNav(x.path)}>
                                {x.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Desktop Sticky Navbar */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={controls} transition={{ duration: 0.1 }}
                className={`fixed top-0 w-full hidden lg:flex justify-center items-center px-20 py-5 z-30 ${scrolling ? "flex" : "hidden"}`}>
                <div className="bg-white px-5 py-3 w-screen flex justify-between items-center rounded-md drop-shadow-lg">
                    <img src={Logo} className="h-10 cursor-pointer" onClick={() => navigate("/")} />
                    <ul className="list-none flex justify-end items-center w-full gap-6">
                        {menu.map(x => (
                            <li key={x.text} className="text-green-600 text-lg font-medium h-12 flex items-center justify-center px-4 rounded-md transition-all delay-75 cursor-pointer hover:bg-green-400/80 active:bg-green-500/80"
                                onClick={() => handleNav(x.path)}>
                                {x.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Mobile & Tablet Navbar (sm & md) with Hamburger */}
            <div className="fixed top-0 w-full flex lg:hidden justify-between items-center px-4 py-3 bg-green-600 z-30">
                <img src={Logo} className="h-8 w-auto cursor-pointer" onClick={() => navigate("/")} />
                <button onClick={() => setMenuOpen(prev => !prev)} className="text-white focus:outline-none">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-b-md overflow-hidden">
                        {menu.map(x => (
                            <button
                                key={x.text}
                                onClick={() => handleNav(x.path)}
                                className="w-full text-left px-4 py-3 hover:bg-green-100"
                            >
                                <span className="text-green-700 font-medium">{x.text}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
