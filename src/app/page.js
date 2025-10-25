 
import CategorySlider from "@/components/CategorySlider"; 
import CarouselBanner from "@/HomePageComponent/CarouselBanner";
import ProductListingPage from "./productdisplay/page"; 
import ProductBannerPage from "@/components/ProductBannerPage";
import ProductBannerPageTwo from "@/components/ProductBannerPageTwo";
import ProductskinListingPage from "./productpageskin/page";
import ProductListingPagetwo from "./productpage/page";
import NaturalGradientProduct from "@/components/NaturalGradientProduct";
import ImageBanner from "@/HomePageComponent/ImageBanner";

export default function Home() {
  return (
    <>
     
      <CategorySlider /> 
    
     <CarouselBanner />
     <ProductListingPage /> 
        <ProductBannerPageTwo />
     <ProductskinListingPage />
       <ProductBannerPage />
       <ProductListingPagetwo />
  <ImageBanner />
       <NaturalGradientProduct />
    </>
  );
}
