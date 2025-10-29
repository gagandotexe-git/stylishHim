
import CategorySlider from "@/components/CategorySlider";
import AddTopBanner from "@/components/HomeComponent/AddTopBanner";
import TopBanner from "@/components/HomeComponent/TopBanner";

import NaturalGradientProduct from "@/components/NaturalGradientProduct";
import ImageBanner from "@/HomePageComponent/ImageBanner";
import BeautyProductsGrid from "./homepage/page";
import BannerGridtwo from "./bannertwo/page";
import ProductskinListingPage from "./productpageskin/page";

export default function Home() {
  return (
    <>

      <CategorySlider /> 
      <TopBanner />
      <AddTopBanner />
      <ProductskinListingPage />
       <BeautyProductsGrid />
      <ImageBanner />
      <BannerGridtwo />
      <ProductskinListingPage />
      <NaturalGradientProduct />
    </>
  );
}
