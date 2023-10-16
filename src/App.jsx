import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import DestinationPage from './pages/Destination';
import CrewPage from './pages/Crew';
import TechnologyPage from './pages/Technology';


import './styles.css';

const router = createBrowserRouter([
  {
    path: '/frontend-mentor-space-tourism-website/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/frontend-mentor-space-tourism-website/destination', element: <DestinationPage /> },
      { path: '/frontend-mentor-space-tourism-website/crew', element: <CrewPage /> },
      { path: '/frontend-mentor-space-tourism-website/technology', element: <TechnologyPage /> }
    ]
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
