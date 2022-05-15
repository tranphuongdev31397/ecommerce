import React, { useEffect, useState } from 'react';

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(0);

    const updateDimensions = () => {
        //Get breakpoint init
        const width = window.innerWidth;

        setWindowWidth(width);
    };
    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [windowWidth]);

    return windowWidth;
}

export default useWindowWidth;
