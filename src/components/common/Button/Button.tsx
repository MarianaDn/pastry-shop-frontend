import { FC } from "react";
import { Button as MUIButton, styled } from "@mui/material";

interface ButtonProps {
  text: string;
}

const PREFIX = "Button";

const StyledButton = styled(MUIButton, {
  name: `${PREFIX}-StyledButton`,
})(({ theme }) => ({
  padding: theme.spacing(2.5, 8.5),
  backgroundColor: theme.palette.red.dark,

  "&:not(:last-child)": {
    marginRight: theme.spacing(7),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
    },

    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },

  "&:hover": {
    backgroundColor: theme.palette.red.light,
  },
}));

export const Button: FC<ButtonProps> = ({ text }) => (
  <StyledButton variant="contained">{text}</StyledButton>
);
