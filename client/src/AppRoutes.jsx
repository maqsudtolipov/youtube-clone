import GlobalStyles from './styles/GlobalStyles.js';
import AppLayout from './layout/AppLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInFirst from './pages/SignInFirst.jsx';
import React from 'react';
import Home from './pages/Home.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'feed',
        children: [{ path: 'subscriptions', element: <SignInFirst /> }],
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function AppRoutes() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

export default AppRoutes;
