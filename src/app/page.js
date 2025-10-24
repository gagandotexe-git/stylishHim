 
import CategorySlider from "@/components/CategorySlider"; 
import CarouselBanner from "@/HomePageComponent/CarouselBanner";
import ProductListingPage from "./productdisplay/page"; 
import ProductBannerPage from "@/components/ProductBannerPage";

export default function Home() {
  return (
    <>
     
      <CategorySlider /> 
     <CarouselBanner />
     <ProductListingPage />
     <ProductBannerPage />
     <ProductListingPage />
    </>
  );
}
