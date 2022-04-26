import { SyntheticEvent, useState } from "react";
import { Box, Button, styled, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Cart } from "../common/Card/Card";
import { SummaryCard } from "../SummeryCard/SummaryCard";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { FoodStuffItem } from "../common/FoodStuffItem/FoodStuffItem";

const PREFIX = "Tabs";

const StyledTabs = styled(Box, {
  name: `${PREFIX}-StyledTabs`,
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down("ipad")]: {
    justifyContent: "center",
  },
}));

const StyledTab = styled(Tab, {
  name: `${PREFIX}-StyledTab`,
})(({ theme }) => ({
  padding: theme.spacing(1.5, 5),

  [theme.breakpoints.down("ipad")]: {
    display: "none",
  },
}));

const StyledTabPanel = styled(TabPanel, {
  name: `${PREFIX}-StyledTabs`,
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(3, 0),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledProductCardWrapper = styled(Box, {
  name: `${PREFIX}-StyledProductCardWrapper`,
})(({ theme }) => ({
  width: "68%",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const StyledSummeryCardWrapper = styled(Box, {
  name: `${PREFIX}-StyledSummeryCardWrapper`,
})(({ theme }) => ({
  width: "30%",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
}));

export const Tabs = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("Shopping Bag");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { products, total } = useSelector((state: RootState) => state.cart);
  const { preferencesProducts } = useSelector(
    (state: RootState) => state.select
  );

  console.log(preferencesProducts);

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <StyledTabs>
          <Button variant="outlined" onClick={() => navigate(ROUTES.HOME)}>
            CONTINUE SHOPPING
          </Button>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <StyledTab label="Shopping Bag" value="Shopping Bag" />
              <StyledTab label="Your wishlist" value="Your wishlist" />
            </TabList>
          </Box>
        </StyledTabs>
        <StyledTabPanel value="Shopping Bag">
          <StyledProductCardWrapper>
            {products.length > 0
              ? products.map((product) => (
                  <Cart
                    key={product.title}
                    title={product.title}
                    desc={product.desc}
                    img={product.img}
                    price={product.price}
                    quantity={product.quantity}
                  />
                ))
              : "No items..."}
          </StyledProductCardWrapper>
          <StyledSummeryCardWrapper sx={{ width: "30%" }}>
            <SummaryCard total={total} />
          </StyledSummeryCardWrapper>
        </StyledTabPanel>
        <StyledTabPanel value="Your wishlist">
          {preferencesProducts.length > 0
            ? preferencesProducts.map((selectProduct) => (
                <FoodStuffItem product={selectProduct} />
              ))
            : "No items..."}
        </StyledTabPanel>
      </TabContext>
    </Box>
  );
};
