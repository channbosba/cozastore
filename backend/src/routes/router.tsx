import { lazy, Suspense, ReactElement, PropsWithChildren } from 'react';
import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';

import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
import { rootPaths } from './paths';
import paths from './paths';

// Lazy-loaded components
const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));

const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
const Product = lazy(() => import('pages/product/Product'));
const Login = lazy(() => import('pages/authentication/Login'));
const SignUp = lazy(() => import('pages/authentication/SignUp'));
const ErrorPage = lazy(() => import('pages/error/ErrorPage'));

const routes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.home,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: paths.product,
            element: (
              <Suspense fallback={<PageLoader />}>
                <Product />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          {
            path: paths.login,
            element: (
              <Suspense fallback={<PageLoader />}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: paths.signup,
            element: (
              <Suspense fallback={<PageLoader />}>
                <SignUp />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<PageLoader />}>
        <ErrorPage />
      </Suspense>
    ),
  },
];

// Router with basename
const router = createBrowserRouter(routes, {
  basename: '/nickelfox',
});

export default router;
