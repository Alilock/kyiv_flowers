import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import freshflowers from '../assets/freshflowers/leftcolum.png'
import Footer from '../components/Footer'

const ProductListPage = () => {

    const { id } = useParams()


    const [products, setProducts] = React.useState([])
    const fetchProducts = async () => {
        const response = await axios.get('https://6705597f031fd46a830fa27b.mockapi.io/api/product')

        const filteredProducts = response.data.filter(pr => pr.categoryId === id)


        setProducts(filteredProducts)
    }
    useEffect(() => {
        fetchProducts()
    }
        , [])

    return (
        <div>
            <div className='grid grid-cols-2 max-lg:grid-cols-1 font-custom'>
                <div className='md:h-[720px] border border-t-[0.5px] border-r-[0.5px] border-[#121212] relative'>
                    <img src={freshflowers} alt="" className='w-full h-full' />
                </div>
                <div className='grid grid-cols-2 max-md:grid-cols-1 border-t-[0.5px] border-r border-[#121212]'>
                    {
                        products.length > 0 ? products.map((product) => {
                            return (
                                // <div key={product.id} className='col-span-1 h-[360px] border-b border-[#121212]'>
                                //     <img src={product.image} alt="" className='w-full h-full object-cover' />
                                //     <div className='flex justify-center items-center relative'>
                                //         <p className='text-4xl max-md:text-2xl font-medium'>{product.name}</p>
                                //         <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p></div>
                                //     </div>
                                // </div>

                                <>
                                    <div key={product.id} className='col-span-1 h-[360px] border-b border-[#121212] relative'>
                                        <img src={product.image} alt="" className='w-full h-full object-cover' />
                                        <div className='flex flex-col items-center gap-1 absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                                            <p>Snow Fall</p>
                                            <p className='text-[#808080] text-sm'>Price 70$</p>
                                        </div>

                                    </div>

                                </>
                            )
                        }) : <p>Loading...</p>

                    }

                </div>
                
            </div>
            <Footer/>

        </div>
    )
}

export default ProductListPage
