import type {FC} from 'react';

interface RouteType {
    path: string;
    page: FC;
}

interface RouteDependency {
    routes: RouteType[];
}

export type {RouteDependency, RouteType};