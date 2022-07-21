import { FC } from "react";
import { Grid } from "@mui/material";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

export const Layout: FC = ({ children }) => (
  <Grid data-testid="layout" sx={{ maxWidth: 1440, mx: "auto", my: 0 }}>
    <Header />
    {children}
    <Footer />
  </Grid>
);
