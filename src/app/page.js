
import CategorySlider from "@/components/CategorySlider";
import AddTopBanner from "@/components/HomeComponent/AddTopBanner";
import TopBanner from "@/components/HomeComponent/TopBanner";

import NaturalGradientProduct from "@/components/NaturalGradientProduct";
import ImageBanner from "@/HomePageComponent/ImageBanner";
import BeautyProductsGrid from "./homepage/page";
import BannerGridtwo from "./bannertwo/page";

export default function Home() {
  return (
    <>

      <CategorySlider />
     
      <TopBanner />
      <AddTopBanner />
       <BeautyProductsGrid />
      <ImageBanner />
      <BannerGridtwo />
      <NaturalGradientProduct />
    </>
  );
}
