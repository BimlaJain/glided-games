import React from 'react'
import gamingbg from "../assets/images/png/gaming-bg.png"
import gamingTopIcon from "../assets/images/png/gaming-top-icon.png"
import gamingBottomIcon from "../assets/images/png/gaming-bottom-icon.png"
const Gaming = () => {
    return (
        <div id='presale' className='bg-cover bg-center xl:py-[228px] lg:py-[150px] py-[100px] -mt-1' style={{ backgroundImage: `url(${gamingbg})` }}>
            <div className="container">
                <div className='relative'>
                    <img className='absolute -top-[26%] xl:left-[8%] max-lg:top-[-16%] lg:left-[-2%] max-sm:top-[-15%] md:max-w-[102px] max-w-[40px] pointer-events-none' src={gamingTopIcon} alt="icon" />
                    <p className='text-center font-normal md:text-custom-4xl xl:pl-0 lg:pl-[60px] md:pl-[30px] text-2xl leading-custom-2xl text-white max-w-[940px] mx-auto'>Gilded Games is a new type of gaming platform, partially owned and operated by its players. Earn Gild tokens by playing and use them to decide the future of the game! </p>
                    <img className='absolute xl:right-[27%] lg:right-[9%] md:right-[-3%] right-0 xl:-bottom-[24%] bottom-[-12%] sm:bottom-[-20%] md:max-w-[102px] max-w-[40px] pointer-events-none' src={gamingBottomIcon} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default Gaming