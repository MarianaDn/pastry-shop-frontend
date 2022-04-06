import { FC } from "react";
import { Link, styled } from "@mui/material";

interface ProductItemProp {
  image: string;
  link: string;
}

const PREFIX = "ProductItem";

const StyledLink = styled(Link, {
  name: `${PREFIX}-StyledGrid`,
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
  },

  "&:not(:last-child)": {
    marginBottom: 40,
  },
}));

export const ProductItem: FC<ProductItemProp> = ({ image, link }) => (
  <StyledLink
    href={link}
    sx={{
      background: `url(${image}) center no-repeat`,
      backgroundSize: "cover",
    }}
  />
);
