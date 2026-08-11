"use client";
import { formatCurrency } from '@/app/utils/format';
import Link from 'next/link';
import { Product } from "@prisma/client"
import FavoriteToggleButton from "../products/FavoriteToggleButton"

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);
        return (
            <article key={productId} className='group relative'>
                <Link href={`products/${productId}`}>

                <div className="relative rounded-md shadow-md p-4 flex flex-col justify-center items-center hover:shadow-2xl duration-500 transition-shadow">
            <div className="w-full h-[200]">
                <img 

                    src={product.image}
                    alt={`name`}
                    className="rounded-sm object-cover w-full h-full "
                />
            </div>  
            <div className="flex justify-center items-center flex-col gap-2 mt-2">
                <h3 className="text-xl capitalize">{product.name}</h3>
                <span className="text-muted-foreground font-bold">{dollarsAmount}</span>
            </div>
            <div className="absolute top-7 right-7">
                <FavoriteToggleButton />
            </div>
        </div>

                </Link>
            </article>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
