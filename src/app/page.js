 
import CategorySlider from "@/components/CategorySlider"; 
import CarouselBanner from "@/HomePageComponent/CarouselBanner";
import ProductListingPage from "./productdisplay/page"; 
import ProductBannerPage from "@/components/ProductBannerPage";
import ProductBannerPageTwo from "@/components/ProductBannerPageTwo";
import ProductskinListingPage from "./productpageskin/page";

export default function Home() {
  return (
    <>
     
      <CategorySlider /> 
     <CarouselBanner />
     <ProductListingPage /> 
        <ProductBannerPageTwo />
     <ProductskinListingPage />
       <ProductBannerPage />
    </>
  );
}
