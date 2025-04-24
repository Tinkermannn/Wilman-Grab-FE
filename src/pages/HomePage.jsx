import React from "react";
import Video from '../assets/video/banner_video.webm';
import Banner from "../components/Banner/Banner";
import Introduction from "../components/Section/Introduction";
import IntroductionService from "../components/Section/IntroductionService";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 w-full h-full bg-gradient-to-r from-black/50 via-green-600/20 to-black/50">
          <div className="w-full h-full items-center flex m-auto max-w-screen-2xl px-4 md:px-10 lg:px-20">
            <div className="w-full py-10 mt-20 md:mt-32 h-auto md:h-[350px]">
              <div className="w-full lg:w-[50%] h-full flex flex-col px-4 lg:gap-3 sm:px-0">
                <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] break-words">Welcome to Grab</h1>
                <h2 className="font-YES text-white text-3xl sm:text-4xl md:text-[3rem] break-words">Indonesia!</h2>
                <p className="font-normal text-white text-sm sm:text-base md:text-[1rem] break-words pt-3 md:pt-5">
                  Work, play, and purpose come together in Indonesia, where our teams strive to empower people and businesses across the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full -mt-5 flex items-center justify-center">
        <div className="h-10 md:h-12 w-36 md:w-48 bg-white border-2 border-green-700 rounded-md flex items-center justify-center shadow-xl">
          <p className="text-center font-medium text-green-600 text-sm md:text-base">Check Ours!</p>
        </div>
      </div>

      <Banner />
      <Introduction/>
      <IntroductionService/>
    </>
  );
}