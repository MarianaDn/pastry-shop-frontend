import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { Authorization } from "src/pages/Authorization";
import { HomePage } from "src/pages/HomePage";
import { Page404 } from "src/pages/Page404";
import { ProductsCatalog } from "src/pages/ProductsCatalog";
import { Registration } from "src/pages/Registration";
import { ShoppingCard } from "src/pages/ShoppingCard";
import { Success } from "src/pages/Success";
import { AdminPage } from "src/pages/AdminPage";
import { Products } from "src/pages/Products";
import { EditProductPage } from "src/pages/EditProductPage";
import { NewProduct } from "src/pages/NewProduct";

interface Page {
  component: JSX.Element;
  path: string;
  pathName: string;
}

const pages: Page[] = [
  {
    component: <HomePage />,
    path: ROUTES.HOME,
    pathName: "HomePage",
  },
  {
    component: <ProductsCatalog />,
    path: ROUTES.CATEGORY,
    pathName: "CategoryPage",
  },
  {
    component: <AdminPage />,
    path: ROUTES.ADMINPAGE,
    pathName: "UserPage",
  },
  {
    component: <Authorization />,
    path: ROUTES.AUTHORIZATION,
    pathName: "Authorization",
  },
  {
    component: <Registration />,
    path: ROUTES.REGISTER,
    pathName: "Registration",
  },
  {
    component: <ShoppingCard />,
    path: ROUTES.SHOPPINGCARD,
    pathName: "ShoppingCard",
  },
  {
    component: <Success />,
    path: ROUTES.SUCCESS,
    pathName: "Success",
  },
  {
    component: <Products />,
    path: ROUTES.PRODUCTS,
    pathName: "Products",
  },
  {
    component: <EditProductPage />,
    path: ROUTES.EDITPRODUCT,
    pathName: "EditProduct",
  },
  {
    component: <NewProduct />,
    path: ROUTES.NEWPRODUCT,
    pathName: "NewProduct",
  },
  {
    component: <Page404 />,
    path: "*",
    pathName: "Page404",
  },
];

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {pages.map(({ component, path, pathName }) => (
        <Route element={component} path={path} key={pathName} />
      ))}
    </Routes>
  </BrowserRouter>
);
