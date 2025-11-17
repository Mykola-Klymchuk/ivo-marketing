import ProductHeroSection from '../components/sections/products/ProductHeroSection';
import SolutionsHighlightSection from '../components/sections/products/SolutionsHighlightSection';
import ProductCarouselSection from '../components/sections/products/ProductCarouselSection';

export default function ProductsPage() {
  return (
    <>
      <ProductHeroSection />
      <SolutionsHighlightSection />
      <ProductCarouselSection />
    </>
  );
}