import { FC } from "react";
import { Box, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/constants/routes";

interface ProductItemProp {
  image: string;
  category: string;
}

const PREFIX = "ProductItem";

const StyledProductItem = styled(Box, {
  name: `${PREFIX}-StyledProductItem`,
})(({ theme }) => ({
  border: `3px solid ${theme.palette.pink.main}`,
  borderRadius: "50%",
  width: 360,
  height: 340,
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.standard,
  }),

  "&:hover": {
    transform: "scale(1.05)",
    cursor: "pointer",
  },

  "&:not(:last-child)": {
    marginBottom: 40,
  },
}));

export const ProductItem: FC<ProductItemProp> = ({ image, category }) => {
  const navigate = useNavigate();

  return (
    <StyledProductItem
      onClick={() => {
        navigate(`${ROUTES.HOME}${category}`);
        window.scrollTo(0, 0);
      }}
      sx={{
        background: `url(${image}) center no-repeat`,
        backgroundSize: "cover",
      }}
    />
  );
};
