import { Button, Grid, styled, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { FoodStuffItem } from "../common/FoodStuffItem/FoodStuffItem";
import Background from "src/assets/images/goods_bg.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "src/constants";

const PREFIX = "CategorySection";

const StyledSection = styled(Grid, {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  background: `url(${Background}) center no-repeat`,
  backgroundSize: "cover",
  maxWidth: 1440,
  marginBottom: theme.spacing(5),
  padding: theme.spacing(15),
  flexDirection: "column",

  [theme.breakpoints.down(1025)]: {
    padding: theme.spacing(15, 5),
  },
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "MarckScript",
  fontSize: 64,
  margin: theme.spacing(0, "auto"),
  marginBottom: theme.spacing(3),

  "&:first-letter": {
    textTransform: "uppercase",
  },
}));

const StyledItems = styled(Grid, {
  name: `${PREFIX}-StyledItems`,
})(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
}));

const StyledButton = styled(Button, {
  name: `${PREFIX}-StyledButton`,
})(({ theme }) => ({
  padding: theme.spacing(2.5, 8.5),
  backgroundColor: theme.palette.red.dark,
  alignSelf: "center",

  "&:hover": {
    backgroundColor: theme.palette.red.light,
  },
}));

export const CategorySection = () => {
  const location = useLocation();
  const category = location.pathname.slice(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}products?category=${category}`
        );
        setProducts(data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  return (
    <StyledSection container>
      <StyledTitle variant="h2">{category}</StyledTitle>
      <StyledItems item>
        {products.map((product, index) => (
          <FoodStuffItem product={product} key={index} />
        ))}
      </StyledItems>
      <StyledButton variant="contained">Compose yourself</StyledButton>
    </StyledSection>
  );
};
