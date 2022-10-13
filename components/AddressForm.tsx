import React, { useState } from "react"
import { bech32 } from "bech32";
export const AddressForm = () => {
    const [address, setAddress] = useState('');
    const [isValid, setIsValid] = useState(true);
    //TODO: refactor to hook (ex: useCheckAddress?)
    const onInputChanged = (e: any) => {
        setIsValid(true);
        setAddress(e.target.value);
        try {
            validate(e.target.value, 'cosmos');
        } catch (e) {
            setIsValid(false);
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
        <React.Fragment>
            <div className="px-4 md:py-3 py-2 bg-black md:rounded-xl rounded-lg border-2 border-blue-500 md:mb-3 mb-2">
                <input className="w-full bg-transparent text-center md:text-xl outline-none font-semibold placeholder-gray-700 text-white tracking-tight text-sm"
                    type="string"
                    placeholder="Enter your COSMOS address"
                    value={address}
                    onChange={onInputChanged}
                />
            </div>
            <p className="text-red-300 font-bold">{(address !== '' && !isValid) && 'invalid address'}</p>
            <div className="hidden px-4 md:py-3 py-2 bg-black md:rounded-xl rounded-lg border-2 border-blue-500 md:mb-3 mb-2">
                <input className="w-full bg-transparent text-center md:text-xl outline-none font-semibold placeholder-white text-white tracking-tight text-sm" type="" placeholder="0xA90c95q9...1125456eb" />
            </div>
            <button className="inline-block w-full hover:bg-opacity-80 md:py-3 py-2 px-4 text-center md:text-xl md:rounded-xl rounded-lg text-white bg-blue-500 font-semibold transform duration-200 shadow-sm text-lg md:mb-2 mb-1" >Check</button>
        </React.Fragment>
    )
}