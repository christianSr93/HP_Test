import { useState, useEffect } from 'react';

const useWindowWidth = (props = {}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return width;
}

export default useWindowWidth;
