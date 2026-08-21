"use client"

import { formatCurrency } from '@/app/utils/format';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@prisma/client';
import FavoriteToggleButton from '../products/FavoriteToggleButton';

function CardList({ product }: { product: Product }) {
  const { name, price, image, id: productId } = product;
  console.log('productId:', productId);
  const dollarsAmount = formatCurrency(price);

  return (
    <article className="group relative">
      <Link href={`/products/${productId}`}>
        <div className=" bg-card   rounded-md shadow-md p-4 justify-between flex  hover:shadow-2xl duration-500 transition-shadow">
          <div className="  relative w-[200px] h-[200px]">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-sm object-cover"
            />
          </div>
              <h3 className="text-xl capitalize ">{name}</h3>
          <div className="flex justify-between gap-2 mt-2">
              <div className="flex flex-col justify-between items-end">
                <span className=" font-bold">{dollarsAmount}</span>
                <FavoriteToggleButton  productId={productId} />
              </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default CardList;