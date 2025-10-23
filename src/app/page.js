 
import CategorySlider from "@/components/CategorySlider"; 
import CarouselBanner from "@/HomePageComponent/CarouselBanner";
import ProductListingPage from "./productdisplay/page";

export default function Home() {
  return (
    <>
      <CategorySlider /> 
     <CarouselBanner />
     <ProductListingPage />
    </>
  );
}
