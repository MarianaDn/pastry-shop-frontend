import { Button, Grid, Typography, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { logOut } from "src/redux/userRedux";

const PREFIX = "Topbar";

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
    padding: theme.spacing(0, 2),
  },

  [theme.breakpoints.down("ipad")]: {
    padding: theme.spacing(0, 2),
  },
}));

export const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate(ROUTES.HOME);
  };

  return (
    <StyledGrid container>
      <Grid item>
        <Typography
          sx={{ fontSize: 20, cursor: "pointer" }}
          onClick={() => navigate(ROUTES.HOME)}
        >
          Bake & Bliss
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={handleLogOut}>Log out</Button>
      </Grid>
    </StyledGrid>
  );
};
