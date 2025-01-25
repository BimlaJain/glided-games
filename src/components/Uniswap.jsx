import React from 'react';
import uniswapbg from "../assets/images/png/uniswap-bg.png";
import uniswap from "../assets/images/svg/button-uniswap.svg"
import uniswapBox from "../assets/images/png/uniswap-box.png"
const Uniswap = () => {
    const uniswap_data = [
        {
            items: [
                "100,000+ Airdrop",
            ],
        },
        {
            items: ["NFT $GILD giveaway"],
        },
        {
            items: [
                "Announcement and Games",
            ],
        },
    ];
    return (
        <div className="-mt-1 bg-center bg-cover bg-no-repeat xl:pt-[220px] lg:pt-[150px] md:py-20 py-12 xl:pb-[150px] lg:pb-[100px]"
            style={{ backgroundImage: `url(${uniswapbg})` }} >
            <div className="container">
                <div className="md:flex justify-between max-w-[1133px] mx-auto">
                    <div>
                        <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-custom-xl max-lg:text-center text-center pb-[21px]">
                            Buy On <span className="text-sky">Uniswap</span> </h2>
                        <ul className="space-y-[11px]">
                            {uniswap_data.map((data, i) => (
                                <React.Fragment key={i}>
                                    {data.items.map((item, j) => (
                                        <li key={j} className="text-xl font-normal text-white max-sm:text-center">
                                            • {item}
                                        </li>
                                    ))}
                                </React.Fragment>
                            ))}
                        </ul>
                        <a
                            href="#discord" className="flex items-center max-sm:mx-auto text-2xl gap-[10px] mt-[30px] px-[10.9px] py-[14px] text-white w-[170px] button-gradient rounded-[79px] hover:scale-110 transition-all duration-500"
                        >
                            <img src={uniswap} alt="buy now Icon" className="w-6 h-6" loading="lazy" /> Buy Now</a>
                    </div>
                    <img className='max-w-[341px] max-sm:mt-10' src={uniswapBox} alt="box" />
                </div>
            </div>
        </div>
    );
};

export default Uniswap;
