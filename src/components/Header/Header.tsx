import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  styled,
  typographyClasses,
} from "@mui/material";
import { headerData } from "src/constants";
import { Icon, IconType } from "src/components/common/Icon/Icon";
import { Menu } from "src/components/Menu/Menu";
import { isDesktop } from "react-device-detect";
import { useState } from "react";
import { ModalMenu } from "../ModalMenu/ModalMenu";

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
  const handleMenuClose = () => setIsMenuOpen(false);

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
          {headerData.icons.map(({ id, icon }) => (
            <ListItem disablePadding key={id}>
              <ListItemButton>
                <StyledIcon icon={icon} viewBox="0 0 32 32" />
              </ListItemButton>
            </ListItem>
          ))}
        </StyledList>
      </Grid>
      <ModalMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </StyledGrid>
  );
};
