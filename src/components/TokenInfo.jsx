import React from 'react'
import tokenbg from "../assets/images/png/token-bg.png"
import billion from "../assets/images/svg/billion.svg"
import sale from "../assets/images/svg/sale.svg"
import nft from "../assets/images/svg/nft.svg"
import holder from "../assets/images/svg/holder.svg"

const tokenInfo = [
    {
        id: 1,
        image: billion,
        title: '3 Billion',
        description: 'GILD Token Info',
        extraClass: 'pt-6 pb-[17px] xl:px-[89px] lg:px-20 px-[89px]',
    },
    {
        id: 2,
        image: sale,
        title: 'Pre Sale Token',
        description: '',
        extraClass: 'pt-[30px] pb-[17px] border px-[50px] rounded-[13px]',
    },
    {
        id: 3,
        image: holder,
        title: '100,000+',
        description: 'Holders',
        extraClass: 'pt-6 pb-[17px] pl-[95px] pr-[89px]',
    },
    {
        id: 4,
        image: nft,
        title: '2,500+',
        description: 'NFT Sold',
        extraClass: 'pt-6 pb-[17px] pl-[112px] pr-[106px]',
    }
];

const Token = () => {
    return (
        <div id='nodes'
            className="bg-cover bg-no-repeat bg-center -mt-1 xl:pt-[130px] lg:py-20 md:py-16 py-12 xl:pb-[136px]"
            style={{ backgroundImage: `url(${tokenbg})` }}
        >
            <div className="container">
                <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-custom-xl max-lg:text-center text-center lg:pb-[59px] md:pb-10 pb-6">
                    <span className="bg-gradient-to-tl from-purple to-blue bg-clip-text text-transparent">
                        $GILD
                    </span>{" "}
                    Token Info
                </h2>
                <div className="flex max-xl:flex-wrap gap-6 max-xl:justify-center">
                    {tokenInfo.map(({ id, image, title, description, extraClass }) => (
                        <div
                            key={id}
                            className={`border rounded-[13px] cursor-pointer border-white shadow-gradient transition-all duration-700 ${extraClass}`}
                        >
                            <img className="flex mx-auto" src={image} alt={title} />
                            <h4 className="font-bold text-3xl leading-custom-xl text-center text-white pt-[9px]">
                                {title}
                            </h4>
                            {description && (
                                <p className="font-normal text-lg leading-custom-xl text-center text-white whitespace-nowrap">
                                    {description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Token;
