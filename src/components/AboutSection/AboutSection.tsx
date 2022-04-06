import { Grid, Box, Typography, styled } from "@mui/material";
import Croissants from "src/assets/images/about-image-1.png";
import Cookie from "src/assets/images/about-image-2.png";

const PREFIX = "About";

const StyledImage = styled("img", {
  name: `${PREFIX}-StyledImage`,
})(({ theme }) => ({
  width: 400,
  display: "block",
  margin: theme.spacing(0, "auto"),

  [theme.breakpoints.down(425)]: {
    width: "100%",
  },
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "CormorantInfantBold",
  fontSize: 42,
  marginBottom: theme.spacing(3),
}));

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledText`,
})({
  fontFamily: "CormorantInfantRegular",
  fontSize: 22,
});

const StyledImageWrapper = styled(Grid, {
  name: `${PREFIX}-StyledImageWrapper`,
})(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    order: 1,
  },
}));

const StyledSectionWrapper = styled(Box, {
  name: `${PREFIX}-StyledSectionWrapper`,
})(({ theme }) => ({
  maxWidth: 1200,
  margin: theme.spacing(0, "auto"),
  padding: theme.spacing(10, 5),

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 2),
  },
}));

const StyledContentWrapper = styled(Grid, {
  name: `${PREFIX}-StyledSectionWrapper`,
})(({ theme }) => ({
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const AboutSection = () => (
  <StyledSectionWrapper>
    <StyledContentWrapper container sx={{ mb: 5 }}>
      <StyledImageWrapper item sm={12} md={6}>
        <StyledImage src={Croissants} alt="croissants" />
      </StyledImageWrapper>
      <Grid item sm={12} md={6} sx={{ maxWidth: 530 }}>
        <StyledTitle variant="h2">
          Remember how we enjoyed the sweet in childhood?
        </StyledTitle>
        <StyledText>
          How did the simplest caramel cause us a storm of admiration? As
          adults, we found that caramel tastes better salty, desserts may look
          like a work of art, but true happiness remains completely childish.
        </StyledText>
      </Grid>
    </StyledContentWrapper>
    <StyledContentWrapper container>
      <Grid item sm={12} md={6}>
        <StyledTitle variant="h2" sx={{ fontSize: 30 }}>
          In Backed & Bliss, joy smells like a nut and vanilla cake
        </StyledTitle>
        <StyledText>
          Dreams become real, and everyday life seems easy. Enjoy real French
          pastries and desserts every day with a cup of fragrant coffee.
        </StyledText>
      </Grid>
      <Grid item sm={12} md={6}>
        <StyledImage sx={{ width: 350 }} src={Cookie} alt="cookie" />
      </Grid>
    </StyledContentWrapper>
  </StyledSectionWrapper>
);
