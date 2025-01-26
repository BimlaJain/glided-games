import React from "react";
import tokenbg from "../assets/images/png/token-bg.png";
import billion from "../assets/images/svg/billion.svg";
import sale from "../assets/images/svg/sale.svg";
import nft from "../assets/images/svg/nft.svg";
import holder from "../assets/images/svg/holder.svg"

const TOKEN_INFO_LIST = [
    {
        image: billion,
        imageAlt: "token",
        title: "3 Billion",
        description: "GILD Token Info"
    },
    {
        image: sale,
        imageAlt: "sale-token",
        title: "Pre Sale Token",
        description: ""
    },
    {
        image: holder,
        imageAlt: "holders",
        title: "100,000+",
        description: "Holders"
    },
    {
        image: nft,
        imageAlt: "nft",
        title: "2,500+",
        description: "NFT Sold"
    },
]

const Token = () => {
    return (
        <div
            id="nodes"
            className="bg-cover bg-no-repeat bg-center -mt-1 xl:pt-[130px] lg:py-20 md:py-16 py-12 xl:pb-[136px]"
            style={{ backgroundImage: `url(${tokenbg})` }}
        >
            <div className="container">
                <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-custom-xl max-lg:text-center text-center lg:pb-[59px] md:pb-10 pb-6">
                    <span className="bg-gradient-to-tl from-purple to-blue bg-clip-text text-transparent">
                        $GILD </span> Token Info
                </h2>
                <div className="flex max-xl:flex-wrap gap-6 max-xl:justify-center">
                    {TOKEN_INFO_LIST.map(function (item, i) {
                        return <div key={i} className='w-1/4 max-md:w-1/3 max-sm:w-1/2 px-3 max-sm:px-2 max-md:pt-6 max-sm:pt-4'>
                            <div className='bg-gradient-to-b h-full from-white/20 to-white/10 p-[1px] rounded-[13px]'>
                                <div className='bg-gradient-to-b from-[#262626] to-[#040404] h-[181px] max-sm:h-36 hover:bg-gradient-to-br cursor-pointer hover:from-purple hover:to-blue max-h-[181px] flex items-center justify-center flex-col py-[18px] rounded-[13px] hover:shadow-[0px_8px_30px_0px] hover:shadow-blue'>
                                    <img src={item.image} alt={item.imageAlt} className='h-[70px] max-lg:h-12 max-sm:h-10 pointer-events-none' />
                                    <p className='josefin font-bold text-3xl max-lg:text-2xl max-sm:text-xl leading-[38.25px] text-white pt-[10px] pb-1 max-lg:pb-0 text-center'>{item.title}</p>
                                    <p className='josefin text-lg max-lg:text-base max-sm:text-sm max-sm:leading-2 leading-[23px] text-white'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Token;
