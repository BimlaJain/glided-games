import React from "react";
import roadmapLine from "../assets/images/png/roadmap-line.png";
import roadmapVerticalLine from "../assets/images/png/roadmap-vertical-line.png";

const Roadmap = () => {
    return (
        <div className="bg-black text-white pt-[92px] pb-[75px] -mt-1">
            <div className="relative">
                <img
                    src={roadmapLine}
                    alt="roadmap-line"
                    className="absolute hidden sm:block overflow-hidden transform xl:translate-y-[20%] lg:translate-y-[40%] md:translate-y-[80%] sm:translate-y-[30%] max-w-[1640px] right-0  w-full h-auto"
                />
                <img
                    src={roadmapVerticalLine}
                    alt="roadmap-vertical-line"
                    className="absolute sm:hidden block left-[20px] w-[68px] translate-y-[10%] translate-x-[10%] bg-transparent"
                />
            </div>
            <div className="container">
                <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-bold lg:pb-24 md:pb-20 pb-10">
                    <span className="bg-gradient-to-tl from-purple to-blue bg-clip-text text-transparent">Road</span>map
                </h2>
                <div className="relative flex flex-col sm:flex-row justify-between">
                    
                    <div className="flex-1 relative z-10 xl:pt-[58px] lg:pt-[18px] md:pt-[58px] pt-[18px] px-4 max-md:-ml-9 max-sm:ml-0 max-sm:pl-20">
                        <h3 className="lg:text-lg text-base font-semibold">Phase 1</h3>
                        <p className="lg:text-4xl text-2xl font-medium text-white md:mb-4 mb-2">Q1 2022</p>
                        <ul className="space-y-2">
                            <li className="lg:text-lg text-base text-white/70">• Whitelist/Presale Created</li>
                            <li className="lg:text-lg text-base text-white/70">• Private Sale</li>
                            <li className="lg:text-lg text-base text-white/70">• Public Sale</li>
                            <li className="lg:text-lg text-base text-white/70">• Prime Eternal Owner Perks</li>
                        </ul>
                    </div>
                    <div className="flex-1 relative z-10 xl:pt-[58px] lg:pt-[18px] md:pt-[58px] pt-[18px] 2xl:ml-32  md:-ml-7 px-4 max-sm:pl-20">
                        <h3 className="lg:text-lg text-base font-semibold">Phase 2</h3>
                        <p className="lg:text-4xl text-2xl font-medium text-white md:mb-4 mb-2">Q2 2022</p>
                        <ul className="space-y-2">
                            <li className="lg:text-lg text-base text-white/70">• Token & Staking Release</li>
                            <li className="lg:text-lg text-base text-white/70">• Staking Gameplay</li>
                        </ul>
                    </div>
                    <div className="flex-1 relative z-10 xl:pt-[58px] lg:pt-[18px] md:pt-[58px] pt-[18px] 2xl:pl-20 md:ml-[-20px] px-4 max-sm:pl-20">
                        <h3 className="lg:text-lg text-base font-semibold">Phase 3</h3>
                        <p className="lg:text-4xl text-2xl font-medium text-white md:mb-4 mb-2">Q3 2022</p>
                        <ul className="md:space-y-3 space-y-1">
                            <li className="lg:text-lg text-base text-white/70">• MVP Gameplay Release</li>
                            <li className="lg:text-lg text-base text-white/70">• Battle Modes Release</li>
                            <li className="lg:text-lg text-base text-white/70">• Land Gameplay Release</li>
                            <li className="lg:text-lg text-base text-white/70">• Gear Forging Release</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
