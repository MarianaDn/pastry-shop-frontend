import { FC, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Fab,
  styled,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FoodStuffItemType } from "src/constants";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "src/redux/cardRedux";

const PREFIX = "FoodStuffItem";

const StyledFub = styled(Fab, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 20,
  width: 40,
  height: 40,
}));

const StyledCard = styled(Card, {
  name: `${PREFIX}-StyledCard`,
})(({ theme }) => ({
  maxWidth: 345,
  marginBottom: theme.spacing(7),
  position: "relative",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})({
  fontFamily: "CormorantInfantSemiBold",
  fontSize: 22,
  height: 66,
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
  height: 32,
}));

type FoodStuffItemProps = {
  product: FoodStuffItemType;
};

export const FoodStuffItem: FC<FoodStuffItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: string) => {
    if (quantity > 1 && type === "dec") {
      setQuantity(quantity - 1);
    } else if (quantity > 0 && type === "inc") {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () =>
    dispatch(
      addToCart({
        product: { ...product, quantity },
        quantityItems: quantity,
        price: product.price,
      })
    );

  return (
    <StyledCard>
      <StyledFub aria-label="like">
        <FavoriteIcon />
      </StyledFub>
      <CardMedia
        component="img"
        height="300"
        image={product.img}
        alt={product.title}
      />
      <CardContent sx={{ px: 3 }}>
        <StyledTitle gutterBottom>{product.title}</StyledTitle>
        <StyledDescription>{product.desc}</StyledDescription>
        <Typography>{product.price} UAH</Typography>
      </CardContent>
      <CardActions sx={{ pb: 3, px: 3, justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={handleClick}>
          Buy
        </Button>
        <Box sx={{ display: "flex" }}>
          <StyledButton size="small" onClick={() => handleQuantity("inc")}>
            <AddIcon />
          </StyledButton>
          <StyledTitle sx={{ px: 1, height: 32 }}>{quantity}</StyledTitle>
          <StyledButton size="small" onClick={() => handleQuantity("dec")}>
            <RemoveIcon />
          </StyledButton>
        </Box>
      </CardActions>
    </StyledCard>
  );
};
