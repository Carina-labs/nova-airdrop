import React from "react";

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
              <span className="text-white font-medium text-sm w-full text-center">2022-01-01 00:00 UTC</span>
              <span className="text-white font-medium text-sm w-full text-center lg:-ml-7">Block #12345678</span>
            </div>
            <div className="relative w-full lg:ml-4 ml-14 md:ml-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute text-yellow-500 md:w-6 md:h-6 md:-bottom-3 -bottom-2 md:-right-4 right-24 md:mr-0 mr-1.5" viewBox="0 0 21 21" fill="currentColor">
                <path d="M20.7109 10.5252C13.0197 11.7626 11.8453 12.937 10.6079 20.6282C10.5911 20.7317 10.4415 20.7317 10.4262 20.6282C9.18739 12.9384 8.01295 11.764 0.321738 10.5252C0.218275 10.5084 0.218275 10.3588 0.321738 10.3435C8.01295 9.10609 9.18739 7.93165 10.4248 0.240439C10.4415 0.136976 10.5911 0.136976 10.6065 0.240439C11.8439 7.93165 13.0183 9.10609 20.7095 10.3435C20.813 10.3602 20.813 10.5098 20.7095 10.5252H20.7109Z" fill="currentColor"></path></svg>
              <div className="border-b border-yellow-500 h-0.5 md:w-full w-2/3 md:mt-0 mt-0.5"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="mx-auto bg-gradient-to-r from-yellow-500 via-yellow-500 to-purple-500 text-lg md:rounded-xl rounded-lg shadow-md max-w-xl md:p-1 p-0.5">
              <div className="md:py-4 py-3 w-full bg-white md:rounded-t-xl rounded-t-lg md:px-4 px-3 md:mb-1 mb-0.5">
                <div className="px-4 md:py-3 py-2 bg-black md:rounded-xl rounded-lg border-2 border-blue-500 md:mb-3 mb-2">
                  <input className="w-full bg-transparent text-center md:text-xl outline-none font-semibold placeholder-gray-700 text-white tracking-tight text-sm" type="" placeholder="Enter your COSMOS address" /></div>
                <div className="hidden px-4 md:py-3 py-2 bg-black md:rounded-xl rounded-lg border-2 border-blue-500 md:mb-3 mb-2">
                  <input className="w-full bg-transparent text-center md:text-xl outline-none font-semibold placeholder-white text-white tracking-tight text-sm" type="" placeholder="0xA90c95q9...1125456eb" /></div>
                <a className="inline-block w-full hover:bg-opacity-80 md:py-3 py-2 px-4 text-center md:text-xl md:rounded-xl rounded-lg text-white bg-blue-500 font-semibold transform duration-200 shadow-sm text-lg md:mb-2 mb-1" href="#" >Check</a>

              </div>
              <div className="py-3 md:py-4 md:px-5 px-3 w-full bg-white md:rounded-b-xl rounded-b-lg ">
                <div className="grid relative items-center space-y-1 grid-cols-3">
                  <div className="relative flex items-center group md:col-span-1 col-span-2">
                    <p className="text-gray-700 text-left md:text-sm text-xs md:mr-3 mr-2" >Your staked ATOM</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 md:w-4 h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div className="absolute top-0 left-5 opacity-0 transition z-10 ease-in-out delay-200 group-hover:opacity-100 w-72 rounded-md block bg-gray-200 shadow-sm border border-gray-400 p-3">
                      <p className="text-gray-600 font-medium w-full tracking-tight text-xs" >The snapshot was taken on Cosmos Hub at 00:00 UTC on 01.01.2022 (Block #8902586) and all users who, on that date, had ATOMs staked more than 1234.567 are considered eligible.</p>
                    </div>
                  </div>
                  {/* <p className="text-gray-700 text-right md:text-sm text-xs font-semibold md:col-span-2 col-span-1" >-</p> */}
                  <p className=" text-blue-500 text-right md:text-sm text-xs font-semibold md:col-span-2 col-span-1" >1234.5678 ATOM</p>
                  <p className="hidden text-red-500 text-right md:text-sm text-xs font-semibold md:col-span-2 col-span-1">1234.5678 ATOM</p>
                  <div className="relative flex items-center group col-span-1">
                    <p className="text-gray-700 text-left md:text-sm text-xs md:mr-3 mr-2" >Airdrop Amount</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 md:w-4 h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div className="absolute top-0 left-5 opacity-0 transition z-10 ease-in-out delay-200 group-hover:opacity-100 w-72 rounded-md block bg-gray-200 shadow-sm border border-gray-400 p-3">
                      <p className="text-gray-600 font-medium w-full tracking-tight text-xs" >ATOM/snATOM exchange rate is determined by a formula: Supernova’s ATOM staked / current snATOM supply. Because staked ATOM is earning yield, it grow in size vs. snATOM over time. When you swap snATOM to ATOM, you receive more ATOM than you staked/swapped before.</p>
                    </div>
                  </div>
                  {/* <p className="text-gray-700 text-right md:text-sm text-xs font-semibold col-span-2" >-</p> */}
                  <p className=" text-black text-right font-semibold md:text-3xl col-span-2 text-xl" >1234.5678 ATOM</p>
                  <p className="hidden text-black text-right font-semibold md:text-3xl col-span-2 text-xl" >0 ATOM</p>
                </div>
                <a className="inline-block w-full hover:bg-opacity-80 md:py-3 py-2 px-4 md:mt-4 mt-2 text-center md:text-xl md:rounded-xl rounded-lg text-yellow-500 bg-black font-semibold transform duration-200 shadow-sm text-lg md:mb-2 mb-1" href="#">Claim</a>
                <a className="hidden w-full md:py-3 py-2 px-4 md:mt-4 mt-2 text-center md:text-xl md:rounded-xl rounded-lg text-gray-700 bg-gray-400 font-semibold transform duration-200 text-lg md:mb-2 mb-1" href="#" >Not Eligible</a>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  );
};
