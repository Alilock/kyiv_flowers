import React from 'react'
import ArrowRightIcon from '../components/svgs/ArrowRightIcon'
import ArrowLeftIcon from '../components/svgs/ArrowLeftIcon'
import aromaCandels from '../assets/cardItems/aromaCandels.png'
import driedFlowers from '../assets/cardItems/driedFlowers.png'
import fresheners from '../assets/cardItems/fresheners.png'
import freshFlowers from '../assets/cardItems/freshFlowers.png'
import livePlants from '../assets/cardItems/livePlants.png'

const RightColumn = () => {
  return (
    <div className='col-span-1 grid grid-cols-2 border-t-[0.5px] border-r border-[#121212]'>

                <div className='col-span-1 border border-r-[0.5px] border-b-0 border-[#121212]'>
                    <div className=' h-[360px] flex flex-col justify-center items-center relative border-b border-[#121212]'>
                        <p className='text-4xl max-md:text-2xl font-medium'>Fresh Flowers</p>
                        <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowRightIcon/></div>
                    </div>
                    <div className=' h-[360px] border-b border-[#121212]'>
                        <img src={driedFlowers} alt="" className='w-full h-full object-cover'/>
                    </div>
                    <div className=' h-[360px] flex flex-col justify-center items-center relative border-b border-[#121212]'>
                        <p className='text-4xl max-md:text-2xl font-medium'>Live Plants</p>
                        <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowRightIcon/></div>
                    </div>
                    <div className=' h-[360px] border-b border-[#121212]'>
                        <img src={aromaCandels} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=' h-[360px] flex flex-col justify-center items-center relative border-b border-[#121212]'>
                        <p className='text-4xl max-md:text-2xl font-medium'>Fresheners</p>
                        <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowRightIcon/></div>
                    </div>
                </div>
                <div className='col-span-1 border border-l-[0.5px] border-[#121212]'>
                    <div className=' h-[360px] border-b border-[#121212]'>
                        <img src={freshFlowers} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=' h-[360px] flex flex-col justify-center items-center relative border-b border-[#121212]'>
                        <p className='text-4xl max-md:text-2xl font-medium'>Dried Plants</p>
                        <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowLeftIcon/></div>
                    </div>
                    <div className=' h-[360px] border-b border-[#121212]'>
                        <img src={livePlants} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=' h-[360px] flex flex-col justify-center items-center relative border-b border-[#121212]'>
                        <p className='text-4xl max-md:text-2xl font-medium'>Aroma Candels</p>
                        <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowRightIcon/></div>
                    </div>
                    <div className=' h-[360px] border-b border-[#121212]'>
                        <img src={fresheners} alt="" className='w-full h-full object-cover' />
                    </div>
                    
                </div>




            </div>
  )
}

export default RightColumn