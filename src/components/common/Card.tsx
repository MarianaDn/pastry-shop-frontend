import { FC } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import { ProductItems } from "src/constants";

const PREFIX = "ShopCard";

const StyledCard = styled(Card, {
  name: `${PREFIX}-StyledCard`,
})(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(3, 2),
  borderRadius: 10,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },

  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})({
  fontFamily: "CormorantInfantSemiBold",
  fontSize: 22,
});

const StyledDescription = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "CormorantInfantLight",
  fontSize: 15,
  margin: theme.spacing(1.5, 0),
  color: theme.palette.secondary.main,
}));

export const Cart: FC<ProductItems> = ({
  title,
  desc,
  img,
  price,
  quantity = 1,
}) => (
  <StyledCard sx={{ width: "100%" }}>
    <CardMedia
      component="img"
      height="200"
      image={img}
      alt={title}
      sx={{ width: 200 }}
    />
    <CardContent>
      <StyledTitle gutterBottom>{title}</StyledTitle>
      <StyledDescription>{desc}</StyledDescription>
      <StyledTitle>{price * quantity} UAH</StyledTitle>
    </CardContent>
    <CardActions sx={{ width: 150, justifyContent: "center" }}>
      <StyledTitle sx={{ px: 1 }}>{quantity} шт.</StyledTitle>
    </CardActions>
  </StyledCard>
);
