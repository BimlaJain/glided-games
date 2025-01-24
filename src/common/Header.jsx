import React, { useState } from "react";
import logo from "../assets/images/png/logo.png";
import discordIcon from "../assets/images/svg/discord.svg";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Presale $GILD", href: "#presale" },
    { name: "Staking $GILD", href: "#staking" },
    { name: "$GILD Nodes", href: "#nodes" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-black/80">
            <div className={`container flex items-center justify-between ${isMenuOpen ? 'hidden' : ''}`}>
                <div className="flex items-center py-4">
                    <img src={logo} alt="Gilded Games Logo" className="md:w-[286px] md:h-[57px] w-[200px] h-[45px]" />
                </div>

                <nav className="hidden lg:flex lg:items-center xl:gap-10 gap-4 text-sm">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="hover:font-bold text-white xl:text-[22px] lg:text-xl text-[22px] transition-all ease-in-out duration-500"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#discord"
                        className="hidden md:flex items-center gap-2 px-4 py-2 text-white text-sm button-gradient rounded-[79px] hover:scale-110 transition-all duration-500"
                    >
                        <img src={discordIcon} alt="Discord Icon" className="w-6 h-6" />
                        Discord
                    </a>
                </nav>

                <div className="flex lg:hidden">
                    {!isMenuOpen && (
                        <button
                            className="text-white hover:text-gray-400"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {isMenuOpen && (
                <nav className="lg:hidden bg-black/80 min-h-screen w-full flex flex-col z-50 justify-center items-center text-center text-sm space-y-4 relative">
                    <div className="absolute top-4 right-4">
                        <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="block text-white hover:font-bold text-[18px] transition-all ease-in-out duration-300"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#discord"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm button-gradient rounded-[79px] hover:scale-110 transition-all duration-300"
                    >
                        <img src={discordIcon} alt="Discord Icon" className="w-6 h-6" />
                        Discord
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;
