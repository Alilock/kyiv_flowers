import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

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

            {
                products.length > 0 ? products.map((product) => {
                    return (
                        <div key={product.id} className='col-span-1 h-[360px] border-b border-[#121212]'>
                            <img src={product.image} alt="" className='w-full h-full object-cover' />
                            <div className='flex flex-col justify-center items-center relative'>
                                <p className='text-4xl max-md:text-2xl font-medium'>{product.name}</p>
                                <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p></div>
                            </div>
                        </div>
                    )
                }) : <p>Loading...</p>
            }
        </div>
    )
}

export default ProductListPage
