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

  "&:hover": {
    backgroundColor: theme.palette.red.light,
  },
}));

export const Button: FC<ButtonProps> = ({ text }) => (
  <StyledButton variant="contained">{text}</StyledButton>
);
