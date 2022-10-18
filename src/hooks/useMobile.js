import { useMemo } from 'react';
import useWindowWidth from './useWindowWidth';

const useMobile = () => {
    const windowWidth = useWindowWidth();
    const isMobile = useMemo(() => {
        let isMobile = false; 
        if (windowWidth < 768) {
            isMobile = true;
        }
        return isMobile;
    }, [windowWidth]);

    return isMobile;
};


export default useMobile;
