import React from 'react'
import Pics from '../../assets/indoor_intro.webp'

export default function Introduction() {
  return (
    <div className="w-full h-screen m-auto flex bg-gradient-to-tr from-green-200/30 to-white text-green-800 shadow-sm shadow-green-200/30 flex-row">
      <div className='w-full h-[400px] px-40 flex items-center m-auto max-w-screen-2xl flex-row gap-5'>
        <div className='w-[40%] h-full flex items-center justify-center p-0 m-0'>
          <img src={Pics} className='scale-95 rounded-xl' />
        </div>
        <div className='w-[60%] h-full flex flex-col justify-center'>
          <p className='text-green-900/90 text-[3rem] font-semibold underline-offset-4 mb-2 font-poppins'>
            Put Yourself in the picture
          </p>
          <p className='text-green-800 text-lg font-light leading-relaxed tracking-wide text-justify'>
          Baik untuk berkeliling, memesan makanan, atau bahkan melakukan pembayaran, tim kami di Indonesia berdedikasi untuk menyediakan satu aplikasi untuk semua kebutuhan harian Anda! Dan kami bukan hanya tentang kenyamanan - kami memiliki misi untuk meningkatkan bisnis di seluruh wilayah
          </p>
        </div>
      </div>

    </div>
  );
}
