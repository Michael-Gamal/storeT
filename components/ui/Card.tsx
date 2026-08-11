import { formatCurrency } from '@/app/utils/format';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@prisma/client';
import FavoriteToggleButton from '../products/FavoriteToggleButton';

function Card({ product }: { product: Product }) {
  const { name, price, image, id: productId } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <article className="group relative">
      <Link href={`/products/${productId}`}>
        <div className=" bg-card  relative rounded-md shadow-md p-4 flex flex-col justify-center items-center hover:shadow-2xl duration-500 transition-shadow">
          <div className="relative w-full h-[200px]">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-sm object-cover"
            />
          </div>
          <div className=" text-card-foreground flex justify-center items-center flex-col gap-2 mt-2">
            <h3 className="text-xl capitalize">{name}</h3>
            <span className=" font-bold">{dollarsAmount}</span>
          </div>
          <div className="absolute top-7 right-7">
            <FavoriteToggleButton  productId={productId} />
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Card;