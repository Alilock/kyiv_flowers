import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from './svgs/MenuIcon'
import ShopIcon from './svgs/ShopIcon'
const Header = () => {
    return (
        <nav className='h-16 flex justify-between border-b-[0.5px] border border-[#121212]' >
            <div className='flex w-1/4'>
                <Link className='w-1/2 flex items-center text-center justify-center border sm:border-r-[0.5px] border-t-[0px] border-b-[0.5px] border-[#121212]'>
                    <p className='max-sm:hidden'>Shop</p>
                    <div className='sm:hidden'>
                        <MenuIcon />
                    </div>

                </Link>
                <Link className='w-1/2 max-sm:hidden  flex items-center text-center justify-center border border-l-[0.5px] border-t-[0px] border-b-[0.5px]  border-[#121212]'>
                    <p>Contact</p>
                </Link>
            </div>
            <div className='flex w-1/4'>
                <Link className='w-1/2 max-sm:hidden flex items-center text-center justify-center border border-r-[0.5px] border-t-[0px] border-b-[0.5px] border-[#121212]'>
                    <p>Sign In</p>
                </Link>
                <Link className='w-1/2 flex items-center text-center justify-center border sm:border-l-[0.5px] border-t-[0px] border-b-[0.5px] border-[#121212]'>
                    <p className='max-sm:hidden'>Cart</p>
                    <div className='sm:hidden'>
                        <ShopIcon />
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
