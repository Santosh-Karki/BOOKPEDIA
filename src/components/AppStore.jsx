import React from "react";
import AppStoreImg from "../assets/website/app_store.png";
import PlayStoreImg from "../assets/website/play_store.png";


const AppStore = () => {
  return (
    <>
      <div
        className="bg-neutral-800 brightness-200 contrast-100 text-white py-10"
       
      >
        <div className="container flex flex-row justify-center items-center">
          <div
            data-aos="fade-up"
            data-aos-duration="150"
            className="space-y-6 max-w-xl mx-auto"
          >
            <h1 className="text-2xl text-slate-400 text-center ml-8 sm:text-left sm:text-4xl font-bold ">
              DOWNLOAD NOW 
            </h1>
            <div className="flex flex-wrap justify-center drop-shadow-xl items-center">
              <a href="#">
                <img
                  src={PlayStoreImg}
                  alt="Play store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt="App store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
