import CategoryHero from "@/components/sharedUI/CategoryHero";
import CategoryProducts from "@/components/sharedUI/CategoryProducts";
import { getProductsByCategory } from "@/lib/productUtils";

export const dynamic = "force-dynamic";

async function page() {
  const products = getProductsByCategory("speakers");

  return (
    <main className="w-full min-h-screen">
      <CategoryHero category="speakers" />
      <CategoryProducts category="speakers" products={products} />
    </main>
  );
}

export default page;
