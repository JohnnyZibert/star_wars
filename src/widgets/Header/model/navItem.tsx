import { RoutePath } from 'src/app/providers/router/routeConfig/routeConfig';

export interface navItemType {
    title?: string;
    path: string
    id: string
}

export const navItems: navItemType[] = [
    {
        path: RoutePath['/'],
        title: 'Home',
        id: '1',
    },
    {
        path: RoutePath.characters,
        title: 'Characters',
        id: '2',
    },

];
