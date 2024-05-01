import GlobalStyles from './styles/GlobalStyles.js';
import AppLayout from './layout/AppLayout.jsx';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import SignInFirst from './pages/SignInFirst.jsx';
import React from 'react';
import Home from './pages/Home.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Subscriptions from './pages/Subscriptions.jsx';
import Channel from './pages/Channel.jsx';
import ChannelFeatured from './features/channel/ChannelFeatured.jsx';
import ChannelVideos from './features/channel/ChannelVideos.jsx';
import ChannelPlaylists from './features/channel/ChannelPlaylists.jsx';
import ChannelCommunity from './features/channel/ChannelCommunity.jsx';

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
        children: [
          {
            path: '*',
            index: true,
            element: <Navigate to="featured" />,
          },
          {
            path: 'featured',
            element: <ChannelFeatured />,
          },
          {
            path: 'videos',
            element: <ChannelVideos />,
          },
          {
            path: 'playlists',
            element: <ChannelPlaylists />,
          },
          {
            path: 'community',
            element: <ChannelCommunity />,
          },
        ],
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
