import { Grid, styled } from "@mui/material";
import { productData } from "src/constants";
import { ProductItem } from "src/components/common/ProductItem/ProductItem";
import Background from "src/assets/images/goods_bg.png";

const PREFIX = "Intro";

const StyledGrid = styled(Grid, {
  name: `${PREFIX}-StyledGrid`,
})({
  position: "relative",
  background: `url(${Background}) center no-repeat`,
  backgroundSize: "cover",
  maxWidth: 1440,
});

export const ProductsSection = () => (
  <StyledGrid
    container
    justifyContent="space-evenly"
    sx={{ py: 10, px: 3 }}
    id="productSection"
  >
    {productData.map(({ id, image, category }) => (
      <ProductItem key={id} image={image} category={category} />
    ))}
  </StyledGrid>
);
