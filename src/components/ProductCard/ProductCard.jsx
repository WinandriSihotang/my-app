import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";

export default function ProductCard({product}) {

  return (
    <Link to={`/products/${product.slug}` ?? ''} className="flex flex-col max-w-[370px]  flex-wrap p-[30px] bg-[#2e0c0c]  rounded-t-[12px] p-2"  >
         <img src={product?.imageUrl ?? ''} alt={product?.name ?? 'No Title'} className="block max-h-[300px] mb-4 object-cover  rounded-[12px] shadow-lg overflow-hidden  transform hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col gap-1">
              <h4 className="font-medium text-[20px] text-white">{product?.name ?? 'No Title'}</h4>
              <span className="block font-medium text-[14px] text-[#eaeaea]">{product?.category ?? "Uncategorized"}</span>
              <span className="block font-medium text-[20px] text-white">
                {product?.price > 0 ? formatToIDRCurrency(product.price) : 'Not For Sale'}
              </span>
              <div>
                  {product.stock <= 0 ? (
                    <p className="text-xl font-semibold text-center text-red-500">Habis Terjual!</p>
                  ) : (product.stock <= 25 && product.stock !== 0) ? (
                    <>
                       <p className="text-xl font-semibold text-center text-yellow-500">Hampir Habis!</p>
                       <br />
                       <div className="flex gap-4">
                        <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#2e0c0c] text-center hover:bg-[#e06033] text-white active:bg-[#fdf6b2]">
                          <FontAwesomeIcon icon ={faCartShopping} className="mb-0" />
                          <span></span>
                        </Button>

                        <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#2e0c0c] text-center hover:bg-[#e06033] text-white active:bg-[#fdf6b2]">
                        <FontAwesomeIcon icon={faHeart} className="mb-0" />
                        <span></span>
                        </Button>
                      </div>
                    </>
                 
                  ) : (<>
                       <br />
                       <div className="flex gap-4">
                       <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#2e0c0c] text-center hover:bg-[#e06033] text-white active:bg-[#fdf6b2]">
                          <FontAwesomeIcon icon ={faCartShopping} className="mb-0" />
                          <span></span>
                        </Button>

                        <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#2e0c0c] text-center hover:bg-[#e06033] text-white active:bg-[#fdf6b2]">
                        <FontAwesomeIcon icon={faHeart} className="mb-0" />
                        <span></span>
                        </Button>
                      </div>
                      </>
                    
                  )}
              </div>
          </div>
        </Link>
  )
}

ProductCard.prototypes = {
  product: PropTypes.object.isRequired
}
