import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'src/constants/routes';
import { HomePage } from 'src/pages/HomePage/HomePage';
import { Page404 } from 'src/pages/Page404/Page404';

interface Page {
  component: JSX.Element;
  path: string;
  pathName: string;
}

const pages: Page[] = [
  {
    component: <HomePage />,
    path: ROUTES.HOME,
    pathName: 'HomePage',
  },
  {
    component: <Page404 />,
    path: '*',
    pathName: 'Page404',
  },
];

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {pages.map(({ component, path, pathName }) => (
        <Route  element={component} path={path} key={pathName}  />
      ))}
    </Routes>
  </BrowserRouter>
);