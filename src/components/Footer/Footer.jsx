import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "react-feather";
import Logo from '../../assets/grab.svg';

export default function Footer() {
    return (
        <>
            <div className="w-full h-[350px] bg-gradient-to-b from-green-800 via-green-600 to-green-500 shadow-inner border-none">
                <div className="w-full h-full px-20 py-10 max-w-screen-2xl m-auto flex flex-row justify-between">
                    {/* Bagian Kiri - Logo dan Info */}
                    <div className="w-[45%] h-full flex flex-col gap-2">
                        <div className="w-full h-[45%] flex flex-row gap-4 items-center">
                            <img src={Logo} className="w-[20%]" alt="Grab Logo" />
                            <div className="flex flex-col">
                                <p className="text-white text-[1.5rem] font-semibold leading-tight">
                                    Forward Together
                                </p>
                                <p className="text-green-100 text-sm tracking-wide">
                                    Melangkah bersama menuju masa depan digital Asia Tenggara
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col gap-2">
                            <p className="text-white text-sm">© Grab 2025</p>
                            <p className="text-xl text-white font-semibold">Office</p>
                            <div className="h-[30%]">
                                <p className="text-sm text-white font-light text-justify">
                                Jl. Bendungan Hilir, No.114A, Daerah Khusus Ibukota Jakarta, ID.                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-full flex flex-row gap-2 items-center">
                                    <Phone size={15} color="white" />
                                    <p className="text-sm text-white font-light text-justify">+62 21 23507077</p>
                                </div>
                                <div className="w-full flex flex-row gap-2 items-center">
                                    <Mail size={15} color="white" />
                                    <p className="text-sm text-white font-light text-justify">
                                    support.id@grabtaxi.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Kanan - Sosial Media */}
                    <div className="w-[30%] h-full flex flex-col gap-2">
                        <p className="text-white text-lg font-semibold">Follow Our Socials</p>
                        <div className="flex flex-row items-center gap-3 -ml-1">
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

                <div className="w-full flex bg-gradient-to-b from-green-500 to-green-700 relative bottom-0">
                    <div className="w-full h-full flex justify-center px-20 max-w-screen-2xl m-auto">
                        <p className="font-normal text-white">© 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}
