import { useLocation } from 'react-router-dom';

export default function useIsActivePage(thisPagePath){
    const location = useLocation();
    const fullPath = location.pathname + location.hash;
    return fullPath  === thisPagePath;
}