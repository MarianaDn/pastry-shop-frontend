import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  typographyClasses,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { headerData } from "src/constants";
import { ROUTES } from "src/constants/routes";

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

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <StyledList>
      {headerData.nav.map(({ id, name, category }) => (
        <ListItem disablePadding key={id} sx={{ px: 1, width: "auto" }}>
          <ListItemButton
            onClick={() => {
              navigate(`${ROUTES.HOME}${category}`);
              window.scrollTo(0, 0);
            }}
          >
            <ListItemText primary={name} />
          </ListItemButton>
        </ListItem>
      ))}
    </StyledList>
  );
};
