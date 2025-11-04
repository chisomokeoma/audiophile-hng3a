function getImage(module: any) {
  const img = module?.default || module?.src || module;
  if (img && typeof img === "object" && "src" in img) {
    return img.src;
  }
  if (img && typeof img === "object" && "default" in img) {
    return img.default;
  }
  return img;
}

const imageMap: Record<string, any> = {
  "@/assets/product-yx1-earphones/desktop/image-product.jpg": getImage(
    require("@/assets/product-yx1-earphones/desktop/image-product.jpg")
  ),
  "@/assets/product-yx1-earphones/tablet/image-product.jpg": getImage(
    require("@/assets/product-yx1-earphones/tablet/image-product.jpg")
  ),
  "@/assets/product-yx1-earphones/mobile/image-product.jpg": getImage(
    require("@/assets/product-yx1-earphones/mobile/image-product.jpg")
  ),
  "@/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg")
    ),
  "@/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg")
    ),
  "@/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg")
    ),
  "@/assets/product-yx1-earphones/desktop/image-gallery-1.jpg": getImage(
    require("@/assets/product-yx1-earphones/desktop/image-gallery-1.jpg")
  ),
  "@/assets/product-yx1-earphones/tablet/image-gallery-1.jpg": getImage(
    require("@/assets/product-yx1-earphones/tablet/image-gallery-1.jpg")
  ),
  "@/assets/product-yx1-earphones/mobile/image-gallery-1.jpg": getImage(
    require("@/assets/product-yx1-earphones/mobile/image-gallery-1.jpg")
  ),
  "@/assets/product-yx1-earphones/desktop/image-gallery-2.jpg": getImage(
    require("@/assets/product-yx1-earphones/desktop/image-gallery-2.jpg")
  ),
  "@/assets/product-yx1-earphones/tablet/image-gallery-2.jpg": getImage(
    require("@/assets/product-yx1-earphones/tablet/image-gallery-2.jpg")
  ),
  "@/assets/product-yx1-earphones/mobile/image-gallery-2.jpg": getImage(
    require("@/assets/product-yx1-earphones/mobile/image-gallery-2.jpg")
  ),
  "@/assets/product-yx1-earphones/desktop/image-gallery-3.jpg": getImage(
    require("@/assets/product-yx1-earphones/desktop/image-gallery-3.jpg")
  ),
  "@/assets/product-yx1-earphones/tablet/image-gallery-3.jpg": getImage(
    require("@/assets/product-yx1-earphones/tablet/image-gallery-3.jpg")
  ),
  "@/assets/product-yx1-earphones/mobile/image-gallery-3.jpg": getImage(
    require("@/assets/product-yx1-earphones/mobile/image-gallery-3.jpg")
  ),
  "@/assets/product-xx59-headphones/desktop/image-product.jpg": getImage(
    require("@/assets/product-xx59-headphones/desktop/image-product.jpg")
  ),
  "@/assets/product-xx59-headphones/tablet/image-product.jpg": getImage(
    require("@/assets/product-xx59-headphones/tablet/image-product.jpg")
  ),
  "@/assets/product-xx59-headphones/mobile/image-product.jpg": getImage(
    require("@/assets/product-xx59-headphones/mobile/image-product.jpg")
  ),
  "@/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg")
    ),
  "@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg")
    ),
  "@/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg")
    ),
  "@/assets/product-xx59-headphones/desktop/image-gallery-1.jpg": getImage(
    require("@/assets/product-xx59-headphones/desktop/image-gallery-1.jpg")
  ),
  "@/assets/product-xx59-headphones/tablet/image-gallery-1.jpg": getImage(
    require("@/assets/product-xx59-headphones/tablet/image-gallery-1.jpg")
  ),
  "@/assets/product-xx59-headphones/mobile/image-gallery-1.jpg": getImage(
    require("@/assets/product-xx59-headphones/mobile/image-gallery-1.jpg")
  ),
  "@/assets/product-xx59-headphones/desktop/image-gallery-2.jpg": getImage(
    require("@/assets/product-xx59-headphones/desktop/image-gallery-2.jpg")
  ),
  "@/assets/product-xx59-headphones/tablet/image-gallery-2.jpg": getImage(
    require("@/assets/product-xx59-headphones/tablet/image-gallery-2.jpg")
  ),
  "@/assets/product-xx59-headphones/mobile/image-gallery-2.jpg": getImage(
    require("@/assets/product-xx59-headphones/mobile/image-gallery-2.jpg")
  ),
  "@/assets/product-xx59-headphones/desktop/image-gallery-3.jpg": getImage(
    require("@/assets/product-xx59-headphones/desktop/image-gallery-3.jpg")
  ),
  "@/assets/product-xx59-headphones/tablet/image-gallery-3.jpg": getImage(
    require("@/assets/product-xx59-headphones/tablet/image-gallery-3.jpg")
  ),
  "@/assets/product-xx59-headphones/mobile/image-gallery-3.jpg": getImage(
    require("@/assets/product-xx59-headphones/mobile/image-gallery-3.jpg")
  ),
  "@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg")
    ),
  "@/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg":
    getImage(
      require("@/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg")
    ),
  "@/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg":
    getImage(
      require("@/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg")
    ),
  "@/assets/product-zx7-speaker/desktop/image-product.jpg": getImage(
    require("@/assets/product-zx7-speaker/desktop/image-product.jpg")
  ),
  "@/assets/product-zx7-speaker/tablet/image-product.jpg": getImage(
    require("@/assets/product-zx7-speaker/tablet/image-product.jpg")
  ),
  "@/assets/product-zx7-speaker/mobile/image-product.jpg": getImage(
    require("@/assets/product-zx7-speaker/mobile/image-product.jpg")
  ),
  "@/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg")
    ),
  "@/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg")
    ),
  "@/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg")
    ),
  "@/assets/product-zx7-speaker/desktop/image-gallery-1.jpg": getImage(
    require("@/assets/product-zx7-speaker/desktop/image-gallery-1.jpg")
  ),
  "@/assets/product-zx7-speaker/tablet/image-gallery-1.jpg": getImage(
    require("@/assets/product-zx7-speaker/tablet/image-gallery-1.jpg")
  ),
  "@/assets/product-zx7-speaker/mobile/image-gallery-1.jpg": getImage(
    require("@/assets/product-zx7-speaker/mobile/image-gallery-1.jpg")
  ),
  "@/assets/product-zx7-speaker/desktop/image-gallery-2.jpg": getImage(
    require("@/assets/product-zx7-speaker/desktop/image-gallery-2.jpg")
  ),
  "@/assets/product-zx7-speaker/tablet/image-gallery-2.jpg": getImage(
    require("@/assets/product-zx7-speaker/tablet/image-gallery-2.jpg")
  ),
  "@/assets/product-zx7-speaker/mobile/image-gallery-2.jpg": getImage(
    require("@/assets/product-zx7-speaker/mobile/image-gallery-2.jpg")
  ),
  "@/assets/product-zx7-speaker/desktop/image-gallery-3.jpg": getImage(
    require("@/assets/product-zx7-speaker/desktop/image-gallery-3.jpg")
  ),
  "@/assets/product-zx7-speaker/tablet/image-gallery-3.jpg": getImage(
    require("@/assets/product-zx7-speaker/tablet/image-gallery-3.jpg")
  ),
  "@/assets/product-zx7-speaker/mobile/image-gallery-3.jpg": getImage(
    require("@/assets/product-zx7-speaker/mobile/image-gallery-3.jpg")
  ),
  "@/assets/product-zx9-speaker/desktop/image-product.jpg": getImage(
    require("@/assets/product-zx9-speaker/desktop/image-product.jpg")
  ),
  "@/assets/product-zx9-speaker/tablet/image-product.jpg": getImage(
    require("@/assets/product-zx9-speaker/tablet/image-product.jpg")
  ),
  "@/assets/product-zx9-speaker/mobile/image-product.jpg": getImage(
    require("@/assets/product-zx9-speaker/mobile/image-product.jpg")
  ),
  "@/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg")
    ),
  "@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg")
    ),
  "@/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg":
    getImage(
      require("@/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg")
    ),
  "@/assets/product-zx9-speaker/desktop/image-gallery-1.jpg": getImage(
    require("@/assets/product-zx9-speaker/desktop/image-gallery-1.jpg")
  ),
  "@/assets/product-zx9-speaker/tablet/image-gallery-1.jpg": getImage(
    require("@/assets/product-zx9-speaker/tablet/image-gallery-1.jpg")
  ),
  "@/assets/product-zx9-speaker/mobile/image-gallery-1.jpg": getImage(
    require("@/assets/product-zx9-speaker/mobile/image-gallery-1.jpg")
  ),
  "@/assets/product-zx9-speaker/desktop/image-gallery-2.jpg": getImage(
    require("@/assets/product-zx9-speaker/desktop/image-gallery-2.jpg")
  ),
  "@/assets/product-zx9-speaker/tablet/image-gallery-2.jpg": getImage(
    require("@/assets/product-zx9-speaker/tablet/image-gallery-2.jpg")
  ),
  "@/assets/product-zx9-speaker/mobile/image-gallery-2.jpg": getImage(
    require("@/assets/product-zx9-speaker/mobile/image-gallery-2.jpg")
  ),
  "@/assets/product-zx9-speaker/desktop/image-gallery-3.jpg": getImage(
    require("@/assets/product-zx9-speaker/desktop/image-gallery-3.jpg")
  ),
  "@/assets/product-zx9-speaker/tablet/image-gallery-3.jpg": getImage(
    require("@/assets/product-zx9-speaker/tablet/image-gallery-3.jpg")
  ),
  "@/assets/product-zx9-speaker/mobile/image-gallery-3.jpg": getImage(
    require("@/assets/product-zx9-speaker/mobile/image-gallery-3.jpg")
  ),
  "@/assets/shared/desktop/image-xx99-mark-one-headphones.jpg": getImage(
    require("@/assets/shared/desktop/image-xx99-mark-one-headphones.jpg")
  ),
  "@/assets/shared/tablet/image-xx99-mark-one-headphones.jpg": getImage(
    require("@/assets/shared/tablet/image-xx99-mark-one-headphones.jpg")
  ),
  "@/assets/shared/mobile/image-xx99-mark-one-headphones.jpg": getImage(
    require("@/assets/shared/mobile/image-xx99-mark-one-headphones.jpg")
  ),
  "@/assets/shared/desktop/image-xx99-mark-two-headphones.jpg": getImage(
    require("@/assets/shared/desktop/image-xx99-mark-two-headphones.jpg")
  ),
  "@/assets/shared/tablet/image-xx99-mark-two-headphones.jpg": getImage(
    require("@/assets/shared/tablet/image-xx99-mark-two-headphones.jpg")
  ),
  "@/assets/shared/mobile/image-xx99-mark-two-headphones.jpg": getImage(
    require("@/assets/shared/mobile/image-xx99-mark-two-headphones.jpg")
  ),
  "@/assets/shared/desktop/image-xx59-headphones.jpg": getImage(
    require("@/assets/shared/desktop/image-xx59-headphones.jpg")
  ),
  "@/assets/shared/tablet/image-xx59-headphones.jpg": getImage(
    require("@/assets/shared/tablet/image-xx59-headphones.jpg")
  ),
  "@/assets/shared/mobile/image-xx59-headphones.jpg": getImage(
    require("@/assets/shared/mobile/image-xx59-headphones.jpg")
  ),
  "@/assets/shared/desktop/image-zx9-speaker.jpg": getImage(
    require("@/assets/shared/desktop/image-zx9-speaker.jpg")
  ),
  "@/assets/shared/tablet/image-zx9-speaker.jpg": getImage(
    require("@/assets/shared/tablet/image-zx9-speaker.jpg")
  ),
  "@/assets/shared/mobile/image-zx9-speaker.jpg": getImage(
    require("@/assets/shared/mobile/image-zx9-speaker.jpg")
  ),
  "@/assets/shared/desktop/image-zx7-speaker.jpg": getImage(
    require("@/assets/shared/desktop/image-zx7-speaker.jpg")
  ),
  "@/assets/shared/tablet/image-zx7-speaker.jpg": getImage(
    require("@/assets/shared/tablet/image-zx7-speaker.jpg")
  ),
  "@/assets/shared/mobile/image-zx7-speaker.jpg": getImage(
    require("@/assets/shared/mobile/image-zx7-speaker.jpg")
  ),
};

export function getImageFromMap(imagePath: string): any {
  return imageMap[imagePath] || null;
}
