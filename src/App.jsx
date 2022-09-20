import { createBrowserRouter } from 'react-router-dom';
import Contacto from './routes/Contacto';
import { Container } from './routes/Container';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Container />,
      },
      {
        path: '/contacto',
        element: <Contacto />,
      },
    ],
  },
]);

export default router;
