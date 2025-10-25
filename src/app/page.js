
import CategorySlider from "@/components/CategorySlider";
import TopBanner from "@/components/HomeComponent/TopBanner";

import NaturalGradientProduct from "@/components/NaturalGradientProduct";
import ImageBanner from "@/HomePageComponent/ImageBanner";
import BeautyProductsGrid from "./homepage/page";

export default function Home() {
  return (
    <>

      <CategorySlider />
      <BeautyProductsGrid />
      <TopBanner />
      <ImageBanner />
      <NaturalGradientProduct />
    </>
  );
}
