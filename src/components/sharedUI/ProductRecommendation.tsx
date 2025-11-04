import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Product,
  getImageSrc,
  ProductOther,
  getProductBySlug,
} from "@/lib/productUtils";

interface ProductRecommendationProps {
  product: Product;
}

function ProductRecommendation({ product }: ProductRecommendationProps) {
  return (
    <section className="w-full font-manrope">
      <div className="container flex flex-col gap-10 sm:gap-14 lg:gap-16">
        <h4 className="text-center text-[1.5rem]/[150%] sm:text-[2rem]/[112.5%] tracking-[0.05356rem] sm:tracking-[0.07144rem] font-bold uppercase">
          YOU MAY ALSO LIKE
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-3 lg:gap-7.5">
          {product.others.map((other) => (
            <RecommendationCard key={other.slug} other={other} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductRecommendation;

interface RecommendationCardProps {
  other: ProductOther;
}

function RecommendationCard({ other }: RecommendationCardProps) {
  const desktopImage = getImageSrc(other.image.desktop);
  const tabletImage = getImageSrc(other.image.tablet);
  const mobileImage = getImageSrc(other.image.mobile);

  const relatedProduct = getProductBySlug(other.slug);
  const category = relatedProduct?.category || "headphones";

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="relative aspect-327/120 sm:aspect-223/318 lg:aspect-350/318 rounded-lg overflow-hidden">
        {desktopImage && (
          <Image
            src={desktopImage}
            alt={other.name}
            className="w-full h-auto hidden lg:block object-cover object-center"
            fill
          />
        )}
        {tabletImage && (
          <Image
            src={tabletImage}
            alt={other.name}
            className="w-full h-auto hidden sm:block lg:hidden object-cover object-center"
            fill
          />
        )}
        {mobileImage && (
          <Image
            src={mobileImage}
            alt={other.name}
            className="w-full h-auto block sm:hidden object-cover object-center"
            fill
          />
        )}
      </div>
      <div className="flex flex-col gap-8 items-center">
        <h6 className="text-[1.5rem] font-bold tracking-[0.10713rem] uppercase">
          {other.name}
        </h6>
        <Button asChild>
          <Link href={`/${category}/${other.slug}`}>SEE PRODUCT</Link>
        </Button>
      </div>
    </div>
  );
}
