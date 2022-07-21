import { Grid, styled } from "@mui/material";
import IntroBig from "src/assets/images/intro_main.png";
import Intro from "src/assets/images/intro.png";

const PREFIX = "Intro";

const StyledGrid = styled(Grid, {
  name: `${PREFIX}-StyledGrid`,
})(({ theme }) => ({
  position: "relative",
  background: `url(${IntroBig}) center no-repeat`,
  height: "100vh",
  backgroundSize: "cover",

  [theme.breakpoints.down("ipad")]: {
    background: `url(${Intro}) center no-repeat`,
    backgroundSize: "cover",
  },
}));

export const IntroSection = () => <StyledGrid data-testid="introSection" />;
