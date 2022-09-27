import React from "react";

export const AirdropModule = () => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto lg:py-56 container md:py-24 py-10 mt-32 md:mt-24 lg:mt-32 xl:mt-44">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 max-w-xl mx-auto px-6">
            <h2 className="md:max-w-md sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-yellow-500 uppercase font-bold lg:text-left text-center lg:mx-0 mx-auto text-4xl mb-6 lg:mb-8">
              SUPERNOVA AIRDROP
            </h2>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 text-lg md:rounded-xl rounded-lg shadow-md max-w-xl md:p-1 p-0.5">
              <div className="md:py-4 py-3 w-full bg-white md:rounded-t-xl rounded-t-lg md:px-4 px-3 md:mb-1 mb-0.5">
                <div className="px-4 md:py-3 py-2 bg-black md:rounded-xl rounded-lg border-2 border-blue-500 md:mb-4 mb-2">
                  <p className="w-full bg-transparent text-center md:text-xl outline-none font-semibold placeholder-gray-700 text-white tracking-tight text-sm">
                    Enter your COSMOS address
                  </p>
                </div>
                <div className="inline-block w-full md:py-3 py-2 px-4 text-center md:text-xl md:rounded-xl rounded-lg text-white bg-blue-500 font-semibold transform duration-200 shadow-sm text-lg md:mb-2 mb-1">
                  Check
                </div>
              </div>
              <div className="grid grid-cols-2 py-3 w-full bg-white md:rounded-b-xl rounded-b-lg space-y-1 md:py-4 md:px-5 px-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
