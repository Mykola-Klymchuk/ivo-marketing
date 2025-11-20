import ProductHeroSection from '../../components/sections/products/ProductHeroSection';
import SolutionsHighlightSection from '../../components/sections/products/SolutionsHighlightSection';
import ProductCarouselSection from '../../components/sections/products/ProductCarouselSection';
import OperationalUseCasesSection from '../../components/sections/products/OperationalUseCasesSection';
import CustomerSection from '../../components/sections/products/CustomerSection';
import ResourcesDownloadSection from '../../components/sections/products/ResourcesDownloadSection';
import DemoRequestSection from '../../components/sections/products/DemoRequestSection';

export default function ProductsPage() {
  return (
    <main>
      <ProductHeroSection />
      <SolutionsHighlightSection />
      <ProductCarouselSection />
      <OperationalUseCasesSection />
      <CustomerSection />
      <ResourcesDownloadSection />
      <DemoRequestSection />
    </main>
  );
}