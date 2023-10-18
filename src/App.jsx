import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import DestinationPage from './pages/Destination';
import CrewPage from './pages/Crew';
import TechnologyPage from './pages/Technology';
import DestinationItem from './components/DestinationItem';
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
        { path: '/crew', element: <CrewPage /> },
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
