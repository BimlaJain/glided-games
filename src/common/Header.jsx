import React from 'react';
import { NAV_DATA } from '../utils/helper';
import { useEffect, useState } from 'react';
import logo from '../assets/images/png/logo.png'
import discordIcon from '../assets/images/svg/discord.svg'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const toggleMenu = () => {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = !isMenuOpen ? "" : "hidden";
            }
            else {
                document.body.style.overflow = "";
            }
        }
        toggleMenu();
        window.removeEventListener("resize", toggleMenu);
        return () => {
            window.removeEventListener("resize", toggleMenu);
            document.body.style.overflow = "";
        }
    }, [isMenuOpen])
    return (
        <div className="sm:py-7 py-4 flex items-center lg:h-[100px] sm:h-20 bg-black/80">
            <div className="container">
                <div className="flex justify-between items-center lg:h-[100px] sm:h-20 ">
                    <a href="/"><img className='md:max-w-[278px] max-w-[200px]' src={logo} alt="nav-logo" /></a>
                    <div className='lg:block hidden'>
                        <div className="flex gap-10 items-center justify-end">
                            {NAV_DATA.map((obj, index) => (
                                <a onClick={toggleMenu} key={index}
                                    className="font-normal hover:font-bold !transition-all !duration-700 text-[22px] leading-[22px] text-white"
                                    href={obj.id}> {obj.title} </a>
                            ))}
                            <a
                                href="#discord"
                                className="hidden md:flex items-center gap-2 px-[41px] py-[14.5px] text-white text-xl button-gradient rounded-[79px] hover:scale-110 transition-all duration-500"
                            >
                                <img src={discordIcon} alt="Discord Icon" className="w-6 h-6" />
                                Discord
                            </a>
                        </div>
                    </div>
                    <div onClick={toggleMenu}
                        className='menuIcon relative max-sm:w-[30px] max-sm:h-[24px] max-lg:w-[38px] max-lg:h-[28px] z-30 max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-700 lg:hidden'
                    >
                        {isMenuOpen ? (
                            <>
                                <span className="h-[3px] absolute top-3 w-full bg-white transform rotate-45 transition duration-300"></span>
                                <span className="h-[3px] absolute top-3 w-full bg-white transform -rotate-45 transition duration-300"></span>
                            </>
                        ) : (
                            <>
                                <span className="h-[2px] w-full bg-white"></span>
                                <span className="h-[2px] w-full bg-white"></span>
                                <span className="h-[2px] w-full bg-white"></span>
                            </>
                        )}
                    </div>
                    <div className={`menuList ${isMenuOpen ? 'max-lg:right-0' : 'max-lg:right-[-100%]'}  gap-8 max-lg:w-full max-lg:fixed max-lg:justify-center hidden max-lg:top-0 max-lg:bg-black max-lg:flex-col max-lg:transition-all duration-700 max-lg:flex items-center max-lg:min-h-screen relative z-20`}>
                        <div className='lg:hidden block'>
                            <div className='flex-col flex gap-6 items-center'>
                                {NAV_DATA.map((obj, index) => (
                                    <a onClick={toggleMenu} key={index}
                                        className="font-normal hover:text-blue-500 transition-all duration-500 text-base leading-custom-lg text-white"
                                        href={obj.id} > {obj.title}
                                    </a>))}
                                <a
                                    href="#discord"
                                    className=" flex items-center gap-2 px-4 py-2 text-white text-sm button-gradient rounded-[79px] hover:scale-110 transition-all duration-500"
                                >
                                    <img src={discordIcon} alt="Discord Icon" className="w-6 h-6" />
                                    Discord
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;