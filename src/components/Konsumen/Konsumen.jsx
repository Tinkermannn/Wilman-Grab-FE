import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faShoppingCart, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function Konsumen() {
    return (
        <div className="w-full h-fit m-auto flex bg-green text-green-800 shadow-inner flex-col">
            <div className="w-full h-full px-20 py-5 m-auto">
                <div className="flex flex-row w-full h-full gap-10">
                    <div className="w-[50%] flex flex-col justify-start">
                        <p className="text-black text-5xl font-semibold">Deliveries</p>
                    </div>
                    <div className="flex flex-row w-[50%] h-full gap-5">
                        <div className="w-full flex flex-col justify-start gap-10">

                            <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                                <div className="flex -mt-8 w-fit h-fit">

                                    <FontAwesomeIcon icon={faUtensils} size="3x" className="text-green-600 items-start" />
                                </div>
                                <div className="w-[80%] h-20 flex flex-col">
                                    <a className="text-black text-xl font-semibold">Food</a>
                                    <a className="text-black text-xl">Lapar? Kami antar rasa langsung ke pintu rumahmu!</a>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                                <div className="flex -mt-8 w-fit h-fit">

                                    <FontAwesomeIcon icon={faShoppingCart} size="3x" className="text-green-600 items-start" />
                                </div>                                <div className="w-[80%] h-20 flex flex-col">
                                    <a className="text-black text-xl font-semibold">Mart</a>
                                    <a className="text-black text-xl">Belanja praktis, kapan saja</a>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-5 w-full h-28 justify-between">
                                <div className="flex -mt-8 w-fit h-fit">

                                    <FontAwesomeIcon icon={faBoxOpen} size="3x" className="text-green-600 items-start" />
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
