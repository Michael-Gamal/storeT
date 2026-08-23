import Link from "next/link";

function BreadCrumbs({ name }: { name: string }) {
  return (
    <nav aria-label="breadcrumb" className="text-lg">
      <ol className="flex items-center gap-2 capitalize">
        <li>
          <Link href="/" className="hover:underline">
            home
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link href="/products" className="hover:underline">
            products
          </Link>
        </li>

        <li>/</li>

        <li className="font-medium text-gray-500">
          {name}
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumbs;