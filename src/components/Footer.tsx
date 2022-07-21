import { Box, Grid, Divider, styled, Typography } from "@mui/material";
import { payment } from "src/constants";
import { Menu } from "src/components/Menu";
import { SocialMedia } from "src/components/common/SocialMedia";
import LogoGif from "src/assets/images/logoGif.gif";

const PREFIX = "Footer";

const StyledDivider = styled(Divider, {
  name: `${PREFIX}-StyledDivider`,
})(({ theme }) => ({
  background: theme.palette.red.dark,
}));

const StyledTypography = styled(Typography, {
  name: `${PREFIX}-StyledTypography`,
})(({ theme }) => ({
  fontFamily: "MarckScript",
  fontSize: 16,
  maxWidth: 260,
  padding: theme.spacing(2.5),
}));

const StyledImage = styled("img", {
  name: `${PREFIX}-StyledImage`,
})(({ theme }) => ({
  padding: theme.spacing(0, 1),
}));

const StyledFooterFirstWrapper = styled(Grid, {
  name: `${PREFIX}-StyledImage`,
})(({ theme }) => ({
  [theme.breakpoints.down("ipad")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const StyledFooterSecondWrapper = styled(Grid, {
  name: `${PREFIX}-StyledImage`,
})(({ theme }) => ({
  [theme.breakpoints.down("ipad")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    marginTop: 40,
  },
}));

const StyledMenuWrapper = styled(Grid, {
  name: `${PREFIX}-StyledImage`,
})(({ theme }) => ({
  [theme.breakpoints.down("ipad")]: {
    display: "none",
  },
}));

export const Footer = () => (
  <Box sx={{ maxWidth: 1220, mx: "auto", mb: 4 }}>
    <StyledFooterFirstWrapper container justifyContent="space-between">
      <StyledMenuWrapper item sx={{ maxWidth: 235 }}>
        <Menu />
      </StyledMenuWrapper>
      <Grid item>
        <SocialMedia />
      </Grid>
      <Grid item>
        <a href="/">
          <img src={LogoGif} alt="logo_gif" width={200} />
        </a>
      </Grid>
    </StyledFooterFirstWrapper>
    <StyledDivider />
    <StyledFooterSecondWrapper
      container
      sx={{ justifyContent: "space-between" }}
    >
      <Grid item sx={{ display: "flex" }}>
        <StyledTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          aliquet ante a amet.
        </StyledTypography>
        <StyledTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          aliquet ante a amet.
        </StyledTypography>
      </Grid>
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        {payment.map(({ src, alt }) => (
          <StyledImage src={src} alt={alt} key={alt} width={80} />
        ))}
      </Grid>
    </StyledFooterSecondWrapper>
  </Box>
);
