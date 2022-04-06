import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  typographyClasses,
} from "@mui/material";
import { headerData } from "src/constants";

const PREFIX = "Menu";

const StyledList = styled(List, {
  name: `${PREFIX}-StyledList`,
})({
  display: "flex",
  flexWrap: "wrap",

  [`& .${typographyClasses.root}`]: {
    fontFamily: "MarckScript",
    fontSize: 20,
  },
});

const StyledLink = styled(Link, {
  name: `${PREFIX}-StyledLink`,
})(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.black.main,

  "&:hover": {
    cursor: "pointer",
  },
}));

export const Menu = () => (
  <StyledList>
    {headerData.nav.map(({ id, name, path }) => (
      <ListItem disablePadding key={id} sx={{ px: 1, width: "auto" }}>
        <ListItemButton>
          <StyledLink href={path}>
            <ListItemText primary={name} />
          </StyledLink>
        </ListItemButton>
      </ListItem>
    ))}
  </StyledList>
);
