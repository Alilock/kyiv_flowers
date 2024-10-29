import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from './svgs/MenuIcon'
import ShopIcon from './svgs/ShopIcon'
import { BasketContext } from '../context/BasketContext'
import { useTranslation } from 'react-i18next'
const Header = () => {
    const { basketItems, setBasketItems, handleBasket } = useContext(BasketContext)
    const { t, i18n } = useTranslation()
    return (
        <nav className='h-16 flex justify-between border-b-[0.5px] border border-[#121212]' >
            <div className='flex w-1/4'>
                <Link className='w-1/2 flex items-center text-center justify-center border sm:border-r-[0.5px] border-t-[0px] border-b-[0.5px] border-[#121212]'>
                    <p className='max-lg:hidden'>{t("shop")}</p>
                    <div className='lg:hidden'>
                        <MenuIcon />
                    </div>

                </Link>
                <Link className='w-1/2 max-lg:hidden  flex items-center text-center justify-center border border-l-[0.5px] border-t-[0px] border-b-[0.5px]  border-[#121212]'>
                    <p>{t("contact")}</p>
                </Link>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <div className='flex items-center gap-2'>
                    <button onClick={() => i18n.changeLanguage("en")} style={{
                        backgroundColor: i18n.language === "en" ? "red" : "white",
                    }}>EN</button>
                    <button style={{
                        backgroundColor: i18n.language === "az" ? "red" : "white",
                    }} onClick={() => i18n.changeLanguage("az")}>AZ</button>
                </div>
            </div>
            <div className='flex w-1/4 justify-end'>
                <Link className='w-1/2 max-lg:hidden flex items-center text-center justify-center border border-r-[0.5px] border-t-[0px] border-b-[0.5px] border-[#121212]'>
                    <p>{t("signin")}</p>
                </Link>
                <Link className='w-1/2 flex items-center text-center justify-center border sm:border-l-[0.5px] border-t-[0px] border-b-[0.5px] border-[#121212]'>
                    <p className='max-lg:hidden'>{t("cart")} {basketItems.length}</p>

                    <div className='lg:hidden'>
                        <ShopIcon />
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
