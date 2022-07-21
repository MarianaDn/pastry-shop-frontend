import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, Button, styled } from "@mui/material";
import { userRequest } from "src/constants";
import { ROUTES } from "src/constants/routes";
import { RootState } from "src/redux/store";
import { cleanCart } from "src/redux/cardRedux";
import Background from "src/assets/images/form_bg.jpg";

const PREFIX = "SuccessSection";

const StyledPageWrapper = styled(Box, {
  name: `${PREFIX}-StyledPageWrapper`,
})(({ theme }) => ({
  background: `url(${Background}) center no-repeat`,
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: theme.spacing(5),
  fontSize: 28,
}));

export const SuccessSection = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const dispatch = useDispatch();

  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map(
            (item: { _id: string; quantity: number }) => ({
              productId: item._id,
              quantity: item.quantity,
            })
          ),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
    dispatch(cleanCart());
  }, [cart, data, currentUser]);

  return (
    <StyledPageWrapper>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Button
        variant="outlined"
        style={{ padding: 10, marginTop: 20 }}
        onClick={() => navigate(ROUTES.HOME)}
      >
        Go to Homepage
      </Button>
    </StyledPageWrapper>
  );
};
