import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faShippingFast } from "@fortawesome/free-solid-svg-icons";

export default function Driver() {
    return (
        <div className="w-full h-fit m-auto flex bg-green text-green-800 shadow-inner flex-col">
            <div className="w-full h-full px-20 py-5 m-auto">
                <div className="flex flex-row w-full h-full gap-10">
                    <div className="w-[50%] flex flex-col justify-start">
                        <p className="text-black text-5xl font-semibold">Tingkatkan penghasilan dengan Grab</p>
                    </div>
                    <div className="flex flex-row w-[50%] h-full gap-5">
                        <div className="w-full flex flex-col justify-start gap-10">

                            <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                                <div className="flex -mt-8 w-fit h-fit">
                                    <FontAwesomeIcon icon={faCarSide} size="3x" className="text-green-600 items-start" />
                                </div>
                                <div className="w-[80%] h-20 flex flex-col">
                                    <a className="text-black text-xl font-semibold">Bergabung jadi mitra pengemudi</a>
                                    <a className="text-black text-xl">Waktu fleksibel, penghasilan stabil.</a>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                                <div className="flex -mt-8 w-fit h-fit">
                                    <FontAwesomeIcon icon={faShippingFast} size="3x" className="text-green-600 items-start" />
                                </div>
                                <div className="w-[80%] h-20 flex flex-col">
                                    <a className="text-black text-xl font-semibold">Bergabung jadi mitra pengiriman</a>
                                    <a className="text-black text-xl">Satu tujuan, kirim dengan aman.</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
