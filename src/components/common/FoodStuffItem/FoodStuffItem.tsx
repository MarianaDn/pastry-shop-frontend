import { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Fab,
  styled,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

type FoodStuffItemProps = {
  image: string;
  title: string;
  description: string;
  price: string;
};

export const FoodStuffItem: FC<FoodStuffItemProps> = ({
  image,
  title,
  description,
  price,
}) => (
  <StyledCard>
    <StyledFub aria-label="like">
      <FavoriteIcon />
    </StyledFub>
    <CardMedia component="img" height="300" image={image} alt={title} />
    <CardContent sx={{ px: 3 }}>
      <StyledTitle gutterBottom>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <Typography>{price}</Typography>
    </CardContent>
    <CardActions sx={{ pb: 3, px: 3 }}>
      <Button variant="outlined">Buy</Button>
    </CardActions>
  </StyledCard>
);
