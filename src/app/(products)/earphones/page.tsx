import CategoryHero from "@/components/sharedUI/CategoryHero";
import CategoryProducts from "@/components/sharedUI/CategoryProducts";
import { getProductsByCategory } from "@/lib/productUtils";

export const dynamic = "force-dynamic";

async function page() {
  const products = getProductsByCategory("earphones");

  return (
    <main className="w-full min-h-screen">
      <CategoryHero category="earphones" />
      <CategoryProducts category="earphones" products={products} />
    </main>
  );
}

export default page;
