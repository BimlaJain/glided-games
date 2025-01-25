import React from 'react'
import Girl from "../assets/images/png/utility-girl.png"
import utilitybg from "../assets/images/png/utility-bg.png"
const Utility = () => {
    return (
        <div id='about' className=' bg-cover bg-center' style={{ backgroundImage: `url(${utilitybg})` }}>
            <div className="h-3 w-full bg-black backdrop-blur-3xl"></div>
            <div className="container">
                <div className='lg:flex xl:pt-[105px] items-center justify-between'>
                    <div className='lg:pt-[101px] pt-10'>
                        <h3 className='font-bold text-5xl text-white leading-custom-xl pb-4 max-lg:text-center'> <span className='bg-gradient-to-tl from-purple to-blue bg-clip-text text-transparent'>NFT</span> Utility</h3>
                        <p className='text-white/60 font-normal md:text-xl font-poppins text-base leading-custom-4xl lg:max-w-[649px] lg:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.</p>
                    </div>
                    <div>
                        <img className='md:max-w-[369px] max-lg:mx-auto md:h-[639px] object-cover max-lg:mt-10' src={Girl} alt="girl" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Utility