// app/products/[slug]/opengraph-image.tsx

import { fetchProductBySlug } from '@repo/api/products';
import { ImageResponse } from 'next/og';

export const revalidate = 3600;
export const alt = 'Product image';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    return new ImageResponse(
      <div style={{ display: 'flex' }}>Product not found</div>,
      { ...size }
    );
  }

  const res = await fetch(product.imageUrl);
  const arrayBuffer = await res.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString('base64');
  const mimeType = res.headers.get('content-type') || 'image/jpeg';
  const src = `data:${mimeType};base64,${base64}`;

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#111',
        color: '#fff',
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: Satori requires plain <img> */}
      <img alt={product.name} height="630" src={src} width="630" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px',
          gap: '16px',
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 'bold' }}>{product.name}</div>
        <div style={{ fontSize: 32, color: '#22c55e' }}>${product.price}</div>
        <div style={{ fontSize: 24, color: '#999' }}>{product.category}</div>
      </div>
    </div>,
    { ...size }
  );
}
