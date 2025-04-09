import { getCurrentSession } from "@/actions/auth";
import SalesCampaingBanner from "@/components/layout/SalesCampaingBanner";
import ProductGrid from "@/components/product/ProductGrid";
import { getAllProducts } from "@/sanity/lib/client";

const Home = async () => {

  const { user } = await getCurrentSession();

  const products = await getAllProducts();

  return (
    <div>
      <SalesCampaingBanner/>
      <section className="container mx-auto py-10 ">
      <ProductGrid products={products}/>
      </section>
    </div>
  );
};

export default Home;
