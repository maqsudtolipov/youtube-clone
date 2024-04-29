import GlobalStyles from './styles/GlobalStyles.js';
import AppLayout from './layout/AppLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInFirst from './pages/SignInFirst.jsx';
import React from 'react';
import Home from './pages/Home.jsx';

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
