import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// project import
import Loadable from 'ui-component/Loadable';

const PagesLanding = Loadable(lazy(() => import('views/pages/authentication/auth-forms/AuthLogin')));
// const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([{ path: '/', element: <AuthLogin /> }, AuthenticationRoutes, LoginRoutes, MainRoutes], {
    basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
