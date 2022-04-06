import { BenefitsSection } from "src/components/BenefitsSection/BenefitsSection";
import { AboutSection } from "src/components/AboutSection/AboutSection";
import { IntroSection } from "src/components/IntroSection/IntroSection";
import { Layout } from "src/components/Layout/Layout";
import { ProductsSection } from "src/components/ProductsSection/ProductsSection";
import { OrderSection } from "src/components/OrderSection/OrderSection";

export const HomePage = () => (
  <Layout>
    <IntroSection />
    <AboutSection />
    <ProductsSection />
    <BenefitsSection />
    <OrderSection />
  </Layout>
);
