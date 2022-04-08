import { Button, Grid, styled, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { FoodStuffItem } from "../common/FoodStuffItem/FoodStuffItem";
import Background from "src/assets/images/goods_bg.png";
import Macarun from "src/assets/images/macarun-1.jpeg";
import Eclair from "src/assets/images/eclair-1.jpeg";

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

const items = [
  {
    image: Macarun,
    title: "МАКАРОН ФІСТАШКА-МАЛИНА",
    description: "Макаронс з начинкою із ніжного фісташкового ганашу та малини",
    price: "40UAH",
    productCategory: "macarun",
  },
  {
    image: Eclair,
    title: "ЕКЛЕР ФУНДУК",
    description:
      "Еклер з начинкою із ніжного вершкового крему з додаванням фундука",
    price: "65UAH",
    productCategory: "eclair",
  },
  {
    image: Macarun,
    title: "МАКАРОН КОКОС-АНАНАС",
    description: "Макаронс з начинкою із ніжного кокосового ганашу та ананасу",
    price: "40UAH",
    productCategory: "macarun",
  },
  {
    image: Macarun,
    title: "МАКАРОН ФІСТАШКА-МАЛИНА",
    description: "Макаронс з начинкою із ніжного фісташкового ганашу та малини",
    price: "40UAH",
    productCategory: "macarun",
  },
];

export const CategorySection = () => {
  const location = useLocation();
  const category = location.pathname.slice(1);

  return (
    <StyledSection container>
      <StyledTitle variant="h2">{category}</StyledTitle>
      <StyledItems item>
        {items.map(
          ({ image, title, description, price, productCategory }) =>
            category === productCategory && (
              <FoodStuffItem
                image={image}
                title={title}
                description={description}
                price={price}
              />
            )
        )}
      </StyledItems>
      <StyledButton variant="contained">Compose yourself</StyledButton>
    </StyledSection>
  );
};
