import React from 'react'
import Logo from '../../assets/grab.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

export default function Banner() {
  return (
<div id="tentang-kami" className="w-full h-screen m-auto flex bg-green-950 shadow-inner -mt-10 flex-col">
      <div className='w-full h-[400px] px-20 flex items-center m-auto max-w-screen-2xl flex-row gap-0'>
        <div className='w-[40%] h-full flex items-center justify-center p-0 m-0'>
          <img src={Logo} className='scale-75' />
        </div>
        <div className='w-[60%] h-full flex flex-col justify-center'>
          <p className='text-white text-[3rem] font-semibold underline-offset-4 mb-2 font-poppins'>
            Tentang Kami
          </p>
          <p className='text-white text-lg font-light leading-relaxed tracking-wide text-justify'>
          Grab berkomitmen untuk memberdayakan ekonomi di Asia Tenggara melalui superapp yang digunakan oleh jutaan orang dalam kehidupan sehari-hari. Dengan fokus pada inklusi keuangan, dampak sosial yang berkelanjutan, dan tata kelola perusahaan yang kuat, Grab bertujuan menciptakan ekosistem yang aman dan mendukung pemulihan pasca-Covid-19, memastikan keberlanjutan dan pemberdayaan ekonomi bagi semua masyarakat di wilayah ini.
          </p>
        </div>
      </div>
      <div className='w-full h-20 bg-green-600 flex items-center px-20 flex-row gap-3'>
        <a className='text-white text-xl font-semibold'>Unduh Aplikasi</a>
        <a className='text-white text-xl font-semibold' href='https://apps.apple.com/us/app/grab-taxi-ride-food-delivery/id647268330?is_retargeting=true&af_sub1=apple_store&c=organic_web&af_ad=id&pid=organic_web&af_channel=download&af_adset=grab_website&af_force_deeplink=true'>
        <FontAwesomeIcon icon={faApple} />
          
        </a>
        <a className='text-white text-xl font-semibold' href='https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&is_retargeting=true&af_sub1=google_play&c=organic_web&af_ad=id&pid=organic_web&af_channel=download&af_adset=grab_website&af_force_deeplink=true'>                              
        <FontAwesomeIcon icon={faAndroid} className='mt-2' />        
        </a>
      </div>
    </div>
  );
}
