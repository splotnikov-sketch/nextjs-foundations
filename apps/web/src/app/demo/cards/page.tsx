import { ProductCard } from '@/components/product-cards';

// should be getting from api or db, but hardcoding for now
const products = [
  {
    id: '1',
    name: 'Widget Pro',
    description:
      'Professional-grade widget with advanced features for power users.',
    price: 99,
  },
  {
    id: '2',
    name: 'Gadget Plus',
    description:
      'Enhanced gadget with seamless integration and premium support.',
    price: 149,
  },
  {
    id: '3',
    name: 'Tool Master',
    description: 'Master your workflow with automated pipelines and analytics.',
    price: 199,
  },
];

export default function CardsDemoPage() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="font-bold text-2xl">Server Children Pattern</h1>
        <p className="mt-2 text-gray-500">
          Card headers are always visible. Details toggle client-side.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <section className="rounded-lg border p-6">
        <h2 className="mb-2 font-semibold text-lg">Decision Rationale</h2>
        <dl className='space-y-2 text-gray-500 text-sm'>
          <div>
            <dt className="font-medium text-gray-900 dark:text-gray-100">
              ProductCard (Server)
            </dt>
            <dd>
              Static content — name, price, description. No hooks, no event
              handlers, no browser APIs. Ships as HTML with zero JavaScript.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-900 dark:text-gray-100">
              Collapsible (Client)
            </dt>
            <dd>
              Needs useState for toggle state and onClick for the button. This
              is the minimal boundary — only the expand/collapse logic ships JS.
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
