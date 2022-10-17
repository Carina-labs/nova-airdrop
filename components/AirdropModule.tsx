import React from "react";
import { SNAPSHOT_BLOCK_HEIGHT, SNAPSHOT_TIMESTAMP } from "../config";
import { AirdropForm } from "./AirdropForm";
export const AirdropModule = () => {
  return (
    <>
      <div className="relative mx-auto lg:py-56 container md:py-24 py-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 max-w-xl mx-auto px-6">
            <h2 className="md:max-w-md sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-yellow-500 uppercase font-bold lg:text-left text-center lg:mx-0 mx-auto text-4xl mb-6 lg:mb-8" >SUPERNOVA AIRDROP</h2>
            <div className="relative w-full md:-ml-10 ml-12 lg:-ml-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute text-yellow-500 -left-2 md:w-6 md:h-6 md:-top-3 -top-2" viewBox="0 0 21 21" fill="currentColor"><path d="M20.7109 10.5252C13.0197 11.7626 11.8453 12.937 10.6079 20.6282C10.5911 20.7317 10.4415 20.7317 10.4262 20.6282C9.18739 12.9384 8.01295 11.764 0.321738 10.5252C0.218275 10.5084 0.218275 10.3588 0.321738 10.3435C8.01295 9.10609 9.18739 7.93165 10.4248 0.240439C10.4415 0.136976 10.5911 0.136976 10.6065 0.240439C11.8439 7.93165 13.0183 9.10609 20.7095 10.3435C20.813 10.3602 20.813 10.5098 20.7095 10.5252H20.7109Z" fill="currentColor">
              </path></svg><div className="border-t border-yellow-500 h-0.5 md:w-full w-2/3 md:mt-0 -mt-0.5"></div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 place-items-center md:h-16 -mx-4 md:space-y-0 space-y-2 md:py-0 py-2">
              <span className="text-white font-medium w-full text-center text-sm">Cosmos hub snapshot</span>
              <span className="text-white font-medium text-sm w-full text-center">{SNAPSHOT_TIMESTAMP}</span>
              <span className="text-white font-medium text-sm w-full text-center lg:-ml-7">Block #{SNAPSHOT_BLOCK_HEIGHT}</span>
            </div>
            <div className="relative w-full lg:ml-4 ml-14 md:ml-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute text-yellow-500 md:w-6 md:h-6 md:-bottom-3 -bottom-2 md:-right-4 right-24 md:mr-0 mr-1.5" viewBox="0 0 21 21" fill="currentColor">
                <path d="M20.7109 10.5252C13.0197 11.7626 11.8453 12.937 10.6079 20.6282C10.5911 20.7317 10.4415 20.7317 10.4262 20.6282C9.18739 12.9384 8.01295 11.764 0.321738 10.5252C0.218275 10.5084 0.218275 10.3588 0.321738 10.3435C8.01295 9.10609 9.18739 7.93165 10.4248 0.240439C10.4415 0.136976 10.5911 0.136976 10.6065 0.240439C11.8439 7.93165 13.0183 9.10609 20.7095 10.3435C20.813 10.3602 20.813 10.5098 20.7095 10.5252H20.7109Z" fill="currentColor"></path></svg>
              <div className="border-b border-yellow-500 h-0.5 md:w-full w-2/3 md:mt-0 mt-0.5"></div>
            </div>
          </div>
          <AirdropForm />
        </div>
      </div >

    </>
  );
};
