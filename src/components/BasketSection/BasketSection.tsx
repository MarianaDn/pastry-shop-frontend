import { Grid, styled, Typography } from "@mui/material";
import Background from "src/assets/images/goods_bg.png";
import { Tabs } from "../Tabs/Tabs";

const PREFIX = "BasketSection";

const StyledBasketSection = styled(Grid, {
  name: `${PREFIX}-StyledBasketSection`,
})(({ theme }) => ({
  background: `url(${Background}) center no-repeat`,
  backgroundSize: "cover",
  padding: theme.spacing(15),
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(15, 5, 3),
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(15, 2, 3),
  },
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "CormorantInfantBold",
  fontSize: 46,
  margin: theme.spacing(0, "auto"),
  marginBottom: theme.spacing(3),
}));

export const BasketSection = () => (
  <StyledBasketSection container>
    <StyledTitle>YOUR BAG</StyledTitle>
    <Grid container>
      <Tabs />
    </Grid>
  </StyledBasketSection>
);
