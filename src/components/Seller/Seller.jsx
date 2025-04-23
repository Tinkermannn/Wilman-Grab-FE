import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faBoxOpen,
  faTruckLoading
} from "@fortawesome/free-solid-svg-icons";

export default function Seller() {
  return (
    <div className="w-full h-fit m-auto flex bg-green text-green-800 shadow-inner flex-col">
      <div className="w-full h-full px-20 py-5 m-auto">
        <div className="flex flex-row w-full h-full gap-10">
          <div className="w-[50%] flex flex-col justify-start">
            <p className="text-black text-5xl font-semibold">Kembangkan Bisnis Anda</p>
          </div>
          <div className="flex flex-row w-[50%] h-full gap-5">
            <div className="w-full flex flex-col justify-start gap-10">

              {/* Merchant */}
              <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                <div className="flex -mt-8 w-fit h-fit">
                  <FontAwesomeIcon icon={faStore} size="3x" className="text-green-600" />
                </div>
                <div className="w-[80%] h-20 flex flex-col">
                  <a className="text-black text-xl font-semibold">Bergabung jadi mitra merchant kami</a>
                  <a className="text-black text-xl">Tingkatkan omzet, jangkau pelanggan lebih luas.</a>
                </div>
              </div>

              {/* Pengiriman */}
              <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                <div className="flex -mt-8 w-fit h-fit">
                  <FontAwesomeIcon icon={faBoxOpen} size="3x" className="text-green-600" />
                </div>
                <div className="w-[80%] h-20 flex flex-col">
                  <a className="text-black text-xl font-semibold">Kirim paket bersama kami</a>
                  <a className="text-black text-xl">Cepat sampai, pelanggan senang.</a>
                </div>
              </div>

              {/* Grab Kios */}
              <div className="flex flex-row items-center gap-5 w-full h-28 justify-between border-b-2 border-gray-300">
                <div className="flex -mt-8 w-fit h-fit">
                  <FontAwesomeIcon icon={faTruckLoading} size="3x" className="text-green-600" />
                </div>
                <div className="w-[80%] h-20 flex flex-col">
                  <a className="text-black text-xl font-semibold">Grab Kios</a>
                  <a className="text-black text-xl">Solusi bisnis digital, langsung ke depan rumah.</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
