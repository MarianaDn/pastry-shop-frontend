import { BenefitsSection } from "src/components/BenefitsSection";
import { IntroSection } from "src/components/IntroSection";
import { Layout } from "src/components/Layout";
import { ProductsSection } from "src/components/ProductsSection";
import { OrderSection } from "src/components/OrderSection";
import { AboutSection } from "src/components/AboutSection";

export const HomePage = () => (
  <Layout>
    <IntroSection />
    <AboutSection />
    <ProductsSection />
    <BenefitsSection />
    <OrderSection />
  </Layout>
);
