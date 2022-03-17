import type {FC} from 'react';
import {Routes, Route} from 'react-router-dom';
import type {RouteDependency, RouteType} from '../type';

const Componenet:FC<RouteDependency> = ({routes}) => {
    const Element = (Componenet:FC)=><Componenet />;
    return (
        <Routes>
        {routes.map((route:RouteType) => (
            <Route
            key={route.path}
            path={route.path}
            element={Element(route.page)}
            />
        ))}
        </Routes>
    );
    };
    
export default Componenet;

