import React from 'react'
import Pics from '../../assets/indoor_intro.webp'

export default function Introduction() {
  return (
    <div className="w-full min-h-screen m-auto flex bg-gradient-to-tr from-green-200/30 to-white text-green-800 shadow-sm shadow-green-200/30 flex-col">
      <div className='w-full h-auto px-4 sm:px-10 md:px-20 lg:px-40 flex items-center m-auto max-w-screen-2xl flex-col md:flex-row gap-5 py-10'>
        <div className='w-full md:w-[40%] h-full flex items-center justify-center p-0 m-0'>
          <img src={Pics} className='w-full max-w-md scale-95 rounded-xl' alt="Introduction" />
        </div>
        <div className='w-full md:w-[60%] h-full flex flex-col justify-center items-center lg:gap-5'>
          <p className='text-green-900/90 text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-semibold underline-offset-4 mb-2 font-poppins mt'>
            Put Yourself in the picture
          </p>
          <p className='text-green-800 text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide text-justify'>
            Baik untuk berkeliling, memesan makanan, atau bahkan melakukan pembayaran, tim kami di Indonesia berdedikasi untuk menyediakan satu aplikasi untuk semua kebutuhan harian Anda! Dan kami bukan hanya tentang kenyamanan - kami memiliki misi untuk meningkatkan bisnis di seluruh wilayah
          </p>
        </div>
      </div>
    </div>
  );
}