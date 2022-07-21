import { Grid, Typography, Divider, styled } from "@mui/material";
import { Fragment } from "react";
import { Icon } from "src/components/common/Icon";
import { benefitsData } from "src/constants";

const PREFIX = "BenefitsSection";

const StyledGrid = styled(Grid, {
  name: `${PREFIX}-StyledGrid`,
})(({ theme }) => ({
  padding: theme.spacing(6, 4.5),
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontFamily: "CormorantInfantSemiBold",
  fontSize: 28,
}));

const StyledDescription = styled(Typography, {
  name: `${PREFIX}-StyledDescription`,
})(({ theme }) => ({
  fontFamily: "CormorantInfantRegular",
  fontSize: 18,
  color: theme.palette.secondary.main,
}));

const StyledIcon = styled(Icon, {
  name: `${PREFIX}-StyledIcon`,
})(({ theme }) => ({
  height: 80,
  width: 80,
  display: "block",
  margin: theme.spacing(0, "auto"),
}));

const StyledDivider = styled(Divider, {
  name: `${PREFIX}-StyledDivider`,
})(({ theme }) => ({
  height: 65,
  alignSelf: "center",
  margin: theme.spacing(4),
  marginRight: 0,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const BenefitsSection = () => (
  <StyledGrid container rowSpacing={3} data-testid="benefitsSection">
    {benefitsData.map(({ icon, title, description }, index) => (
      <Fragment key={title}>
        <Grid item xs={3} md={1}>
          <StyledIcon icon={icon} viewBox="0 0 80 80" />
        </Grid>
        <Grid item xs={9} md={2} sx={{ pl: 1 }}>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </Grid>
        {index !== benefitsData.length - 1 && (
          <StyledDivider orientation="vertical" flexItem />
        )}
      </Fragment>
    ))}
  </StyledGrid>
);
