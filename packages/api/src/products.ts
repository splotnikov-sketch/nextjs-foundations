import { faker } from '@faker-js/faker';

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice: number | null;
  category: string;
  tags: string[];
  imageUrl: string;
  thumbnailUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  createdAt: Date;
};

const PRODUCT_CATEGORIES = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Books',
  'Toys',
  'Beauty',
  'Automotive',
];

const generateProduct = (overrides?: Partial<Product>): Product => {
  const name = faker.commerce.productName();
  const slug = faker.helpers.slugify(name).toLowerCase();
  const price = Number.parseFloat(faker.commerce.price({ min: 9.99, max: 999.99 }));
  const hasDiscount = faker.datatype.boolean({ probability: 0.3 });

  return {
    id: faker.string.uuid(),
    slug,
    name,
    description: faker.commerce.productDescription(),
    price,
    compareAtPrice: hasDiscount
      ? Number.parseFloat((price * faker.number.float({ min: 1.2, max: 1.8 })).toFixed(2))
      : null,
    category: faker.helpers.arrayElement(PRODUCT_CATEGORIES),
    tags: faker.helpers.arrayElements(
      ['new', 'sale', 'popular', 'limited', 'exclusive', 'eco-friendly', 'premium', 'bestseller'],
      { min: 1, max: 3 }
    ),
    imageUrl: faker.image.urlPicsumPhotos({ width: 800, height: 800 }),
    thumbnailUrl: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
    rating: faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
    reviewCount: faker.number.int({ min: 0, max: 2000 }),
    inStock: faker.datatype.boolean({ probability: 0.85 }),
    createdAt: faker.date.recent({ days: 180 }),
    ...overrides,
  };
};

let cachedProducts: Product[] | null = null;

const getAllProducts = (): Product[] => {
  if (!cachedProducts) {
    cachedProducts = Array.from({ length: 40 }, () => generateProduct());
  }
  return cachedProducts;
};

export async function fetchProducts(limit = 12, offset = 0): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const all = getAllProducts();
  return all
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(offset, offset + limit);
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 200));

  const all = getAllProducts();
  const product = all.find((p) => p.slug === slug);

  if (!product) {
    return generateProduct({ slug });
  }

  return product;
}

export async function fetchProductsByCategory(category: string, limit = 12): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const all = getAllProducts();
  return all
    .filter((p) => p.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit);
}

export async function fetchCategories(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return PRODUCT_CATEGORIES;
}