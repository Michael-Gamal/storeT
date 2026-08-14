import { Product } from '@prisma/client';

function ProductsList({
  products,
}: {
  products: Product[];
}) {
  return <h1>ProductsList ({products.length})</h1>;
}

export default ProductsList;