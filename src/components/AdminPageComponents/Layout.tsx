import { Grid } from "@mui/material";
import { FC } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export const Layout: FC = ({ children }) => (
  <Grid data-testid="layout" sx={{ maxWidth: 1440, mx: "auto", my: 0 }}>
    <Topbar />
    <Grid
      container
      sx={{ pt: 15, px: 5, pb: 5 }}
      justifyContent="space-between"
    >
      <Grid item width="20%">
        <Sidebar />
      </Grid>
      <Grid item width="75%">
        {children}
      </Grid>
    </Grid>
  </Grid>
);
