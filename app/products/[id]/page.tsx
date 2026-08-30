import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct } from '@/app/utils/actions';
import Image from 'next/image';
import { formatCurrency } from '@/app/utils/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';

async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await fetchSingleProduct(id);

  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-[300px] lg:h-full ">
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'

            priority
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex items-center gap-x-8">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>

            <FavoriteToggleButton productId={id} />
          </div>

          <ProductRating productId={id} />

          <h4 className="mt-2 text-xl">{company}</h4>

          <p className="mt-3 inline-block rounded-md bg-muted p-2 text-md">
            {dollarsAmount}
          </p>

          <p className="mt-6 mb-5 leading-8 text-muted-foreground">
            {description}
          </p>

          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;