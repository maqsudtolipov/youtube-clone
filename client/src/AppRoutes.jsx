import GlobalStyles from './styles/GlobalStyles.js';
import AppLayout from './layout/AppLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInFirst from './pages/SignInFirst.jsx';
import React from 'react';
import Home from './pages/Home.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Subscriptions from './pages/Subscriptions.jsx';
import Channel from './pages/Channel/Channel.jsx';
import { RiGhostLine, RiHome4Line } from 'react-icons/ri';
import Button from './components/Button/Button.jsx';

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
        path: '/:channelId',
        element: <Channel />,
      },
      {
        path: 'feed',
        children: [
          { path: 'subscriptions-n', element: <SignInFirst /> },
          { path: 'subscriptions', element: <Subscriptions /> },
        ],
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
