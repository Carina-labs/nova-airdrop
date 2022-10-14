import { bech32 } from "bech32";
import { useState } from "react";

export const AirdropForm = () => {
    const [address, setAddress] = useState('');
    const [isValid, setIsValid] = useState(true);

    //TODO: refactor to hook (ex: useCheckAddress?)
    const onInputChanged = (e: any) => {
        const input = e.target.value;
        setIsValid(true);
        setAddress(input);
        try {
            validate(input, 'cosmos');
        } catch (e) {
            input !== '' && setIsValid(false);
        }
    }

    const validate = (address: string, prefix: string) => {
        const { prefix: decodedPrefix } = bech32.decode(address);
        if (prefix && prefix !== decodedPrefix) {
            throw new Error(
                `Unexpected prefix (expected: ${prefix}, actual: ${decodedPrefix})`
            );
        }
    }
    return (
        <div className="w-full lg:w-1/2 px-4">
            <div className="mx-auto bg-gradient-to-r from-yellow-500 via-yellow-500 to-purple-500 text-lg md:rounded-xl rounded-lg shadow-md max-w-xl md:p-1 p-0.5">
                <div className="md:py-4 py-3 w-full bg-white md:rounded-t-xl rounded-t-lg md:px-4 px-3 md:mb-1 mb-0.5">
                    <div className="px-4 md:py-3 py-2 bg-black md:rounded-xl rounded-lg border-2 border-blue-500 md:mb-3 mb-2">
                        <input className="w-full bg-transparent text-center md:text-xl outline-none font-semibold placeholder-gray-700 text-white tracking-tight text-sm"
                            type="string"
                            placeholder="Enter your COSMOS address"
                            value={address}
                            onChange={onInputChanged}
                            spellCheck={false}
                        />
                    </div>
                    {!isValid && <div className="flex items-center justify-center bg-transparent w-full px-4 text-red-500 mb-1 md:mb-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        <span className="text-center text-sm font-semibold">Invalid address</span>
                    </div>}
                    <div className="hidden px-4 md:py-3 py-2 bg-black md:rounded-xl rounded-lg border-2 border-blue-500 md:mb-3 mb-2">
                        <input className="w-full bg-transparent text-center md:text-xl outline-none font-semibold placeholder-white text-white tracking-tight text-sm" type="" placeholder="0xA90c95q9...1125456eb" />
                    </div>
                    <button className="inline-block w-full hover:bg-opacity-80 md:py-3 py-2 px-4 text-center md:text-xl md:rounded-xl rounded-lg text-white bg-blue-500 font-semibold transform duration-200 shadow-sm text-lg md:mb-2 mb-1" >Check</button>
                </div>
                <div className="py-3 md:py-4 md:px-5 px-3 w-full bg-white md:rounded-b-xl rounded-b-lg ">
                    <div className="grid relative items-center space-y-1 grid-cols-3">
                        <div className="relative flex items-center group md:col-span-1 col-span-2">
                            <p className="text-gray-700 text-left md:text-sm text-xs md:mr-3 mr-2" >Your staked ATOM</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 md:w-4 h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div className="absolute top-0 left-5 opacity-0 transition z-10 ease-in-out delay-200 group-hover:opacity-100 w-72 rounded-md block bg-gray-200 shadow-sm border border-gray-400 p-3">
                                <p className="text-gray-600 font-medium w-full tracking-tight text-xs" >The snapshot was taken on Cosmos Hub at 00:00 UTC on 01.01.2022 (Block #8902586) and all users who, on that date, had ATOMs staked more than 1234.567 are considered eligible.</p>
                            </div>
                        </div>
                        {/* <p className="text-gray-700 text-right md:text-sm text-xs font-semibold md:col-span-2 col-span-1" >-</p> */}
                        <p className=" text-blue-500 text-right md:text-sm text-xs font-semibold md:col-span-2 col-span-1" >1234.5678 ATOM</p>
                        <p className="hidden text-red-500 text-right md:text-sm text-xs font-semibold md:col-span-2 col-span-1">1234.5678 ATOM</p>
                        <div className="relative flex items-center group col-span-1">
                            <p className="text-gray-700 text-left md:text-sm text-xs md:mr-3 mr-2" >Airdrop Amount</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 md:w-4 h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div className="absolute top-0 left-5 opacity-0 transition z-10 ease-in-out delay-200 group-hover:opacity-100 w-72 rounded-md block bg-gray-200 shadow-sm border border-gray-400 p-3">
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
    )
}