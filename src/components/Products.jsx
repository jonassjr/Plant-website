import React from 'react'
import { products } from '../constants'
import { Bag, Bag2 } from 'iconsax-react'

const Products = () => {
  return (
    <section id="products" className="pt-20">
      <h2 className=" font-poppins text-center text-[28px] text-primary">Check Out our Plants</h2>
      <div className="pt-20 flex flex-wrap gap-12 justify-center md:grid grid-cols-3 md:gap-x-0 md:gap-y-12 place-items-center">
        {products.map((product) => (
          <article
            key={product.id}
            className="bg-third-color w-[292px] flex flex-col rounded-[10px] shadow-lg"
          >
            <div className="flex justify-center h-[258px] relative">
              <img src={product.img} alt="product image" className="absolute bottom-0" />
            </div>
            <div className="bg-white h-[93px] w-[292px] px-[12px] py-[18px] flex justify-between items-center rounded-b-[10px]">
              <div className="font-poppins text-gray-700">
                <p className="font-semibold cursor-pointer hover:underline">{product.name}</p>
                <p>{product.price}</p>
              </div>
              <div className="self-end bg-secondary hover:bg-secondary-alt duration-300 rounded-[5px] cursor-pointer">
                <Bag2 className="text-white m-1" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products
