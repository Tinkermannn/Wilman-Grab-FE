import React from 'react'
import Logo from '../../assets/grab.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

export default function Banner() {
  return (
    <div id="tentang-kami" className="w-full min-h-screen m-auto flex bg-green-950 shadow-inner -mt-10 flex-col">
      <div className='w-full h-auto md:h-[400px] px-4 sm:px-10 md:px-20 flex items-center m-auto max-w-screen-2xl flex-col md:flex-row gap-5 md:gap-0 py-10 md:py-0'>
        <div className='w-full md:w-[40%] h-full flex items-center justify-center p-0 m-0'>
          <img src={Logo} className='lg:scale-75 md:scale-75' alt="Grab Logo" />
        </div>
        <div className='w-full md:w-[60%] h-full flex flex-col justify-center'>
          <p className='text-white text-2xl sm:text-3xl md:text-[3rem] font-semibold underline-offset-4 mb-4 font-poppins'>
            Tentang Kami
          </p>
          <p className='text-white text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide text-justify'>
            Grab berkomitmen untuk memberdayakan ekonomi di Asia Tenggara melalui superapp yang digunakan oleh jutaan orang dalam kehidupan sehari-hari. Dengan fokus pada inklusi keuangan, dampak sosial yang berkelanjutan, dan tata kelola perusahaan yang kuat, Grab bertujuan menciptakan ekosistem yang aman dan mendukung pemulihan pasca-Covid-19, memastikan keberlanjutan dan pemberdayaan ekonomi bagi semua masyarakat di wilayah ini.
          </p>
        </div>
      </div>
      <div className='w-full h-16 md:h-20 bg-green-600 flex items-center px-4 sm:px-10 md:px-20 flex-row gap-3'>
        <span className='text-white text-base md:text-xl font-semibold'>Unduh Aplikasi</span>
        <a className='text-white text-lg md:text-xl font-semibold' href='https://apps.apple.com/us/app/grab-taxi-ride-food-delivery/id647268330'>
          <FontAwesomeIcon icon={faApple} />
        </a>
        <a className='text-white text-lg md:text-xl font-semibold' href='https://play.google.com/store/apps/details?id=com.grabtaxi.passenger'>                              
          <FontAwesomeIcon icon={faAndroid} className='mt-1 md:mt-2' />        
        </a>
      </div>
    </div>
  );
}