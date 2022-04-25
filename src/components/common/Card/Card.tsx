import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, FC } from "react";
import { productItems } from "src/constants";

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

const StyledButton = styled(Button, {
  name: `${PREFIX}-StyledButton`,
})(({ theme }) => ({
  minWidth: 32,
}));

export const Cart: FC<productItems> = ({
  title,
  desc,
  img,
  price,
  quantity,
}) => {
  const [quantityItems, setQuantity] = useState(quantity);

  const handleQuantity = (type: string) => {
    if (quantityItems > 1 && type === "dec") {
      setQuantity(quantityItems - 1);
    } else if (quantityItems > 0 && type === "inc") {
      setQuantity(quantityItems + 1);
    }
  };

  return (
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
      <CardActions>
        <StyledButton size="small" onClick={() => handleQuantity("inc")}>
          <AddIcon />
        </StyledButton>
        <StyledTitle sx={{ px: 1 }}>{quantityItems}</StyledTitle>
        <StyledButton size="small" onClick={() => handleQuantity("dec")}>
          <RemoveIcon />
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
};
