import {
  Badge,
  BadgeProps,
  Grid,
  List,
  ListItem,
  ListItemButton,
  listItemButtonClasses,
  styled,
} from "@mui/material";
import { Icon, IconType } from "src/components/common/Icon";
import { Menu } from "src/components/Menu";
import { isDesktop } from "react-device-detect";
import { useState } from "react";
import { ModalMenu } from "./ModalMenu";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

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
  boxShadow: `0px 2px 10px ${theme.palette.secondary.contrastText}`,

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

  [`& .${listItemButtonClasses.root}`]: {
    fontFamily: "MarckScript",
    fontSize: 20,
  },
});

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: theme.palette.secondary.light,
  },
}));

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClose = () => setIsMenuOpen(false);
  const user = useSelector((state: RootState) => state.user.currentUser);
  const quantity = useSelector((state: RootState) => state.cart.quantityItems);

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
            <ListItemButton
              onClick={() => {
                user
                  ? navigate(`${ROUTES.HOME}`)
                  : navigate(`${ROUTES.REGISTER}`);
                window.scrollTo(0, 0);
              }}
            >
              Register
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                user
                  ? navigate(`${ROUTES.HOME}`)
                  : navigate(`${ROUTES.AUTHORIZATION}`);
                window.scrollTo(0, 0);
              }}
            >
              Sing in
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                navigate(`${ROUTES.SHOPPINGCARD}`);
                window.scrollTo(0, 0);
              }}
            >
              <StyledBadge badgeContent={quantity}>
                <StyledIcon icon={IconType.Basket} viewBox="0 0 32 32" />
              </StyledBadge>
            </ListItemButton>
          </ListItem>
        </StyledList>
      </Grid>
      <ModalMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </StyledGrid>
  );
};
