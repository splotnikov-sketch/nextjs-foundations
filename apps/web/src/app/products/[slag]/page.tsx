import { fetchProductBySlug, fetchProducts } from '@repo/api/products';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const products = await fetchProducts(10);

  return products.map((product) => ({
    slug: product.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-6 p-8">
      <Link className="text-blue-600 text-sm hover:underline" href="/products">
        ← Back to products
      </Link>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="relative aspect-square w-full md:w-1/2">
          <Image
            alt={product.name}
            className="rounded-lg object-cover"
            fill
            src={product.imageUrl}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className='text-gray-500 text-sm'>{product.category}</div>
          <h1 className="font-bold text-3xl">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center gap-3">
            <span className="font-bold text-2xl">${product.price}</span>
            {product.compareAtPrice && (
              <span className='text-gray-400 text-lg line-through'>
                ${product.compareAtPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-500">
              {'★'.repeat(Math.round(product.rating))}
            </span>
            <span className='text-gray-500 text-sm'>
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                className='rounded-full bg-gray-100 px-3 py-1 text-gray-700 text-xs'
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <span
            className={`font-medium text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </main>
  );
}
