import { fetchProducts } from '@repo/api/products';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductsPage() {
  const products = await fetchProducts(12);

  return (
    <main className="flex flex-col gap-6 p-8">
      <h1 className="font-bold text-3xl">Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Link
            className="group flex flex-col overflow-hidden rounded-lg border transition-shadow hover:shadow-lg"
            href={`/products/${product.slug}`}
            key={product.id}
          >
            <div className="relative aspect-square">
              <Image
                alt={product.name}
                className="object-cover transition-transform group-hover:scale-105"
                fill
                src={product.imageUrl}
              />
              {!product.inStock && (
                <span className='absolute top-2 right-2 rounded bg-red-600 px-2 py-1 text-white text-xs'>
                  Sold Out
                </span>
              )}
              {product.compareAtPrice && product.inStock && (
                <span className='absolute top-2 left-2 rounded bg-green-600 px-2 py-1 text-white text-xs'>
                  Sale
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
              <span className='text-gray-500 text-xs'>{product.category}</span>
              <h2 className="font-semibold text-sm leading-tight">
                {product.name}
              </h2>

              <div className="mt-auto flex items-center gap-2 pt-2">
                <span className="font-bold">${product.price}</span>
                {product.compareAtPrice && (
                  <span className='text-gray-400 text-sm line-through'>
                    ${product.compareAtPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1">
                <span className="text-xs text-yellow-500">
                  {'★'.repeat(Math.round(product.rating))}
                </span>
                <span className='text-gray-400 text-xs'>
                  ({product.reviewCount})
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
