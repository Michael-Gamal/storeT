
import { Product } from '@prisma/client';
import CardList from '../ui/CardList';

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="pt-12 grid gap-4 grid-cols-1 md:gap-6">   
      {products.map((product) => (
        <CardList key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductsList;
