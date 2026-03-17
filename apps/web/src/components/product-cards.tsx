import 'server-only';

import { Collapsible } from '@/components/collapsible';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{product.name}</h3>
        <span className="font-mono text-lg">${product.price}</span>
      </div>

      <Collapsible title="Details">
        <p className='text-gray-500 text-sm'>{product.description}</p>
      </Collapsible>
    </div>
  );
}
