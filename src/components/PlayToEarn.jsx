import React from 'react'
import playImage from '../assets/images/gif/gilded-gif.gif'
import playLeft from '../assets/images/png/play-left.png'
import playright from '../assets/images/png/play-right.png'

const PlayToEarn = () => {
  return (
    <div className='xl:pt-[194px] lg:pt-28 md:pt-20 pt-16 bg-black -mt-1 lg:pb-[111px] md:pb-20 pb-16'>
      <div className="container">
        <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl pb-4 leading-[127%] text-white text-center'>Play To <span className="text-[#1BABFE]">Earn</span></h2>
        <p className='font-normal lg:text-xl text-base leading-[164%] text-white/70 max-w-[950px] mx-auto text-center '>Gilded World will be the first game released by Gilded Games. It is an MMORPG, browser based game that is unlike any other. We have taken inspiration from some of the most popular and successful MMORPG and RPG games and have boiled it down to the best online gameplay that people will actually want to play!</p>
     
      <div className="relative">
        <img className='absolute left-0 xl:block hidden' src={playLeft} alt="play-left" />
        <img className='absolute right-0 xl:block hidden' src={playright} alt="play-left" />
      </div>
      <div className='bg-gradient-to-tl from-[#815CC8] to-[#1BABFE] rounded-xl lg:mt-12 md:mt-10 mt-8 relative z-10 max-w-[1320px] mx-auto w-full'>
        <img className='flex justify-center max-w-[1320px] w-full mx-auto md:p-[5px] p-[2px] rounded-xl relative z-20' src={playImage} alt="border-image" /></div>
      </div>
    </div>
  )
}

export default PlayToEarn
