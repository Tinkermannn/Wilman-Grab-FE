import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faShoppingCart, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function Konsumen() {
    return (
        <div className="w-full h-fit m-auto flex bg-green text-green-800 shadow-inner flex-col">
            <div className="w-full h-full px-4 sm:px-10 md:px-20 py-5 m-auto">
                <div className="flex flex-col md:flex-row w-full h-full gap-5 md:gap-10">
                    <div className="w-full md:w-[50%] flex flex-col justify-start">
                        <p className="text-black text-3xl sm:text-4xl md:text-5xl font-semibold">Deliveries</p>
                    </div>
                    <div className="flex flex-row w-full md:w-[50%] h-full gap-5">
                        <div className="w-full flex flex-col justify-start gap-6 sm:gap-10">

                            <div className="flex flex-row items-center gap-3 sm:gap-5 w-full h-20 sm:h-28 justify-between border-b-2 border-gray-300">
                                <div className="flex -mt-6 sm:-mt-8 w-fit h-fit">
                                    <FontAwesomeIcon 
                                        icon={faUtensils} 
                                        size="2x" 
                                        className="text-green-600 text-4xl sm:text-5xl" 
                                    />
                                </div>
                                <div className="w-[80%] h-full flex flex-col justify-center">
                                    <span className="text-black text-base sm:text-xl md:text-xl font-semibold">Food</span>
                                    <span className="text-black text-sm sm:text-base md:text-xl">
                                        Lapar? Kami antar rasa langsung ke pintu rumahmu!
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-3 sm:gap-5 w-full h-20 sm:h-28 justify-between border-b-2 border-gray-300">
                                <div className="flex -mt-6 sm:-mt-8 w-fit h-fit">

                                    <FontAwesomeIcon icon={faShoppingCart} size="3x" className="text-green-600 text-4xl sm:text-5xl" />
                                </div>                                <div className="w-[80%] h-20 flex flex-col">
                                    <a className="text-black text-xl font-semibold">Mart</a>
                                    <a className="text-black text-xl">Belanja praktis, kapan saja</a>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-5 w-full h-28 justify-between">
                                <div className="flex -mt-8 w-fit h-fit">

                                    <FontAwesomeIcon icon={faBoxOpen} size="3x" className="text-green-600 text-4xl sm:text-5xl" />
                                </div>                                <div className="w-[80%] h-20 flex flex-col">
                                    <a className="text-black text-xl font-semibold">Parcel</a>
                                    <a className="text-black text-xl">Kirim dan terima barang dengan aman</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}