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
            <div className="w-full h-full items-center flex m-auto max-w-screen-2xl px-20">
              <div className="w-full h-[350px] py-10 mt-32">
                <div className="w-[50%] h-full flex flex-col">
                  <a className="font-bold text-white text-[4rem] break-words">Welcome to Grab</a>
                  <a className="font-YES text-white text-[3rem] break-words">Indonesia!</a>
                  <a className="font-normal text-white text-[1rem] break-words pt-5">
                    Work, play, and purpose come together in Indonesia, where our teams strive to empower people and businesses across the region.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="relative z-20 w-full -mt-5 flex items-center justify-center">
          <div className="h-12 w-48 bg-white border-2 border-green-700 rounded-md flex items-center justify-center shadow-xl">
            <p className="text-center font-medium text-green-600">Check Ours!</p>
          </div>
        </div>
  
        <Banner />
        <Introduction/>
        <IntroductionService/>
      </>
    );
  }
  