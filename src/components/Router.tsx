import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { Authorization } from "src/pages/Authorization/Authorization";
import { HomePage } from "src/pages/HomePage/HomePage";
import { Page404 } from "src/pages/Page404/Page404";
import { ProductsCatalog } from "src/pages/ProductsCatalog/ProductsCatalog";
import { Registration } from "src/pages/Registration/Registration";
import { ShoppingCard } from "src/pages/ShoppingCard/ShoppingCard";
import { Success } from "src/pages/Success/Success";
import { UserPage } from "src/pages/UserPage/UserPage";

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
    component: <UserPage />,
    path: ROUTES.USERPAGE,
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
