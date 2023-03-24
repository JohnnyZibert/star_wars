import { RouteProps } from 'react-router-dom';
import { HomePage } from 'src/pages/HomePage';
import { CharactersPage } from 'src/pages/CharactersPage';
import { NotFoundPage } from 'src/pages/NotFoundPage';

export enum AppRoutes {
    HOME = '/',
    CHARACTERS = 'characters',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.CHARACTERS]: '/characters',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath['/'],
        element: <HomePage />,
    },
    [AppRoutes.CHARACTERS]: {
        path: RoutePath.characters,
        element: <CharactersPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
