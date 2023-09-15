import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { routes } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    routes.map((route) => (
      <Route key={route.key} path={route.path} element={route.element}>
        {route.children.map((children) => (
          <Route
            key={children.key}
            index={children.path === '/'}
            element={children.element}
            path={children.path}
          />
        ))}
      </Route>
    ))
  )
);
