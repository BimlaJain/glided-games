import React, { useState, useEffect } from "react";
import herobg from "../assets/images/png/hero-bg.png";
import Header from "../common/Header";
import presaleIcon from "../assets/images/svg/presale.svg";

const Hero = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 1); 
        targetDate.setHours(11, 0, 0, 0); 

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeRemaining({ days, hours, minutes, seconds });
            } else {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative bg-cover bg-center xl:min-h-screen 2xl:min-h-fit lg:pb-[129px] md:pb-20 pb-16"
            style={{ backgroundImage: `url(${herobg})` }}
        >
            <Header />
            <div className="container">
                <div className="relative z-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white text-center leading-tight xl:pt-[324px] lg:pt-[150px] pt-16 max-w-[1000px] mx-auto">
                        There are games... And then
                        there are <span className="text-[#1BABFE]">Gilded </span>Games
                    </h1>
                    <p className="mt-5 font-mono text-white text-base lg:text-4xl text-center flex justify-center">
                        <span className="text-[#1BABFE]">
                            {timeRemaining.days}d :</span> {timeRemaining.hours}hr :{" "}
                            {timeRemaining.minutes}min : {timeRemaining.seconds}sec
                        
                        <br />
                    </p>
                    <p className="font-normal md:text-lg text-base flex justify-center text-white">
                        Remaining Presale Time
                    </p>
                    <div className="mt-6 flex flex-row gap-4 justify-center sm:space-x-4">
                        <a
                            href="#discord"
                            className="inline-flex items-center md:text-[22px] text-lg gap-2 md:px-[38px] px-5 py-2 md:py-[10.5px] text-white button-gradient rounded-[79px] hover:scale-110 transition-all duration-300"
                        >
                            <img
                                src={presaleIcon}
                                alt="Presale Icon"
                                className="w-6 h-6"
                                loading="lazy"
                            />
                            Presale
                        </a>
                        <a
                            href="#discord"
                            className="inline-flex items-center md:text-[22px] text-lg gap-2 md:px-[38px] px-5 py-2 md:py-[10.5px] text-white border border-white rounded-[79px] hover:scale-110 transition-all duration-300"
                        >
                            Join Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
