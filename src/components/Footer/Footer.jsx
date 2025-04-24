import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "react-feather";
import Logo from '../../assets/grab.svg';

export default function Footer() {
    return (
        <>
<div className="w-full h-auto bg-gradient-to-b from-green-800 via-green-600 to-green-500 border-none ">
    <div className="w-full h-full px-5 py-8 sm:px-4 sm:py-6 md:px-10 md:py-8 max-w-screen-2xl m-auto flex flex-col sm:flex-col md:flex-row justify-between gap-8 lg:px-20">
        {/* Bagian Kiri */}
        <div className="w-full md:w-[45%] h-full flex flex-col gap-3">
            <div className="w-full h-auto flex flex-row gap-4 items-center">
                <img src={Logo} className="w-[25%] sm:w-[30%] md:w-[20%]" alt="Grab Logo" />
                <div className="flex flex-col">
                    <p className="text-white text-xl sm:text-base font-semibold leading-tight">
                        Forward Together
                    </p>
                    <p className="text-green-100 text-xs sm:text-xs tracking-wide">
                        Melangkah bersama menuju masa depan digital Asia Tenggara
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <p className="text-white text-xs sm:text-xs">© Grab 2025</p>
                <p className="text-white text-lg sm:text-sm font-semibold">Office</p>
                <div className="h-auto">
                    <p className="text-sm text-white font-light text-justify">
                        Jl. Bendungan Hilir, No.114A, Daerah Khusus Ibukota Jakarta, ID.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="w-full flex flex-row gap-2 items-center">
                        <Phone size={15} color="white" />
                        <p className="text-sm text-white font-light">+62 21 23507077</p>
                    </div>
                    <div className="w-full flex flex-row gap-2 items-center">
                        <Mail size={15} color="white" />
                        <p className="text-sm text-white font-light">support.id@grabtaxi.com</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Bagian Kanan */}
        <div className="w-full md:w-[30%] h-full flex flex-col gap-3">
            <p className="text-white text-base sm:text-sm font-semibold">Follow Our Socials</p>
            <div className="flex flex-row items-center gap-3">
                <a href="https://www.facebook.com/GrabID/" aria-label="Facebook">
                    <Facebook size={20} color="white" />
                </a>
                <a href="https://www.linkedin.com/company/grabapp/" aria-label="LinkedIn">
                    <Linkedin size={20} color="white" />
                </a>
                <a href="https://www.instagram.com/grabid" aria-label="Instagram">
                    <Instagram size={20} color="white" />
                </a>
            </div>
        </div>
    </div>

    <div className="w-full flex bg-gradient-to-b from-green-500 to-green-600 py-3 px-5 sm:px-4 md:px-20">
        <div className="w-full flex justify-center max-w-screen-2xl m-auto">
            <p className="font-normal text-white text-sm sm:text-xs">© 2025</p>
        </div>
    </div>
</div>

        </>
    );
}