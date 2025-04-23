import React, { useState } from 'react';
import Konsumen from '../Konsumen/Konsumen';

export default function IntroductionService() {
  const [active, setActive] = useState('Konsumen');

  const items = [
    'Konsumen',
    'Mitra Pengemudi',
    'Mitra Penjual',
    'Layanan Perusahaan'
  ];

  return (
    <>
      <div className="w-full h-[400px] m-auto flex bg-green text-green-800 shadow-inner flex-col">
        <div className='w-full h-full px-20 py-10 m-auto flex flex-row'>
          <div className='w-[50%] flex flex-col justify-center'>
            <p className='text-black text-4xl font-semibold'>
              Semua kebutuhan. Satu aplikasi. Tanpa batas.
            </p>
          </div>
        </div>

        <div className='w-full h-36 px-20 flex m-auto max-w-screen-2xl '>
          <div className='w-fit h-full flex items-center flex-row gap-3 border-b-2 border-gray-500'>
            {items.map((label) => (
              <div
                key={label}
                onClick={() => setActive(label)}
                className={`group cursor-pointer rounded-3xl h-12 flex items-center justify-center px-6 
                ${active === label ? 'bg-black' : 'bg-transparent'} 
                transition-all duration-200`}
              >
                <a
                  className={`text-lg font-semibold 
                  ${active === label ? 'text-white' : 'text-black/50'} 
                  group-hover:text-black`}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
      {active === 'Konsumen' && <Konsumen />}
      {active === 'Mitra Pengemudi' && <Driver />}
      {active === 'Mitra Penjual' && <Seller />}
      {active === 'Layanan Perusahaan' && <Service />}
    </>
  );
}
