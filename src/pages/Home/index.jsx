import GridSystem from 'components/GridSystem';
import Loader from 'components/Loader';
import BannerContainer from 'containers/BannerContainer';
import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
    const loading = useSelector((state) => state.categoriesReducer.loading);

    if (!loading) {
        return (
            <>
                <BannerContainer />
                <div className="container mx-auto products__box">
                    <GridSystem />
                </div>
            </>
        );
    } else {
        return <Loader />;
    }
}

export default Home;
