import { useLocation } from 'react-router-dom';

export default function useIsActivePage(thisPagePath){
    const location = useLocation();
    return location.pathname === thisPagePath;
}