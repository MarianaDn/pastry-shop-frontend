import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeChecout from "react-stripe-checkout";
import { userRequest } from "src/constants";
import { ROUTES } from "src/constants/routes";
import { RootState } from "src/redux/store";

const KEY =
  "pk_test_51KqguWGlbe0fsJF1yinGz7yEHhgY2gnvc5eKRbOlqbfT5yDAuXAhImqWscUEgIsSPIa9k9nibPLsIH3GTKHAbqZA00eHKKhqGo";

const PREFIX = "SummeryCard";

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})({
  fontFamily: "CormorantInfantSemiBold",
  fontSize: 32,
});

const StyledDescription = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "CormorantInfantLight",
  fontSize: 18,
  margin: theme.spacing(1, 0),
  color: theme.palette.secondary.main,

  "&:last-child": {
    color: theme.palette.black.main,
    fontSize: 20,
    fontFamily: "CormorantInfantRegular",
  },
}));

const StyledBox = styled(Box, {
  name: `${PREFIX}-StyledBox`,
})({
  display: "flex",
  justifyContent: "space-between",
});

type SummaryCardProp = {
  total: number;
};

export const SummaryCard: FC<SummaryCardProp> = ({ total }) => {
  const cart = useSelector((state: RootState) => state.cart);
  const [stripeToken, setStripeToken] = useState<any>(null);
  const user = useSelector((state: RootState) => state.user.currentUser);
  const onToken = (token: any) => setStripeToken(token);

  const navigate = useNavigate();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          state: {
            stripeData: res.data,
            products: cart,
          },
        });
      } catch (err) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, total, navigate]);

  return (
    <Card sx={{ width: "100%", borderRadius: 2.5, p: 2 }}>
      <CardContent>
        <StyledTitle gutterBottom>ORDER SUMMARY</StyledTitle>
        <StyledBox>
          <StyledDescription>Subtotal: </StyledDescription>
          <StyledDescription> {total} UAH</StyledDescription>
        </StyledBox>
        <StyledBox>
          <StyledDescription>Estimated Shipping: </StyledDescription>
          <StyledDescription> 20 UAH</StyledDescription>
        </StyledBox>
        <StyledBox>
          <StyledDescription>Shipping Discount:</StyledDescription>
          <StyledDescription> -20 UAH</StyledDescription>
        </StyledBox>
        <StyledBox sx={{ mt: 3 }}>
          <StyledTitle>Total:</StyledTitle>
          <StyledTitle> {total} UAH</StyledTitle>
        </StyledBox>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {!user ? (
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate(ROUTES.AUTHORIZATION)}
          >
            Log in
          </Button>
        ) : (
          <StripeChecout
            name="Back and Bliss"
            billingAddress
            shippingAddress
            description={`Your total is ${total} UAH`}
            amount={total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <Button variant="contained" size="small">
              CHECKOUT NOW
            </Button>
          </StripeChecout>
        )}
      </CardActions>
    </Card>
  );
};
