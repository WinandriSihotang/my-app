import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllProducts } from "../../services/getAllProducts"
import Navbar from "../../components/Navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft,faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import Button from "../../components/Button/Button"
import formatToIDRCurrency from "../../utils/formatToIDRCurrency"

export default function ProductDetail() {
  const {slug} = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const allProducts = getAllProducts()
    const product = allProducts.find(prod => prod.slug === slug)
    setProduct(product)
  },[])
  return (
   <>
    <Navbar></Navbar>
    <div className='flex px-24 py-4 gap-[48px] items-center'>
          <Link to='/'>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mb-0 text-[30px]" />
          </Link>
          <h4 className='text-[32px] text-[#580c12]  font-medium'>{product.name ?? 'No Label'}</h4>
    </div>
    <div className='flex gap-[30px] px-24 mb-4'>
            <div className=''>
                {/* <img src={product.imageUrl ?? (product.name ?? 'No Name')} alt={product.name ?? 'No Name'} className='block spect-[138/100] max-w-[400px] object-cover'/> */}
                <img src={product.imageUrl ?? (product.name ?? 'No Name')} alt={product.name ?? 'No Name'} className='block w-[500px] h-[500px] object-cover'/>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <span className='text-[40px] font-medium'>{formatToIDRCurrency(product.price) ?? `Not For Sale`}</span>
              {product.stock > 0 ? (
                product.stock <= 25 ? (
                  <span className='font-medium text-red-500'>Tersisa 1</span>
                ) : (
                  <span className='font-medium text-green-500'>Stok: 100 pcs</span>
                )
              ) : (
                <span className='font-medium text-red-500'>Habis Terjual</span>
              )}

              <span className='text-grey-800'>{product.category ?? 'Uncategorized'}</span>

              {product.stock > 0 ? (
                <div>
            <span className='font-medium'>Deskripsi Parfum</span>
             <p className='max-w-[500px]'>{product.description ?? 'No description.'}</p>
             <br />
                  <Button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 p-4 bg-[#580c12] text-center hover:bg-[#e06033] text-white active:bg-[#4956ab]"
                  >
                    <FontAwesomeIcon icon={faShoppingBag} className="mb-0 text-white" />
                    <span className="text-white">Beli</span>
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 p-4 bg-[#9A9A9A] text-center"
                  >
                    <FontAwesomeIcon icon={faShoppingBag} className="mb-0 text-white" />
                    <span className="text-[#F3F3F3]">Beli</span>
                  </Button>
                </div>
              )}
            </div>
        </div>
        <br />
   </>
  )
}
