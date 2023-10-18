import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import DestinationPage from './pages/Destination';
import DestinationItem from './components/DestinationItem';
import CrewPage from './pages/Crew';
import CrewMember from './components/CrewMember';
import TechnologyPage from './pages/Technology';
import './styles.css';
import data from './assets/data.json';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: '/destination',
          element: <DestinationPage data={data.destinations} />,
          children: [
            {
              index: true,
              element: <Navigate to="/destination/moon" replace />,
            },
            {
              path: ':destination',
              element: <DestinationItem data={data.destinations} />,
            },
          ],
        },
        {
          path: '/crew',
          element: <CrewPage data={data.crew} />,
          children: [
            {
              index: true,
              element: <Navigate to="/crew/douglas-hurley" replace />,
            },
            {
              path: ':member',
              element: <CrewMember data={data.crew} />,
            },
          ],
        },
        { path: '/technology', element: <TechnologyPage /> },
      ],
    },
  ],
  {
    basename: '/frontend-mentor-space-tourism-website',
  }
);

const App = () => <RouterProvider router={router} />;

export default App;
