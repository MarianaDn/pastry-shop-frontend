import {
  alpha,
  Box,
  Grid,
  List,
  ListItem,
  styled,
  Typography,
  Button,
} from "@mui/material";
import { deliveryCost } from "src/constants";
import Background from "src/assets/images/goods_bg.png";

const PREFIX = "OrderSection";

const StyledSection = styled(Grid, {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  background: `url(${Background}) center no-repeat`,
  backgroundSize: "cover",
  maxWidth: 1440,
  padding: theme.spacing(8.5, 9.5),
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down(1025)]: {
    padding: theme.spacing(8.5, 5),
  },

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5, 3),
  },
}));

const StyledFirstBlock = styled(Grid, {
  name: `${PREFIX}-StyledFirstBlock`,
})(({ theme }) => ({
  width: "50%",
  marginTop: theme.spacing(8.5),
  paddingRight: theme.spacing(6),

  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: 0,
  },
}));

const StyledBlock = styled(Grid, {
  name: `${PREFIX}-StyledBlock`,
})(({ theme }) => ({
  width: "50%",
  backgroundColor: alpha(theme.palette.white.main, 0.35),
  padding: theme.spacing(8.5, 9.5),

  [theme.breakpoints.down(1025)]: {
    padding: theme.spacing(6),
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: theme.spacing(6),
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "MarckScript",
  fontSize: 42,
  marginBottom: theme.spacing(3),

  [theme.breakpoints.down(1025)]: {
    fontSize: 30,
  },
}));

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledText`,
})(({ theme }) => ({
  fontFamily: "CormorantInfantRegular",
  fontSize: 24,
  marginBottom: theme.spacing(1),

  [theme.breakpoints.down(1025)]: {
    fontSize: 18,
  },
}));

const StyledListItem = styled(ListItem, {
  name: `${PREFIX}-StyledListItem`,
})(({ theme }) => ({
  fontFamily: "CormorantInfantRegular",
  fontSize: 20,

  [theme.breakpoints.down(1025)]: {
    fontSize: 18,
  },
}));

const StyledButton = styled(Button, {
  name: `${PREFIX}-StyledButton`,
})(({ theme }) => ({
  padding: theme.spacing(2.5, 8.5),
  backgroundColor: theme.palette.red.dark,

  "&:not(:last-child)": {
    marginRight: theme.spacing(7),

    [theme.breakpoints.down(1255)]: {
      marginBottom: theme.spacing(3),
    },

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

export const OrderSection = () => (
  <StyledSection container>
    <StyledFirstBlock item>
      <StyledTitle variant="h2">
        Backed &amp; Bliss is a bakery and confectionery in Lviv
      </StyledTitle>
      <StyledText sx={{ mb: 5 }}>
        visit our establishments or order with home delivery
      </StyledText>
      <Box>
        <StyledButton variant="contained" href="#productSection">
          Order
        </StyledButton>
        <StyledButton variant="contained">Compose yourself</StyledButton>
      </Box>
    </StyledFirstBlock>
    <StyledBlock item>
      <Box>
        <Box>
          <StyledTitle variant="h3">Delivery:</StyledTitle>
          <StyledText>We accept orders from 9am to 17pm</StyledText>
          <StyledText>We deliver from 9am to 17pm</StyledText>
        </Box>
        <Box>
          <StyledTitle variant="h3" sx={{ my: 2 }}>
            Delivery cost within Lviv:
          </StyledTitle>
          <List>
            {deliveryCost.map((item) => (
              <StyledListItem key={item}>&bull; {item}</StyledListItem>
            ))}
          </List>
        </Box>
      </Box>
    </StyledBlock>
  </StyledSection>
);
