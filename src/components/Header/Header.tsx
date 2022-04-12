import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  styled,
  typographyClasses,
} from "@mui/material";
import { Icon, IconType } from "src/components/common/Icon/Icon";
import { Menu } from "src/components/Menu/Menu";
import { isDesktop } from "react-device-detect";
import { useState } from "react";
import { ModalMenu } from "../ModalMenu/ModalMenu";
import { AuthorizationModal } from "../AuthorizationModal/AuthorizationModal";

const PREFIX = "Header";

const StyledGrid = styled(Grid, {
  name: `${PREFIX}-StyledGrid`,
})(({ theme }) => ({
  position: "fixed",
  maxWidth: 1440,
  padding: theme.spacing(0, 5),
  alignItems: "center",
  justifyContent: "space-between",
  height: 85,
  background: theme.palette.white.main,
  zIndex: 10,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 0.2),
  },

  [theme.breakpoints.down("ipad")]: {
    padding: theme.spacing(0, 2),
  },
}));

const StyledIcon = styled(Icon, {
  name: `${PREFIX}-StyledIcon`,
})(({ theme }) => ({
  "& path": {
    color: theme.palette.white.main,
  },
}));

const StyledList = styled(List, {
  name: `${PREFIX}-StyledList`,
})({
  display: "flex",

  [`& .${typographyClasses.root}`]: {
    fontFamily: "MarckScript",
    fontSize: 24,
  },
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isPopUpVariant, setIsPopUpVariant] = useState("authorization");
  console.log(isPopUpOpen);

  const handleMenuClose = () => setIsMenuOpen(false);
  const handlePopUpClose = () => setIsPopUpOpen(false);
  const handlePopUpVariant = (variant: "authorization" | "registration") =>
    setIsPopUpVariant(variant);

  return (
    <StyledGrid container>
      <Grid item>
        {isDesktop ? (
          <Menu />
        ) : (
          <ListItemButton onClick={() => setIsMenuOpen((x) => !x)}>
            {isMenuOpen ? (
              <StyledIcon icon={IconType.CloseBtn} viewBox="0 0 24 24" />
            ) : (
              <StyledIcon icon={IconType.Hamburger} viewBox="0 0 24 24" />
            )}
          </ListItemButton>
        )}
      </Grid>
      <Grid item>
        <StyledList>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setIsPopUpOpen((x) => !x)}>
              <StyledIcon icon={IconType.User} viewBox="0 0 32 32" />
            </ListItemButton>
            <ListItemButton>
              <StyledIcon icon={IconType.Wishlist} viewBox="0 0 32 32" />
            </ListItemButton>
            <ListItemButton>
              <StyledIcon icon={IconType.Basket} viewBox="0 0 32 32" />
            </ListItemButton>
          </ListItem>
        </StyledList>
      </Grid>
      <ModalMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      {console.log(isPopUpVariant)}
      {isPopUpVariant === "authorization" ? (
        <AuthorizationModal
          isOpen={isPopUpOpen}
          onClose={handlePopUpClose}
          title="Authorization"
          buttonText="Log in"
          text="Not registered yet?"
          link="Register"
          variantForm="registration"
          handleChangeVariant={handlePopUpVariant}
        />
      ) : (
        <AuthorizationModal
          isOpen={isPopUpOpen}
          onClose={handlePopUpClose}
          title="Registration"
          buttonText="Sing up"
          text="Do you have an account?"
          link="Log in"
          variantForm="authorization"
          handleChangeVariant={handlePopUpVariant}
        />
      )}
    </StyledGrid>
  );
};
