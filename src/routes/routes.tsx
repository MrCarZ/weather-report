import Root from '@/app/components/Root';
import { lazy } from 'react';

const Home = lazy(() => import('../app/pages/Home'));
const Station = lazy(() => import('../app/pages/Station'));
const About = lazy(() => import('../app/pages/About'));
const Report = lazy(() => import('../app/pages/Report'));

export const routes = [
  {
    path: '/',
    element: <Root />,
    key: 'root',
    children: [
      { path: '/', element: <Home />, key: 'home' },
      {
        path: 'station',
        element: <Station />,
        key: 'station',
      },
      {
        path: 'report',
        element: <Report />,
        key: 'report',
      },
      {
        path: 'about',
        element: <About />,
        key: 'about',
      },
    ],
  },
];
