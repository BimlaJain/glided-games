import React from 'react';
import engine from "../assets/images/png/engine.png";
import uniswap from "../assets/images/png/uniswap.png";
import polygon from "../assets/images/png/polygon.png";
import coin from "../assets/images/png/coin.png";


const Powered = () => {
    const poweredByImages = [
        { src: engine, alt: "engine", maxWidth: "264px", padding: "py-[67px] px-[19px] max-lg:px-6 max-sm:py-[42px]" },
        { src: uniswap, alt: "uniswap", maxWidth: "273px", padding: "py-[59px] px-[20px] max-sm:py-8" },
        { src: coin, alt: "coin", maxWidth: "247px", padding: "py-[74px] px-[33px] max-sm:py-12" },
        { src: polygon, alt: "polygon", maxWidth: "261.4px", padding: "py-[63px] px-[25px] max-sm:py-9" }
    ];

    return (
        <div className='-mt-1 xl:pt-[130px] lg:py-20 md:py-16 py-12 xl:pb-[136px] bg-black'>
            <div className="container">
                <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-custom-xl max-lg:text-center text-center xl:pb-[68px] md:pb-12 pb-6'>
                    <span className='bg-gradient-to-tl from-purple to-blue bg-clip-text text-transparent'>Powered</span> By:
                </h2>
                <div className='flex max-xl:flex-wrap gap-6 max-xl:justify-center'>
                    {poweredByImages.map((image, index) => (
                        <div className='bg-gradient-to-b h-full from-white/20 to-white/10 p-[1px] rounded-[13px]'>
                        <div
                            key={index}
                                className={`rounded-[13px] bg-gradient-to-b from-[#262626] to-[#040404] cursor-pointer  shadow-gradient transition-all duration-700 ${image.padding}`}
                        >
                            <img
                                className='mx-auto'
                                style={{ maxWidth: image.maxWidth }}
                                src={image.src}
                                alt={image.alt}
                            />
                            </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Powered;
