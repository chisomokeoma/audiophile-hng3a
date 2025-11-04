import dbData from "@/assets/db.json";
import { getImageFromMap } from "./imageMap";

// Type definitions for the product data structure
export interface ProductImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductInclude {
  quantity: number;
  item: string;
}

export interface ProductGalleryImage {
  first: ProductImage;
  second: ProductImage;
  third: ProductImage;
}

export interface ProductOther {
  slug: string;
  name: string;
  image: ProductImage;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ProductImage;
  category: string;
  categoryImage: ProductImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductInclude[];
  gallery: ProductGalleryImage;
  others: ProductOther[];
}

/**
 * Converts relative image paths from db.json to require-compatible paths
 * Example: "./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
 *      -> "@/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
 */
function resolveImagePath(path: string): string {
  if (path.startsWith("./assets/")) {
    return path.replace("./assets/", "@/assets/");
  }
  return path;
}

/**
 * Resolves all image paths in a ProductImage object
 */
function resolveProductImage(images: ProductImage): ProductImage {
  return {
    mobile: resolveImagePath(images.mobile),
    tablet: resolveImagePath(images.tablet),
    desktop: resolveImagePath(images.desktop),
  };
}

/**
 * Resolves all image paths in a Product object
 */
function resolveProductImages(product: any): Product {
  return {
    ...product,
    image: resolveProductImage(product.image),
    categoryImage: resolveProductImage(product.categoryImage),
    gallery: {
      first: resolveProductImage(product.gallery.first),
      second: resolveProductImage(product.gallery.second),
      third: resolveProductImage(product.gallery.third),
    },
    others: product.others.map((other: ProductOther) => ({
      ...other,
      image: resolveProductImage(other.image),
    })),
  };
}

/**
 * Gets an image source from the static image map
 * This function uses a pre-generated mapping to avoid dynamic require() calls
 */
export function getImageSrc(imagePath: string): any {
  return getImageFromMap(imagePath);
}

/**
 * Fetches a product by slug from db.json
 * @param slug - The product slug (e.g., "xx99-mark-two-headphones")
 * @returns The product data or null if not found
 */
export function getProductBySlug(slug: string): Product | null {
  const product = dbData.data.find((item) => item.slug === slug);
  if (!product) {
    return null;
  }
  return resolveProductImages(product);
}

/**
 * Fetches all products from db.json
 * @returns Array of all products
 */
export function getAllProducts(): Product[] {
  return dbData.data.map(resolveProductImages);
}

/**
 * Fetches products by category
 * @param category - The category (e.g., "headphones", "speakers", "earphones")
 * @returns Array of products in the category
 */
export function getProductsByCategory(category: string): Product[] {
  return dbData.data
    .filter((item) => item.category === category)
    .map(resolveProductImages);
}
