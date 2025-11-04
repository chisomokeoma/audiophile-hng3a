import { notFound } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import ProductFeaturesAndSpecs from "@/components/sharedUI/ProductFeaturesAndSpecs";
import ProductGallery from "@/components/sharedUI/ProductGallery";
import ProductHero from "@/components/sharedUI/ProductHero";
import ProductRecommendation from "@/components/sharedUI/ProductRecommendation";
import GoBack from "@/components/sharedUI/GoBack";
import { getProductBySlug } from "@/lib/productUtils";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function page({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="w-full">
      <AppHeader />
      <div className="container">
        <GoBack category={product.category} />
      </div>
      <ProductHero product={product} />
      <ProductFeaturesAndSpecs product={product} />
      <ProductGallery product={product} />
      <ProductRecommendation product={product} />
    </main>
  );
}

export default page;
