import React from 'react'

export default function () {
    return (
        <div className='flex flex-col w-full items-center md:space-y-14 space-y-8 min-h-102.5 py-20 bg-black'>
            
            <div className='flex flex-col space-y-2 text-white'>
                <h3 className='font-light text-3xl text-center '>
                    Reina-Flor Okori Makendengue — A Journey of Excellence
                </h3>
                <hr className='w-24 h-0.5 mx-auto' />
            </div>

            {/* Timeline / Identity */}
            <div className='flex flex-col items-center md:flex-row md:gap-20 md:items-center md:justify-center space-y-8 md:space-y-0 md:space-x-8 text-white w-full'>

                <div className='flex flex-col items-center space-y-3'>
                    <p className='text-4xl text-center font-light md:text-5xl '>
                        4x
                    </p>
                    <p className='text-lg opacity-90 text-center md:text-left whitespace-nowrap'>
                        Olympian
                    </p>
                </div>

                <div className='flex flex-col items-center space-y-3'>
                    <p className='text-4xl text-center mx-auto font-light md:text-5xl'>
                        Strategist
                    </p>
                    <p className='text-lg opacity-90 text-center md:text-left'>
                        Leadership & Performance Design
                    </p>
                </div>

                <div className='flex flex-col items-center space-y-3'>
                    <p className='text-4xl text-center font-light md:text-5xl'>
                        Founder
                    </p>
                    <p className='text-lg opacity-90 text-center md:text-left'>
                        REFORM™ & Beauty of Sport (B.O.S)
                    </p>
                </div>

            </div>
        </div>
    )
}