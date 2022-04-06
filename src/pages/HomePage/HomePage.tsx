import { BenefitsSection } from "src/components/BenefitsSection/BenefitsSection";
import { AboutSection } from "src/components/AboutSection/AboutSection";
import { IntroSection } from "src/components/IntroSection/IntroSection";
import { Layout } from "src/components/Layout/Layout";
import { ProductsSection } from "src/components/ProductsSection/ProductsSection";

export const HomePage = () => (
  <Layout>
    <IntroSection />
    <AboutSection />
    <ProductsSection />
    <BenefitsSection />
  </Layout>
);
