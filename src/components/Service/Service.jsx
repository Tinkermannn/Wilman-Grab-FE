import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faGift,
  faBullhorn
} from "@fortawesome/free-solid-svg-icons";

export default function Service() {
  return (
    <div className="w-full h-fit m-auto flex bg-green text-green-800 shadow-inner flex-col">
      <div className="w-full h-full px-20 py-5 m-auto">
        <div className="flex flex-row w-full h-full gap-10">
          <div className="w-[50%] flex flex-col justify-start">
            <p className="text-black text-5xl font-semibold">Grab For Business</p>
          </div>
          <div className="flex flex-row w-[50%] h-full gap-5">
            <div className="w-full flex flex-col justify-start gap-10">

              {/* Pengiriman */}
              <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                <div className="flex -mt-8 w-fit h-fit">
                  <FontAwesomeIcon icon={faCarSide} size="3x" className="text-green-600" />
                </div>
                <div className="w-[80%] h-20 flex flex-col">
                  <a className="text-black text-xl font-semibold">Pengiriman</a>
                  <a className="text-black text-xl">Jangkau pelanggan Anda dengan cepat dan efisien.</a>
                </div>
              </div>

              {/* Kartu Hadiah */}
              <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                <div className="flex -mt-8 w-fit h-fit">
                  <FontAwesomeIcon icon={faGift} size="3x" className="text-green-600" />
                </div>
                <div className="w-[80%] h-20 flex flex-col">
                  <a className="text-black text-xl font-semibold">Kartu Hadiah</a>
                  <a className="text-black text-xl">Hadiah digital untuk karyawan dan pelanggan Anda.</a>
                </div>
              </div>

              {/* Iklan */}
              <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                <div className="flex -mt-8 w-fit h-fit">
                  <FontAwesomeIcon icon={faBullhorn} size="3x" className="text-green-600" />
                </div>
                <div className="w-[80%] h-20 flex flex-col">
                  <a className="text-black text-xl font-semibold">Iklan</a>
                  <a className="text-black text-xl">Promosikan bisnis Anda ke jutaan pengguna Grab.</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
